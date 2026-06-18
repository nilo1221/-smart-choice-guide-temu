import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, ThumbsUp, Eye } from 'lucide-react'

interface DealCardProps {
  id: string
  title: string
  description: string | null
  originalPrice: number | null
  discountPrice: number | null
  discountPercentage: number | null
  affiliateLink: string
  imageUrl: string | null
  storeName: string
  storeSlug: string
  categoryName: string
  categorySlug: string
  categoryIcon: string | null
  voteCount: number
  viewCount: number
  createdAt: string
  isFeatured?: boolean
}

export default function DealCard({
  id,
  title,
  description,
  originalPrice,
  discountPrice,
  discountPercentage,
  affiliateLink,
  imageUrl,
  storeName,
  storeSlug,
  categoryName,
  categorySlug,
  categoryIcon,
  voteCount,
  viewCount,
  createdAt,
  isFeatured = false,
}: DealCardProps) {
  const calculateDiscount = () => {
    if (discountPercentage) return discountPercentage
    if (originalPrice && discountPrice) {
      return Math.round(((originalPrice - discountPrice) / originalPrice) * 100)
    }
    return null
  }

  const discount = calculateDiscount()

  return (
    <Card className={`overflow-hidden hover:shadow-lg transition-shadow ${isFeatured ? 'border-orange-500 border-2' : ''}`}>
      <CardHeader className="p-0">
        {imageUrl && (
          <div className="relative h-48 w-full bg-gray-100">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover"
            />
            {discount && (
              <Badge className="absolute top-2 right-2 bg-orange-500 text-white text-lg font-bold">
                -{discount}%
              </Badge>
            )}
            {isFeatured && (
              <Badge className="absolute top-2 left-2 bg-red-600 text-white">
                In Evidenza
              </Badge>
            )}
          </div>
        )}
      </CardHeader>

      <CardContent className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <Link href={`/store/${storeSlug}`}>
            <Badge variant="outline" className="text-xs">
              {storeName}
            </Badge>
          </Link>
          <Link href={`/category/${categorySlug}`}>
            <Badge variant="secondary" className="text-xs">
              {categoryIcon} {categoryName}
            </Badge>
          </Link>
        </div>

        <Link href={`/deal/${id}`}>
          <h3 className="font-semibold text-lg mb-2 line-clamp-2 hover:text-orange-600 transition-colors">
            {title}
          </h3>
        </Link>

        {description && (
          <p className="text-sm text-gray-600 line-clamp-2 mb-3">
            {description}
          </p>
        )}

        <div className="flex items-center gap-2 mb-3">
          {originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              €{originalPrice.toFixed(2)}
            </span>
          )}
          {discountPrice && (
            <span className="text-xl font-bold text-green-600">
              €{discountPrice.toFixed(2)}
            </span>
          )}
        </div>

        <div className="flex items-center gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <ThumbsUp className="h-4 w-4" />
            <span>{voteCount}</span>
          </div>
          <div className="flex items-center gap-1">
            <Eye className="h-4 w-4" />
            <span>{viewCount}</span>
          </div>
          <span>{new Date(createdAt).toLocaleDateString('it-IT')}</span>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full">
          <a href={affiliateLink} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4 mr-2" />
            Vai all&apos;Offerta
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}
