import { Contract, ContractRunner } from "ethers";
import abi from "./abi.json";

export function getContract(signer: ContractRunner) {
    return new Contract(
        "0x95Ea78B462e08F41CA1D606b76A5170eC4943226",
        abi as any,
        signer
    );
}