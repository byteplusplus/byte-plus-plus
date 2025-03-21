import nebula from "../assets/Nebula.webp"
import { Cards } from "../components/Cards/Cards.jsx"


const Home = () => {
    
  return (
    <>
      <main className=" min-h-screen relative text-center p-16 bg-cover bg-center" style={{ backgroundImage: `url(${nebula})`}}>
        <h1 className="text-4xl font-bold">Welcome to Byte++</h1>
        <p className="text-lg mt-2">The coding society that shapes the future of tech enthusiasts!</p>
      </main>
      <Cards/>
      
    </>
  )
}

export default Home