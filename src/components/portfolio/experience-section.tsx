import { GraduationCap, Briefcase } from "lucide-react"

const opleidingen = [
  {
    titel: "Bachelor Toegepaste Informatica",
    instelling: "HoGent",
    jaartal: "2024 - 2026",
    beschrijving: "Specialisatie in Software Engineering & IT.",
  },
  {
    titel: "Graduaat Programmeren",
    instelling: "HoGent",
    jaartal: "2022 - 2024",
    beschrijving: "Gefocust op programmeren",
  },
  {
    titel: "Industriële ICT",
    instelling: "GO! Atheneum Oudenaarde",
    jaartal: "2016 - 2022",
    beschrijving: "Gefocust op programmeren op Industrieel vlak en elektriciteit en elektronica",
  },
]

const ervaringen = [
  {
    functie: "Job student Elektricien",
    bedrijf: "ATS nv Groep",
    jaartal: "2022 - Heden",
    beschrijving: "Bordenbouw. Het bouwen van elektrische borden/kasten",
  },
  {
    functie: "Stage Developer",
    bedrijf: "Elision",
    jaartal: "2024 - 2024",
    beschrijving: "Bouwen van een dependency tracker",
  },
  {
    functie: "Bachelorproef",
    bedrijf: "Springbok Agency",
    jaartal: "2026 - 2026",
    beschrijving: "Bouwen van een dependency dashboard met AI implementaties voor analyses",
  },
]

export function ExperienceSection() {
  return (
    <section
      id="ervaring"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Ervaring & Opleiding
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mijn professionele reis en academische achtergrond die mij hebben gevormd tot de developer die ik vandaag ben.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Opleidingen */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Opleidingen</h3>
            </div>
            <div className="space-y-4">
              {opleidingen.map((opleiding, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-foreground">{opleiding.titel}</h4>
                    <span className="text-sm text-primary font-medium whitespace-nowrap ml-4">
                      {opleiding.jaartal}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-2">{opleiding.instelling}</p>
                  <p className="text-foreground/70 text-sm">{opleiding.beschrijving}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Werkervaringen */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Werkervaringen</h3>
            </div>
            <div className="space-y-4">
              {ervaringen.map((ervaring, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-foreground">{ervaring.functie}</h4>
                    <span className="text-sm text-primary font-medium whitespace-nowrap ml-4">
                      {ervaring.jaartal}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-2">{ervaring.bedrijf}</p>
                  <p className="text-foreground/70 text-sm">{ervaring.beschrijving}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
