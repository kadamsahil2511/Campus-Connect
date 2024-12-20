import React, { useState } from 'react';
import { Student } from '../../types';
import { NotificationBadge } from '../notifications/NotificationBadge';
import { NotificationList } from '../notifications/NotificationList';
import { useNotifications } from '../../hooks/useNotifications';
import { useAcademicPerformance } from '../../hooks/useAcademicPerformance';
import { AcademicPerformanceModal } from '../profile/AcademicPerformanceModal';
import { User } from 'lucide-react';

interface DashboardHeaderProps {
  user: Student;
}

export function DashboardHeader({ user }: DashboardHeaderProps) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showPerformance, setShowPerformance] = useState(false);
  const { notifications, unreadCount, markAsRead, clearNotification } = useNotifications();
  const { performance } = useAcademicPerformance();

  return (
    <>
      <div className="bg-black p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setShowPerformance(true)}
            className="relative group"
          >
            <div className="w-10 h-10 rounded-full border border-gray-700 bg-gray-800 
                          flex items-center justify-center transition-colors 
                          group-hover:bg-gray-700">
              <User className="w-5 h-5 text-gray-400" />
            </div>
            <div className="absolute inset-0 rounded-full bg-black/50 opacity-0 
                          group-hover:opacity-100 transition-opacity flex items-center 
                          justify-center text-xs text-white">
              View Stats
            </div>
          </button>
          <div>
            <h2 className="font-semibold">Welcome back,</h2>
            <p className="text-sm text-gray-300">{user.name}</p>
          </div>
        </div>
        
        <NotificationBadge 
          count={unreadCount}
          onClick={() => setShowNotifications(!showNotifications)}
        />
      </div>

      {showNotifications && (
        <NotificationList
          notifications={notifications}
          onMarkAsRead={markAsRead}
          onClear={clearNotification}
          onClose={() => setShowNotifications(false)}
        />
      )}

      {showPerformance && (
        <AcademicPerformanceModal
          performance={performance}
          onClose={() => setShowPerformance(false)}
        />
      )}
    </>
  );
}