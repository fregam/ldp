import './globals.css';
import { ReactNode } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'Lucía Díaz Galeano – Psicología Clínica',
  description: 'Máster en Psicología Clínica y acompañamiento emocional',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    
    <html lang="es">
      <body className="flex min-h-screen flex-col bg-[var(--color-background)] text-[var(--color-foreground)] ">
        <Header />
        <main className="flex-grow container mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}