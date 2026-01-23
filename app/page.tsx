import { auth } from "@/auth"
import Link from "next/link"
import { SignOutButton } from "@/components/SignOutButton"

export default async function Home() {
  const session = await auth()

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Dashboard
            </h1>
            <SignOutButton />
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-white p-6 shadow">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Welcome, {session?.user?.name}!
          </h2>
          
          <div className="space-y-4">
            <div className="rounded-md bg-blue-50 p-4">
              <h3 className="text-sm font-medium text-blue-800">User Information</h3>
              <div className="mt-2 text-sm text-blue-700">
                <p><strong>Email:</strong> {session?.user?.email}</p>
                <p><strong>Role:</strong> {session?.user?.role}</p>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Quick Links</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <Link
                  href="/admin"
                  className="rounded-lg border border-gray-300 bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
                >
                  <h4 className="font-semibold text-gray-900">Admin Panel</h4>
                  <p className="mt-1 text-sm text-gray-600">
                    Access admin-only features
                  </p>
                </Link>
                <Link
                  href="/profile"
                  className="rounded-lg border border-gray-300 bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
                >
                  <h4 className="font-semibold text-gray-900">Profile</h4>
                  <p className="mt-1 text-sm text-gray-600">
                    View and manage your profile
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
