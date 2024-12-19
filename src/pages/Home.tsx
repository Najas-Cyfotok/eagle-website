import ProductsSection from "@/sections/Home/ProductsSection"
import HeroAbout from "../sections/Home/HeroAbout"
import HeroSection from "../sections/Home/HeroSection"
import ObjectiveSection from "@/sections/Home/ObjectiveSection"
import DiscoverSection from "@/sections/Home/DiscoverSection"

const Home = () => {
  return (
    <main>
        <HeroSection/>
        <HeroAbout/>
        <ProductsSection/>
        <ObjectiveSection/>
        <DiscoverSection/>
    </main>
  )
}

export default Home