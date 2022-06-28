import { useEffect, useState } from 'react'
import Web3Provider from './providers/web3.hook'

function App() {
    const [account, web3] = Web3Provider()
    const [balance, setBalance] = useState(null)

    const handleChange = async e => {
        console.log(e.target)
        e.preventDefault()

        try {
            const tx = await web3.eth.sendTransaction({
                from: account,
                to: e.target.received.value,
                value: web3.utils.toWei('1', 'ether'),
            })

            console.log(tx)
        } catch (e) {
            console.log(e.message)
        }
    }

    useEffect(() => {
        const init = async () => {
            const balance = await web3?.eth.getBalance(account)
            setBalance(balance / 10 ** 18)
        }

        init()
    })
    if (!account) return '로그인후 이용해주세요.'
    return (
        <div>
            <p>{account} 님 환영합니다.</p>
            <span>Balance : {balance} ETH</span>

            <form onSubmit={handleChange}>
                <input type="text" id="received" />
                <button type="submit">전송</button>
            </form>
        </div>
    )
}

export default App
