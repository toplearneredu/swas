import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TreePine, Heart, Shield, GraduationCap } from "lucide-react"

export default function Campaigns() {
  const campaigns = [
    {
      icon: TreePine,
      title: "Green Revolution: Tree Plantation Drive",
      date: "June 2020",
      description:
        'Planted 500+ native saplings across rural communities, transforming barren lands into thriving green zones. Volunteers and students anchored our belief that "every tree is a breath of tomorrow."',
      image: "/planting3.jpeg?height=300&width=400",
      color: "emerald",
    },
    {
      icon: Heart,
      title: "Breaking Barriers: Menstrual Hygiene Awareness",
      date: "July 2020",
      description:
        "Pad distribution and education camps in 15+ villages, reaching 600+ women. We turned whispers into empowered conversations about dignity and health.",
      image: "/meeting3.jpeg?height=300&width=400",
      color: "pink",
    },
    {
      icon: Shield,
      title: "COVID-19 Relief: Bridges of Hope",
      date: "2020–2021",
      description:
        "Phase 1: Distributed 5,000+ masks and kits. Phase 2: Connected 120+ farmers with city markets & delivered 3,500+ food kits.",
      image: "/Food3.jpeg?height=300&width=400",
      color: "blue",
    },
    {
      icon: GraduationCap,
      title: "Career Awakening: Youth Guidance Program",
      date: "April & September 2024",
      description:
        'Career workshops in Ranchi schools for 500+ students, providing mentorship and "Pathfinder" toolkits.',
      image: "/prize.jpg?height=300&width=400",
      color: "orange",
    },
  ]

  const getColorClasses = (color: string) => {
    switch (color) {
      case "emerald":
        return {
          badge: "bg-emerald-600",
          icon: "text-emerald-500",
          title: "text-emerald-400",
          border: "border-emerald-500/20 hover:border-emerald-500/40",
        }
      case "pink":
        return {
          badge: "bg-pink-600",
          icon: "text-pink-500",
          title: "text-pink-400",
          border: "border-pink-500/20 hover:border-pink-500/40",
        }
      case "blue":
        return {
          badge: "bg-blue-600",
          icon: "text-blue-500",
          title: "text-blue-400",
          border: "border-blue-500/20 hover:border-blue-500/40",
        }
      case "orange":
        return {
          badge: "bg-orange-600",
          icon: "text-orange-500",
          title: "text-orange-400",
          border: "border-orange-500/20 hover:border-orange-500/40",
        }
      default:
        return {
          badge: "bg-gray-600",
          icon: "text-gray-500",
          title: "text-gray-400",
          border: "border-gray-500/20 hover:border-gray-500/40",
        }
    }
  }

  return (
    <section id="campaigns" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Work & Campaigns</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-orange-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Discover the impactful campaigns that have transformed communities across Jharkhand
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {campaigns.map((campaign, index) => {
            const colors = getColorClasses(campaign.color)
            return (
              <Card
                key={index}
                className={`overflow-hidden hover:shadow-xl transition-all duration-300 ${colors.border} bg-gray-900/50 backdrop-blur-sm`}
              >
                <div className="relative h-48 bg-gray-200">
                  <img
                    src={campaign.image || "/placeholder.svg"}
                    alt={campaign.title}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className={`absolute top-4 left-4 ${colors.badge} text-white px-3 py-1 rounded-full text-sm font-semibold`}
                  >
                    {campaign.date}
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3 mb-2">
                    <campaign.icon className={`h-6 w-6 ${colors.icon}`} />
                    <CardTitle className={`text-xl ${colors.title}`}>{campaign.title}</CardTitle>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-300 leading-relaxed">{campaign.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
