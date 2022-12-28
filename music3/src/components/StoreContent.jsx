import { Web3Storage } from "web3.storage";
import { WEB3STORAGE_TOKEN } from "../../constants";
//// used Web3.storage to upload music file to IPFS

// const web3storage_key= process.env.WEB3STORAGE_TOKEN;
function GetAccessToken() {
  return WEB3STORAGE_TOKEN;
}

function MakeStorageClient() {
  return new Web3Storage({ token: GetAccessToken() });
}

export const StoreContent = async (files) => {
  console.log("Uploading Audio to IPFS with web3.storage....");
  const client = MakeStorageClient();
  const cid = await client.put([files]);
  console.log("stored files with cid:", cid);
  console.log("Song Uploaded ton IPFS successfully 🚀🚀");
  return cid;
};
