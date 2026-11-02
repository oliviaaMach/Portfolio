import { Header } from "./components/layout/Header"
import { Footer } from "./components/layout/Footer"
import { Hero } from "./components/sections/Hero"
import { StackStrip } from "./components/sections/Stackstrips"
import { About } from "./components/sections/About"
import { Projects } from "./components/sections/Projects"
import { Playground } from "./components/sections/Playground"
import { AskMe } from "./components/sections/AskMe"
import { Contact } from "./components/sections/Contact"
import { sections } from "./data/sections"

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StackStrip />
        <About />
        <Projects />

        <div id={sections.playground}>
          <div className="hidden md:block"><Playground /></div>
          <div className="md:hidden"><AskMe /></div>
        </div>
      <Contact />
      </main>
      <Footer />
    </>
  )
}
