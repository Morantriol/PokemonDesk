import { navigate } from 'hookrouter';
import React from 'react';
import { LinkEnum } from '../../routes';
import Button from '../../components/Button';
import s from './404.module.scss';

import TeamRocket from './assets/teamRocket.png';

const NotFoundPage = () => {
  return (
    <div className={s.root}>
      <div className={s.wrap}>
        <div className={s.text}>404</div>
        <div className={s.layer}>
          <img src={TeamRocket} alt="Team Rocket" />
          <div className={s.subTitle}>
            <span>The rocket team</span> has won this time.
          </div>
          <Button size="medium" color="#F2CB07" onClick={() => navigate(LinkEnum.HOME)}>
            Return
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
