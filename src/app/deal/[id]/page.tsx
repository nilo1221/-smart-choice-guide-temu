'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, ExternalLink, ThumbsUp, Eye, Calendar, Store, Tag } from 'lucide-react'

// Mock data - same as page.tsx
const mockDeals = [
  {
    id: '1',
    title: 'Smartphone 5G Offerta Imperdibile',
    description: 'Smartphone di ultima generazione con fotocamera 108MP e batteria 5000mAh',
    originalPrice: 499.99,
    discountPrice: 299.99,
    discountPercentage: 40,
    affiliateLink: 'https://www.temu.com?referral_code=alc729848',
    imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=600&fit=crop',
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
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=600&fit=crop',
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
    imageUrl: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop',
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
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=600&fit=crop',
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
    imageUrl: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&h=600&fit=crop',
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
    imageUrl: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop',
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
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=600&fit=crop',
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
    imageUrl: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&h=600&fit=crop',
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
    imageUrl: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&h=600&fit=crop',
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
    imageUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&h=600&fit=crop',
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
  {
    id: '12',
    title: 'Pacchetto Buoni 100€ - Nuovo Utente',
    description: 'Pacchetto di buoni sconto del valore di 100€ per nuovi utenti Temu. Sconto del 30% sul primo ordine',
    originalPrice: 100.00,
    discountPrice: 70.00,
    discountPercentage: 30,
    affiliateLink: 'https://temu.to/k/em1zjzvro9d',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
    storeName: 'Temu',
    storeSlug: 'temu',
    categoryName: 'Altro',
    categorySlug: 'altro',
    categoryIcon: '📦',
    voteCount: 89,
    viewCount: 520,
    createdAt: new Date().toISOString(),
    isFeatured: true,
  },
  {
    id: '13',
    title: '0€ Regali - Solo App',
    description: 'Ottieni regali gratuiti scaricando l&apos;app Temu. Offerta esclusiva per nuovi utenti',
    originalPrice: 50.00,
    discountPrice: 0.00,
    discountPercentage: 100,
    affiliateLink: 'https://temu.to/k/ee88con1vod',
    imageUrl: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?w=400&h=300&fit=crop',
    storeName: 'Temu',
    storeSlug: 'temu',
    categoryName: 'Altro',
    categorySlug: 'altro',
    categoryIcon: '📦',
    voteCount: 67,
    viewCount: 380,
    createdAt: new Date().toISOString(),
    isFeatured: true,
  },
  {
    id: '14',
    title: 'Scarpe Sportive Casual Uomo con Altezza Aggiunta',
    description: 'Scarpe sportive casual traspiranti con altezza aggiunta, ideali per attività all&apos;aperto, taglia grande, leggere e comode, adatte per allenamento e corsa',
    originalPrice: 25.00,
    discountPrice: 3.50,
    discountPercentage: 86,
    affiliateLink: 'https://temu.to/k/egc4dkb7lcv',
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop',
    storeName: 'Temu',
    storeSlug: 'temu',
    categoryName: 'Sport',
    categorySlug: 'sport',
    categoryIcon: '⚽',
    voteCount: 45,
    viewCount: 290,
    createdAt: new Date().toISOString(),
    isFeatured: true,
  },
  {
    id: '15',
    title: 'Scanner Diagnostico OBD2 Avanzato per Auto',
    description: 'Scanner diagnostico OBD2 avanzato per auto, 10 lingue, compatibile con la maggior parte dei veicoli prodotti dopo il 1996',
    originalPrice: 10.63,
    discountPrice: 1.44,
    discountPercentage: 86,
    affiliateLink: 'https://temu.to/k/eifj2sykiuf',
    imageUrl: '/product-15.png',
    storeName: 'Temu',
    storeSlug: 'temu',
    categoryName: 'Auto e Moto',
    categorySlug: 'auto-moto',
    categoryIcon: '🏍️',
    voteCount: 52,
    viewCount: 310,
    createdAt: new Date().toISOString(),
    isFeatured: true,
  },
]

export default function DealPage({ params }: { params: { id: string } }) {
  const deal = mockDeals.find(d => d.id === params.id)

  if (!deal) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-8 text-3xl font-bold">Offerta Non Trovata</h1>
        <Card className="p-6">
          <p className="text-gray-600 mb-4">L&apos;offerta cercata non esiste.</p>
          <Link href="/">
            <Button>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Torna alla Home
            </Button>
          </Link>
        </Card>
      </div>
    )
  }

  const discount = deal.discountPercentage || (deal.originalPrice && deal.discountPrice 
    ? Math.round(((deal.originalPrice - deal.discountPrice) / deal.originalPrice) * 100) 
    : null)

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Torna alla Home
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image Section */}
        <div className="relative rounded-2xl overflow-hidden bg-gray-100 aspect-square">
          {deal.imageUrl && (
            deal.imageUrl.startsWith('/') ? (
              <img
                src={deal.imageUrl}
                alt={deal.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <Image
                src={deal.imageUrl}
                alt={deal.title}
                fill
                className="object-cover"
                priority
              />
            )
          )}
          {discount && (
            <Badge className="absolute top-4 right-4 bg-orange-500 text-white text-xl font-bold px-4 py-2">
              -{discount}%
            </Badge>
          )}
          {deal.isFeatured && (
            <Badge className="absolute top-4 left-4 bg-red-600 text-white">
              In Evidenza
            </Badge>
          )}
        </div>

        {/* Details Section */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Link href={`/store/${deal.storeSlug}`}>
                <Badge variant="outline" className="text-sm">
                  <Store className="h-3 w-3 mr-1" />
                  {deal.storeName}
                </Badge>
              </Link>
              <Link href={`/category/${deal.categorySlug}`}>
                <Badge variant="secondary" className="text-sm">
                  <Tag className="h-3 w-3 mr-1" />
                  {deal.categoryIcon} {deal.categoryName}
                </Badge>
              </Link>
            </div>

            <h1 className="text-3xl font-bold mb-4">{deal.title}</h1>

            {deal.description && (
              <p className="text-gray-600 text-lg mb-6">{deal.description}</p>
            )}

            <div className="flex items-baseline gap-3 mb-6">
              {deal.originalPrice && (
                <span className="text-2xl text-gray-500 line-through">
                  €{deal.originalPrice.toFixed(2)}
                </span>
              )}
              {deal.discountPrice && (
                <span className="text-4xl font-bold text-green-600">
                  €{deal.discountPrice.toFixed(2)}
                </span>
              )}
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
              <div className="flex items-center gap-2">
                <ThumbsUp className="h-4 w-4" />
                <span>{deal.voteCount} voti</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="h-4 w-4" />
                <span>{deal.viewCount} visualizzazioni</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(deal.createdAt).toLocaleDateString('it-IT')}</span>
              </div>
            </div>

            <Button asChild className="w-full text-lg py-6" size="lg">
              <a href={deal.affiliateLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-5 w-5 mr-2" />
                Vai all&apos;Offerta
              </a>
            </Button>

            <p className="text-xs text-gray-500 text-center">
              Offerta tramite {deal.storeName} - Codice affiliato attivo
            </p>
          </div>

          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-3 text-orange-900">💡 Consigli</h3>
              <ul className="text-sm text-orange-800 space-y-2">
                <li>• Verifica sempre la disponibilità dell&apos;offerta</li>
                <li>• Leggi le recensioni prima di acquistare</li>
                <li>• Confronta i prezzi con altri negozi</li>
                <li>• Usa il codice affiliato per supportare il sito</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
