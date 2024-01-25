import React from 'react';
import Card from './Card';
import Focus from '../assets/focus.png';
import Ease from '../assets/ease.png';
import EaseMore from '../assets/easemore.png';
import Upgrade from '../assets/upgrade.png';
import Encourage from '../assets/encourage.png';

function PhysioBenefits() {
  return (
    <div>
        <Card postion="lg:right-10" img={Focus} title={"Focus"} />
        <Card postion="lg:left-10" img={Ease} title={"Ease"} />
        <Card postion="lg:right-10" img={EaseMore} title={"Ease More"} />
        <Card postion="lg:left-10" img={Upgrade} title={"Upgrade"} button={true} />
        <Card postion="lg:right-10" img={Encourage} title={"Encourage"} />
    </div>
  )
}

export default PhysioBenefits