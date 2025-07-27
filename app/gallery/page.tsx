"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import FloatingElements from "@/components/floating-elements"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Upload, Calendar, MapPin } from "lucide-react"
import { useState } from "react"

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const galleryImages = [
    {
      id: 1,
      src: "/planting.jpeg?height=400&width=600&text=Tree+Plantation+Drive",
      title: "Tree Plantation Drive",
      category: "environment",
      date: "June 2020",
      location: "Rural Jharkhand",
      description: "Volunteers planting native saplings to create green zones",
    },
    {
      id: 2,
      src: "/meeting1.jpg?height=400&width=600&text=Menstrual+Hygiene+Awareness",
      title: "Menstrual Hygiene Awareness Camp",
      category: "health",
      date: "July 2020",
      location: "Village Communities",
      description: "Education and pad distribution in rural villages",
    },
    {
      id: 3,
      src: "/food1.jpg?height=400&width=600&text=COVID+Relief+Work",
      title: "COVID-19 Relief Distribution",
      category: "relief",
      date: "2020-2021",
      location: "Ranchi & Villages",
      description: "Distributing masks, kits and connecting farmers to markets",
    },
    {
      id: 4,
      src: "/prize4.jpg?height=400&width=600&text=Career+Guidance+Workshop",
      title: "Career Guidance Workshop",
      category: "education",
      date: "April 2024",
      location: "Ranchi Schools",
      description: "Mentoring students with career awareness programs",
    },
    {
      id: 5,
      src: "/prize.jpg?height=400&width=600&text=Community+Meeting",
      title: "Community Engagement",
      category: "community",
      date: "2023",
      location: "Various Villages",
      description: "Building connections with local communities",
    },
    {
      id: 6,
      src: "/prize2.jpg?height=400&width=600&text=Volunteer+Training",
      title: "Volunteer Training Session",
      category: "training",
      date: "2023",
      location: "Foundation Office",
      description: "Training new volunteers for upcoming campaigns",
    },
    {
      id: 7,
      src: "/food3.jpeg?height=400&width=600&text=Food+Distribution",
      title: "Food Kit Distribution",
      category: "relief",
      date: "2021",
      location: "Urban & Rural Areas",
      description: "Providing essential food supplies during pandemic",
    },
    {
      id: 8,
      src: "/vote.jpeg?height=400&width=600&text=Environmental+Workshop",
      title: "Vote Awareness",
      category: "community",
      date: "2022",
      location: "Schools & Communities",
      description: "Educating about voting rights and awareness",
    },
  ]

  const categories = [
    { id: "all", name: "All Photos", color: "purple" },
    { id: "environment", name: "Environment", color: "emerald" },
    { id: "health", name: "Health", color: "pink" },
    { id: "education", name: "Education", color: "blue" },
    { id: "relief", name: "Relief Work", color: "orange" },
    { id: "community", name: "Community", color: "teal" },
    { id: "training", name: "Training", color: "indigo" },
  ]

  const filteredImages =
    selectedCategory === "all" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  const getCategoryColor = (color: string) => {
    switch (color) {
      case "emerald":
        return "bg-emerald-600 hover:bg-emerald-700"
      case "pink":
        return "bg-pink-600 hover:bg-pink-700"
      case "blue":
        return "bg-blue-600 hover:bg-blue-700"
      case "orange":
        return "bg-orange-600 hover:bg-orange-700"
      case "teal":
        return "bg-teal-600 hover:bg-teal-700"
      case "indigo":
        return "bg-indigo-600 hover:bg-indigo-700"
      case "purple":
        return "bg-purple-600 hover:bg-purple-700"
      default:
        return "bg-gray-600 hover:bg-gray-700"
    }
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-gray-900 via-teal-900 to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <img
              src="/logo.jpg"
              alt="Swawlambi Foundation Logo"
              className="w-24 h-24 mx-auto rounded-full shadow-2xl border-4 border-white/30"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Gallery</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Capturing moments of impact, hope, and community transformation across our journey
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gradient-to-br from-gray-800 via-teal-900 to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Category Filter */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-white text-center mb-8">Browse by Category</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                      selectedCategory === category.id
                        ? `${getCategoryColor(category.color)} text-white`
                        : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                    }`}
                  >
                    {category.name}
                  </Button>
                ))}
              </div>
            </div>

            {/* Image Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {filteredImages.map((image) => (
                <Card
                  key={image.id}
                  className="overflow-hidden hover:shadow-2xl hover:shadow-teal-500/20 transition-all duration-500 transform hover:-translate-y-2 bg-gray-900/50 backdrop-blur-sm border-gray-700"
                >
                  <div className="relative h-64 bg-gray-200">
                    <img
                      src={image.src || "/placeholder.svg"}
                      alt={image.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 text-white">
                        <div className="flex items-center space-x-2 text-sm mb-2">
                          <Calendar className="h-4 w-4" />
                          <span>{image.date}</span>
                          <MapPin className="h-4 w-4 ml-2" />
                          <span>{image.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-white mb-2">{image.title}</h4>
                    <p className="text-gray-400 text-sm mb-3">{image.description}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{image.date}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <MapPin className="h-3 w-3" />
                        <span>{image.location}</span>
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingElements />
    </div>
  )
}
