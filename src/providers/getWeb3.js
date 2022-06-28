import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from 'ethers'

function getLibrary(provider) {
    const library = new Web3Provider(provider)
    library.pollingInterval = 12000
    return library
}

function WebProvider({ Component, pageProps }) {
    return (
        <Web3ReactProvider getLibrary={getLibrary}>
            <Component {...pageProps} />
        </Web3ReactProvider>
    )
}

export default WebProvider
