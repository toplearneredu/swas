import { Card, CardContent } from "@/components/ui/card"
import { Sprout, Users, Heart, BookOpen, Shield, Lightbulb } from "lucide-react"

export default function FuturePlans() {
  const mainPlans = [
    {
      icon: Sprout,
      title: "Farm-to-Future",
      subtitle: "Scaling rural eco-livelihoods",
      description:
        "Empowering farmers with sustainable practices and direct market access to create thriving rural economies.",
      color: "emerald",
      features: ["Organic farming training", "Market linkage programs", "Sustainable agriculture"],
    },
    {
      icon: Heart,
      title: "Pad-to-Power",
      subtitle: "Turning hygiene into women's enterprise",
      description:
        "Creating women-led enterprises around menstrual hygiene while promoting health awareness and dignity.",
      color: "pink",
      features: ["Women entrepreneurship", "Health awareness", "Community empowerment"],
    },
    {
      icon: BookOpen,
      title: "Roots to Resilience",
      subtitle: "Counseling + conservation",
      description: "Building mental health support systems while fostering environmental conservation in communities.",
      color: "blue",
      features: ["Mental health support", "Environmental education", "Community resilience"],
    },
  ]

  const newFrontiers = [
    { icon: Shield, title: "Disaster Response", color: "red" },
    { icon: Lightbulb, title: "Digital Literacy", color: "yellow" },
    { icon: Users, title: "Elder Care", color: "purple" },
  ]

  const getColorClasses = (color: string) => {
    switch (color) {
      case "emerald":
        return {
          bg: "bg-gradient-to-br from-emerald-500/20 to-green-500/20",
          border: "border-emerald-500/30",
          icon: "bg-emerald-600",
          iconText: "text-white",
          title: "text-emerald-400",
          hover: "hover:shadow-emerald-500/20",
        }
      case "pink":
        return {
          bg: "bg-gradient-to-br from-pink-500/20 to-rose-500/20",
          border: "border-pink-500/30",
          icon: "bg-pink-600",
          iconText: "text-white",
          title: "text-pink-400",
          hover: "hover:shadow-pink-500/20",
        }
      case "blue":
        return {
          bg: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
          border: "border-blue-500/30",
          icon: "bg-blue-600",
          iconText: "text-white",
          title: "text-blue-400",
          hover: "hover:shadow-blue-500/20",
        }
      case "red":
        return { chip: "bg-red-500/20 text-red-400 border-red-500/30" }
      case "yellow":
        return { chip: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30" }
      case "purple":
        return { chip: "bg-purple-500/20 text-purple-400 border-purple-500/30" }
      default:
        return {
          bg: "bg-gray-500/20",
          border: "border-gray-500/30",
          icon: "bg-gray-600",
          iconText: "text-white",
          title: "text-gray-400",
          hover: "hover:shadow-gray-500/20",
        }
    }
  }

  return (
    <section id="future-plans" className="py-20 bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Where We're Growing Next</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We evolve where society needs us most, expanding our impact through innovative programs and community-driven
            solutions
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Main Future Plans */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {mainPlans.map((plan, index) => {
              const colors = getColorClasses(plan.color)
              return (
                <Card
                  key={index}
                  className={`${colors.bg} ${colors.border} ${colors.hover} hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gray-800/50 backdrop-blur-sm`}
                >
                  <CardContent className="p-8">
                    {/* Icon */}
                    <div
                      className={`w-16 h-16 ${colors.icon} rounded-2xl flex items-center justify-center mb-6 mx-auto`}
                    >
                      <plan.icon className={`h-8 w-8 ${colors.iconText}`} />
                    </div>

                    {/* Title */}
                    <h3 className={`text-2xl font-bold ${colors.title} text-center mb-2`}>{plan.title}</h3>
                    <p className="text-gray-400 text-center mb-4 font-medium">{plan.subtitle}</p>

                    {/* Description */}
                    <p className="text-gray-300 text-center mb-6 leading-relaxed">{plan.description}</p>

                    {/* Features */}
                    <div className="space-y-2">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className={`w-2 h-2 ${colors.icon} rounded-full`}></div>
                          <span className="text-gray-400 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* New Frontiers Section */}
          <div className="text-center">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Exploring New Frontiers</h3>
              <p className="text-gray-400 mb-8">Expanding our reach into emerging areas of social impact</p>

              <div className="flex flex-wrap justify-center gap-6">
                {newFrontiers.map((frontier, index) => {
                  const colors = getColorClasses(frontier.color)
                  return (
                    <div
                      key={index}
                      className={`${colors.chip} px-6 py-3 rounded-full border flex items-center space-x-3 hover:scale-105 transition-transform duration-300`}
                    >
                      <frontier.icon className="h-5 w-5" />
                      <span className="font-semibold">{frontier.title}</span>
                    </div>
                  )
                })}
              </div>

              {/* Call to Action */}
              <div className="mt-8 pt-6 border-t border-gray-700">
                <p className="text-gray-300 text-sm">
                  <span className="text-indigo-400 font-semibold">Join us</span> as we expand our mission to create
                  lasting change across Jharkhand and beyond
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
