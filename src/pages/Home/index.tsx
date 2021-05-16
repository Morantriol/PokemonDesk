import React from 'react';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import Parallax from '../../components/Parallax';

import s from './Home.module.scss';

const HomePage = () => {
  return (
    <div className={s.root}>
      <Header />
      <Layout className={s.contentWrap}>
        <div className={s.contentText}>
          <h1>
            <b>Find</b> all your favorite <b>Pokemon</b>
          </h1>
          <h3>You can know the type of Pokemon, its strengths, disadvantages and abilities</h3>
          <Button
            // eslint-disable-next-line no-console
            onClick={() => console.log('Click Button!')}
            width="231px"
            color="#73D677"
            height="66px"
            fontSize="23px">
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
