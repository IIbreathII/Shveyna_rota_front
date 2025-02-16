"use client";

import '$style/infoPage/Popup.css'
import dynamic from "next/dynamic";
const MapBlockEn = dynamic(() => import('$component/en/MapBlockEn/MapBlockEn'), { ssr: false });
import MediaBlock from "$component/info/MediaBlock/MediaBlock";
import InfoBlockEn from "$component/en/InfoBlockEn/InfoBlockEn";
import CardBlockEn from '$component/en/CardBlockEn/CardBlockEn';
import ConBlockEn from '$component/en/ConBlockEn/ConBlockEn';
import PartnersBlockEn from '$component/en/PartnersBlockEn/PartnersBlockEn';

export default function InfoPage() {

  const anitmationLeft = {
    hidden: {
      x: -40,
      opacity: 0,
    },
    visible: custom => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  }

  const anitmationRight = {
    hidden: {
      x: 40,
      opacity: 0,
    },
    visible: custom => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  }

  return (
    <main className='main'>
      <InfoBlockEn />
      <div className="order">
        <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLScwlcFX3jqmOrJ3oXMrcNJJS3-LgfYy5fjMlXSlSmpU6HaLaw/viewform" className="order__link">Order adaptive clothing</a>
      </div>
      <CardBlockEn />
      <ConBlockEn />
      <PartnersBlockEn />
      <MediaBlock />
      <MapBlockEn />
    </main>
  );
}