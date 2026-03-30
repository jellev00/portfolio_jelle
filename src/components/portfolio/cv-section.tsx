"use client"
import { FileText, Download, X } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

export function CVSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ESC toets om modal te sluiten
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        setIsModalOpen(false)
      }
    }
    
    // Voorkom scrollen op de achtergrond wanneer modal open is
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    window.addEventListener('keydown', handleEsc)
    return () => {
      window.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = 'unset'
    }
  }, [isModalOpen])

  return (
    <>
      <section
        id="cv"
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Curriculum Vitae
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Download mijn volledige CV voor een gedetailleerd overzicht van mijn vaardigheden en ervaring.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            {/* CV Preview - Klikbaar */}
            <div 
              className="relative group cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            >
              <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-xl group-hover:bg-primary/20 transition-colors" />
              <div className="relative bg-card border border-border rounded-2xl shadow-lg overflow-hidden">
                <div className="aspect-[1/1.414] w-64 sm:w-80 relative">
                  <Image
                    src="/cv.png"
                    alt="CV Preview"
                    fill
                    className="object-contain"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-8">
                    <span className="text-background font-medium flex items-center gap-2">
                      <FileText className="h-5 w-5" />
                      Bekijk CV
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Download Section */}
            <div className="text-center lg:text-left max-w-md">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Download mijn CV
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Mijn CV bevat een volledig overzicht van mijn werkervaring, 
                opleidingen en technische vaardigheden
              </p>
              <ul className="text-foreground/70 mb-8 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  werkervaringen
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  Technische vaardigheden
                </li>
              </ul>
              <a
                href="/cv-jelle-vandriesche.pdf"
                download="cv-jelle-vandriesche.pdf"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
              >
                <Download className="h-5 w-5" />
                Download CV (PDF)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Modal - Vergrote CV weergave - Volledige foto zichtbaar */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="relative w-full h-full flex items-center justify-center p-2 sm:p-4">
            {/* Sluitknop */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 p-2 bg-black/60 hover:bg-black/80 rounded-full transition-colors text-white backdrop-blur-sm"
              aria-label="Sluiten"
            >
              <X className="h-6 w-6 sm:h-8 sm:w-8" />
            </button>

            {/* Download knop */}
            <a
              href="/cv-jelle-vandriesche.pdf"
              download="cv-jelle-vandriesche.pdf"
              className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 p-2 bg-black/60 hover:bg-black/80 rounded-full transition-colors text-white backdrop-blur-sm"
              onClick={(e) => e.stopPropagation()}
              aria-label="Download CV"
            >
              <Download className="h-6 w-6 sm:h-8 sm:w-8" />
            </a>
            
            {/* Afbeelding container - volledig zichtbaar op scherm */}
            <div 
              className="relative flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src="/cv.png"
                alt="CV - Jelle Van Driessche"
                width={800}
                height={1131}
                className="rounded-lg shadow-2xl"
                quality={100}
                priority
                style={{
                  width: 'auto',
                  height: 'auto',
                  maxWidth: 'min(90vw, 700px)',
                  maxHeight: '90vh',
                  objectFit: 'contain'
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}