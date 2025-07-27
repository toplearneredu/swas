import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Facebook } from "lucide-react"

export default function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "3rd Floor, Royal Heights, Opposite HP Petrol Pump, Ranchi, Jharkhand - 834003",
      color: "emerald",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 70047 76949",
      color: "blue",
    },
    {
      icon: Mail,
      title: "Email",
      content: "raty007@gmail.com",
      color: "orange",
    },
    {
      icon: Facebook,
      title: "Facebook",
      content: "Swawlambi Foundation",
      color: "pink",
    },
  ]

  const getColorClasses = (color: string) => {
    switch (color) {
      case "emerald":
        return { bg: "bg-emerald-500/10", icon: "text-emerald-400", border: "border-emerald-500/20" }
      case "blue":
        return { bg: "bg-blue-500/10", icon: "text-blue-400", border: "border-blue-500/20" }
      case "orange":
        return { bg: "bg-orange-500/10", icon: "text-orange-400", border: "border-orange-500/20" }
      case "pink":
        return { bg: "bg-pink-500/10", icon: "text-pink-400", border: "border-pink-500/20" }
      default:
        return { bg: "bg-gray-500/10", icon: "text-gray-400", border: "border-gray-500/20" }
    }
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Get in touch with us to join our mission or learn more about our work
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {contactInfo.map((info, index) => {
              const colors = getColorClasses(info.color)
              return (
                <Card
                  key={index}
                  className={`${colors.bg} ${colors.border} hover:shadow-lg transition-shadow duration-300 bg-gray-800/50 backdrop-blur-sm`}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 ${colors.bg} rounded-full flex items-center justify-center`}>
                        <info.icon className={`h-6 w-6 ${colors.icon}`} />
                      </div>
                      <CardTitle className="text-xl text-white">{info.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400 leading-relaxed">{info.content}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Map Placeholder */}
          <div className="mt-12">
            <Card className="border-purple-500/20 bg-gray-800/50 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="h-64 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                    <p className="text-gray-300 font-semibold">Interactive Map</p>
                    <p className="text-gray-400 text-sm">Royal Heights, Ranchi, Jharkhand</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
