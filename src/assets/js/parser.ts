
// example input data
/*
let data = 
[
  {
    "signature": "0x2e9c54cb50d1e281f5ec81ad00af043f3626e990ed1a176b319b148a1d39f2ab6baa189f007a9f617fcf2a65df035990af1afbf5cb2fc08947a0572b9886edd41c",
    "orderHash": "0x775312a426894ba716316e6077c1765373706f76d120195d2e0a25a29770fff5",
    "createDateTime": "2022-04-04T18:40:24.849Z",
    "remainingMakerAmount": "130000000000",
    "makerBalance": "184210107699",
    "makerAllowance": "115792089237316195423570985008687907853269984665640564039457584007773660633841",
    "data": {
      "makerAsset": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
      "takerAsset": "0xcafe001067cdef266afb7eb5a286dcfd277f3de5",
      "getMakerAmount": "0xf4a215c30000000000000000000000000000000000000000000000000000001e449a9400000000000000000000000000000000000000000000011ec185a80ad7156b8900",
      "getTakerAmount": "0x296637bf0000000000000000000000000000000000000000000000000000001e449a9400000000000000000000000000000000000000000000011ec185a80ad7156b8900",
      "makerAssetData": "0x",
      "takerAssetData": "0x",
      "salt": "129387715158",
      "permit": "0x",
      "predicate": "0x961d5b1e000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000002000000000000000000000000119c71d3bbac22029622cbaec24854d3d32d2828000000000000000000000000119c71d3bbac22029622cbaec24854d3d32d28280000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000044cf6fc6e3000000000000000000000000908841a9d510941bc5f1d4712eb47f8196b46d90000000000000000000000000000000000000000000000000000000000000000700000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002463592c2b000000000000000000000000000000000000000000000000000000006272c88d00000000000000000000000000000000000000000000000000000000",
      "interaction": "0x",
      "receiver": "0x0000000000000000000000000000000000000000",
      "allowedSender": "0x0000000000000000000000000000000000000000",
      "makingAmount": "130000000000",
      "takingAmount": "1354166666666666500000000",
      "maker": "0x908841a9d510941bc5f1d4712eb47f8196b46d90"
    },
    "makerRate": "10416666666666.665384615384615384",
    "takerRate": "9.6000E-14"
  },
  {
    "signature": "0x6b7ca73f40a81e44a206ee0f34816f69bd38a3f0f43edd5b5bc910f25bb23e421c7294313b9526a32b25cc7bdf2c25da8fef6e1f105ee90fbe5d1562cff6676f1c",
    "orderHash": "0x16afe2a3569ef4086e26d0b3f570dd1beb72e2f5e8dddd57e67ebd6b1074529d",
    "createDateTime": "2022-04-04T18:39:49.025Z",
    "remainingMakerAmount": "844555841100000000000000",
    "makerBalance": "844555841143675612260369",
    "makerAllowance": "115792089237316195423570985008687907853269984665640564039457584007913129639935",
    "data": {
      "makerAsset": "0xb620be8a1949aa9532e6a3510132864ef9bc3f82",
      "takerAsset": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
      "getMakerAmount": "0xf4a215c300000000000000000000000000000000000000000000b2d776c12fd43de0c0000000000000000000000000000000000000000000000000006a2a4277f3bd0000",
      "getTakerAmount": "0x296637bf00000000000000000000000000000000000000000000b2d776c12fd43de0c0000000000000000000000000000000000000000000000000006a2a4277f3bd0000",
      "makerAssetData": "0x",
      "takerAssetData": "0x",
      "salt": "286587520466",
      "permit": "0x",
      "predicate": "0x961d5b1e000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000002000000000000000000000000119c71d3bbac22029622cbaec24854d3d32d2828000000000000000000000000119c71d3bbac22029622cbaec24854d3d32d28280000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000044cf6fc6e3000000000000000000000000c97252f98b7159251d410fe237674dc5bf7465a1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002463592c2b00000000000000000000000000000000000000000000000000000000624f2fef00000000000000000000000000000000000000000000000000000000",
      "interaction": "0x",
      "receiver": "0x0000000000000000000000000000000000000000",
      "allowedSender": "0x0000000000000000000000000000000000000000",
      "makingAmount": "844555841100000000000000",
      "takingAmount": "7650000000000000000",
      "maker": "0xc97252f98b7159251d410fe237674dc5bf7465a1"
    },
    "makerRate": "0.000009058015619235",
    "takerRate": "110399.456352941176470588"
  }
]
*/



//hex to ascii
function hex2a(hexx:string) {
    var hex = hexx.toString();//force conversion
    var str = '';
    for (var i = 0; i < hex.length; i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
}

// this will get the current network along with the token information
// TODO - use https://github.com/1inch/multicall in the future for better perfomance
async function getNetworkAndTokenData(token: string)
{
    // name signature: 0x06fdde03
    // symbol signature: 0x95d89b41
    // we'll use different RPCs for different networks
    let ethRPC = "https://cloudflare-eth.com/";
    // example call: fetch("https://cloudflare-eth.com/", {"body": "{\"method\":\"eth_call\",\"params\":[{\"from\":null,\"to\":\"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48\",\"data\":\"0x06fdde03\"}, \"latest\"],\"id\":1,\"jsonrpc\":\"2.0\"}","method": "POST",});
    let response: any;
    let responseJson: any;
    let response2: any;
    let responseJson2: any;

    // check ETH rpc
    response = await fetch(ethRPC, {
        "body": "{\"method\":\"eth_call\",\"params\":[{\"from\":null,\"to\":\"" + token + "\",\"data\":\"0x06fdde03\"}, \"latest\"],\"id\":1,\"jsonrpc\":\"2.0\"}","method": "POST",
    });
    responseJson = await response.json();
    response2 = await fetch(ethRPC, {
        "body": "{\"method\":\"eth_call\",\"params\":[{\"from\":null,\"to\":\"" + token + "\",\"data\":\"0x95d89b41\"}, \"latest\"],\"id\":1,\"jsonrpc\":\"2.0\"}","method": "POST",   
    });
    responseJson2 = await response2.json();
    // additional check from 1inch's token list 

    if(responseJson.result != "0x" && responseJson2.result != "0x")
    {
        let name = hex2a(responseJson.result.substring(130).replace(/^0+|0+$/g, ""));
        let symbol = hex2a(responseJson2.result.substring(130).replace(/^0+|0+$/g, ""));
        return {
            "chainId": "1",
            "name": name,
            "symbol": symbol,
        };
    }

    return {
        "chainId": "0", // 0 means not a valid token or unknown chain
        "name": "",
    }
    

}

export async function Parser(input: any) {
    let data = JSON.parse(input);
    let output = [];

    // we want to extract the data from the data array of objects
    // specifically we want the maker, the maker asset, the taker asset, the maker amount and the taker amount.
    // we also want to extract the creation time and the expiration time. 
    // the expiration time is a unix timestamp within the predicate 64 characters after the index of "63592c2b"
    for(let i=0; i<data.length; i++)
    {
        let fromTokenInfo = await getNetworkAndTokenData(data[i].data.makerAsset);
        let toTokenInfo = await getNetworkAndTokenData(data[i].data.takerAsset);


        output.push({
            "maker": data[i].data.maker,
            "makerAsset": data[i].data.makerAsset,
            "takerAsset": data[i].data.takerAsset,
            "makerAmount": data[i].data.makingAmount,
            "takerAmount": data[i].data.takingAmount,
            "creationTime": data[i].createDateTime,
            "expirationTime": data[i].data.predicate.substring(data[i].data.predicate.indexOf("63592c2b")+11, data[i].data.predicate.indexOf("63592c2b")+75).replace(/^0+/,''), // remove leading zeros on the timestamp
            "fromTokenSymbol": fromTokenInfo.symbol,
            "fromTokenName": fromTokenInfo.name,
            "toTokenSymbol": toTokenInfo.symbol,
            "toTokenName": toTokenInfo.name,
        })
    }

    return output;
}