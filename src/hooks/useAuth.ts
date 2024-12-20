import { useState } from 'react';
import { Student } from '../types';

const mockUser: Student = {
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  studentId: 'STU001'
};

export function useAuth() {
  const [user, setUser] = useState<Student | null>(null);

  const signUp = async (data: { name: string; email: string; password: string }) => {
    // Mock signup - in a real app, this would make an API call
    setUser({ ...mockUser, name: data.name, email: data.email });
  };

  const signIn = async (data: { email: string; password: string }) => {
    // Mock signin - in a real app, this would make an API call
    setUser(mockUser);
  };

  const logout = () => {
    setUser(null);
  };

  return { user, signUp, signIn, logout };
}