export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">Privacy Policy</h1>
      <div className="rounded-xl bg-white p-6 shadow-md">
        <p className="mb-4 text-gray-600">
          La tua privacy è importante per noi. Ecco come proteggiamo i tuoi dati:
        </p>
        <ul className="mb-4 list-inside list-disc space-y-2 text-gray-600">
          <li>Raccogliamo solo i dati necessari per il funzionamento del sito</li>
          <li>Non vendiamo i tuoi dati a terze parti</li>
          <li>Utilizziamo cookie per migliorare l'esperienza utente</li>
          <li>Puoi richiedere la cancellazione dei tuoi dati in qualsiasi momento</li>
        </ul>
        <p className="text-gray-600">
          Per domande sulla privacy, contattaci.
        </p>
      </div>
    </div>
  )
}
