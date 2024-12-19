import { useState } from 'react';
import { Notification } from '../types';

const mockNotifications: Notification[] = [
  {
    id: '1',
    title: 'Class Rescheduled',
    message: 'Advanced Mathematics class has been moved to Room 102',
    type: 'info',
    timestamp: new Date('2024-03-20T09:00:00'),
    read: false
  },
  {
    id: '2',
    title: 'Attendance Updated',
    message: 'Your attendance for Database Systems has been marked',
    type: 'success',
    timestamp: new Date('2024-03-19T14:30:00'),
    read: false
  }
];

export function useNotifications() {
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications);

  const markAsRead = (id: string) => {
    setNotifications(prev =>
      prev.map(notif =>
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev =>
      prev.map(notif => ({ ...notif, read: true }))
    );
  };

  const clearNotification = (id: string) => {
    setNotifications(prev =>
      prev.filter(notif => notif.id !== id)
    );
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return {
    notifications,
    unreadCount,
    markAsRead,
    markAllAsRead,
    clearNotification
  };
}