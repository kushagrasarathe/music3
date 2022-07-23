import React from "react";
import { useState, useEffect } from "react";

export const ListNFT = () => {
  const [nfts, setNFTs] = useState([]);
  useEffect(() => {
    fetchNFT();
  });
  const fetchNFT = () => {
    // fetch("https://api.nftport.xyz/v0/me/mints?chain=polygon", {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: process.env.NFTPORT_API_KEY,
    //   },
    // })
    //   .then((response) => {
    //     console.log(response);
    //     setNFTs(response.minted_nfts);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
  };
  return nfts;
};
