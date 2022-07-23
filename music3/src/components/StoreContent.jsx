import { Web3Storage } from "web3.storage";

//// used Web3.storage to upload music file to IPFS
function getAccessToken() {
  return process.env.WEB3STORAGE_TOKEN;
}

function makeStorageClient() {
  return new Web3Storage({ token: getAccessToken() });
}

export const StoreContent = async (files) => {
  console.log("Uploading Audio to IPFS with web3.storage....");
  const client = makeStorageClient();
  const cid = await client.put([files]);
  console.log("stored files with cid:", cid);
  console.log("Song Uploaded ton IPFS successfully 🚀🚀");
  return cid;
};
