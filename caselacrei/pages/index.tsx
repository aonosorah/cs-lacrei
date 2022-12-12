import Head from 'next/head';
import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import HomeContent from '../components/homecontent';

export default function Home() {
  return (
    <>
      <Head>
        <title>Case Front-End Lacrei</title>
      </Head>
      <div>
        <Header current={1} />
        <HomeContent />
        <Footer current={1} />
      </div>
    </>
  );
}
