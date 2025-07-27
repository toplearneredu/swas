"use client"

import { Button } from "@/components/ui/button"
import { ExternalLink, ImageIcon, Calendar, MapPin } from "lucide-react"
import Link from "next/link"

export default function Gallery() {
  const galleryImages = [
    {
      id: 1,
      src: "/planting.jpeg?height=300&width=400&text=Tree+Plantation+Drive",
      title: "Tree Plantation Drive",
      date: "June 2020",
      location: "Rural Jharkhand",
      category: "Environment",
    },
    {
      id: 2,
      src: "/meeting.jpg?height=300&width=400&text=Menstrual+Hygiene+Awareness",
      title: "Menstrual Hygiene Awareness",
      date: "July 2020",
      location: "Village Communities",
      category: "Health",
    },
    {
      id: 3,
      src: "/food4.jpg?height=300&width=400&text=COVID+Relief+Work",
      title: "COVID-19 Relief Distribution",
      date: "2020-2021",
      location: "Ranchi & Villages",
      category: "Relief",
    },
    {
      id: 4,
      src: "/prize4.jpg?height=300&width=400&text=Career+Guidance+Workshop",
      title: "Career Guidance Workshop",
      date: "April 2024",
      location: "Ranchi Schools",
      category: "Education",
    },
  ]

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case "environment":
        return "bg-emerald-500/20 text-emerald-400"
      case "health":
        return "bg-pink-500/20 text-pink-400"
      case "education":
        return "bg-blue-500/20 text-blue-400"
      case "relief":
        return "bg-orange-500/20 text-orange-400"
      case "community":
        return "bg-purple-500/20 text-purple-400"
      case "training":
        return "bg-indigo-500/20 text-indigo-400"
      case "empowerment":
        return "bg-rose-500/20 text-rose-400"
      case "agriculture":
        return "bg-green-500/20 text-green-400"
      default:
        return "bg-gray-500/20 text-gray-400"
    }
  }

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-gray-800 via-teal-900 to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Gallery</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Capturing moments of impact, hope, and community transformation across our journey
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Image Grid - Extended */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl hover:shadow-teal-500/20 transition-all duration-500 transform hover:-translate-y-2"
              >
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Category Badge */}
                <div
                  className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-semibold ${getCategoryColor(image.category)}`}
                >
                  {image.category}
                </div>

                {/* Overlay with Details */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h4 className="text-white font-bold text-lg mb-2">{image.title}</h4>
                  <div className="flex items-center justify-between text-sm text-gray-300">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{image.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-3 w-3" />
                      <span className="truncate max-w-20">{image.location}</span>
                    </div>
                  </div>
                </div>

                {/* Hover Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-teal-600/80 rounded-full flex items-center justify-center">
                    <ImageIcon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Statistics Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-teal-500/20">
              <div className="text-3xl font-bold text-teal-400 mb-2">150+</div>
              <div className="text-gray-400 text-sm">Photos Captured</div>
            </div>
            <div className="text-center bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
              <div className="text-3xl font-bold text-cyan-400 mb-2">25+</div>
              <div className="text-gray-400 text-sm">Events Documented</div>
            </div>
            <div className="text-center bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-emerald-500/20">
              <div className="text-3xl font-bold text-emerald-400 mb-2">8</div>
              <div className="text-gray-400 text-sm">Campaign Categories</div>
            </div>
            <div className="text-center bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-blue-500/20">
              <div className="text-3xl font-bold text-blue-400 mb-2">4+</div>
              <div className="text-gray-400 text-sm">Years of Impact</div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-teal-500/20 mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Explore Our Complete Gallery</h3>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                Discover more moments from our journey of creating positive change in communities across Jharkhand. See
                detailed stories behind each photograph and explore our work by category.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/gallery">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <ImageIcon className="mr-2 h-5 w-5" />
                    View Full Gallery
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </Link>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-transparent"
                  onClick={() => {
                    const message = encodeURIComponent(
                      "Hello! I'd like to contribute photos to Swawlambi Foundation's gallery.",
                    )
                    window.open(`https://wa.me/917004776949?text=${message}`, "_blank")
                  }}
                >
                  Share Your Photos
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
