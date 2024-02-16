import React from 'react';
import Card from './Card';
import Focus from '../assets/focus.png';
import Ease from '../assets/ease.png';
import EaseMore from '../assets/easemore.png';
import Upgrade from '../assets/upgrade.png';
import Encourage from '../assets/encourage.png';
import testing from '../assets/tom.png';

function PhysioBenefits() {
  return (
    <div>
        <Card position="bottom-[6%] sq:bottom-[6%] ll:bottom-0 sl:bottom-0 ll:right-[6%] sl:right-[6%] sq:right-0" img={testing} title={"Focus"} />
        <Card position="bottom-[6%] sq:bottom-[6%] ll:bottom-0 sl:bottom-0 ll:left-[6%] sl:left-[6%] sq:right-0" img={Ease} title={"Ease"} />
        <Card position="bottom-[6%] sq:bottom-[6%] ll:bottom-0 sl:bottom-0 ll:right-[6%] sl:right-[6%] sq:right-0" img={EaseMore} title={"Ease More"} />
        <Card position="bottom-[6%] sq:bottom-[6%] ll:bottom-0 sl:bottom-0 ll:left-[6%] sl:left-[6%] sq:right-0" img={Upgrade} title={"Upgrade"} button={true} />
        <Card position="bottom-[6%] sq:bottom-[6%] ll:bottom-0 sl:bottom-0 ll:right-[6%] sl:right-[6%] sq:right-0" img={Encourage} title={"Encourage"} />
    </div>
  )
}

export default PhysioBenefits