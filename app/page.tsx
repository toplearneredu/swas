import Header from "@/components/header"
import Hero from "@/components/hero"
import Impact from "@/components/impact"
import Campaigns from "@/components/campaigns"
import UpcomingEvents from "@/components/upcoming-events"
import Gallery from "@/components/gallery"
import FuturePlans from "@/components/future-plans"
import Footer from "@/components/footer"
import FloatingElements from "@/components/floating-elements"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <Hero />
      <Impact />
      <Campaigns />
      <UpcomingEvents />
      <Gallery />
      <FuturePlans />
      <Footer />
      <FloatingElements />
    </div>
  )
}
