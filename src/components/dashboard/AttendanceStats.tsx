import React, { useState } from 'react';
import { useAttendanceStats } from '../../hooks/useAttendanceStats';
import { useAttendanceDetails } from '../../hooks/useAttendanceDetails';
import { CircularProgress } from '../shared/CircularProgress';
import { AttendanceDetailModal } from './AttendanceDetailModal';

export function AttendanceStats() {
  const { stats } = useAttendanceStats();
  const { details } = useAttendanceDetails();
  const [showDetail, setShowDetail] = useState<'Weekly' | 'Overall' | null>(null);
  
  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <div 
          className="bg-gray-800 p-4 rounded-lg cursor-pointer hover:bg-gray-700 transition-colors"
          onClick={() => setShowDetail('Weekly')}
        >
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold">Weekly</h3>
            <span className="text-sm text-gray-400">{stats.Weekly.total} classes</span>
          </div>
          <CircularProgress 
            percentage={stats.Weekly.percentage} 
            size={80}
            strokeWidth={8}
          />
        </div>
        <div 
          className="bg-gray-800 p-4 rounded-lg cursor-pointer hover:bg-gray-700 transition-colors"
          onClick={() => setShowDetail('Overall')}
        >
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold">Overall</h3>
            <span className="text-sm text-gray-400">{stats.overall.total} classes</span>
          </div>
          <CircularProgress 
            percentage={stats.overall.percentage} 
            size={80}
            strokeWidth={8}
          />
        </div>
      </div>

      {showDetail && (
        <AttendanceDetailModal
          title={showDetail}
          classes={showDetail === 'Weekly' ? details.weekly.classes : details.overall.classes}
          stats={showDetail === 'Weekly' ? details.weekly.stats : details.overall.stats}
          onClose={() => setShowDetail(null)}
        />
      )}
    </>
  );
}