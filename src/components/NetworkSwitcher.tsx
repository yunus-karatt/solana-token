import { FC } from 'react'
import dynamic from 'next/dynamic'
import { useNetworkConfiguration } from '../contexts/NetworkConfigurationProvider'
import NetworkSwitcherSvg from './SVG/NetworkSwitcherSVG'


const NetworkSwitcher: FC = () => {
  const { networkConfiguration, setNetworkConfiguration } = useNetworkConfiguration()
  return (
    <>
      <input type="checkbox" name="" id="checkbox" />
      <label htmlFor="" className='switch'>
        <select value={networkConfiguration} onChange={(e) => setNetworkConfiguration(e.target.value || "devnet")} name="" id="" className='select max-w-xs border-none bg-transparent outline-0'>
          <option value="mainnet-beta">main</option>
          <option value="devnet">dev</option>
          <option value="testnet">test</option>
        </select>
      </label>
    </>
  )
}

export default dynamic(() => Promise.resolve(NetworkSwitcher), { ssr: false })