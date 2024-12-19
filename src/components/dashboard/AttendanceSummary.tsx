import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

export function AttendanceSummary() {
  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-4">Attendance Summary</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center space-x-2">
          <CheckCircle className="w-5 h-5 text-green-400" />
          <div>
            <p className="text-2xl font-bold">85%</p>
            <p className="text-sm text-gray-400">Present</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <XCircle className="w-5 h-5 text-red-400" />
          <div>
            <p className="text-2xl font-bold">15%</p>
            <p className="text-sm text-gray-400">Absent</p>
          </div>
        </div>
      </div>
    </div>
  );
}