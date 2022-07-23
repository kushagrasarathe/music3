import React from "react";
import { useState } from "react";

/// used NFT.storage to prepare the metadata for the NFT
export const Metadata = async ({ image, Name, ipfsURL, Description }) => {
  const API_KEY = process.env.NFT_STORAGE_API_KEY;
  const [metadataURI, SetMetadataURI] = useState("");

  async function storeExampleNFT() {
    console.log("Preparing Metadata ....");
    const nft = {
      image,
      name: Name,
      description: `The music file is stored her : ${ipfsURL} . ${Description}`,
    };
    console.log("Uploading Metadata to IPFS ....");
    const client = new NFTStorage({ token: API_KEY });
    const metadata = await client.store(nft);
    console.log(metadata);
    console.log("NFT data stored successfully 🚀🚀");
    console.log("Metadata URI: ", metadata.url);
    SetMetadataURI(metadata.url);
  }

  storeExampleNFT();
  return metadataURI;
};
