import React from "react";
// import { useState } from "react";
import { NFTPORT_API_KEY } from "../../constants";
export const ListNFT = async () => {
  // const [nfts, setNFTs] = useState([]);
  // const nftport_key = process.env.NFTPORT_API_KEY;
  const NFT = await fetch(
    "https://api.nftport.xyz/v0/nfts/0xDBd95D79d3A019Cd16D02B6a386aDa8C717C6A09?chain=polygon&include=metadata",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: NFTPORT_API_KEY,
      },
    }
  )
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.error(err);
    });
  return NFT.nfts;
};
