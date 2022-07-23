import { Web3Storage } from "web3.storage";

//// used Web3.storage to upload to IPFS and store music audio there

function getAccessToken() {
  return process.env.WEB3STORAGE_TOKEN;
}

function makeStorageClient() {
  return new Web3Storage({ token: getAccessToken() });
}

export const StoreContent = async (files) => {
  const client = makeStorageClient();
  const cid = await client.put([files]);
  console.log("stored files with cid:", cid);
  setTimeout(3000);
  return cid;
};
