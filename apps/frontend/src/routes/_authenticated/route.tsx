import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated')({
  beforeLoad: () => {
    const isAuthenticated = true
    if (!isAuthenticated) {
      throw new Error('User is not authenticated')
    }
  },
  component: () => <Outlet />,
})
