export default function StorePage({ params }: { params: { slug: string } }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">
        Negozio: {params.slug.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
      </h1>
      <div className="rounded-xl bg-white p-6 shadow-md">
        <p className="text-gray-600">
          Offerte di questo negozio in arrivo.
        </p>
      </div>
    </div>
  )
}
