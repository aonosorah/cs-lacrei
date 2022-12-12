import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import facebook from '../Assets/facebook.png';
import instagram from '../Assets/instagram.png';
import linkedin from '../Assets/linkedin.png';
import {
  FooterS,
  Ul,
  Li,
  UlImg,
  LiImg,
  Section,
  Nav,
  Span,
} from '../styles/footerstyle';

interface propsi {
  current: number;
}

export default function Footer({ current }: propsi) {
  const router = useRouter();
  return (
    <FooterS>
      <Nav>
        <Ul>
          <Li currentPage={current === 1} onClick={() => router.push('../')}>
            Home
          </Li>
          <Li
            currentPage={current === 2}
            onClick={() => router.push('../user')}
          >
            Pessoa Usuária
          </Li>
          <Li
            currentPage={current === 3}
            onClick={() => router.push('./profissionais')}
          >
            Profissional
          </Li>
        </Ul>
      </Nav>
      <Section>
        <UlImg>
          <LiImg>
            <a target="_blank" href="https://facebook.com/lacrei.saude">
              <Image
                width={24}
                height={24}
                src={facebook}
                alt="icone facebook"
              />
            </a>
          </LiImg>
          <LiImg>
            <a target="_blank" href="https://www.instagram.com/lacrei.saude/">
              <Image
                width={24}
                height={24}
                src={instagram}
                alt="incone instagram"
              />
            </a>
          </LiImg>
          <LiImg>
            <a target="_blank" href="https://www.linkedin.com/company/lacrei/">
              <Image
                width={24}
                height={24}
                src={linkedin}
                alt="icone linkedin"
              />
            </a>
          </LiImg>
        </UlImg>
      </Section>
      <Span>Desafio Front-end Lacrei</Span>
    </FooterS>
  );
}
