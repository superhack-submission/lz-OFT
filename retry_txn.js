const { ethers } = require("hardhat")

async function deliverStoredPayload() {
    const endpoint = await ethers.getContract("Endpoint")

    const srcChainId = 10160

    // trustedRemote is the remote + local format
    const trustedRemote = ethers.utils.solidityPack(["address", "address"], [remoteContract.address, localContract.address])

    const payload = "000000000000000000000000000F284B92D59C8B59E11409495BE0C5E7DBE0DAF90000000000989680" // payload provided

    const tx = await endpoint.retryPayload(srcChainId, trustedRemote, payload)

    return tx
}

// Call the function
deliverStoredPayload()
    .then((tx) => {
        console.log("Transaction:", tx)
    })
    .catch((error) => {
        console.error("Error occurred:", error)
    })
