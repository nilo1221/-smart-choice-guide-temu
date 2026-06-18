export default function CategoriesPage() {
  const categories = [
    { name: 'Elettronica', slug: 'elettronica', icon: '📱' },
    { name: 'Moda', slug: 'moda', icon: '👕' },
    { name: 'Casa e Giardino', slug: 'casa-giardino', icon: '🏠' },
    { name: 'Alimentari', slug: 'alimentari', icon: '🍎' },
    { name: 'Sport', slug: 'sport', icon: '⚽' },
    { name: 'Viaggi', slug: 'viaggi', icon: '✈️' },
    { name: 'Bellezza', slug: 'bellezza', icon: '💄' },
    { name: 'Giocattoli', slug: 'giocattoli', icon: '🧸' },
    { name: 'Libri', slug: 'libri', icon: '📚' },
    { name: 'Altro', slug: 'altro', icon: '📦' },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">Categorie</h1>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {categories.map((category) => (
          <a
            key={category.slug}
            href={`/category/${category.slug}`}
            className="flex flex-col items-center gap-2 rounded-xl bg-white p-6 shadow-md transition-all hover:scale-105 hover:shadow-lg"
          >
            <span className="text-4xl">{category.icon}</span>
            <span className="font-semibold text-center">{category.name}</span>
          </a>
        ))}
      </div>
    </div>
  )
}
