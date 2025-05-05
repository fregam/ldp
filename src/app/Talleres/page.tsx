'use client'
import TalleresHeader from '@/components/talleres/TalleresHeader'
import TalleresCards from "@/components/talleres/TalleresCards"

export default function Talleres() {

  return (
    <div className="flex flex-col items-center">
      <TalleresHeader/>
      <TalleresCards/>
    </div>
  )
}
