export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">Chi Siamo</h1>
      
      <div className="mb-8 rounded-xl bg-white p-6 shadow-md">
        <p className="mb-4 text-gray-600">
          Smart Choice Guide è la community italiana dedicata ai buoni e alle offerte.
        </p>
        <p className="mb-4 text-gray-600">
          Il nostro obiettivo è aiutarti a risparmiare sui tuoi acquisti condividendo le migliori promozioni disponibili online.
        </p>
        <p className="text-gray-600">
          Collaboriamo con i migliori negozi e piattaforme di e-commerce per offrirti sconti esclusivi e codici promozionali.
        </p>
      </div>

      <div className="rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 p-6 shadow-md border border-green-200">
        <h2 className="mb-4 text-2xl font-bold text-green-800 flex items-center gap-2">
          <span className="text-3xl">🌳</span>
          Programma &ldquo;Pianta un Albero&rdquo; con Temu
        </h2>
        
        <p className="mb-4 text-gray-700">
          Temu ha stretto una partnership con <strong>Trees for the Future</strong> per finanziare un programma per piantare alberi nell&apos;Africa subsahariana dal luglio 2023.
        </p>
        
        <div className="mb-4 rounded-lg bg-white p-4 shadow-sm">
          <p className="mb-2 text-lg font-bold text-green-600">
            26.779.485 alberi finanziati*
          </p>
          <p className="text-sm text-gray-600">
            * Finanziati dagli utenti che donano cliccando su &ldquo;Fai una donazione con Temu&rdquo; al momento del pagamento.
          </p>
        </div>

        <h3 className="mb-2 text-lg font-semibold text-green-800">Come funziona</h3>
        <p className="mb-4 text-gray-700">
          Quando sei pronto a effettuare un ordine, seleziona la casella &ldquo;Fai una donazione con Temu&rdquo; al momento dell&apos;acquisto. Ti invitiamo a donare 0,31€ per finanziare un albero.
        </p>

        <h3 className="mb-2 text-lg font-semibold text-green-800">Distribuzione dei costi</h3>
        <ul className="mb-4 space-y-1 text-gray-700">
          <li>• 52% del costo sostiene direttamente le attività di piantumazione sul campo</li>
          <li>• 22% è destinato a semi, piantine e strumenti agricoli essenziali</li>
          <li>• 30% è destinato alla formazione degli agricoltori e al supporto sul campo</li>
          <li>• 12% per la valutazione dei progetti e i costi operativi</li>
          <li>• 36% per il supporto fornito dai team nazionali e globali</li>
        </ul>

        <p className="mb-4 text-sm text-gray-600">
          In media, circa l&apos;80% degli alberi piantati sopravvivono nei quattro anni successivi alla distribuzione delle sementi.
        </p>

        <a
          href="https://temu.to/k/em1zjzvro9d"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 px-6 py-3 font-semibold text-white transition-all hover:scale-105 hover:shadow-lg"
        >
          Scopri di più su Trees for the Future
        </a>
      </div>
    </div>
  )
}
