import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-violet-600 to-blue-500 text-white">
        <header className="py-6 px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Mahadik Group of Companies</h1>
          <nav className="space-x-4">

            <Link href="/about" className="hover:underline">
              About Us</Link>
            <Link href="/signin" className="hover:underline">
              Signin</Link>
          </nav>
        </header>

        <main className="flex flex-col items-center justify-center text-center px-4 mt-20">
          <h2 className="text-5xl font-extrabold mb-6">Explore the World with Us</h2>
          <p className="text-lg max-w-xl mb-8">
            Discover unforgettable experiences in exotic destinations. Whether you are after adventure or relaxation, Wanderly has the perfect trip.
          </p>

          <Link href="/admin" className="bg-white text-violet-600 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition"
          >
            Book your trip, Dear Admin</Link>
        </main>

        <footer className="text-center py-10 text-sm text-white/70">
          © {new Date().getFullYear()} DevPOLer. All rights reserved.
        </footer>
      </div>
    </>
  );
}
