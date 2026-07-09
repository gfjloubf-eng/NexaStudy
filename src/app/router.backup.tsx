 import { Navigate, createBrowserRouter } from 'react-router-dom'

import { AppLayout } from '../layouts/AppLayout'
import { AuthLayout } from '../layouts/AuthLayout'
import { AuthGuard } from '../guards/AuthGuard'

import { HomePage } from '../features/home/HomePage'
import { LoginPage } from '../features/auth/LoginPage'
import { RegisterPage } from '../features/auth/RegisterPage'
import { ForgotPasswordPage } from '../features/auth/ForgotPasswordPage'
import { DashboardPage } from '../features/dashboard/DashboardPage'
import { CoursesPage } from '../features/dashboard/CoursesPage'
import { ExamsPage } from '../features/dashboard/ExamsPage'
import { AssignmentsPage } from '../features/dashboard/AssignmentsPage'
import { SettingsPage } from '../features/dashboard/SettingsPage'
import { NotFoundPage } from '../features/not-found/NotFoundPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [{ index: true, element: <HomePage /> }],
  },
  {
    path: 'login',
    element: <AuthLayout />,
    children: [{ index: true, element: <LoginPage /> }],
  },
  {
    path: 'register',
    element: <AuthLayout />,
    children: [{ index: true, element: <RegisterPage /> }],
  },
  {
    path: 'forgot-password',
    element: <AuthLayout />,
    children: [{ index: true, element: <ForgotPasswordPage /> }],
  },
  {
    path: 'dashboard',
    element: <AuthGuard />,
    children: [{ index: true, element: <DashboardPage /> }],
  },
  {
    path: 'courses',
    element: <AuthGuard />,
    children: [{ index: true, element: <CoursesPage /> }],
  },
  {
    path: 'exams',
    element: <AuthGuard />,
    children: [{ index: true, element: <ExamsPage /> }],
  },
  {
    path: 'assignments',
    element: <AuthGuard />,
    children: [{ index: true, element: <AssignmentsPage /> }],
  },
  {
    path: 'settings',
    element: <AuthGuard />,
    children: [{ index: true, element: <SettingsPage /> }],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])

export function RouterOutlet() {
  return <Navigate to="/" replace />
}