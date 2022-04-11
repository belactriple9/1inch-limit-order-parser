
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

import {Interface, Result} from '@ethersproject/abi';

const LimitOrderProtocolABISource = require('../../abi/LimitOrderProtocol.json');

import {
    LimitOrderProtocolFacade,
    LimitOrder,
    Web3ProviderConnector
} from '@1inch/limit-order-protocol';

import Web3 from 'web3';
import { Chain } from '@angular/compiler';

//RPCs
const ethRPC = "https://cloudflare-eth.com";

// limit order contracts
const limitOrderContractETH = '0x119c71d3bbac22029622cbaec24854d3d32d2828';
const limitOrderContractBSC = '0x1e38eff998df9d3669e32f4ff400031385bf6362';
const limitOrderContractPolygon = '0x94bc2a1c732bcad7343b25af48385fe76e08734f';
const limitOrderContractOE = '0x11431a89893025d2a48dca4eddc396f8c8117187';
const limitOrderContractArbitrum = '0x7f069df72b7a39bce9806e3afaf579e54d8cf2b9';
const limitOrderContractGnosis = '0x54431918cEC22932fCF97E54769F4E00f646690F';
const limitOrderContractAvax = '0x0f85a912448279111694f4ba4f85dc641c54b594';

//hex to ascii
function hex2a(hexx:string) {
    var hex = hexx.toString();//force conversion
    var str = '';
    // if the hex string is odd, add a trailing 0
    if (hex.length % 2 != 0) {
        hex += '0';
    }

    for (var i = 0; i < hex.length; i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
}

function getLocalTokenInfo(token:string)
{
    let tokenInfo = null;

    if(localStorage.hasOwnProperty("tokens"))
    {
        let tokens = JSON.parse(localStorage["tokens"]);
        if(tokens.hasOwnProperty(token))
        {
            // console.log(tokens[token]);
            tokenInfo = tokens[token];
        }
    }
    return !!tokenInfo ? tokenInfo : null;
}

// TODO - use https://github.com/1inch/multicall in the future for better perfomance
// could also save the data locally
async function getTokenData(token:string)
{

    if(token.length === 0)
    {
        return {
            name: undefined,
            symbol: undefined,
        }; // token is undefined
    }

    // first, check if we have saved the token in a token list:
    let isSaved = getLocalTokenInfo(token);

    if(isSaved === null)
    {
        // name signature: 0x06fdde03
        // symbol signature: 0x95d89b41
        // we'll use different RPCs for different networks
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
        // console.log(responseJson, responseJson2);

        if(responseJson.result != "0x" && responseJson2.result != "0x")
        {
            let name = hex2a(responseJson.result.substring(130).replace(/^0+|0+$/g, ""));
            let symbol = hex2a(responseJson2.result.substring(130).replace(/^0+|0+$/g, ""));
            
            // save the token in a token list:
            let tokenInfo = {
                name: name,
                symbol: symbol,
            };

            if(!localStorage.hasOwnProperty("tokens"))
            {
                localStorage.setItem("tokens", JSON.stringify({}));
            }

            // save the token in a token list:
            let tokens = JSON.parse(localStorage["tokens"]);
            tokens[token] = JSON.stringify(tokenInfo);
            localStorage["tokens"] = JSON.stringify(tokens);
            

            return tokenInfo;

        }

        return {
            "name": null,
            "symbol": null
        }
    }
    else
    {
        return JSON.parse(isSaved);
    }

}



async function parseJson(input: string|Object)
{
    let data;
    // check if input is a string
    if(typeof input == "string")
        data = JSON.parse(input); 
    else
        data = input;
    let output = [];

    console.log(data);

    // we want to extract the data from the data array of objects
    // specifically we want the maker, the maker asset, the taker asset, the maker amount and the taker amount.
    // we also want to extract the creation time and the expiration time. 
    // the expiration time is a unix timestamp within the predicate 64 characters after the index of "63592c2b"
    for(let i=0; i<data.length; i++)
    {

        let fromTokenInfo = data[i].data.hasOwnProperty("makerAsset") && data[i].data.makerAsset != null ? await getTokenData(data[i].data.makerAsset) : {"symbol": null, "name": null};
        let toTokenInfo = data[i].data.hasOwnProperty("takerAsset") && data[i].data.takerAsset != null ? await getTokenData(data[i].data.takerAsset) : {"symbol": null, "name": null};
        // let expirationHexTimestamp = data[i].data.predicate.substring(data[i].data.predicate.indexOf("63592c2b")+11, data[i].data.predicate.indexOf("63592c2b")+75).replace(/^0+/,''); // remove leading zeros on the timestamp

        // we'll parse the predicate to get the expiration time
        // we need to go through until we find the first "63592c2b"
        // we'll then use the result out of the returned object to get the timestamp
        let predicate = data[i].data.predicate;
        let parsedPredicate:any;
        let expirationDate;
        let nonceData;

        if(predicate != undefined)
        {
            // console.log("Predicate is not empty: " + predicate);
            parsedPredicate = loopParsePredicates(predicate);
            expirationDate = parsedPredicate.expiration;
            nonceData = parsedPredicate.nonce;
        }
        else 
        {
            expirationDate = undefined;
            nonceData = undefined;
        }

        // check if the permit is not just 0x and if it isn't then we'll parse it to display to the user
        let permit = data[i].data.hasOwnProperty("permit") && data[i].data.permit != "0x" ? await parsePermit(data[i].data.permit) : null;

        // console.log(permit);

        output.push({
            "maker": data[i].data.maker == null ? "Can't find maker" : data[i].data.maker,
            "makerAsset": data[i].data.makerAsset,
            "takerAsset": data[i].data.takerAsset,
            "makerAmount": data[i].data.makingAmount,
            "takerAmount": data[i].data.takingAmount,
            "creationTime": data[i].createDateTime,
            "expirationTime": expirationDate,
            "fromTokenSymbol": fromTokenInfo.symbol,
            "fromTokenName": fromTokenInfo.name,
            "toTokenSymbol": toTokenInfo.symbol,
            "toTokenName": toTokenInfo.name,
            // Todo - add permit information
            "permitExpiration": permit != null && permit.deadline == undefined ? "No expiration" : permit != null ? permit.deadline.toISOString() : null,
            "permitNonce": permit != null && permit.nonce != undefined ? permit.nonce : null,
            "nonce": nonceData,
            // Todo - add validity information https://docs.1inch.io/docs/limit-order-protocol/guide/validate-limit-order
        })
    }

    console.log(output);

    return output;
}

async function parseAddress(address: string)
{
    // we'll need to fetch from 
    //https://limit-orders.1inch.io/v2.0/1/limit-order/address/address?page=1&limit=100&statuses=%5B1%5D

    let callReturn = await fetch(`https://limit-orders.1inch.io/v2.0/1/limit-order/address/${address}?page=1&limit=100&statuses=%5B1%2C2%2C3%5D`)
    let orderJson = await callReturn.json();

    return parseJson(orderJson); // TODO
}


async function getOrderHashData(orderHash: string)
{
    // call the limit order server at https://limit-orders.1inch.io/v2.0/1/limit-order/events/orderHash
    let callReturn = await fetch(`https://limit-orders.1inch.io/v2.0/1/limit-order/events/${orderHash}`); //ethereum 
    let eventsList = await callReturn.json();
    // console.log("Ethereum: " + JSON.stringify(eventsList));
    if(eventsList == null)
    {
        callReturn = await fetch(`https://limit-orders.1inch.io/v2.0/56/limit-order/events/${orderHash}`); //binance 
        eventsList = await callReturn.json();
        if(eventsList == null)
        {
            callReturn = await fetch(`https://limit-orders.1inch.io/v2.0/137/limit-order/events/${orderHash}`); //polygon
            eventsList = await callReturn.json();
            if(eventsList == null)
            {

            }
        }
    }

    // example return: 
// {
// "0x2b223b6d4eed6814095f3fc256bfdb2c1087700fb950b32f6a4bb4ae9b4263cc": [
//     {
//       "id": 8289730,
//       "network": 1,
//       "logId": "log_7209a4ae",
//       "version": 2,
//       "action": "fill",
//       "orderHash": "0x2b223b6d4eed6814095f3fc256bfdb2c1087700fb950b32f6a4bb4ae9b4263cc",
//       "taker": "0x220bda5c8994804ac96ebe4df184d25e5c2196d4",
//       "remainingMakerAmount": "1266584480",
//       "transactionHash": "0x3d9b7883f9e00c284f30cda2bdceabb13fc0cf01dda3ffbf320ce0db9f206467",
//       "blockNumber": 14433985,
//       "createDateTime": "2022-03-22T04:33:12.213Z"
//     }
//   ]
// }
    
    //if in the very end the eventsList is null then then the order had never filled. 
    if(eventsList == null)
        return null;

    eventsList = eventsList[orderHash];
    // we'll return an array that matches the format parseJson expects
    let output = [];
    if(eventsList != {} && eventsList != undefined)
    {
        // console.log("Events list is not empty: " + JSON.stringify(eventsList));
        for(let i=0; i<eventsList.length; i++)
        {
            output.push({
                "orderHash": eventsList[i].orderHash,
                "createDateTime": eventsList[i].createDateTime,
                "transactionHash": eventsList[i].transactionHash,
                "data": {
                    "taker": eventsList[i].taker,
                    "makerAsset": "",
                    "takerAsset": "",
                    "predicate": undefined,
                }
            });
        }
    }
    else {
        output.push({
            "orderHash": orderHash,
            "createDateTime": null,
            "transactionHash": null,
            "data": {
                "taker": null,
                "makerAsset": null,
                "takerAsset": null,
                "predicate": undefined,
            }
        });
    }

    return output;

}

async function parseHash(hash: string)
{
    //we'll need to fetch from the transaction and parse the data

    let response: any;
    try{
    response = await fetch(ethRPC, {
        "headers": {
            "Content-Type": "application/json",
        },
        "body": "{\"method\":\"eth_getTransactionReceipt\",\"params\":[\"" + hash + "\"],\"id\":1,\"jsonrpc\":\"2.0\"}",
        "method": "POST",
    })
    }
    catch(e)
    {
        console.log("Error: " + e);
        // maybe tell the user to retry?
        return [{"maker": "Failed to get transaction receipt. Please try again.",
        "makerAsset": null,
        "takerAsset":  null,
        "makerAmount": null,
        "takerAmount":  null,
        "creationTime":  null,
        "expirationTime":  null,
        "fromTokenSymbol":  null,
        "fromTokenName":  null,
        "toTokenSymbol":  null,
        "toTokenName":  null,
        // Todo - add permit information
        "nonce":  null}];
    }
    
    // if the response is a 500 error
    let responseJson = await response.json();
    // console.log(responseJson);
    // example responseJson {"jsonrpc":"2.0","id":1,"result":{"blockHash":"0x53ccf5e817446c489868d05b124b600bb80c7887c9a37569a3f6750be690e055","blockNumber":"0xdcc0ca","contractAddress":null,"cumulativeGasUsed":"0x722bc","effectiveGasPrice":"0x557015268","from":"0xce5fcb032941e17121a47875ee242f1eee1de4bc","gasUsed":"0x4eb45","logs":[{"address":"0x6b175474e89094c44da98b954eedeac495271d0f","topics":["0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef","0x000000000000000000000000a478c2975ab1ea89e8196811f51a7b7ade33eb11","0x000000000000000000000000d426be0576f6d8e1c805dcd3db3e4c1d8147406b"],"data":"0x0000000000000000000000000000000000000000000000f72ec4520be414fdd0","blockNumber":"0xdcc0ca","transactionHash":"0x25fd06a5180e60beb4f1fd03ae61c3617ba0aaccbdd8a93f815ec5b53ce0f188","transactionIndex":"0x1","blockHash":"0x53ccf5e817446c489868d05b124b600bb80c7887c9a37569a3f6750be690e055","logIndex":"0x6","removed":false},{"address":"0x119c71d3bbac22029622cbaec24854d3d32d2828","topics":["0xb9ed0243fdf00f0545c63a0af8850c090d86bb46682baec4bf3c496814fe4f02","0x000000000000000000000000d426be0576f6d8e1c805dcd3db3e4c1d8147406b"],"data":"0x2b223b6d4eed6814095f3fc256bfdb2c1087700fb950b32f6a4bb4ae9b4263cc000000000000000000000000000000000000000000000000000000004adc3cf4","blockNumber":"0xdcc0ca","transactionHash":"0x25fd06a5180e60beb4f1fd03ae61c3617ba0aaccbdd8a93f815ec5b53ce0f188","transactionIndex":"0x1","blockHash":"0x53ccf5e817446c489868d05b124b600bb80c7887c9a37569a3f6750be690e055","logIndex":"0x7","removed":false},{"address":"0x6b175474e89094c44da98b954eedeac495271d0f","topics":["0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef","0x000000000000000000000000d426be0576f6d8e1c805dcd3db3e4c1d8147406b","0x000000000000000000000000848ad4041397c1b75b50102efdde22bab8d5b4ab"],"data":"0x0000000000000000000000000000000000000000000000f72ec4494f4e0de400","blockNumber":"0xdcc0ca","transactionHash":"0x25fd06a5180e60beb4f1fd03ae61c3617ba0aaccbdd8a93f815ec5b53ce0f188","transactionIndex":"0x1","blockHash":"0x53ccf5e817446c489868d05b124b600bb80c7887c9a37569a3f6750be690e055","logIndex":"0x8","removed":false},{"address":"0xeb4c2781e4eba804ce9a9803c67d0893436bb27d","topics":["0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef","0x000000000000000000000000848ad4041397c1b75b50102efdde22bab8d5b4ab","0x000000000000000000000000d426be0576f6d8e1c805dcd3db3e4c1d8147406b"],"data":"0x0000000000000000000000000000000000000000000000000000000000a24eac","blockNumber":"0xdcc0ca","transactionHash":"0x25fd06a5180e60beb4f1fd03ae61c3617ba0aaccbdd8a93f815ec5b53ce0f188","transactionIndex":"0x1","blockHash":"0x53ccf5e817446c489868d05b124b600bb80c7887c9a37569a3f6750be690e055","logIndex":"0x9","removed":false},{"address":"0xeb4c2781e4eba804ce9a9803c67d0893436bb27d","topics":["0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925","0x000000000000000000000000848ad4041397c1b75b50102efdde22bab8d5b4ab","0x000000000000000000000000119c71d3bbac22029622cbaec24854d3d32d2828"],"data":"0xffffffffffffffffffffffffffffffffffffffffffffffffffffffff426478b2","blockNumber":"0xdcc0ca","transactionHash":"0x25fd06a5180e60beb4f1fd03ae61c3617ba0aaccbdd8a93f815ec5b53ce0f188","transactionIndex":"0x1","blockHash":"0x53ccf5e817446c489868d05b124b600bb80c7887c9a37569a3f6750be690e055","logIndex":"0xa","removed":false},{"address":"0xeb4c2781e4eba804ce9a9803c67d0893436bb27d","topics":["0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925","0x000000000000000000000000d426be0576f6d8e1c805dcd3db3e4c1d8147406b","0x0000000000000000000000007a250d5630b4cf539739df2c5dacb4c659f2488d"],"data":"0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff","blockNumber":"0xdcc0ca","transactionHash":"0x25fd06a5180e60beb4f1fd03ae61c3617ba0aaccbdd8a93f815ec5b53ce0f188","transactionIndex":"0x1","blockHash":"0x53ccf5e817446c489868d05b124b600bb80c7887c9a37569a3f6750be690e055","logIndex":"0xb","removed":false},{"address":"0xeb4c2781e4eba804ce9a9803c67d0893436bb27d","topics":["0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef","0x000000000000000000000000d426be0576f6d8e1c805dcd3db3e4c1d8147406b","0x00000000000000000000000081fbef4704776cc5bba0a5df3a90056d2c6900b3"],"data":"0x0000000000000000000000000000000000000000000000000000000000a24ef5","blockNumber":"0xdcc0ca","transactionHash":"0x25fd06a5180e60beb4f1fd03ae61c3617ba0aaccbdd8a93f815ec5b53ce0f188","transactionIndex":"0x1","blockHash":"0x53ccf5e817446c489868d05b124b600bb80c7887c9a37569a3f6750be690e055","logIndex":"0xc","removed":false},{"address":"0xeb4c2781e4eba804ce9a9803c67d0893436bb27d","topics":["0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925","0x000000000000000000000000d426be0576f6d8e1c805dcd3db3e4c1d8147406b","0x0000000000000000000000007a250d5630b4cf539739df2c5dacb4c659f2488d"],"data":"0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5db10a","blockNumber":"0xdcc0ca","transactionHash":"0x25fd06a5180e60beb4f1fd03ae61c3617ba0aaccbdd8a93f815ec5b53ce0f188","transactionIndex":"0x1","blockHash":"0x53ccf5e817446c489868d05b124b600bb80c7887c9a37569a3f6750be690e055","logIndex":"0xd","removed":false},{"address":"0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2","topics":["0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef","0x00000000000000000000000081fbef4704776cc5bba0a5df3a90056d2c6900b3","0x000000000000000000000000d426be0576f6d8e1c805dcd3db3e4c1d8147406b"],"data":"0x000000000000000000000000000000000000000000000000141dd93efc76e9c0","blockNumber":"0xdcc0ca","transactionHash":"0x25fd06a5180e60beb4f1fd03ae61c3617ba0aaccbdd8a93f815ec5b53ce0f188","transactionIndex":"0x1","blockHash":"0x53ccf5e817446c489868d05b124b600bb80c7887c9a37569a3f6750be690e055","logIndex":"0xe","removed":false},{"address":"0x81fbef4704776cc5bba0a5df3a90056d2c6900b3","topics":["0x1c411e9a96e071241c2f21f7726b17ae89e3cab4c78be50e062b03a9fffbbad1"],"data":"0x0000000000000000000000000000000000000000000000041f64a39746404d4c0000000000000000000000000000000000000000000000000000000021cc1462","blockNumber":"0xdcc0ca","transactionHash":"0x25fd06a5180e60beb4f1fd03ae61c3617ba0aaccbdd8a93f815ec5b53ce0f188","transactionIndex":"0x1","blockHash":"0x53ccf5e817446c489868d05b124b600bb80c7887c9a37569a3f6750be690e055","logIndex":"0xf","removed":false},{"address":"0x81fbef4704776cc5bba0a5df3a90056d2c6900b3","topics":["0xd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d822","0x0000000000000000000000007a250d5630b4cf539739df2c5dacb4c659f2488d","0x000000000000000000000000d426be0576f6d8e1c805dcd3db3e4c1d8147406b"],"data":"0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a24ef5000000000000000000000000000000000000000000000000141dd93efc76e9c00000000000000000000000000000000000000000000000000000000000000000","blockNumber":"0xdcc0ca","transactionHash":"0x25fd06a5180e60beb4f1fd03ae61c3617ba0aaccbdd8a93f815ec5b53ce0f188","transactionIndex":"0x1","blockHash":"0x53ccf5e817446c489868d05b124b600bb80c7887c9a37569a3f6750be690e055","logIndex":"0x10","removed":false},{"address":"0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2","topics":["0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef","0x000000000000000000000000d426be0576f6d8e1c805dcd3db3e4c1d8147406b","0x000000000000000000000000a478c2975ab1ea89e8196811f51a7b7ade33eb11"],"data":"0x000000000000000000000000000000000000000000000000141dd27626580f58","blockNumber":"0xdcc0ca","transactionHash":"0x25fd06a5180e60beb4f1fd03ae61c3617ba0aaccbdd8a93f815ec5b53ce0f188","transactionIndex":"0x1","blockHash":"0x53ccf5e817446c489868d05b124b600bb80c7887c9a37569a3f6750be690e055","logIndex":"0x11","removed":false},{"address":"0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2","topics":["0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef","0x000000000000000000000000d426be0576f6d8e1c805dcd3db3e4c1d8147406b","0x000000000000000000000000e4247779a6c198811a4d12c19188a9ab58f699a8"],"data":"0x000000000000000000000000000000000000000000000000000006c8d61eda68","blockNumber":"0xdcc0ca","transactionHash":"0x25fd06a5180e60beb4f1fd03ae61c3617ba0aaccbdd8a93f815ec5b53ce0f188","transactionIndex":"0x1","blockHash":"0x53ccf5e817446c489868d05b124b600bb80c7887c9a37569a3f6750be690e055","logIndex":"0x12","removed":false},{"address":"0xa478c2975ab1ea89e8196811f51a7b7ade33eb11","topics":["0x1c411e9a96e071241c2f21f7726b17ae89e3cab4c78be50e062b03a9fffbbad1"],"data":"0x0000000000000000000000000000000000000000000b2e11bfd84aaf71d376440000000000000000000000000000000000000000000000e84dcaf681c1cfa656","blockNumber":"0xdcc0ca","transactionHash":"0x25fd06a5180e60beb4f1fd03ae61c3617ba0aaccbdd8a93f815ec5b53ce0f188","transactionIndex":"0x1","blockHash":"0x53ccf5e817446c489868d05b124b600bb80c7887c9a37569a3f6750be690e055","logIndex":"0x13","removed":false},{"address":"0xa478c2975ab1ea89e8196811f51a7b7ade33eb11","topics":["0xd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d822","0x000000000000000000000000d426be0576f6d8e1c805dcd3db3e4c1d8147406b","0x000000000000000000000000d426be0576f6d8e1c805dcd3db3e4c1d8147406b"],"data":"0x0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000141dd27626580f580000000000000000000000000000000000000000000000f72ec4520be414fdd00000000000000000000000000000000000000000000000000000000000000000","blockNumber":"0xdcc0ca","transactionHash":"0x25fd06a5180e60beb4f1fd03ae61c3617ba0aaccbdd8a93f815ec5b53ce0f188","transactionIndex":"0x1","blockHash":"0x53ccf5e817446c489868d05b124b600bb80c7887c9a37569a3f6750be690e055","logIndex":"0x14","removed":false}],"logsBloom":"0x00200000400000000000000080010000000000000000000000010000400004000000000000000000200000000000000002040000480000000800000000200000020000000200080000000008000000280000800010000000004000008000000010200040000080000000000000000000000000000000000010080010000000000000000000800000004000000000000004000000000000080000004000000008020000000000040000000020400000000000080000000000000200000000000000000002000000000000200080400000000002000400001000000000000020000010200000000000000000000000000000000000000000000000000000000000","status":"0x1","to":"0xd426be0576f6d8e1c805dcd3db3e4c1d8147406b","transactionHash":"0x25fd06a5180e60beb4f1fd03ae61c3617ba0aaccbdd8a93f815ec5b53ce0f188","transactionIndex":"0x1","type":"0x2"}}

    if(responseJson.result != null) // this is a transaction hash on ETH, if not it's an order hash or it's a transaction hash on another chain.
    {
        let logs = responseJson.result.logs; // an array of objects [{address: "...", topics: ["...", "...", ...], data: "..."}, ...]
        let output = [];
        let orderHash:string[] = [];
        let fromTokens:string[] = [];
        let toTokens:string[] = [];

        for(let i=0; i<logs.length-2; i++) // don't want to include the last two so we don't go out of bounds, there's no reason it would ever though. 
        {
            if(logs[i].address == limitOrderContractETH)
            { 
                orderHash.push(logs[i].data.substring(0,66)); // this is the taker address *even thought it's the maker address in the event, it's wrong*
                fromTokens.push(logs[i+1].address);
                toTokens.push(logs[i+2].address);
            }
        }

        for(let i=0; i<orderHash.length; i++)
        {
            let orderHashData = await getOrderHashData(orderHash[i]);

            if(orderHashData != null )
            {
                for(let j=0; j<orderHashData.length;j++)
                {
                    if(orderHashData[j].transactionHash != "" )
                    {
                        orderHashData[j].data.makerAsset = fromTokens[i];
                        orderHashData[j].data.takerAsset = toTokens[i];
                    }
                }
            }
            else
            {
                return null; // return null in the case of errors. 
            }

        }
    }
    
    // call the BSC RPC

    // call the polygon rpc

    // call the arbitrum rpc

    // call the optimism rpc

    // call the gnosis rpc

    // call the avalanche rpc

    // if none work then call the order hash server
    let orderHashData = await getOrderHashData(hash);
    if(orderHashData != null)
    {
        // console.log("orderHashData: " + JSON.stringify(orderHashData));
        //this means we have a transaction hash available so we can collect the rest of the data by calling this function again with a transaction hash.
        for(let i=0; i<orderHashData.length; i++)
        {
            if(orderHashData[i].transactionHash != "" && orderHashData[i].transactionHash != null)
            {
                let transactionHashData: any = await parseHash(orderHashData[i].transactionHash);
                if(transactionHashData != null)
                {
                    return transactionHashData;
                }
            }
        }
        // if the above didn't work then we only know the order hash and we can't get the rest of the data.
        return await parseJson(orderHashData);
    }

    // if nothing works then we just return undefined. 
    return undefined; // TODO
}

/**
 * 
 * @param input a string or object containing the data to be parsed or a transaction hash or address
 * @param type a number indicating the type of input from 0 to 2
 * @returns an object containing the parsed data or undefined
 */
export async function Parser(input: any, type: number) {

    // 0 - orderbook json in an array
    // 1 - address
    // 2 - transaction hash

    if(type == 0)
    {
        return await parseJson(input);
    }
    else if(type == 1)
    {
        return await parseAddress(input);
    }
    else if(type == 2)
    {
        return await parseHash(input);
    }
    else
    {
        return undefined;
    }
    
}

function loopParsePredicates(predicate: string | undefined)
{

    let parsedPredicate = parsePredicates(predicate);
    let resultPredicateArray:string[] = [];
    let expirationHexTimestamp = undefined;
    let nonceData = undefined;

    do 
    {
        
        if(parsedPredicate === undefined)
            break;
        if(Array.isArray(parsedPredicate.result[1]) && parsedPredicate.result[1].length != undefined) // warning, short circuits may cause errors
            resultPredicateArray = [...resultPredicateArray, ...parsedPredicate.result[1]];

        // console.log(resultPredicateArray);

        // console.log(parsedPredicate.method.name);
        if(parsedPredicate.method.name === "timestampBelow")
        {
            // console.log("timestampBelow: " + parsedPredicate.result[0]._hex); 
            expirationHexTimestamp = parsedPredicate.result[0]._hex;
        }
        if(parsedPredicate.method.name === "nonceEquals")
        {
            // console.log("nonceEquals: " + parsedPredicate.result[0]._hex); 
            nonceData = parseInt(parsedPredicate.result[1]._hex);
        }

        // if not, we'll move to the next predicate by popping it from the result array
        // if the result array is empty, we'll break out of the loop
        if(resultPredicateArray.length > 0)
            parsedPredicate = parsePredicates(resultPredicateArray.pop());
        else
            break;
    } while(resultPredicateArray.length>=0);

    const expirationDate = new Date(parseInt(expirationHexTimestamp, 16) * 1000).toISOString();

    return {expiration: expirationDate, nonce: nonceData};
}

// https://docs.ethers.io/v5/api/utils/abi/interface/#Interface--decoding
function parsePredicates(predicate: string | undefined) {
    if(predicate === undefined)
        return undefined;
    // else
    const iface = new Interface(LimitOrderProtocolABISource);
    const selector = predicate.slice(0, 10);
  
    const result = iface.decodeFunctionData(selector, predicate);
    const method = iface.getFunction(selector);
  
    return {method, result};
  }


/* example return of the above function

{
  method: FunctionFragment {
    type: 'function',
    name: 'and',
    constant: true,
    inputs: [ [ParamType], [ParamType] ],
    outputs: [ [ParamType] ],
    payable: false,
    stateMutability: 'view',
    gas: null,
    _isFragment: true
  },
  result: [
    [
      '0x119c71D3BbAC22029622cbaEc24854d3D32D2828',
      '0x119c71D3BbAC22029622cbaEc24854d3D32D2828'
    ],
    [
      '0xcf6fc6e300000000000000000000000007ccf7447188b44da874f3a87773989628d3081e0000000000000000000000000000000000000000000000000000000000000000',
      '0x63592c2b000000000000000000000000000000000000000000000000000000006256cc38'
    ],
    targets: [
      '0x119c71D3BbAC22029622cbaEc24854d3D32D2828',
      '0x119c71D3BbAC22029622cbaEc24854d3D32D2828'
    ],
    data: [
      '0xcf6fc6e300000000000000000000000007ccf7447188b44da874f3a87773989628d3081e0000000000000000000000000000000000000000000000000000000000000000',
      '0x63592c2b000000000000000000000000000000000000000000000000000000006256cc38'
    ]
  ]
}

OR

{
  method: FunctionFragment {
    type: 'function',
    name: 'timestampBelow',
    constant: true,
    inputs: [ [ParamType] ],
    outputs: [ [ParamType] ],
    payable: false,
    stateMutability: 'view',
    gas: null,
    _isFragment: true
  },
  result: [
    BigNumber { _hex: '0x6256cc38', _isBigNumber: true },
    time: BigNumber { _hex: '0x6256cc38', _isBigNumber: true }
  ]
}

*/

function parsePermit(permit: string | undefined) {
    if(permit === undefined)
        return undefined;
    // else
    if(permit.length == 490)
    {
    // index 0 to 42 is the token being permitted
    const token = permit.substring(0,42);
    // index 42+23 to 42+23+40 is the owner of the permit
    const owner = '0x'+permit.substring(43+23,43+23+40);
    // index 42+23+40+24 to 42+23+40+24+40 is the spender of the permit
    const spender = '0x'+permit.substring(43+23+40+24,43+23+40+24+40);
    // index 42+23+40+24+40 to 42+23+40+24+40+64 is the amount of the permit
    const amount = '0x'+permit.substring(43+23+40+24+40,43+23+40+24+40+64);
    // index 42+23+40+24+40+64 to 42+23+40+24+40+64+64 is the deadline (expiry) of the permit
    const deadline = new Date(parseInt('0x'+permit.substring(43+23+40+24+40+64,43+23+40+24+40+64+64)) * 1000);
    // nonce must be gotten from calling the contract
    // const nonce = ...
    return {token, owner, spender, amount, deadline};
    }
    else //if(permit.length == 554)
    {
        // if the nonce is included, then the amount comes after the deadline
         // index 0 to 42 is the token being permitted
    const token = permit.substring(0,42);
    // index 42+23 to 42+23+40 is the owner of the permit
    const owner = '0x'+permit.substring(43+23,43+23+40);
    // index 42+23+40+24 to 42+23+40+24+40 is the spender of the permit
    const spender = '0x'+permit.substring(43+23+40+24,43+23+40+24+40);
    // index 42+23+40+24+40 to 42+23+40+24+40+64 is the nonce of the permit
    const nonce = parseInt('0x'+permit.substring(43+23+40+24+40,43+23+40+24+40+64));
    // index 42+23+40+24+40+64 to 42+23+40+24+40+64+64 is the deadline (expiry) of the permit
    const deadline = new Date(parseInt('0x'+permit.substring(43+23+40+24+40+64,43+23+40+24+40+64+64)) * 1000);
    // index 42+23+40+24+40+64+64 to 42+23+40+24+40+64+64+64 is if the allowance is allowed, if it's a 1 then infinite is allowed, else it's 0
    const amount = parseInt('0x'+permit.substring(43+23+40+24+40+64+64,43+23+40+24+40+64+64+64)) == 1 ? '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff' : '0x0';
    return {token, owner, spender, amount, deadline, nonce};
    }

}