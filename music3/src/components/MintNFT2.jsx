import React from "react";
import { useState } from "react";
import { NFTPORT_API_KEY } from "../../constants";
// const nftport_key = process.env.NFTPORT_API_KEY ;
/// mints the NFT to the Music3 Contract Collection with the ,metdata and address  provided
export const MintNFT2 = async ({ ipfsURI, userAddress }) => {
  console.log("Minting NFT with NFTPORT API ....");
  console.log("address")
  const response =fetch(
    "https://api.nftport.xyz/v0/mints/customizable",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": NFTPORT_API_KEY,
      },
      body: JSON.stringify({
        "chain": "polygon",
        "contract_address": "0xDBd95D79d3A019Cd16D02B6a386aDa8C717C6A09",
        "metadata_uri": `${ipfsURI}`,
        "mint_to_address": `${userAddress}`
      })
    }
  )
    .then(response=> response.json())
    .then(data => {
      console.log("NFT Minted successfully 🚀🚀");
      console.log(data);
    })
    .catch((err) => {
      console.error(err.response);
    });

  return response;
};