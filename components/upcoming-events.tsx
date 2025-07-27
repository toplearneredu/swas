import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function UpcomingEvents() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 to-indigo-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Upcoming Events</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-6"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-indigo-500/20 bg-gray-800/50 backdrop-blur-sm hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Calendar className="h-6 w-6 text-indigo-400" />
                <CardTitle className="text-2xl text-white">School Drug Awareness Camp</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-lg text-indigo-300 font-semibold mb-2">Coming Soon</p>
                  <p className="text-gray-400">
                    An important initiative to educate students about the dangers of drug abuse and promote healthy
                    lifestyle choices.
                  </p>
                </div>
                <div className="hidden md:block">
                  <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center">
                    <Calendar className="h-8 w-8 text-indigo-400" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
