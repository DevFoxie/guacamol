"use client";
import React, { useState } from "react";
import { title } from "@/components/primitives";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import Link from "next/link";

export default function MembersPage() {
  const [currentCard, setCurrentCard] = useState(0);
  const cards = [
    {
      name: "Foxie Ichinose",
      description: "FC Leader, Foxes lover & raider enthusiast",
      job: "Main Job: Reaper",
      imageSrc: "/images/members/foxie.png",
      link: "https://na.finalfantasyxiv.com/lodestone/character/32946724/",
    },
    {
      name: "Illizael Lamperouge",
      description: "Prophet of GuacaMol & Tank Chad",
      job: "Main Job: Gunbreaker",
      imageSrc: "/images/members/illi.png",
      link: "https://na.finalfantasyxiv.com/lodestone/character/29849764/",
    },
    {
      name: "Spring Ozor",
      description: "Right arm of the FC & Best Gil maker",
      job: "Main Job: White Mage",
      imageSrc: "/images/members/spring.png",
      link: "https://na.finalfantasyxiv.com/lodestone/character/46323280/",
    },
    {
      name: "King Pancake",
      description: "Always nude...",
      job: "Main Job: Red Mage",
      imageSrc: "/images/members/pancake.png",
      link: "https://na.finalfantasyxiv.com/lodestone/character/51150967/",
    },
    {
      name: "Aalyaah Maki",
      description: "Proud Sprout aka The Marauder",
      job: "Main Job: Monk",
      imageSrc: "/images/members/",
      link: "https://na.finalfantasyxiv.com/lodestone/character/52109777/",
    },
  ];

  const handlePrevCard = () => {
    setCurrentCard((prevCard) =>
      prevCard === 0 ? cards.length - 1 : prevCard - 1
    );
  };

  const handleNextCard = () => {
    setCurrentCard((prevCard) =>
      prevCard === cards.length - 1 ? 0 : prevCard + 1
    );
  };

  const { name, description, job, imageSrc, link } = cards[currentCard];

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              textAlign: "center",
              width: "100%",
              padding: "20px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          >
            <h1
              className={title()}
              style={{ fontSize: "3rem", marginBottom: "2rem" }}
            >
              Guaca&apos; Members
            </h1>
            <p style={{ fontSize: "1.5rem" }}>Welcome to the FC Member page!</p>
            <p style={{ fontSize: "1.2rem" }}>
              Here you can find all our brave Warriors of Light
            </p>
          </div>
        </div>
      </div>

      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            {name}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            {description}
          </CardItem>
          <CardItem
            translateZ="100"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            {job}
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src={imageSrc}
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            <Link href={link}>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
              See on Lodestone
              </CardItem>
            </Link>

            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              onClick={handlePrevCard}
            >
              <ChevronLeft />
            </CardItem>
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              onClick={handleNextCard}
            >
              <ChevronRight />
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </>
  );
}
