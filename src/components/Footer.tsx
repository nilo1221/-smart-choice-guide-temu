import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-lg mb-4">Smart Choice Guide</h3>
            <p className="text-sm text-gray-600">
              La community italiana di buoni e offerte. Trova le migliori promozioni e risparmia sui tuoi acquisti.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Link Rapidi</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link></li>
              <li><Link href="/categories" className="text-gray-600 hover:text-gray-900">Categorie</Link></li>
              <li><Link href="/add-deal" className="text-gray-600 hover:text-gray-900">Aggiungi Offerta</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-gray-900">Chi Siamo</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4">Categorie Popolari</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/category/elettronica" className="text-gray-600 hover:text-gray-900">Elettronica</Link></li>
              <li><Link href="/category/moda" className="text-gray-600 hover:text-gray-900">Moda</Link></li>
              <li><Link href="/category/casa-giardino" className="text-gray-600 hover:text-gray-900">Casa e Giardino</Link></li>
              <li><Link href="/category/alimentari" className="text-gray-600 hover:text-gray-900">Alimentari</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legale</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/terms" className="text-gray-600 hover:text-gray-900">Termini di Servizio</Link></li>
              <li><Link href="/privacy" className="text-gray-600 hover:text-gray-900">Privacy Policy</Link></li>
              <li><Link href="/affiliate" className="text-gray-600 hover:text-gray-900">Programma Affiliazione</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Smart Choice Guide. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  )
}
