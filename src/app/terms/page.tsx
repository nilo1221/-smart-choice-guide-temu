export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">Termini di Servizio</h1>
      <div className="rounded-xl bg-white p-6 shadow-md">
        <p className="mb-4 text-gray-600">
          Benvenuto su Smart Choice Guide. Utilizzando il nostro sito, accetti i seguenti termini:
        </p>
        <ul className="mb-4 list-inside list-disc space-y-2 text-gray-600">
          <li>Le informazioni sulle offerte sono fornite a scopo informativo</li>
          <li>Non siamo responsabili per la disponibilità delle offerte</li>
          <li>Utilizziamo link affiliati per sostenere il nostro servizio</li>
          <li>È vietato l&apos;uso improprio del sito</li>
        </ul>
        <p className="text-gray-600">
          Per ulteriori informazioni, contattaci.
        </p>
      </div>
    </div>
  )
}
