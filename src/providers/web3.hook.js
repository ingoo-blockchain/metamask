import { useEffect, useState } from 'react'
import Web3 from 'web3/dist/web3.min.js'

const Web3Provider = () => {
    const [account, setAccount] = useState(null)
    const [web3, setWeb3] = useState(null)

    const addNetwork = async chainId => {
        const metaGanacheNetwork = {
            chainId,
            chainName: 'IngGanache',
            rpcUrls: ['http://127.0.0.1:8545'],
            nativeCurrency: {
                name: 'ganache',
                decimals: 18,
                symbol: 'ETH',
            },
        }

        await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [metaGanacheNetwork],
        })
    }

    const changeNetwork = async chainId => {
        addNetwork(chainId)
        await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [
                {
                    chainId,
                },
            ],
        })
    }

    useEffect(() => {
        const init = async () => {
            if (window.ethereum) {
                try {
                    // console.log(Web3.utils.toHex('7722'))
                    const targetChainId = '0x1e2a'
                    const chainId = await window.ethereum.request({ method: 'eth_chainId' })
                    if (chainId !== targetChainId) changeNetwork(targetChainId)

                    const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' })
                    const web3 = new Web3(window.ethereum)

                    setAccount(account)
                    setWeb3(web3)
                } catch (e) {
                    if (e.code === 4001) {
                        console.log(e.message)
                    } else if (e.code === 32002) {
                        console.log(e.message)
                    }
                    if (e instanceof Error) {
                        console.error(e.message)
                    }
                }
            }
        }

        init()
    }, [])

    return [account, web3]
}

export default Web3Provider
