'use client'

import DealCard from '@/components/DealCard'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'

// Mock data - will be replaced with database queries
const mockDeals = [
  {
    id: '1',
    title: 'Smartphone 5G Offerta Imperdibile',
    description: 'Smartphone di ultima generazione con fotocamera 108MP e batteria 5000mAh',
    originalPrice: 499.99,
    discountPrice: 299.99,
    discountPercentage: 40,
    affiliateLink: 'https://www.temu.com?referral_code=alc729848',
    imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop',
    storeName: 'Temu',
    storeSlug: 'temu',
    categoryName: 'Elettronica',
    categorySlug: 'elettronica',
    categoryIcon: '📱',
    voteCount: 245,
    viewCount: 1520,
    createdAt: new Date().toISOString(),
    isFeatured: true,
  },
  {
    id: '2',
    title: 'Scarpe Running Premium',
    description: 'Scarpe da running con tecnologia ammortizzante avanzata',
    originalPrice: 129.99,
    discountPrice: 59.99,
    discountPercentage: 54,
    affiliateLink: 'https://www.temu.com?referral_code=alc729848',
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop',
    storeName: 'Temu',
    storeSlug: 'temu',
    categoryName: 'Moda',
    categorySlug: 'moda',
    categoryIcon: '👕',
    voteCount: 189,
    viewCount: 890,
    createdAt: new Date(Date.now() - 86400000).toISOString(),
  },
  {
    id: '3',
    title: 'Set Utensili da Giardino',
    description: 'Kit completo di 20 pezzi per la cura del giardino',
    originalPrice: 79.99,
    discountPrice: 39.99,
    discountPercentage: 50,
    affiliateLink: 'https://www.temu.com?referral_code=alc729848',
    imageUrl: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop',
    storeName: 'Temu',
    storeSlug: 'temu',
    categoryName: 'Casa e Giardino',
    categorySlug: 'casa-giardino',
    categoryIcon: '🏠',
    voteCount: 156,
    viewCount: 720,
    createdAt: new Date(Date.now() - 172800000).toISOString(),
  },
  {
    id: '4',
    title: 'Cuffie Wireless Noise Cancelling',
    description: 'Cuffie Bluetooth con cancellazione del rumore attiva',
    originalPrice: 199.99,
    discountPrice: 89.99,
    discountPercentage: 55,
    affiliateLink: 'https://www.temu.com?referral_code=alc729848',
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
    storeName: 'Temu',
    storeSlug: 'temu',
    categoryName: 'Elettronica',
    categorySlug: 'elettronica',
    categoryIcon: '📱',
    voteCount: 312,
    viewCount: 2100,
    createdAt: new Date(Date.now() - 259200000).toISOString(),
    isFeatured: true,
  },
  {
    id: '5',
    title: 'Borsa in Pelle Vera',
    description: 'Borsa da donna in pelle italiana con tracolla regolabile',
    originalPrice: 249.99,
    discountPrice: 99.99,
    discountPercentage: 60,
    affiliateLink: 'https://www.temu.com?referral_code=alc729848',
    imageUrl: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=300&fit=crop',
    storeName: 'Temu',
    storeSlug: 'temu',
    categoryName: 'Moda',
    categorySlug: 'moda',
    categoryIcon: '👕',
    voteCount: 278,
    viewCount: 1450,
    createdAt: new Date(Date.now() - 345600000).toISOString(),
  },
  {
    id: '6',
    title: 'Kit Cucina Professionale',
    description: 'Set di 15 pentole e padelle antiaderenti di alta qualità',
    originalPrice: 299.99,
    discountPrice: 149.99,
    discountPercentage: 50,
    affiliateLink: 'https://www.temu.com?referral_code=alc729848',
    imageUrl: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
    storeName: 'Temu',
    storeSlug: 'temu',
    categoryName: 'Casa e Giardino',
    categorySlug: 'casa-giardino',
    categoryIcon: '🏠',
    voteCount: 198,
    viewCount: 980,
    createdAt: new Date(Date.now() - 432000000).toISOString(),
  },
  {
    id: '7',
    title: 'Scarpe Casual Slip-on Uomo',
    description: 'Scarpe casual da uomo con slip-on, traforate, traspiranti, leggere, comode, per passeggiate all&apos;aperto e pesca',
    originalPrice: 8.21,
    discountPrice: 0.70,
    discountPercentage: 91,
    affiliateLink: 'https://temu.to/k/e6gpvkeigif',
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop',
    storeName: 'Temu',
    storeSlug: 'temu',
    categoryName: 'Moda',
    categorySlug: 'moda',
    categoryIcon: '👕',
    voteCount: 87,
    viewCount: 450,
    createdAt: new Date().toISOString(),
    isFeatured: true,
  },
  {
    id: '8',
    title: 'Set di 2 Leggings Capri Primavera/Estate',
    description: 'Pantaloni Capri Casual, Pantaloni Stampati Aderenti da Donna',
    originalPrice: 8.32,
    discountPrice: 1.08,
    discountPercentage: 87,
    affiliateLink: 'https://temu.to/k/eul2yodhopz',
    imageUrl: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400&h=300&fit=crop',
    storeName: 'Temu',
    storeSlug: 'temu',
    categoryName: 'Moda',
    categorySlug: 'moda',
    categoryIcon: '👕',
    voteCount: 45,
    viewCount: 280,
    createdAt: new Date().toISOString(),
    isFeatured: true,
  },
  {
    id: '9',
    title: '4 pezzi Gilet Sportivo Estivo da Uomo',
    description: 'T-Shirt Senza Maniche Modellante Ionica, Top Senza Maniche Aderente Traspirante ad Asciugatura Rapida per Fitness da Uomo, Gilet Elastico Aderente per Allenamento, Gilet Compresso per Modellare il Corpo Perfetto per Palestra, Corsa, Basket e Attività all&apos;aperto',
    originalPrice: 8.41,
    discountPrice: 1.38,
    discountPercentage: 84,
    affiliateLink: 'https://temu.to/k/e8mmewwmxa5',
    imageUrl: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=400&h=300&fit=crop',
    storeName: 'Temu',
    storeSlug: 'temu',
    categoryName: 'Moda',
    categorySlug: 'moda',
    categoryIcon: '👕',
    voteCount: 52,
    viewCount: 320,
    createdAt: new Date().toISOString(),
    isFeatured: true,
  },
  {
    id: '10',
    title: 'Giocattolo Stuzzicagatto a Scuotimento Uccellino',
    description: 'Aggeggio interattivo per alleviare la noia degli animali domestici, si scuote automaticamente e produce suoni, realizzato in fibra di poliestere morbida e resistente ai morsi, adatto per esercizio e attività indoor',
    originalPrice: 8.23,
    discountPrice: 0.78,
    discountPercentage: 91,
    affiliateLink: 'https://temu.to/k/elgtwuybmou',
    imageUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=300&fit=crop',
    storeName: 'Temu',
    storeSlug: 'temu',
    categoryName: 'Giocattoli',
    categorySlug: 'giocattoli',
    categoryIcon: '🧸',
    voteCount: 38,
    viewCount: 210,
    createdAt: new Date().toISOString(),
    isFeatured: true,
  },
  {
    id: '11',
    title: 'Coprimoto Oxford di Alta Qualità',
    description: 'Protezione per tutte le stagioni, adatto a vari modelli di veicoli, resistente, nero, sicuro per il deposito della moto, funzione di sicurezza riflettente, copertura resistente ai raggi UV',
    originalPrice: 8.40,
    discountPrice: 1.34,
    discountPercentage: 84,
    affiliateLink: 'https://temu.to/k/evpkfqgspm4',
    imageUrl: '/coprimoto-oxford.png',
    storeName: 'Temu',
    storeSlug: 'temu',
    categoryName: 'Auto e Moto',
    categorySlug: 'auto-moto',
    categoryIcon: '🏍️',
    voteCount: 156,
    viewCount: 890,
    createdAt: new Date().toISOString(),
    isFeatured: true,
  },
]

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="mb-8 rounded-2xl bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 p-8 text-white shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
              <span className="text-2xl">🎯</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Smart Choice Guide</h1>
          </div>
          <p className="mb-6 text-xl text-white/90 max-w-2xl">
            La community italiana di buoni e offerte. Trova le migliori promozioni e risparmia sui tuoi acquisti.
          </p>
          <div className="flex flex-wrap gap-3">
            <Badge variant="secondary" className="bg-white/20 backdrop-blur-sm text-white border-white/30 px-4 py-2 text-sm">
              🔥 {mockDeals.length} Offerte Attive
            </Badge>
            <Badge variant="secondary" className="bg-white/20 backdrop-blur-sm text-white border-white/30 px-4 py-2 text-sm">
              📦 10+ Categorie
            </Badge>
            <Badge variant="secondary" className="bg-white/20 backdrop-blur-sm text-white border-white/30 px-4 py-2 text-sm">
              👥 Community Attiva
            </Badge>
          </div>
        </div>
      </div>

      {/* Temu Affiliate Code Banner */}
      <div className="mb-8 rounded-2xl bg-gradient-to-br from-orange-50 to-red-50 p-6 shadow-lg border border-orange-200">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col items-center gap-4 text-center md:flex-row md:text-left bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex-1">
              <h2 className="mb-2 text-lg font-bold text-orange-800 flex items-center gap-2">
                <span className="text-2xl">🎉</span>
                30% di Sconto - Nuovo Utente
              </h2>
              <p className="text-gray-700">
                Codice: <span className="font-bold text-orange-600">alc729848</span> | 👉 <a href="https://temu.to/k/em1zjzvro9d" target="_blank" rel="noopener noreferrer" className="underline font-bold text-orange-600 hover:text-orange-700">Pacchetto Buoni 100€</a>
              </p>
            </div>
            <button
              onClick={() => navigator.clipboard.writeText('alc729848')}
              className="rounded-xl bg-gradient-to-r from-orange-500 to-red-500 px-6 py-3 font-semibold text-white transition-all hover:scale-105 hover:shadow-lg"
            >
              Copia Codice
            </button>
          </div>
          <div className="flex flex-col items-center gap-4 text-center md:flex-row md:text-left bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex-1">
              <h3 className="mb-2 text-lg font-bold text-green-800 flex items-center gap-2">
                <span className="text-2xl">🎁</span>
                0€ Regali - Solo App
              </h3>
              <p className="text-gray-700">
                Codice: <span className="font-bold text-green-600">alc841951</span> | 👉 <a href="https://temu.to/k/ee88con1vod" target="_blank" rel="noopener noreferrer" className="underline font-bold text-green-600 hover:text-green-700">Attiva ora</a>
              </p>
            </div>
            <button
              onClick={() => navigator.clipboard.writeText('alc841951')}
              className="rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 px-6 py-3 font-semibold text-white transition-all hover:scale-105 hover:shadow-lg"
            >
              Copia Codice
            </button>
          </div>
          <div className="flex flex-col items-center gap-4 text-center md:flex-row md:text-left bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex-1">
              <h3 className="mb-2 text-lg font-bold text-red-800 flex items-center gap-2">
                <span className="text-2xl">💥</span>
                Offerta Esclusiva - Nuovo Utente
              </h3>
              <p className="text-gray-700">
                Codice: <span className="font-bold text-red-600">alb888601</span> | 👉 <a href="https://temu.to/k/emwo7sl9k34" target="_blank" rel="noopener noreferrer" className="underline font-bold text-red-600 hover:text-red-700">Prezzi bassi segreti</a>
              </p>
            </div>
            <button
              onClick={() => navigator.clipboard.writeText('alb888601')}
              className="rounded-xl bg-gradient-to-r from-red-500 to-pink-500 px-6 py-3 font-semibold text-white transition-all hover:scale-105 hover:shadow-lg"
            >
              Copia Codice
            </button>
          </div>
          <div className="flex flex-col items-center gap-4 text-center md:flex-row md:text-left bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex-1">
              <h3 className="mb-2 text-lg font-bold text-purple-800 flex items-center gap-2">
                <span className="text-2xl">💰</span>
                Risparmia alla Grande - Tutti gli Utenti
              </h3>
              <p className="text-gray-700">
                👉 <a href="https://temu.to/k/em1zjzvro9d" target="_blank" rel="noopener noreferrer" className="underline font-bold text-purple-600 hover:text-purple-700">Scopri le offerte</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Deals Section */}
      <Tabs defaultValue="hot" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 md:w-auto md:grid-cols-4">
          <TabsTrigger value="hot">🔥 Popolari</TabsTrigger>
          <TabsTrigger value="new">✨ Nuovi</TabsTrigger>
          <TabsTrigger value="expiring">⏰ In Scadenza</TabsTrigger>
          <TabsTrigger value="temu">🛒 Temu</TabsTrigger>
        </TabsList>

        <TabsContent value="hot" className="space-y-4">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {mockDeals.filter(d => d.isFeatured).map(deal => (
              <DealCard key={deal.id} {...deal} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="new" className="space-y-4">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {mockDeals.map(deal => (
              <DealCard key={deal.id} {...deal} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="expiring" className="space-y-4">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {mockDeals.slice(0, 3).map(deal => (
              <DealCard key={deal.id} {...deal} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="temu" className="space-y-4">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {mockDeals.map(deal => (
              <DealCard key={deal.id} {...deal} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
