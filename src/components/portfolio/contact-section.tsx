"use client"

import { useState } from "react"
import { Mail, Phone, Linkedin, Send, Github } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "E-mail",
    value: "jelle.vandriessche@gmail.com",
    href: "mailto:jelle.vandriessche@gmail.com",
  },
  {
    icon: Phone,
    label: "Telefoon",
    value: "+32 472 53 32 43",
    href: "tel:+32472533243",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/jelle-vandriessche/",
    href: "https://www.linkedin.com/in/jelle-vandriessche/",
  },
  {
    icon: Github,
    label: "Github",
    value: "github.com/jellev00",
    href: "https://github.com/jellev00",
  },
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    naam: "",
    email: "",
    bericht: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Bericht verzonden (demo)")
    setFormData({ naam: "", email: "", bericht: "" })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Neem Contact Op
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Heb je een vraag of wil je samenwerken? Neem gerust contact met mij op via onderstaande gegevens.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Contactgegevens
            </h3>
            <div className="space-y-4 mb-8">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-md transition-all group"
                >
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="text-foreground font-medium">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
