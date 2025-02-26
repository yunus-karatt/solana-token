import React, { FC } from 'react'
import { MdGeneratingTokens } from 'react-icons/md'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { LuArrowRightFromLine } from 'react-icons/lu'

export const ToolView: FC = ({
  setOpenCreateModal,
  setOpenTokenMetadata,
  setOpenContact,
  setOpenAirdrop,
  setOpenSendTransaction,
}) => {
  const tools=[
    {
      name:"Create Token",
      icon:<MdGeneratingTokens/>,
      function:setOpenCreateModal,
    },
    {
      name:"Token Metadata",
      icon:<MdGeneratingTokens/>,
      function:setOpenTokenMetadata,
    },
    {
      name:"Contact Us",
      icon:<MdGeneratingTokens/>,
      function:setOpenContact,
    },
    {
      name:"Airdrop",
      icon:<MdGeneratingTokens/>,
      function:setOpenAirdrop,
    },
    {
      name:"Send Transaction",
      icon:<MdGeneratingTokens/>,
      function:setOpenSendTransaction,
    },
    {
      name:"Buddy Token",
      icon:<MdGeneratingTokens/>,
      function:setOpenSendTransaction,
    },
    {
      name:"Top Token",
      icon:<MdGeneratingTokens/>,
      function:setOpenSendTransaction,
    },
    {
      name:"Solana Explore",
      icon:<MdGeneratingTokens/>,
      function:setOpenSendTransaction,
    },
  ]
  return (
    <section id="tools" className='py-20' >
      <div className="container">
        <div className="mb-10 flex items-end justify-between">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-4 text-3xl font-medium capitalize text-white">
                Solana Powerfull Tools
              </h2>
            </div>
        </div>
      </div>
    </section>
  )
}

