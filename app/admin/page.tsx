import { auth } from "@/auth"
import Link from "next/link"
import { SignOutButton } from "@/components/SignOutButton"
import { redirect } from "next/navigation"

export default async function AdminPage() {
  const session = await auth()
  const userRole = (session?.user as any)?.role

  // Redirect non-admin users
  if (userRole !== "admin") {
    redirect("/")
  }

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Admin Panel
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
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Welcome to Admin Panel
            </h2>
            <p className="text-gray-600">
              This page is only accessible to admin users.
            </p>
          </div>

          <div className="rounded-md bg-green-50 p-4 mb-6">
            <h3 className="text-sm font-medium text-green-800">Access Granted</h3>
            <p className="mt-2 text-sm text-green-700">
              You have admin privileges and can access this panel.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Admin Features</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border border-gray-300 bg-white p-4 shadow-sm">
                <h4 className="font-semibold text-gray-900">User Management</h4>
                <p className="mt-1 text-sm text-gray-600">
                  Manage user accounts and permissions
                </p>
              </div>
              <div className="rounded-lg border border-gray-300 bg-white p-4 shadow-sm">
                <h4 className="font-semibold text-gray-900">System Settings</h4>
                <p className="mt-1 text-sm text-gray-600">
                  Configure system-wide settings
                </p>
              </div>
              <div className="rounded-lg border border-gray-300 bg-white p-4 shadow-sm">
                <h4 className="font-semibold text-gray-900">Analytics</h4>
                <p className="mt-1 text-sm text-gray-600">
                  View system analytics and reports
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
