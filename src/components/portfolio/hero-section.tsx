import Image from "next/image"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1 text-center md:text-left">
            <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">
              Welkom op mijn portfolio
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
              <span className="text-primary">Jelle Vandriessche</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 text-pretty">
              Software Developer
            </p>
            <p className="text-foreground/70 leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
              Ik creëer moderne, toegankelijke en gebruiksvriendelijke digitale ervaringen. 
              Met een passie voor clean code en oog voor detail breng ik jouw ideeën tot leven.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
              >
                Neem contact op
              </a>
              <a
                href="#ervaring"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors"
              >
                Bekijk mijn werk
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl scale-110" />
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl">
                <Image
                  src="/jelle2.jpg"
                  alt="Profielfoto"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hidden md:flex justify-center mt-16">
          <a
            href="#ervaring"
            className="animate-bounce text-muted-foreground hover:text-primary transition-colors"
            aria-label="Scroll naar beneden"
          >
            <ArrowDown className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  )
}
