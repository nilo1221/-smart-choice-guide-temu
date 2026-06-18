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
]

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="mb-8 rounded-lg bg-gradient-to-r from-orange-500 to-red-600 p-8 text-white">
        <h1 className="mb-2 text-3xl font-bold">Smart Choice Guide</h1>
        <p className="mb-4 text-lg">
          La community italiana di buoni e offerte. Trova le migliori promozioni e risparmia sui tuoi acquisti.
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="bg-white text-orange-600">
            {mockDeals.length} Offerte Attive
          </Badge>
          <Badge variant="secondary" className="bg-white text-orange-600">
            10+ Categorie
          </Badge>
          <Badge variant="secondary" className="bg-white text-orange-600">
            Community Attiva
          </Badge>
        </div>
      </div>

      {/* Temu Affiliate Code Banner */}
      <div className="mb-8 rounded-lg border-2 border-orange-500 bg-orange-50 p-6">
        <div className="flex flex-col items-center gap-4 text-center md:flex-row md:text-left">
          <div className="flex-1">
            <h2 className="mb-2 text-xl font-bold text-orange-800">
              Codice Affiliato Temu Esclusivo
            </h2>
            <p className="text-orange-700">
              Usa il codice <span className="font-bold">alc729848</span> per ottenere il 30% di sconto sul tuo primo ordine!
            </p>
          </div>
          <button
            onClick={() => navigator.clipboard.writeText('alc729848')}
            className="rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-orange-600"
          >
            Copia Codice
          </button>
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
