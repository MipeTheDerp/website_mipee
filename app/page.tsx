
export const metadata = {
  title: "Mipee - Home", // <-- Bytt ut "Create Next App" med det du vil at skal stå i fanen!
  description: "Velkommen til min nye nettside", // Du kan også endre denne hvis du vil
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">

      {/* MAIN PAGE CONTENT */}
      <div className="p-10">
        <h1 className="text-4xl font-extrabold mb-4">Welcome Home!👋</h1>
        <p className="text-lg text-gray-600">
          Look at that top bar!
        </p>
      </div>

    </main>
  );
}
