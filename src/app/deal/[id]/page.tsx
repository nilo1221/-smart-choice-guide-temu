export default function DealPage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">Dettaglio Offerta</h1>
      <div className="rounded-xl bg-white p-6 shadow-md">
        <p className="text-gray-600">
          Dettagli dell&apos;offerta #{params.id} in arrivo.
        </p>
      </div>
    </div>
  )
}
