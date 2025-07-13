import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection"
import Speacialist from "@/components/UI/HomePage/Speaciality/Speaciality"
import TopRatedDoctor from "@/components/UI/HomePage/TopRatedDoctor/TopRatedDoctors"
import WhyUs from "@/components/UI/HomePage/Whyus/WhyUs"

const HomePage=()=>{
  return(
    <>
    <HeroSection></HeroSection>
    <Speacialist></Speacialist>
    <TopRatedDoctor></TopRatedDoctor>
    <WhyUs></WhyUs>
    </>
    
  )
}
export default HomePage