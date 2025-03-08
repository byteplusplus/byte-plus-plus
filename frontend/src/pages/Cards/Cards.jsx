import "../Cards/Cards.css";
import AIWomen from "../../assets/AIwomen.png";
import CodingEvent from "../../assets/CodingEvent.png";
import HandShake from "../../assets/Handshake.png";
import Progress from "../../assets/progress.png";

import {useState} from "react";

export const Cards = () => {

  const [backImg,setBackImg] = useState(AIWomen);

  return (
    <div>
      <div className="parent-card relative flex flex-col justify-end  h-[100vh]" style={{
        backgroundImage : `url(${backImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 1s ease-in-out"
      }}>
        <div className="overlay absolute bottom-0 left-0 w-full h-[100%] pointer-events-none"></div>

        <div className="below-div mx-20 mt-10 z-10">

          <div className="card-content w-[100%] flex items-center gap-16">
            <div className="left-card w-[50%]">
              <h1 className="text-5xl font-bold">Projects</h1>
              <p className="text-lg my-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque voluptas aliquid aperiam, ducimus cupiditate temporibus. Sed ex, consectetur ducimus ipsam incidunt ab consequuntur quasi vitae molestiae provident dignissimos.</p>
              <button className="bg-green-600">Explore Now</button>
            </div>
            <div className="right-card w-[50%] overflow-hidden">
              <div className="cards-options flex gap-5 overflow-x-scroll scrollbar-hide">
                <div onClick={()=>{setBackImg(AIWomen)}} className="card rounded-2xl flex-shrink-0" style={{
                  backgroundImage:`url(${AIWomen})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                  }}></div>
                <div onClick={()=>{setBackImg(CodingEvent)}} className="card rounded-2xl flex-shrink-0" style={{
                  backgroundImage:`url(${CodingEvent})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                  }}></div>
                <div onClick={()=>{setBackImg(HandShake)}} className="card rounded-2xl flex-shrink-0" style={{
                  backgroundImage:`url(${HandShake})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}></div>
                <div onClick={()=>{setBackImg(Progress)}} className="card rounded-2xl flex-shrink-0" style={{
                  backgroundImage:`url(${Progress})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}></div>
              </div>
            </div>
          </div>
          <div className="dots flex gap-2 justify-center my-7">
            <div className="rounded-full h-3 w-3 bg-white"></div>
            <div className="rounded-full h-3 w-3 bg-white"></div>
            <div className="rounded-full h-3 w-3 bg-white"></div>
            <div className="rounded-full h-3 w-3 bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
