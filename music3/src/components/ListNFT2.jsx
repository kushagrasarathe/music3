import axios from "axios";

export const FetchNFTs = async() => {
    console.log("Fetching NFTS")
const options = {
  method: 'GET',
  url: 'https://api.nftport.xyz/v0/nfts/0xDBd95D79d3A019Cd16D02B6a386aDa8C717C6A09',
  params: {chain: 'polygon', include: 'metadata'},
  headers: {
    'Content-Type': 'application/json',
    Authorization: '4c700476-ff0d-48b5-92bc-bc39436203f3'
  }
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
    console.error(error);
});
console.log(options);
}
