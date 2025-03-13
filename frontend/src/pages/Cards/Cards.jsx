import "../Cards/Cards.css";
import AIWomen from "../../assets/AIwomen.png";
import CodingEvent from "../../assets/CodingEvent.png";
import HandShake from "../../assets/Handshake.png";
import Progress from "../../assets/progress.png";

import { useState } from "react";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export const Cards = () => {
  const cardDetails = [
    {
      image: AIWomen,
      heading: "Project",
      dotno: 1,
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque voluptas aliquid aperiam, ducimus cupiditate temporibus. Sed ex, consectetur ducimus ipsam incidunt ab consequuntur quasi vitae molestiae provident dignissimos.",
    },
    {
      image: CodingEvent,
      heading: "Coding Hackathon",
      dotno: 2,
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque voluptas aliquid aperiam, ducimus cupiditate temporibus. Sed ex, consectetur ducimus ipsam incidunt ab consequuntur quasi vitae molestiae provident dignissimos.",
    },
    {
      image: HandShake,
      heading: "Networking Event",
      dotno: 3,
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque voluptas aliquid aperiam, ducimus cupiditate temporibus. Sed ex, consectetur ducimus ipsam incidunt ab consequuntur quasi vitae molestiae provident dignissimos.",
    },
    {
      image: Progress,
      heading: "Growth & Progress",
      dotno: 4,
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque voluptas aliquid aperiam, ducimus cupiditate temporibus. Sed ex, consectetur ducimus ipsam incidunt ab consequuntur quasi vitae molestiae provident dignissimos.",
    },
  ];

  const [backImg, setBackImg] = useState(AIWomen);
  const [cardHeaduing, setCardHeading] = useState("Project");
  const [cardDescription, setCardDescription] = useState(
    cardDetails[0].description
  );
  const [dotHighlight, setDotHighlight] = useState(1);

  useEffect(() => {
    gsap.fromTo(
      "#card-heading, #card-paragraph,#card-button",
      { y: "100%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      }
    );
  }, [cardHeaduing, cardDescription]);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cards = gsap.utils.toArray(".card");

    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0.5, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          scrollTrigger: {
            trigger: card,
            scroller: ".cards-options",
            start: "left 30%", // When the left(card ka left) of the card reaches center(viewpoint/card-option ka center)
            end: "right centre", // When the right(card ka left) of the card reaches center(viewpoint/card-option ka center)
            scrub: true,
            // markers: true,
            horizontal: true,
            onEnter: () => {
              if (i != 0) {
                setBackImg(cardDetails[i].image);
                setCardHeading(cardDetails[i].heading);
                setCardDescription(cardDetails[i].description);
                setDotHighlight(cardDetails[i].dotno);
              }
            },
            onEnterBack: () => {
              setBackImg(cardDetails[i].image);
              setCardHeading(cardDetails[i].heading);
              setCardDescription(cardDetails[i].description);
              setDotHighlight(cardDetails[i].dotno);
            },
          },
        }
      );
    });
  });

  return (
    <div>
      <div
        className="parent-card relative flex flex-col justify-end  h-[100vh]"
        style={{
          backgroundImage: `url(${backImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 0.5s ease-in-out",
        }}
      >
        <div className="overlay absolute bottom-0 left-0 w-full h-[100%] pointer-events-none"></div>

        <div className="below-div mx-20 mt-10 z-10">
          <div className="card-content w-[100%] flex items-center gap-16">
            <div className="left-card w-[50%]">
              <h1 id="card-heading" className="text-5xl font-bold" style={{}}>
                {cardHeaduing}
              </h1>
              <p id="card-paragraph" className="text-lg my-5">
                {cardDescription}
              </p>
              <button id="card-button" className="bg-green-600">
                Explore Now
              </button>
            </div>
            <div className="right-card w-[50%] overflow-hidden">
              <div className="cards-options flex gap-5 overflow-x-scroll scrollbar-hide">
                <div
                  id="box1"
                  onClick={() => {
                    setBackImg(AIWomen);
                    setCardHeading(cardDetails[0].heading);
                    setCardDescription(cardDetails[0].description);
                  }}
                  className="card rounded-2xl flex-shrink-0 border-[3px] border-white"
                  style={{
                    backgroundImage: `url(${AIWomen})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <div
                  id="box2"
                  onClick={() => {
                    setBackImg(CodingEvent);
                    setCardHeading(cardDetails[1].heading);
                    setCardDescription(cardDetails[1].description);
                  }}
                  className="card rounded-2xl flex-shrink-0 border-[3px] border-white"
                  style={{
                    backgroundImage: `url(${CodingEvent})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <div
                  onClick={() => {
                    setBackImg(HandShake);
                    setCardHeading(cardDetails[2].heading);
                    setCardDescription(cardDetails[2].description);
                  }}
                  className="card rounded-2xl flex-shrink-0 border-[3px] border-white"
                  style={{
                    backgroundImage: `url(${HandShake})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <div
                  onClick={() => {
                    setBackImg(Progress);
                    setCardHeading(cardDetails[3].heading);
                    setCardDescription(cardDetails[3].description);
                  }}
                  className="card rounded-2xl flex-shrink-0 border-[3px] border-white"
                  style={{
                    backgroundImage: `url(${Progress})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <div
                  className="card rounded-2xl flex-shrink-0"
                  style={{
                    opacity: 0,
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div className="dots flex gap-2 justify-center my-7">
            <div
              className={`rounded-full h-3 w-3 ${
                dotHighlight === 1 ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
            <div
              className={`rounded-full h-3 w-3 ${
                dotHighlight === 2 ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
            <div
              className={`rounded-full h-3 w-3 ${
                dotHighlight === 3 ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
            <div
              className={`rounded-full h-3 w-3 ${
                dotHighlight === 4 ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};
