import React, { useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useRouter } from 'next/navigation';

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const auth = useAuth();
  if (!auth) throw new Error("Auth context is undefined");
  const { user, loading } = auth;
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth/login');
    }
  }, [loading, user, router]);

  if (loading) {
    return <div>Loading...</div>; 
  }

  if (!user) {
    return null;
  }

  return <>{children}</>;
} 