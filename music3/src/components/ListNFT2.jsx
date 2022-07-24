import axios from "axios";
const nftport_key = process.env.NFTPORT_API_KEY ;
export const FetchNFTs = async() => {
    console.log("Fetching NFTS")
const options = {
  method: 'GET',
  url: 'https://api.nftport.xyz/v0/nfts/0xDBd95D79d3A019Cd16D02B6a386aDa8C717C6A09',
  params: {chain: 'polygon', include: 'metadata'},
  headers: {
    'Content-Type': 'application/json',
    Authorization: nftport_key
  }
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
    console.error(error);
});
console.log(options);
}