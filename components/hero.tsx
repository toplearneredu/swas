"use client"

import { Button } from "@/components/ui/button"
import { ExternalLink, Users } from "lucide-react"

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-emerald-900 to-orange-900"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('/bgimg2.jpeg?height=800&width=1200')`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo - Made more prominent and positioned lower */}
          <div className="mb-8 mt-8">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-white/20 rounded-full blur-xl"></div>
              <img
                src="/logo.jpg"
                alt="Swawlambi Foundation Logo"
                className="relative w-36 h-36 md:w-44 md:h-44 mx-auto rounded-full shadow-2xl border-4 border-white/30"
              />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">Swawlambi Foundation</h1>
          <p className="text-xl md:text-2xl text-emerald-300 mb-8 font-medium">
            Caring for minds, bodies, and Earth we share
          </p>
          <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
            We are NGO creating grassroots impact in villages and urban zones across Jharkhand.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => window.open("https://forms.gle/BP5nHCLtzuy9qgre6", "_blank")}
            >
              <Users className="mr-2 h-5 w-5" />
              Join as Volunteer
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
             <Button
              variant="outline"
              size="lg"
              className="border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-transparent"
              onClick={() => (window.location.href = "/about")}
            >
              Learn More
            </Button>


          </div>
        </div>
      </div>
    </section>
  )
}

function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
  }
}
