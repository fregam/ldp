'use client'
import { useState } from 'react'

export default function Newsletter() {
  const [status, setStatus] = useState<'idle'|'ok'|'error'>('idle')

  return (
    <section className="relative isolate bg-[var(--color-background)] text-[var(--color-foreground)] px-6 py-12 sm:py-16 rounded-md ">
      <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">Recursos semanales gratuitos</h3>
      <p className="mt-2 text-[var(--color-muted-foreground)]">
        Herramientas prácticas y reflexiones cada semana. Cancela cuando quieras.
      </p>

      <form
        action="https://formspree.io/f/YOUR_FORM_ID" // replace with your Formspree endpoint
        method="POST"
        className="mt-6 flex flex-col sm:flex-row gap-3"
        onSubmit={() => setStatus('ok')}
      >
        {/* Honeypot anti-spam */}
        <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

        <label htmlFor="email" className="sr-only">Correo electrónico</label>
        <input
          id="email"
          type="email"
          name="email"
          required
          placeholder="tu@email.com"
          className="w-full sm:max-w-md rounded-md border border-[var(--color-border)] bg-transparent px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
        />

        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-md px-5 py-3 font-semibold border border-[var(--color-foreground)] hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)] transition"
        >
          Unirme
        </button>

        {/* Optional consent */}
        <input type="hidden" name="consent" value="true" />
      </form>

      {status === 'ok' && (
        <p className="mt-3 text-sm text-[var(--color-muted-foreground)]">
          ¡Gracias! Revisa tu correo para confirmar la suscripción.
        </p>
      )}
    </section>
  )
}