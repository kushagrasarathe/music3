export const MintNFT = ({ Name, Description, ipfsURL, userAddress }) => {
  const mintNFT = async ({ Name, Description, ipfsURL, userAddress }) => {
    fetch("https://api.nftport.xyz/v0/mints/easy/urls", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: process.env.NFTPORT_API_KEY,
      },
      body: {
        chain: "polygon",
        name: Name,
        description: Description,
        file_url: ipfsURL,
        mint_to_address: userAddress,
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return <div>MintNFT</div>;
};
