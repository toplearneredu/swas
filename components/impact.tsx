import { Card, CardContent } from "@/components/ui/card"
import { TreePine, Users, Heart, Sprout } from "lucide-react"

export default function Impact() {
  const stats = [
    { icon: TreePine, number: "500+", label: "Trees Planted", color: "emerald" },
    { icon: Users, number: "1,200+", label: "Students Guided", color: "blue" },
    { icon: Heart, number: "45+", label: "Villages Reached", color: "pink" },
    { icon: Sprout, number: "8,500+", label: "COVID Essentials Delivered", color: "orange" },
  ]

  const getStatColor = (color: string) => {
    switch (color) {
      case "emerald":
        return "text-emerald-400 bg-emerald-500/10 border-emerald-500/20 hover:shadow-emerald-500/20"
      case "blue":
        return "text-blue-400 bg-blue-500/10 border-blue-500/20 hover:shadow-blue-500/20"
      case "pink":
        return "text-pink-400 bg-pink-500/10 border-pink-500/20 hover:shadow-pink-500/20"
      case "orange":
        return "text-orange-400 bg-orange-500/10 border-orange-500/20 hover:shadow-orange-500/20"
      default:
        return "text-gray-400 bg-gray-500/10 border-gray-500/20"
    }
  }

  return (
    <section id="impact" className="py-20 bg-gradient-to-br from-gray-800 via-purple-900 to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Impact Through Unity</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Volunteers are our bedrock. Together, we've created lasting change across communities
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className={`text-center bg-gray-900/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${getStatColor(stat.color)}`}
              >
                <CardContent className="p-8">
                  <stat.icon
                    className={`h-16 w-16 mx-auto mb-6 ${stat.color === "emerald" ? "text-emerald-400" : stat.color === "blue" ? "text-blue-400" : stat.color === "pink" ? "text-pink-400" : "text-orange-400"}`}
                  />
                  <div className="text-3xl md:text-4xl font-bold text-white mb-3">{stat.number}</div>
                  <div className="text-sm md:text-base text-gray-400 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
            <h3 className="text-2xl font-bold text-white text-center mb-8">Our Achievements</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                  <span className="text-gray-300">Planted 500+ trees to anchor tomorrow</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-300">Guided 1,200+ students through career awareness</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                  <span className="text-gray-300">Brought menstrual dignity to 45+ villages</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-300">
                    Delivered 8,500+ COVID essentials while creating farmer-to-city food bridges
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
