import { detectConcordiumProvider, SmartContractParameters } from "@concordium/browser-wallet-api-helpers";
import {
 AccountTransactionType,
 CcdAmount,
 InitContractPayload,
 ModuleReference,
} from "@concordium/web-sdk";
import { Button, Link } from "@mui/material";
import { Buffer } from "buffer/";
import { useState } from "react";


export default function Initialize() {

 const [hash, setHash] = useState("");

 const initialize = async () => {
  const provider = await detectConcordiumProvider();
  const account = await provider.connect();

  if (!account) {
   alert("Please connect");
  }
  var REACT_APP_CONTRACT_NAME="CIS2-Multi";
  var REACT_APP_MODULE_REF="312f99d6406868e647359ea816e450eac0ecc4281c2665a24936e6793535c9f6";
  const txnHash = await provider.sendTransaction(
   account!,
   AccountTransactionType.InitContract as any,
   {
    amount: new CcdAmount(BigInt(0)),
    initName: REACT_APP_CONTRACT_NAME,
    moduleRef: new ModuleReference(REACT_APP_MODULE_REF),
    param: Buffer.alloc(0),
    maxContractExecutionEnergy: BigInt(9999),
   } as InitContractPayload
  );

  setHash(txnHash);
 };

 return hash ? (
  <Link
   href={`https://dashboard.testnet.concordium.com/lookup/${hash}`}
   target="_blank"
  >
   View Transaction <br />
   {hash}
  </Link>
 ) : (
  <Button fullWidth variant="outlined" onClick={initialize}>
   Initialize Contract
  </Button>
 );
}