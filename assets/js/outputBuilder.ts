// build output takes in an array of objects and returns a string of html

//example input data
/*
    [
        {
            "maker": "0x0d1d4e623D10F9FBA5Db95830F7d3839406C6AF2",
            "makerAsset": "0x0000000000000000000000000000000000000000",
            "takerAsset": "0x0000000000000000000000000000000000000000",
            "makerAmount": "1000000000000000000",
            "takerAmount": "1000000000000000000",
            "creationTime": "1588299924",
            "expirationTime": "1588303524",
        },
        {
            "maker": "0x0d1d4e623D10F9FBA5Db95830F7d3839406C6AF2",
            "makerAsset": "0x0000000000000000000000000000000000000000",
            "takerAsset": "0x0000000000000000000000000000000000000000",
            "makerAmount": "1000000000000000000",
            "takerAmount": "1000000000000000000",
            "creationTime": "1588299924",
            "expirationTime": "1588303524",
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

async function getNetwork(token: string)
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

export async function buildOutput(data: any){

    console.log(data);

    try{
        let output = "";
        let network: Object;
        let explorerUrl: string;
        // use the network to pick the blockchain explorer
        // switch(network){
            // case "1":
            //     explorerUrl = "https://etherscan.io/token/";


        let fromTokenName: string;
        let fromTokenSymbol: string;
        let toTokenName: string;
        let toTokenSymbol: string;

        for(let i=0; i<data.length; i++)
        {
            // find the network by the maker asset address
            let network = await getNetwork(data[i].makerAsset);
            let name = network.name;
            let symbol = network.symbol;
            // if the network isn't known, throw an error
            if(network.chainId == "0")
            {
                throw "Unknown network";
            }

            output+= "<div class='wrap-collapsible'>";
                output+= "<input class='toggle' id='collapsible"+ i +"' type='checkbox'>"
                output+= "<label for='collapsible"+ i +"' class='lbl-toggle'>" + data[i].maker + "</label>";
                    output+= "<div class='collapsible-content'>";
                        output+= "<div class='content-inner'>";
                        
                            // this will be the from token box with a span at the top, a div for the token and a span at the bottom
                            output+= "<div class='from-token-box'>";
                                output+= "<span class='from-token-box-top'>From Token</span>";
                                    output+= "<div class='from-token-box-inner'>";
                                        output+="<span class='from-token-box-inner-left'>" + name + "</span>";
                                        output+="<span class='from-token-box-inner-right'>" + data[i].makerAmount + "</span>";
                                    output+= "</div>";
                                output+= "<span class='from-token-box-bottom'>";
                                    output+= symbol;
                                output+= "</span>";
                            output+= "</div>"; // end from-token-box
                            
                            // this will be the to token box the same as before but with the destination token
                            


                        output+= "</div>";
                    output+= "</div>";
                output+= "</div>";
            output+= "</div>";
        }

        return output;
    } catch(error)
    {
        return "<div class='row'><div'><h1 style='color:#fff;'>Error parsing a limit order</h1></div></div>";
    }
}


