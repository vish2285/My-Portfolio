import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
import StarAnimation from "./components/StarAnimation"

function App() {

  return (
    <>
      <div className=" text-white min-h-screen w-full flex flex-col gap-16 bg-repeat-x"style={{ backgroundImage: "url('/img/CTA.png')", backgroundSize: "cover", backgroundPosition: "center center", backgroundRepeat: "repeat" }}>
        <Header/>
        <Body/>
        <StarAnimation/>
        <Footer/>
      </div>
    </>
  )
}

export default App
