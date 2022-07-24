import React from "react";
import { useState } from "react";
import { NFTStorage } from "nft.storage";

/// used NFT.storage to prepare the metadata for the NFT
export const StoreMetadata = async (image, Name, audioCID, Description) => {

  const nftstorage_key = process.env.NFT_STORAGE_API_KEY;

  console.log("Preparing Metadata ....");
  const nft = {
    image: image,
    name: Name,
    description: `The music file is stored here : ${audioCID}.${Description}.Check more details on the website`,
    external_url: audioCID,
  };
  console.log("Uploading Metadata to IPFS ....");
  const client = new NFTStorage({ token: nftstorage_key  });
  const metadata = await client.store(nft);
  console.log(metadata);
  console.log("NFT data stored successfully 🚀🚀");
  console.log("Metadata URI: ", metadata.url);
  // SetMetadataURI(metadata.url);

  return metadata;
};
