import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'
import './styles/_colors.css'
import './App.css'

import { WagmiConfig } from 'wagmi'
import Layout from "@/components/common/Layout"

import HyperLogo from '@/assets/tokens/hyperlight.svg'
import HyperLogoDark from '@/assets/tokens/hyperdark.svg'
import ETHLogo from '@/assets/tokens/ether.svg'
import { defineChain } from 'viem'
import { holesky } from 'viem/chains'

const projectId = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID

const hyperEvm = defineChain({
  id: 999,
  name: 'HyperEVM',
  network: 'hyperEvm',
  nativeCurrency: {
    decimals: 18,
    name: 'Hyperliquid',
    symbol: 'HYPE',
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.hyperliquid.xyz/evm'],
    },
    public: {
      http: ['https://rpc.hyperliquid.xyz/evm'],
    },
  },
  contracts: {
    multicall3: {
      address: '0xca11bde05977b3631167028862be2a173976ca11',
      blockCreated: 77,
    },
  },
})

const hyperEvmTestnet = defineChain({
  id: 998,
  name: 'HyperEVM Testnet',
  network: 'hyperEvmTestnet',
  nativeCurrency: {
    decimals: 18,
    name: 'Hyperliquid',
    symbol: 'HYPE',
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.hyperliquid-testnet.xyz/evm'],
    },
    public: {
      http: ['https://rpc.hyperliquid-testnet.xyz/evm'],
    },
  },
  contracts: {
    multicall3: {
      address: '0xca11bde05977b3631167028862be2a173976ca11',
      blockCreated: 77,
    },
  },
  testnet: true,
})

const holeskyCustom = defineChain({
  ...holesky,
  rpcUrls: {
    default: {
      http: ['https://ethereum-holesky-rpc.publicnode.com'],
    },
    public: {
      http: ['https://ethereum-holesky-rpc.publicnode.com'],
    },
  },
})

const chains = [holeskyCustom, hyperEvm, hyperEvmTestnet]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata: { name: 'Algebra Integral', description: 'DEX Engine', url: 'https://integral.algebra.finance', icons: [''] } })

createWeb3Modal({ 
  wagmiConfig, 
  projectId, 
  chains,
  chainImages: {
    17000: ETHLogo,
    999: HyperLogo,
    998: HyperLogoDark,
  },
  defaultChain: hyperEvm,
  themeVariables: {
    '--w3m-accent': '#2797ff'
  }
})

function App({ children }: { children: React.ReactNode }) {

  return (
    <WagmiConfig config={wagmiConfig}>
        <Layout>
          {children}
        </Layout>
    </WagmiConfig>
  )
}

export default App
