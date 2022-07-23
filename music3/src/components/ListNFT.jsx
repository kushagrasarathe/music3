import React from "react";
import { useState } from "react";

export const ListNFT = () => {
  const [nfts, setNFTs] = useState([]);
  const fetchNFT = () => {
    fetch("https://api.nftport.xyz/v0/me/mints?chain=polygon", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: process.env.NFTPORT_API_KEY,
      },
    })
      .then((response) => {
        console.log(response);
        setNFTs(response.minted_nfts);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  fetchNFT();
  return nfts;
};
