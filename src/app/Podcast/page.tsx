import PodcastAbout from "@/components/podcast/PodcastAbout";
import PodcastHero from "@/components/podcast/PodcastHero";
import PodcastPlatforms from "@/components/podcast/PodcastPlatforms";
import PodcastTopics from "@/components/podcast/PodcastTopics";


export default function Podcast() {
  // const episodes = [
  //   {
  //     id: 1,
  //     title: "Ansiedad en tiempos de incertidumbre",
  //     description:
  //       "En este episodio hablamos sobre cómo manejar la ansiedad en momentos de cambio e incertidumbre, con herramientas prácticas para aplicar en tu día a día.",
  //     date: "15 de Mayo, 2023",
  //     duration: "45 minutos",
  //     image: "/placeholder.svg?height=200&width=200",
  //   },
  //   {
  //     id: 2,
  //     title: "El poder de la vulnerabilidad",
  //     description:
  //       "Exploramos cómo abrazar nuestra vulnerabilidad puede ser una fuente de fortaleza y conexión genuina con los demás.",
  //     date: "1 de Mayo, 2023",
  //     duration: "38 minutos",
  //     image: "/placeholder.svg?height=200&width=200",
  //   },
  //   {
  //     id: 3,
  //     title: "Estableciendo límites saludables",
  //     description:
  //       "Aprende a establecer límites claros en tus relaciones personales y profesionales para proteger tu bienestar emocional.",
  //     date: "15 de Abril, 2023",
  //     duration: "42 minutos",
  //     image: "/placeholder.svg?height=200&width=200",
  //   },
  //   {
  //     id: 4,
  //     title: "Superando el perfeccionismo",
  //     description:
  //       "Estrategias para liberarte de las exigencias del perfeccionismo y encontrar un equilibrio más saludable en tu vida.",
  //     date: "1 de Abril, 2023",
  //     duration: "40 minutos",
  //     image: "/placeholder.svg?height=200&width=200",
  //   },
  //   {
  //     id: 5,
  //     title: "Mindfulness para principiantes",
  //     description:
  //       "Una introducción práctica al mindfulness y cómo incorporarlo en tu rutina diaria para reducir el estrés y aumentar tu bienestar.",
  //     date: "15 de Marzo, 2023",
  //     duration: "35 minutos",
  //     image: "/placeholder.svg?height=200&width=200",
  //   },
  //   {
  //     id: 6,
  //     title: "Comunicación en pareja",
  //     description:
  //       "Herramientas para mejorar la comunicación con tu pareja y construir una relación más sólida y satisfactoria.",
  //     date: "1 de Marzo, 2023",
  //     duration: "47 minutos",
  //     image: "/placeholder.svg?height=200&width=200",
  //   },
  // ]

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <PodcastHero/>
      <PodcastAbout/>
      <PodcastTopics/>
      <PodcastPlatforms/>
    </div>
  )
}
