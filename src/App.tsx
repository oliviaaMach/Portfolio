import './App.css'
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"
import Hero from "./components/sections/Hero"
import About from "./components/sections/About"
import Projects from "./components/sections/Projects"
// import Lia from "./components/sections/Lia"
import Contact from "./components/sections/Contact"

export default function App() {


  return (
    <>
      <Header />
      <main>
         <Hero />
        <About variant="secondary-bg"/>
        <Projects variant="primary-bg"/>
        {/* <Lia /> */}
        <Contact variant="secondary-bg"/>
      </main>
      <Footer />
    </>
  )
}