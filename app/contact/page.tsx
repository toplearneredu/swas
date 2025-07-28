"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import FloatingElements from "@/components/floating-elements"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Facebook, Send, Clock, Users } from "lucide-react"

export default function ContactPage() {
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
      content: "+91 9304412419",
      color: "blue",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info.swawlambi@gmail.com",
      color: "orange",
      link: "mailto:info.swawlambi@gmail.com",
    },
    {
      icon: Facebook,
      title: "Facebook",
      content: "Swawlambi Foundation",
      color: "pink",
      link: "https://www.facebook.com/swawlambifoundation",
    },
  ]

  const officeHours = [
    { day: "Monday - Friday", time: "9:00 AM - 6:00 PM" },
    { day: "Saturday", time: "10:00 AM - 4:00 PM" },
    { day: "Sunday", time: "Closed" },
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
    <div className="min-h-screen bg-gray-900">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <img
              src="/logo.jpg"
              alt="Swawlambi Foundation Logo"
              className="w-24 h-24 mx-auto rounded-full shadow-2xl border-4 border-white/30"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Contact Us</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Get in touch with us to join our mission or learn more about our work
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Contact Information Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => {
                const colors = getColorClasses(info.color)
                return (
                  <Card
                    key={index}
                    className={`${colors.bg} ${colors.border} hover:shadow-lg transition-all duration-300 bg-gray-800/50 backdrop-blur-sm hover:transform hover:-translate-y-1`}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex flex-col items-center text-center">
                        <div className={`w-16 h-16 ${colors.bg} rounded-full flex items-center justify-center mb-4`}>
                          <info.icon className={`h-8 w-8 ${colors.icon}`} />
                        </div>
                        <CardTitle className="text-xl text-white">{info.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="text-center">
                      {info.link ? (
                        <a
                          href={info.link}
                          target={info.link.startsWith("http") ? "_blank" : "_self"}
                          rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-gray-400 leading-relaxed hover:text-white transition-colors cursor-pointer"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-gray-400 leading-relaxed">{info.content}</p>
                      )}
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="bg-gray-800/50 backdrop-blur-sm border-purple-500/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-white flex items-center">
                    <Send className="mr-3 h-6 w-6 text-purple-400" />
                    Send us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="info.swawlambi@gmail.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="What is this about?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                      placeholder="Tell us more about your inquiry..."
                    ></textarea>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </CardContent>
              </Card>

              {/* Office Hours & Additional Info */}
              <div className="space-y-8">
                {/* Office Hours */}
                <Card className="bg-gray-800/50 backdrop-blur-sm border-emerald-500/20">
                  <CardHeader>
                    <CardTitle className="text-2xl text-white flex items-center">
                      <Clock className="mr-3 h-6 w-6 text-emerald-400" />
                      Office Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {officeHours.map((schedule, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center py-2 border-b border-gray-700 last:border-b-0"
                        >
                          <span className="text-gray-300 font-medium">{schedule.day}</span>
                          <span className="text-emerald-400 font-semibold">{schedule.time}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card className="bg-gray-800/50 backdrop-blur-sm border-orange-500/20">
                  <CardHeader>
                    <CardTitle className="text-2xl text-white flex items-center">
                      <Users className="mr-3 h-6 w-6 text-orange-400" />
                      Quick Actions
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button
                      className="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                      onClick={() => window.open("https://forms.gle/BP5nHCLtzuy9qgre6", "_blank")}
                    >
                      <Users className="mr-2 h-5 w-5" />
                      Become a Volunteer
                    </Button>

                    <Button
                      variant="outline"
                      className="w-full border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white py-3 text-lg font-semibold rounded-lg transition-all duration-300 bg-transparent"
                      onClick={() => {
                        const message = encodeURIComponent(
                          "Hello! I'm interested in learning more about Swawlambi Foundation.",
                        )
                        window.open(`https://wa.me/919304412419?text=${message}`, "_blank")
                      }}
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      WhatsApp Us
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingElements />
    </div>
  )
}
