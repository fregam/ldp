import { Experiencia } from '@/components/layout/Experiencia'
import Hero from '@/components/layout/Hero'
import Newsletter from '@/components/layout/Newsletter'
import { Proyectos } from '@/components/layout/Proyectos'
import { SobreMi } from '@/components/layout/SobreMi'
// import Newsletter from '@/components/layout/Newsletter'

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      {/* <Newsletter/> */}
      <SobreMi />
      <Proyectos/>
      <Experiencia/>
      
    </div>
  )
}