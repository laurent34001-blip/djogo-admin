import { auth } from "@/auth"
import Link from "next/link"
import { SignOutButton } from "@/components/SignOutButton"

export default async function ProfilePage() {
  const session = await auth()

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Profile
            </h1>
            <div className="flex gap-4">
              <Link
                href="/"
                className="rounded-md bg-gray-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500"
              >
                Back to Dashboard
              </Link>
              <SignOutButton />
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-white p-6 shadow">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            User Profile
          </h2>

          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Personal Information
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <p className="mt-1 text-sm text-gray-900">
                    {session?.user?.name}
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <p className="mt-1 text-sm text-gray-900">
                    {session?.user?.email}
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Role
                  </label>
                  <p className="mt-1 text-sm text-gray-900">
                    {session?.user?.role}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Account Settings
              </h3>
              <div className="space-y-4">
                <button className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 disabled:opacity-50">
                  Update Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
