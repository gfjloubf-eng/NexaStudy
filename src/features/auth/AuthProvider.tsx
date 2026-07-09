import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <main
      dir="rtl"
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '24px',
      }}
    >
      <Outlet />
    </main>
  )
}