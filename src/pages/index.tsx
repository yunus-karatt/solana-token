import React, { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import {
  AirdropView,
  ContactView,
  CreateView,
  DonateView,
  FaqView,
  FeatureView,
  HomeView,
  InputView,
  OfferView,
  TokenMetadata,
  ToolView,
} from "../views";

const Home: NextPage = (props) => {
  // state variable
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [openTokenMetadata, setOpenTokenMetadata] = useState(false);
  const [openContact, setOpenContact] = useState(false);
  const [openDonate, setOpenDonate] = useState(false);
  const [openAirdrop, setOpenAirdrop] = useState(false);
  const [openSendTransaction, setOpenSendTransaction] = useState(false);

  return (
    <>
      <Head>
        <title>Solana Token Creator</title>
        <meta
          name="solana token creator"
          content="Build and create solan token"
        />
      </Head>
      <HomeView setOpenCreateModal={setOpenCreateModal} />
      <ToolView
        setOpenCreateModal={setOpenCreateModal}
        setOpenTokenMetadata={setOpenTokenMetadata}
        setOpenContact={setOpenContact}
        setOpenAirdrop={setOpenAirdrop}
        setOpenSendTransaction={setOpenSendTransaction}
      />
      <FeatureView
        setOpenCreateModal={setOpenCreateModal}
        setOpenTokenMetadata={setOpenTokenMetadata}
        setOpenContact={setOpenContact}
        setOpenAirdrop={setOpenAirdrop}
        setOpenSendTransaction={setOpenSendTransaction}
      />
      <OfferView />
      <FaqView />

      {/* dynamic companant */}
      {
        openCreateModal &&
        <div className="new_loader relative h-full bg-slate-900">
          <CreateView setOpenCreateModal={setOpenCreateModal} />
        </div>
      }
      {/*  {
        openTokenMetadata &&
        <div className="new_loader relative h-full bg-slate-900">
          <TokenMetadata setOpenTokenMetadata={setOpenTokenMetadata} />
        </div>
      }
      {
        openContact &&
        <div className="new_loader relative h-full bg-slate-900">
          <ContactView setOpenContact={setOpenContact} />
        </div>
      }
      {
        openAirdrop &&
        <div className="new_loader relative h-full bg-slate-900">
          <AirdropView setOpenAirdrop={setOpenAirdrop} />
        </div>
      }
      {
        openSendTransaction &&
        <div className="new_loader relative h-full bg-slate-900">
          <DonateView setOpenSendTransaction={setOpenSendTransaction} />
        </div>
      } */}
    </>
  );
};

export default Home;
