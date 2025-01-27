import Link from "next/link";

export default async function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-text-primary">
      <main className="flex flex-col items-center mt-12 space-y-6">
        <h2 className="text-4xl font-bold">404</h2>
        <p className="text-lg text-text-primary">
          Oops! The page you are looking for does nott exist.
        </p>
        <div className="flex justify-center">
          <Link
            href="/"
            className="px-4 py-2 text-white bg-gray-medium rounded-lg shadow hover:bg-gray-dark"
          >
            Go Back Home
          </Link>
        </div>
      </main>
    </div>
  );
}
