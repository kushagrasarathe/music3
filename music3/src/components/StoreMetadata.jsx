import React from "react";

/// used NFT.storage to prepare the metadata for the NFT
export const getMetadata = ({ image, Name, ipfsURL }) => {
  const API_KEY = process.env.NFT_STORAGE_API_KEY;

  async function storeExampleNFT({ image, Name, ipfsURL }) {
    const image = await getExampleImage();
    const nft = {
      image,
      name: Name,
      description: `The music file is stored her : ${ipfsURL}`,
    };

    const client = new NFTStorage({ token: API_KEY });
    const metadata = await client.store(nft);

    console.log("NFT data stored!");
    console.log("Metadata URI: ", metadata.url);
  }

  storeExampleNFT({ image, Name, ipfsURL });
};
