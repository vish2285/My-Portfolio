import Header from "./components/Header"
import Experience from "./components/Experience"
import Project from "./components/Project"
import Footer from "./components/Footer"
import StarAnimation from "./components/StarAnimation"

function App() {

  return (
    <>
      <div className=" text-white min-h-screen w-full flex flex-col gap-16 bg-repeat-x"style={{ backgroundImage: "url('/img/CTA.png')", backgroundSize: "cover", backgroundPosition: "center center", backgroundRepeat: "repeat" }}>
        <Header/>
        <Experience/>
        <Project/>
        <StarAnimation/>
        <Footer/>
      </div>
    </>
  )
}

export default App
