'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function AddDealPage() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    originalPrice: '',
    discountPrice: '',
    affiliateLink: '',
    imageUrl: '',
    category: 'elettronica',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // For now, just log the data
    console.log('New deal:', formData)
    
    // In the future, this will save to Supabase
    alert('Offerta aggiunta! (In futuro verrà salvata nel database)')
    
    // Reset form
    setFormData({
      title: '',
      description: '',
      originalPrice: '',
      discountPrice: '',
      affiliateLink: '',
      imageUrl: '',
      category: 'elettronica',
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/">
        <Button variant="ghost" className="mb-4">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Torna alla Home
        </Button>
      </Link>

      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Aggiungi Nuova Offerta</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Titolo *</label>
              <Input
                placeholder="Es. Smartphone 5G Offerta Imperdibile"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Descrizione</label>
              <Textarea
                placeholder="Descrizione dettagliata del prodotto..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={3}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Prezzo Originale</label>
                <Input
                  type="number"
                  step="0.01"
                  placeholder="99.99"
                  value={formData.originalPrice}
                  onChange={(e) => setFormData({ ...formData, originalPrice: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Prezzo Scontato *</label>
                <Input
                  type="number"
                  step="0.01"
                  placeholder="49.99"
                  value={formData.discountPrice}
                  onChange={(e) => setFormData({ ...formData, discountPrice: e.target.value })}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Link Affiliato *</label>
              <Input
                placeholder="https://www.temu.com?referral_code=alc729848"
                value={formData.affiliateLink}
                onChange={(e) => setFormData({ ...formData, affiliateLink: e.target.value })}
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                Assicurati di includere il tuo codice affiliato: alc729848
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">URL Immagine</label>
              <Input
                placeholder="https://example.com/image.jpg"
                value={formData.imageUrl}
                onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Categoria</label>
              <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="elettronica">📱 Elettronica</SelectItem>
                  <SelectItem value="moda">👕 Moda</SelectItem>
                  <SelectItem value="casa-giardino">🏠 Casa e Giardino</SelectItem>
                  <SelectItem value="alimentari">🍎 Alimentari</SelectItem>
                  <SelectItem value="sport">⚽ Sport</SelectItem>
                  <SelectItem value="viaggi">✈️ Viaggi</SelectItem>
                  <SelectItem value="bellezza">💄 Bellezza</SelectItem>
                  <SelectItem value="giocattoli">🧸 Giocattoli</SelectItem>
                  <SelectItem value="libri">📚 Libri</SelectItem>
                  <SelectItem value="altro">📦 Altro</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button type="submit" className="w-full">
              Aggiungi Offerta
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
