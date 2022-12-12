import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import prof from '../Assets/profissional.png';
import { Main, H1, Text } from '../styles/profissionalstyle';

export default function Profissionais() {
  return (
    <>
      <Head>
        {/* <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap"
          rel="stylesheet"
        ></link> */}
      </Head>
      <div>
        <Header current={3} />
        <Main>
          <section>
            <H1>Profissional</H1>
            <Text>
              A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento
              realizado por profissionais de qualidade e que atendam às suas
              necessidades de forma segura e acolhedora.
            </Text>
          </section>
          <section>
            <Image
              className="mobile"
              width={555}
              height={421}
              src={prof}
              alt="Imagem de profissionais de saude"
            />
          </section>
        </Main>
        <Footer current={3} />
      </div>
    </>
  );
}
