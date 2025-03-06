import CardBack from "../assets/CardBack.jpg"
import Portfolio from "../assets/Portfolio.png"
import CodingCompetition from "../assets/CodingCompetition.png"
import {Link} from "react-router-dom"


export const Cards = () => {
  return (
    <div>
      <div className="cards-parent">
        <div className="card-back h-[90vh] w-[100%]" style={{backgroundImage: `url(${CardBack})`,backgroundPosition:`center`,backgroundSize:`cover`}}>
          <h1 className="text-3xl text-center font-bold py-15">Unlocking Cosmic Potential</h1>
          <div className="cards flex gap-24 justify-center ">
            <div className="card">
              <Link to=""><div className="h-72 shadow-2xl transform transition-transform duration-300 hover:scale-110 shadow-purple-600 w-60 rounded-2xl bg-amber-50" style={{backgroundImage: `url(${CodingCompetition})`,backgroundSize:`cover`,boxShadow: `rgb(249 174 240 / 96%) 0px 0px 15px 15px`}}></div></Link>
            </div>
            <div className="card">
              <Link to=""><div className="h-72 w-60 rounded-2xl transform transition-transform duration-300 hover:scale-110 bg-amber-50" style={{backgroundImage: `url(${Portfolio})`,backgroundSize:`cover`,boxShadow:`rgb(249 174 240 / 96%) 0px 0px 15px 15px`}}></div></Link>
            </div>
            <div className="card">
              <Link to=""><div className="h-72 shadow-2xl transform transition-transform duration-300 hover:scale-110 shadow-purple-600 w-60 rounded-2xl bg-amber-50" style={{backgroundImage: `url(${CodingCompetition})`,backgroundSize:`cover`,boxShadow:`rgb(249 174 240 / 96%) 0px 0px 15px 15px`}}></div></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
