import React from 'react';
import Adidas from "../../public/images/sponsor/Adidas.svg"
import Bench from "../../public/images/sponsor/Bench.svg"
import Bonmarche from "../../public/images/sponsor/Bonmarché.svg"
import Canterbury from "../../public/images/sponsor/Canterbury.svg"
import Cartier from "../../public/images/sponsor/Cartier.svg"
import Crocs from "../../public/images/sponsor/Crocs.svg"
import Desigual from "../../public/images/sponsor/Desigual.svg"
import Hm from "../../public/images/sponsor/H&M.svg"
import Mango from "../../public/images/sponsor/Mango.svg"
import Mulberry from "../../public/images/sponsor/Mulberry.svg"
import NewBalance from "../../public/images/sponsor/NewBalance.svg"
import Nike from "../../public/images/sponsor/Nike.svg"
import Reebok from "../../public/images/sponsor/Reebok.svg"
import Salvatore from "../../public/images/sponsor/Salvatore.svg"
import Valentino from "../../public/images/sponsor/Valentino.svg"
import Image from 'next/image';
import Marquee from "react-fast-marquee";

const ourSponsors = [
  Adidas,
  Bench,
  Bonmarche,
  Canterbury,
  Cartier,
  Crocs,
  Desigual,
  Hm,
  Mango,
  Mulberry,
  NewBalance,
  Nike,
  Reebok,
  Salvatore,
  Valentino
];

const Sponsors = () => {
  return (
    <div className="w-full bg-[#FFD966]/90">
      <div className="w-5/6 mx-auto phone:py-5 lg:py-16">
        <h1 className="phone:text-2xl lg:text-5xl font-artik mb-8">Our Partners</h1>
        <div className="overflow-hidden">
        <Marquee
            className=""
          >
            {ourSponsors.map((sponsor, index) => (
              <div key={index} className="">
                <Image src={sponsor} alt={`Sponsor ${index}`} className='phone:h-12 phone:w-12 lg:h-24 lg:w-24'/>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
