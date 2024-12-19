import { useState } from 'react';

interface AttendanceStats {
  Weekly: {
    total: number;
    present: number;
    percentage: number;
  };
  overall: {
    total: number;
    present: number;
    percentage: number;
  };
}

const mockStats: AttendanceStats = {
  Weekly: {
    total: 20,
    present: 17,
    percentage: 85
  },
  overall: {
    total: 45,
    present: 40,
    percentage: 89
  }
};

export function useAttendanceStats() {
  const [stats] = useState<AttendanceStats>(mockStats);
  return { stats };
}