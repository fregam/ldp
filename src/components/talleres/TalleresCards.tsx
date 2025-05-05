'use client'

import { Check, ToyBrick, Youtube } from "lucide-react"
import { Section } from "../ui/Section"
import { Card } from "../ui/Card"
import { Container } from "../ui/Container"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'


export default function TalleresCards() {
    const services = [
        {
            title: "Emocionalmente Fuerte",
            description: "Programa intensivo de bienestar emocional con contenidos semanales (audios, videos, ejercicios y materiales descargables). Diseñado para quienes desean construir herramientas internas para una vida emocional más equilibrada.",
            features: ['mindfulness', 'autocuidado', 'gestión emocional', 'hábitos', 'autocompasión', 'journaling', 'sueño',
                'pensamientos', 'resiliencia'
            ],
        },
        {
            title: "Explorando la Ansiedad",
            description: "Taller psicoeducativo para comprender la ansiedad desde sus bases psicológicas y fisiológicas, y aprender estrategias para disminuir su impacto cotidiano.",
            features: [
                'síntomas de ansiedad', 'disparadores', 'pensamientos automáticos', 'estrategias de regulación',
                'estilo de vida'
            ],
        },
        {
            title: "Navegando el Estrés",
            description: "Una mirada integral al estrés, sus efectos en el cuerpo y la mente, y formas saludables de afrontarlo.",
            features: [
                'neurobiología del estrés', 'afrontamiento activo', 'manejo del tiempo', 'pausas conscientes',
                'regulación emocional'
            ],
        },
        {
            title: "Calma Interior",
            description: "Taller práctico para reducir el estrés acumulado y reconectar con el presente a través de técnicas guiadas.",
            features: ["respiración consciente", "relajación corporal", "mindfulness", "conexión cuerpo-mente"],
        },
        {
            title: "Bienestar en la Profesión",
            description: "Dirigido a profesionales expuestos a alta carga emocional. Enfocado en prevenir el burnout, fomentar el autocuidado y fortalecer la resiliencia en el entorno laboral.",
            features: ["agotamiento", "límites saludables", "salud emocional", "resiliencia en el trabajo"],
        },
        {
            title: "Desafiando al Crítico Interno",
            description: "Un espacio para identificar y transformar el diálogo interno negativo, promoviendo una voz interior más compasiva y realista.",
            features: ["autocrítica", "autoaceptación", "autocompasión", "voz interior", "crecimiento personal"],
        },
        {
            title: "El Poder de la Mente",
            description: "Taller que aborda el vínculo entre emociones, mente y hábitos. Inicialmente diseñado para personas con sobrepeso, pero aplicable a diversos objetivos de bienestar.",
            features: ["gestión emocional", "motivación", "mentalidad de cambio", "hábitos saludables", "cuerpo y emociones"],
        },

        {
            title: "Abrazando la Autenticidad",
            description: "Un encuentro para mujeres profesionales, emprendedoras o en transición, enfocado en reconocer y superar el síndrome del impostor.",
            features: ["autoconfianza", "autenticidad", "inseguridad", "comparación", "síndrome del impostor"],
        },
        {
            title: "Transforma tu Vida",
            description: "Taller práctico que combina claves para tomar decisiones conscientes y generar cambios sostenibles.",
            features: ["hábitos", "toma de decisiones", "propósito", "autocuidado", "dirección vital"],
        },
        {
            title: "Prevención del Consumo de Alcohol en Menores",
            description: "Taller con dos versiones: una para adolescentes y otra para madres, padres o personas cuidadoras. Brinda herramientas para la toma de decisiones, la prevención y la comunicación efectiva.",
            features: ["prevención", "presión social", "toma de decisiones", "límites saludables", "comunicación familiar"],
        },
        {
            title: "Venciendo la Tristeza",
            description: "Taller psicoeducativo que promueve una mirada compasiva hacia la tristeza profunda y los síntomas depresivos, brindando herramientas prácticas para abordarlos.",
            features: ["tristeza", "depresión", "autocompasión", "activación conductual", "apoyo emocional"],
        },
        {
            title: "Levantarse y Avanzar: Taller de resiliencia",
            description: "Creado para mujeres que han atravesado momentos difíciles y desean reconectar con sus recursos internos. Se exploran tema como la neurobiología de la resiliencia, creencias limitantes y el poder de los vínculos. Incluye ejercicios prácticos y dinámicas grupales.",
            features: ["resiliencia", "mentalidad de crecimiento", "autoconocimiento", "redes de apoyo", "adversidad y transformación"],
        },
    ]
    const workshopImages = [
        '/images/PHOTO-2025-04-05-10-16-13.jpg ',
        '/images/PHOTO-2025-04-05-10-16-15.jpg ',
        '/images/PHOTO-2025-04-05-10-16-22.jpg ',
        '/images/PHOTO-2025-04-05-10-16-35.jpg ',
        '/images/PHOTO-2025-04-05-10-16-38.jpg ',
        '/images/PHOTO-2025-04-05-10-16-50.jpg',
    ]

    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

    return (
        <Section>
            <Container>
                <div className="lg:col-span-full overflow-hidden max-w-5xl mx-auto" ref={emblaRef}>
                    <div className="flex space-x-10">
                        {workshopImages.map((src, idx) => (
                            <div
                                key={src}
                                className="flex-shrink-0 w-95 h-95 overflow-hidden"
                            >
                                <img
                                    src={src}
                                    alt={`Talleres ${idx + 1}`}
                                    className="w-80 h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </Container>

            <Container>
                <div className="col-span-full grid md:grid-cols-3 py-8 ">
                    {services.map((service, index) => (
                        <Card
                            bgClass={
                                index % 2 === 0
                                    ? "bg-[var(--color-peach-light)]"
                                    : "bg-[var(--color-sage-400)]"
                            }
                            textClass="text-[var(--color-black)]"
                            title={service.title}
                            description={service.description}
                            icon={<ToyBrick className="w-6 h-6" />}
                            mdColSpan={1}
                        />
                    ))}
                </div>

            </Container>
        </Section>
    )
}




// export default function Talleres() {
//   return (


//       <h2 className="text-3xl font-semibold text-sage-700 mb-8 text-center">Próximos Talleres</h2>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
//         {workshops.map((workshop, index) => (
//           <Card key={index} className="bg-white shadow-md hover:shadow-lg transition-shadow">
//             <CardHeader>
//               <CardTitle className="text-sage-600">{workshop.title}</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="space-y-2 text-gray-700">
//                 <p>
//                   <span className="font-medium">Fecha:</span> {workshop.date}
//                 </p>
//                 <p>
//                   <span className="font-medium">Hora:</span> {workshop.time}
//                 </p>
//                 <p>
//                   <span className="font-medium">Lugar:</span> {workshop.location}
//                 </p>
//                 <p>
//                   <span className="font-medium">Precio:</span> {workshop.price}
//                 </p>
//                 <p className="text-sage-600 font-medium">{workshop.spots}</p>
//               </div>
//             </CardContent>
//             <CardFooter>
//               <Button asChild className="w-full bg-sage-600 hover:bg-sage-700">
//                 <Link href="/contacto">Reservar mi lugar</Link>
//               </Button>
//             </CardFooter>
//           </Card>
//         ))}
//       </div>

//       <div className="bg-sage-50 rounded-lg p-8 shadow-md">
//         <h2 className="text-2xl font-semibold text-sage-700 mb-4 text-center">¿No encuentras lo que buscas?</h2>
//         <p className="text-gray-700 text-center mb-6">
//           Si necesitas un servicio personalizado o tienes alguna consulta específica, no dudes en contactarme. Estoy
//           aquí para ayudarte a encontrar la mejor solución para ti.
//         </p>
//         <div className="flex justify-center">
//           <Button asChild className="bg-sage-600 hover:bg-sage-700">
//             <Link href="/contacto">Contáctame</Link>
//           </Button>
//         </div>
//       </div>
//     </div>
//   )
// }// export default function Talleres() {
//   return (
//     <div className="container mx-auto py-12 px-4 md:px-6">
//       <h1 className="text-4xl font-bold text-sage-700 mb-4 text-center">Servicios</h1>
//       <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
//         Ofrezco diversos servicios psicológicos adaptados a tus necesidades específicas, con el objetivo de promover tu
//         bienestar emocional y mental.
//       </p>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
//         {services.map((service, index) => (
//           <Card key={index} className="flex flex-col h-full bg-white shadow-md hover:shadow-lg transition-shadow">
//             <CardHeader>
//               <CardTitle className="text-sage-600">{service.title}</CardTitle>
//               <CardDescription>{service.description}</CardDescription>
//             </CardHeader>
//             <CardContent className="flex-grow">
//               <ul className="space-y-2">
//                 {service.features.map((feature, i) => (
//                   <li key={i} className="flex items-start">
//                     <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
//                     <span className="text-gray-700">{feature}</span>
//                   </li>
//                 ))}
//               </ul>
//             </CardContent>
//             <CardFooter className="flex flex-col items-start">
//               <p className="text-lg font-semibold text-gray-800 mb-4">{service.price}</p>
//               <Button asChild className="w-full bg-sage-600 hover:bg-sage-700">
//                 <Link href="/contacto">{service.cta}</Link>
//               </Button>
//             </CardFooter>
//           </Card>
//         ))}
//       </div>

//       <h2 className="text-3xl font-semibold text-sage-700 mb-8 text-center">Próximos Talleres</h2>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
//         {workshops.map((workshop, index) => (
//           <Card key={index} className="bg-white shadow-md hover:shadow-lg transition-shadow">
//             <CardHeader>
//               <CardTitle className="text-sage-600">{workshop.title}</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="space-y-2 text-gray-700">
//                 <p>
//                   <span className="font-medium">Fecha:</span> {workshop.date}
//                 </p>
//                 <p>
//                   <span className="font-medium">Hora:</span> {workshop.time}
//                 </p>
//                 <p>
//                   <span className="font-medium">Lugar:</span> {workshop.location}
//                 </p>
//                 <p>
//                   <span className="font-medium">Precio:</span> {workshop.price}
//                 </p>
//                 <p className="text-sage-600 font-medium">{workshop.spots}</p>
//               </div>
//             </CardContent>
//             <CardFooter>
//               <Button asChild className="w-full bg-sage-600 hover:bg-sage-700">
//                 <Link href="/contacto">Reservar mi lugar</Link>
//               </Button>
//             </CardFooter>
//           </Card>
//         ))}
//       </div>

//       <div className="bg-sage-50 rounded-lg p-8 shadow-md">
//         <h2 className="text-2xl font-semibold text-sage-700 mb-4 text-center">¿No encuentras lo que buscas?</h2>
//         <p className="text-gray-700 text-center mb-6">
//           Si necesitas un servicio personalizado o tienes alguna consulta específica, no dudes en contactarme. Estoy
//           aquí para ayudarte a encontrar la mejor solución para ti.
//         </p>
//         <div className="flex justify-center">
//           <Button asChild className="bg-sage-600 hover:bg-sage-700">
//             <Link href="/contacto">Contáctame</Link>
//           </Button>
//         </div>
//       </div>
//     </div>
//   )
// }