import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-12rem)] flex items-center justify-center bg-gradient-to-br from-primary-50 to-stone-100">
      <div className="container text-center">
        <h1 className="text-6xl md:text-8xl font-bold font-heading text-primary-900 mb-4">
          404
        </h1>
        <h2 className="text-2xl md:text-4xl font-heading text-secondary-700 mb-6">
          Page Not Found
        </h2>
        <p className="text-lg text-secondary-600 mb-8 max-w-md mx-auto">
          Sorry, the page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-3 bg-accent-500 text-white font-semibold rounded-lg hover:bg-accent-600 transition-smooth shadow-lg"
        >
          Return to Home
        </Link>
      </div>
    </div>
  )
}
