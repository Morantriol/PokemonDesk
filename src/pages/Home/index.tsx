import { navigate } from 'hookrouter';
import React from 'react';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Heading from '../../components/Heading';
import Layout from '../../components/Layout';
import Parallax from '../../components/Parallax';
import { LinkEnum } from '../../routes';

import s from './Home.module.scss';

const HomePage = () => {
  return (
    <div className={s.root}>
      <Header />
      <Layout className={s.contentWrap}>
        <div className={s.contentText}>
          <Heading headerRender="1">
            <b>Find</b> all your favorite <b>Pokemon</b>
          </Heading>
          <Heading headerRender="3">
            You can know the type of Pokemon, its strengths, disadvantages and abilities
          </Heading>
          <Button
            // eslint-disable-next-line no-console
            onClick={() => navigate(LinkEnum.POKEDEX)}
            color="#73D677"
            size="medium">
            See pokemons
          </Button>
        </div>
        <div className={s.contentParallax}>
          <Parallax />
        </div>
      </Layout>
    </div>
  );
};

export default HomePage;
