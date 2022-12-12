import React from 'react';
import Image from 'next/image';
import frontimg from '../Assets/front.png';
import { useRouter } from 'next/router';
import { Main, H1, Text, Div, Button1, Button2 } from '../styles/indexstyle';

export default function HomeContent() {
  const router = useRouter();
  return (
    <Main>
      <section>
        <H1> Boas vindas a Lacrei Saúde</H1>
        <Text>
          Uma plataforma segura e acolhedora para a comunidade LGBTQIAPN+
        </Text>
        <Div>
          <Button1 onClick={() => router.push('../user')}>
            Pessoa Usuária
          </Button1>
          <Button2 onClick={() => router.push('./profissionais')}>
            Profissional
          </Button2>
        </Div>
      </section>

      <section>
        <Image
          className="mobile"
          width={555}
          height={421}
          src={frontimg}
          alt="imagem profissional da saude"
        />
      </section>
    </Main>
  );
}
