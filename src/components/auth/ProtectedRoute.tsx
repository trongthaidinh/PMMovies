import React, { useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useRouter } from 'next/navigation';

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const auth = useAuth();
  if (!auth) throw new Error("Auth context is undefined");
  const { user, isLoading } = auth;
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/auth/login');
    }
  }, [isLoading, user, router]);

  if (isLoading) {
    return <div>Loading...</div>; 
  }

  if (!user) {
    return null;
  }

  return <>{children}</>;
} 