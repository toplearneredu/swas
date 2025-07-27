"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, Users } from "lucide-react"

export default function FloatingElements() {
  const [showWhatsApp, setShowWhatsApp] = useState(false)

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hello! I'm interested in joining Swawlambi Foundation.")
    const whatsappUrl = `https://wa.me/917004776949?text=${message}`
    window.open(whatsappUrl, "_blank")
  }

  const openVolunteerForm = () => {
    window.open("https://forms.gle/BP5nHCLtzuy9qgre6", "_blank")
  }

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={openWhatsApp}
          className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
          title="WhatsApp Us"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>

      {/* Floating Volunteer Button */}
      <div className="fixed bottom-24 right-6 z-50">
        <Button
          onClick={openVolunteerForm}
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
          title="Join as Volunteer"
        >
          <Users className="h-4 w-4" />
          <span className="hidden sm:inline text-sm font-semibold">Join as Volunteer</span>
        </Button>
      </div>
    </>
  )
}
