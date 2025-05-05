'use client'

import React from 'react'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Textarea } from '@/components/ui/TextArea'
import { RadioGroup, RadioGroupItem } from '@/components/ui/RadioGroup'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/Select'
import { Calendar, Mail, MapPin, Phone, MessageSquare } from 'lucide-react'
import Link from 'next/link'
import { Label } from '@/components/ui/Label'
import { Input } from '@/components/ui/Input'

export default function Contacto() {
  return (
    <>
      {/* Hero Intro Section */}
      <Section decorate className="py-12">
          <div className="col-span-full ">
            <div className="text-center">
              <h1 className="text-5xl font-semibold tracking-tight text-[var(--color-foreground)] sm:text-7xl">
                Contacto
              </h1>
              <p className="mt-8 text-lg text-[var(--color-muted-foreground)] sm:text-xl">
                Estoy aquí para ayudarte. No dudes en contactarme para agendar una cita, hacer una consulta o solicitar más información sobre mis servicios.
              </p>
              <div className="mt-10 flex items-center justify-center lg:justify-start gap-x-6">
              </div>
            </div>
          </div>
      </Section>

      {/* Contact Methods */}
      <Section className="py-12">
        <Container className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card
            icon={<Phone className="h-6 w-6" />}
            title="Teléfono"
            description="Llámame o escríbeme por WhatsApp"
            button={{
              label: 'Contactar por WhatsApp',
              href: 'https://wa.me/50688888888',
            }}
          />

          <Card
            icon={<Mail className="h-6 w-6" />}
            title="Correo Electrónico"
            description="Escríbeme un correo electrónico"
            button={{
              label: 'Enviar correo',
              href: 'mailto:info@luciadiazpsicologa.com',
            }}
          />

          <Card
            icon={<MapPin className="h-6 w-6" />}
            title="Ubicación"
            description="Consulta presencial"
            button={{
              label: 'Ver en el mapa',
              href: 'https://maps.google.com',
            }}
          />
        </Container>
      </Section>

      {/* Form and Secondary Cards */}
      <Section className="py-12">
        <Container className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-sage-700 mb-2">Formulario de Contacto</h2>
            <p className="text-gray-600 mb-6">Completa el formulario y me pondré en contacto contigo lo antes posible.</p>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="nombre">Nombre</Label>
                  <Input id="nombre" placeholder="Tu nombre" />
                </div>
                <div>
                  <Label htmlFor="apellido">Apellido</Label>
                  <Input id="apellido" placeholder="Tu apellido" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Correo Electrónico</Label>
                  <Input id="email" type="email" placeholder="tu@email.com" />
                </div>
                <div>
                  <Label htmlFor="telefono">Teléfono</Label>
                  <Input id="telefono" placeholder="+506 8888-8888" />
                </div>
              </div>

              <div>
                <Label>¿Cómo prefieres que te contacte?</Label>
                <RadioGroup defaultValue="email" className="flex space-x-4" name="contacto">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="email" id="r1" />
                    <Label htmlFor="r1">Email</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="telefono" id="r2" />
                    <Label htmlFor="r2">Teléfono</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="whatsapp" id="r3" />
                    <Label htmlFor="r3">WhatsApp</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label htmlFor="servicio">Servicio de interés</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona un servicio" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="terapia-individual">Terapia Individual</SelectItem>
                    <SelectItem value="terapia-online">Terapia Online</SelectItem>
                    <SelectItem value="talleres">Talleres</SelectItem>
                    <SelectItem value="asesoria-empresas">Asesoría para Empresas</SelectItem>
                    <SelectItem value="otro">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="mensaje">Mensaje</Label>
                <Textarea id="mensaje" placeholder="¿En qué puedo ayudarte?" rows={5} />
              </div>

              <Button type="submit" className="w-full bg-sage-600 hover:bg-sage-700">
                Enviar Mensaje
              </Button>
            </form>
          </div>

          {/* Agenda & FAQ Cards */}
          <div className="space-y-8">


            <Card
              icon={<MessageSquare className="h-5 w-5 text-sage-600" />}
              title="Preguntas Frecuentes"
              description="Resuelve tus dudas más comunes sobre sesiones y costos."
              button={{ label: 'Ver FAQs', href: '/faq' }}
            />
          </div>
        </Container>
      </Section>

      {/* Schedule Section */}
      <Section className="py-12">
        <Container className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-sage-700 mb-4">Horario de Atención</h2>
          <p className="text-gray-700 mb-6">
            Lunes a Viernes: 9:00 AM - 6:00 PM<br />
            Sábados: 9:00 AM - 1:00 PM<br />
            Domingos: Cerrado
          </p>
          <p className="text-gray-700 italic">
            *Las sesiones online pueden programarse con mayor flexibilidad horaria.
          </p>
        </Container>
      </Section>
    </>
  )
}
