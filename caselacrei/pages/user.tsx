import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import userimg from '../Assets/user.png';
import { Main, H1, Text } from '../styles/userstyle';

export default function User() {
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
        <Header current={2} />
        <Main>
          <section>
            <H1>Pessoa Usuária</H1>
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
              src={userimg}
              alt="Imagem de usuarios"
            />
          </section>
        </Main>
        <Footer current={2} />
      </div>
    </>
  );
}
