import { type PropsWithChildren } from 'react';
import { Navigate } from 'react-router';
import { useAuthStore } from '@/admin/store/auth.store';

export const AuthenticatedRoute = ({ children }: PropsWithChildren) => {
  const { authStatus } = useAuthStore();

  if (authStatus === 'checking') return null;

  if (authStatus === 'unauthenticated') return <Navigate to="/auth/login" />;

  return children;
};

export const NotAuthenticatedRoute = ({ children }: PropsWithChildren) => {
  const { authStatus } = useAuthStore();

  if (authStatus === 'checking') return null;

  if (authStatus === 'authenticated') return <Navigate to="/" />;

  return children;
};

export const AdminRoute = ({ children }: PropsWithChildren) => {
  const { authStatus, user } = useAuthStore();

  if (authStatus === 'checking') return null;

  if (authStatus === 'unauthenticated') return <Navigate to="/auth/login" />;

  if (!user?.roles.includes('admin')) return <Navigate to="/" />; // TODO: deberia utilizar isAdmin()

  return children;
};
