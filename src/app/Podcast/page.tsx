import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Play, AirplayIcon as Spotify, Headphones } from "lucide-react"
import Image from "next/image"

export default function Podcast() {
  const episodes = [
    {
      id: 1,
      title: "Ansiedad en tiempos de incertidumbre",
      description:
        "En este episodio hablamos sobre cómo manejar la ansiedad en momentos de cambio e incertidumbre, con herramientas prácticas para aplicar en tu día a día.",
      date: "15 de Mayo, 2023",
      duration: "45 minutos",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 2,
      title: "El poder de la vulnerabilidad",
      description:
        "Exploramos cómo abrazar nuestra vulnerabilidad puede ser una fuente de fortaleza y conexión genuina con los demás.",
      date: "1 de Mayo, 2023",
      duration: "38 minutos",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 3,
      title: "Estableciendo límites saludables",
      description:
        "Aprende a establecer límites claros en tus relaciones personales y profesionales para proteger tu bienestar emocional.",
      date: "15 de Abril, 2023",
      duration: "42 minutos",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 4,
      title: "Superando el perfeccionismo",
      description:
        "Estrategias para liberarte de las exigencias del perfeccionismo y encontrar un equilibrio más saludable en tu vida.",
      date: "1 de Abril, 2023",
      duration: "40 minutos",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 5,
      title: "Mindfulness para principiantes",
      description:
        "Una introducción práctica al mindfulness y cómo incorporarlo en tu rutina diaria para reducir el estrés y aumentar tu bienestar.",
      date: "15 de Marzo, 2023",
      duration: "35 minutos",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 6,
      title: "Comunicación en pareja",
      description:
        "Herramientas para mejorar la comunicación con tu pareja y construir una relación más sólida y satisfactoria.",
      date: "1 de Marzo, 2023",
      duration: "47 minutos",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <h1 className="text-4xl font-bold text-sage-700 mb-4 text-center">Podcast</h1>
      <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
        "Mente Plena" es un podcast donde exploramos temas de psicología, bienestar emocional y crecimiento personal
        para ayudarte a vivir una vida más consciente y satisfactoria.
      </p>

      <div className="bg-sage-50 rounded-lg p-8 shadow-md mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1">
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="Podcast Mente Plena"
              width={300}
              height={300}
              className="rounded-lg shadow-md mx-auto"
            />
          </div>
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold text-sage-700 mb-4">Último Episodio</h2>
            <h3 className="text-xl font-medium text-gray-800 mb-2">Ansiedad en tiempos de incertidumbre</h3>
            <p className="text-gray-700 mb-6">
              En este episodio hablamos sobre cómo manejar la ansiedad en momentos de cambio e incertidumbre, con
              herramientas prácticas para aplicar en tu día a día.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-sage-600 hover:bg-sage-700">
                <Play className="mr-2 h-4 w-4" /> Escuchar ahora
              </Button>
              <Button  className="border-sage-600 text-sage-600 hover:bg-sage-50">
                 {/* variant="outline" */}
                <Spotify className="mr-2 h-4 w-4" /> Spotify
              </Button>
              <Button  className="border-sage-600 text-sage-600 hover:bg-sage-50"> 
                {/* variant="outline" */}
                <Headphones className="mr-2 h-4 w-4" /> Apple Podcasts
              </Button>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-semibold text-sage-700 mb-8 text-center">Todos los Episodios</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {episodes.map((episode) => (
          <Card key={episode.id} className="bg-white shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <div className="w-full h-40 relative mb-4">
                <Image
                  src={episode.image || "/placeholder.svg"}
                  alt={episode.title}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <CardTitle className="text-sage-600 text-xl">{episode.title}</CardTitle>
              <CardDescription className="flex justify-between text-gray-600">
                <span>{episode.date}</span>
                <span>{episode.duration}</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">{episode.description}</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-sage-600 hover:bg-sage-700">
                <Play className="mr-2 h-4 w-4" /> Escuchar episodio
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="flex flex-col md:flex-row gap-6 justify-center items-center bg-white p-8 rounded-lg shadow-md">
        <div className="text-center md:text-left md:flex-1">
          <h2 className="text-2xl font-semibold text-sage-700 mb-2">Suscríbete a "Mente Plena"</h2>
          <p className="text-gray-700 mb-4">
            No te pierdas ningún episodio. Suscríbete en tu plataforma favorita y recibe notificaciones cuando publique
            nuevo contenido.
          </p>
        </div>
        <div className="flex gap-4">
          <Button  className="border-sage-600 text-sage-600 hover:bg-sage-50">
            {/* variant="outline" */}
            <Spotify className="mr-2 h-4 w-4" /> Spotify
          </Button>
          <Button  className="border-sage-600 text-sage-600 hover:bg-sage-50">
            {/* variant="outline" */}
            <Headphones className="mr-2 h-4 w-4" /> Apple Podcasts
          </Button>
        </div>
      </div>
    </div>
  )
}
