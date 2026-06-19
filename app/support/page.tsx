

export const metadata = {
  title: "Support | Mipee",
  description: "Få hjelp og svar på vanlige spørsmål.",
};

export default function SupportPage() {
  const contactEmail = "din.epost@eksempel.no";

  const faqs = [
    {
      question: "Hva er Mipee?",
      answer: "Mipee er et spennende nytt prosjekt som er under utvikling. Følg med for flere oppdateringer!"
    },
    {
      question: "Koster det penger å bruke nettsiden?",
      answer: "Nei, Mipee er helt gratis å bruke for alle."
    },
    {
      question: "Hvordan kan jeg rapportere en feil?",
      answer: "Hvis du opplever problemer, setter vi stor pris på om du sender oss en e-post med en beskrivelse av feilen."
    }
  ];

  return (
    <main className="max-w-3xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-4">Support & Hjelp</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-12 text-lg transition-colors">
        Velkommen til supportsiden vår. Her finner du svar på vanlige spørsmål og informasjon om hvordan du kontakter oss.
      </p>

      <section className="mb-16 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-2xl p-8 transition-colors duration-300">
        <h2 className="text-2xl font-semibold mb-3">Kontakt oss</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6 transition-colors">
          Finner du ikke det du leter etter i listen under? Send oss en e-post, så hjelper vi deg så fort vi kan!
        </p>
        <a 
          href={`mailto:${contactEmail}`} 
          className="inline-block bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-xl font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-200"
        >
          Send e-post til {contactEmail}
        </a>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Ofte stilte spørsmål (FAQ)</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:border-gray-300 dark:hover:border-gray-600 transition-colors duration-200">
              <h3 className="text-lg font-medium mb-2">{faq.question}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed transition-colors">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}