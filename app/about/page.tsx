import Header from "@/components/header"
import Footer from "@/components/footer"
import FloatingElements from "@/components/floating-elements"
import { Card, CardContent } from "@/components/ui/card"
import { TreePine, Users, Heart, Sprout, GraduationCap, Shield } from "lucide-react"

export default function AboutPage() {
  const stats = [
    { icon: TreePine, number: "500+", label: "Trees Planted", color: "emerald" },
    { icon: Users, number: "1,200+", label: "Students Guided", color: "blue" },
    { icon: Heart, number: "45+", label: "Villages Reached", color: "pink" },
    { icon: Sprout, number: "8,500+", label: "COVID Essentials Delivered", color: "orange" },
  ]

  const campaigns = [
    {
      icon: TreePine,
      title: "Green Revolution: Tree Plantation Drive",
      date: "June 2020",
      description:
        'Planted 500+ native saplings across rural communities, transforming barren lands into thriving green zones. Volunteers and students anchored our belief that "every tree is a breath of tomorrow."',
      color: "emerald",
    },
    {
      icon: Heart,
      title: "Breaking Barriers: Menstrual Hygiene Awareness",
      date: "July 2020",
      description:
        "Pad distribution and education camps in 15+ villages, reaching 600+ women. We turned whispers into empowered conversations about dignity and health.",
      color: "pink",
    },
    {
      icon: Shield,
      title: "COVID-19 Relief: Bridges of Hope",
      date: "2020–2021",
      description:
        "Phase 1: Distributed 5,000+ masks and kits. Phase 2: Connected 120+ farmers with city markets & delivered 3,500+ food kits.",
      color: "blue",
    },
    {
      icon: GraduationCap,
      title: "Career Awakening: Youth Guidance Program",
      date: "April & September 2024",
      description:
        'Career workshops in Ranchi schools for 500+ students, providing mentorship and "Pathfinder" toolkits.',
      color: "orange",
    },
  ]

  const getStatColor = (color: string) => {
    switch (color) {
      case "emerald":
        return "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
      case "blue":
        return "text-blue-400 bg-blue-500/10 border-blue-500/20"
      case "pink":
        return "text-pink-400 bg-pink-500/10 border-pink-500/20"
      case "orange":
        return "text-orange-400 bg-orange-500/10 border-orange-500/20"
      default:
        return "text-gray-400 bg-gray-500/10 border-gray-500/20"
    }
  }

  const getCampaignColor = (color: string) => {
    switch (color) {
      case "emerald":
        return { bg: "bg-emerald-600", icon: "text-emerald-400", border: "border-emerald-500/20" }
      case "pink":
        return { bg: "bg-pink-600", icon: "text-pink-400", border: "border-pink-500/20" }
      case "blue":
        return { bg: "bg-blue-600", icon: "text-blue-400", border: "border-blue-500/20" }
      case "orange":
        return { bg: "bg-orange-600", icon: "text-orange-400", border: "border-orange-500/20" }
      default:
        return { bg: "bg-gray-600", icon: "text-gray-400", border: "border-gray-500/20" }
    }
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-gray-900 via-emerald-900 to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <img
              src="/logo.jpg"
              alt="Swawlambi Foundation Logo"
              className="w-24 h-24 mx-auto rounded-full shadow-2xl border-4 border-white/30"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">About Us</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-orange-500 mx-auto"></div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gradient-to-br from-gray-800 via-emerald-900 to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Establishment */}
            <div className="text-center mb-16">
              <p className="text-lg text-emerald-400 font-semibold mb-2">Established 25 February 2020</p>
              <h2 className="text-3xl font-bold text-white mb-6">Where Society Calls, We Grow</h2>
              <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
                Born from four young visionaries, we plant hope wherever roots are needed. Our mission is to respond,
                adapt, and ignite change – in classrooms, farmlands, crisis zones, and wherever society needs us most.
              </p>
            </div>

            {/* Impact Stats */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-white text-center mb-8">Impact Through Unity</h3>
              <p className="text-lg text-gray-300 text-center mb-8">Volunteers are our bedrock. Together, we've:</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <Card
                    key={index}
                    className={`text-center bg-gray-900/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 ${getStatColor(stat.color)}`}
                  >
                    <CardContent className="p-6">
                      <stat.icon
                        className={`h-12 w-12 mx-auto mb-4 ${stat.color === "emerald" ? "text-emerald-400" : stat.color === "blue" ? "text-blue-400" : stat.color === "pink" ? "text-pink-400" : "text-orange-400"}`}
                      />
                      <div className="text-2xl font-bold text-white mb-2">{stat.number}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center space-y-2 text-gray-300">
                <p>• Planted 500+ trees to anchor tomorrow</p>
                <p>• Guided 1,200+ students through career awareness</p>
                <p>• Brought menstrual dignity to 45+ villages</p>
                <p>• Delivered 8,500+ COVID essentials while creating farmer-to-city food bridges</p>
              </div>
            </div>

            {/* Our Key Campaigns */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-white text-center mb-12">Our Key Campaigns</h3>

              <div className="grid md:grid-cols-2 gap-8">
                {campaigns.map((campaign, index) => {
                  const colors = getCampaignColor(campaign.color)
                  return (
                    <Card
                      key={index}
                      className={`bg-gray-900/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 ${colors.border}`}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className={`w-12 h-12 ${colors.bg} rounded-full flex items-center justify-center`}>
                            <campaign.icon className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h4 className="text-xl font-bold text-white">{campaign.title}</h4>
                            <p className={`text-sm font-semibold ${colors.icon}`}>{campaign.date}</p>
                          </div>
                        </div>
                        <p className="text-gray-300 leading-relaxed">{campaign.description}</p>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>

            {/* The Human Core */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-emerald-500/20">
              <h3 className="text-3xl font-bold text-white text-center mb-6">The Human Core</h3>
              <blockquote className="text-xl text-gray-300 text-center italic leading-relaxed mb-4">
                "Farmers till the soil. Children spark dreams. Women weave resilience. Volunteers are the hands that
                plant it all."
              </blockquote>
              <p className="text-emerald-400 text-center font-semibold">— Our Founding Promise</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingElements />
    </div>
  )
}
