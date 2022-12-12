import React from 'react';
import { useRouter } from 'next/router';
import { HeaderS, Ul, H2, LiS } from '../styles/headerstyle';

interface propsi {
  current: number;
}

export default function Header({ current }: propsi) {
  const router = useRouter();
  return (
    <HeaderS>
      <H2>Lacrei</H2>
      <nav>
        <Ul>
          <LiS currentPage={current === 1} onClick={() => router.push('../')}>
            Home
          </LiS>
          <LiS
            currentPage={current === 2}
            onClick={() => router.push('../user')}
          >
            Pessoa Usuária
          </LiS>
          <LiS
            currentPage={current === 3}
            onClick={() => router.push('./profissionais')}
          >
            Profissional
          </LiS>
        </Ul>
      </nav>
    </HeaderS>
  );
}
