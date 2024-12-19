import React from 'react';
import { Student } from '../../types';
import { DashboardHeader } from './DashboardHeader';
import { AttendanceStats } from './AttendanceStats';
import { OngoingClass } from './OngoingClass';
import { UpcomingClasses } from './UpcomingClasses';
import { PastClasses } from './PastClasses';

interface DashboardFrameProps {
  user: Student | null;
}

export function DashboardFrame({ user }: DashboardFrameProps) {
  if (!user) return null;

  return (
    <div className="h-full bg-gray-900 text-white overflow-y-auto">
      <DashboardHeader user={user} />
      <div className="p-4 space-y-6">
        <AttendanceStats />
        <OngoingClass />
        <UpcomingClasses />
        <PastClasses />
      </div>
    </div>
  );
}