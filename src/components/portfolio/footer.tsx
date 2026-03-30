export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Jelle Vandriessche. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  )
}
