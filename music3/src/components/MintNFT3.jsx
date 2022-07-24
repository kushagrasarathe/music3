import axios from "axios";
// import { useState } from "react";

const nftport_key = process.env.NFTPORT_API_KEY ;
export const MintNFT3 = async ({ ipfsURI, userAddress }) => {
//   const [data, setData] = useState();
  const options = {
    method: "POST",
    url: "https://api.nftport.xyz/v0/mints/customizable",
    headers: {
      "Content-Type": "application/json",
      Authorization: nftport_key,
    },
    data: {
      chain: "polygon",
      contract_address: "0xDBd95D79d3A019Cd16D02B6a386aDa8C717C6A09",
      metadata_uri: `${ipfsURI}`,
      mint_to_address: `${userAddress}`,
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log("NFT is sucessfully minted 🚀🚀🚀")
      console.log(response.data);
    //   setData(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });

};
