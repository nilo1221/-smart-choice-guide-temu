export default function CategoryPage({ params }: { params: { slug: string } }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">
        Categoria: {params.slug.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
      </h1>
      <div className="rounded-xl bg-white p-6 shadow-md">
        <p className="text-gray-600">
          Offerte in questa categoria in arrivo.
        </p>
      </div>
    </div>
  )
}
