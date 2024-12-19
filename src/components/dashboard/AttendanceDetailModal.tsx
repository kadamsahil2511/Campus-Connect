import React from 'react';
import { X, Calendar, Clock, CheckCircle, XCircle } from 'lucide-react';
import { Class } from '../../types';

interface AttendanceDetailModalProps {
  title: 'Weekly' | 'Overall';
  classes: Class[];
  stats: {
    total: number;
    present: number;
    percentage: number;
  };
  onClose: () => void;
}

function AttendanceClassCard({ class_ }: { class_: Class }) {
  const isPresent = class_.attendance === 'present';
  
  return (
    <div className="bg-gray-800/50 rounded-lg p-4">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h4 className="font-medium">{class_.name}</h4>
            {class_.attendance && (
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium
                ${isPresent ? 'bg-green-400/10 text-green-400' : 'bg-red-400/10 text-red-400'}`}>
                {isPresent ? 'Present' : 'Absent'}
              </span>
            )}
          </div>
          <div className="space-y-1">
            <div className="flex items-center text-sm text-gray-400">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{class_.date}</span>
            </div>
            <div className="flex items-center text-sm text-gray-400">
              <Clock className="w-4 h-4 mr-2" />
              <span>{class_.time}</span>
            </div>
          </div>
        </div>
        {class_.attendance && (
          <div className="ml-4">
            {isPresent ? (
              <CheckCircle className="w-6 h-6 text-green-400" />
            ) : (
              <XCircle className="w-6 h-6 text-red-400" />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export function AttendanceDetailModal({ title, classes, stats, onClose }: AttendanceDetailModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative mt-16 w-full max-w-lg mx-4 bg-gray-900/95 rounded-xl shadow-2xl 
                      border border-gray-800 backdrop-blur-md overflow-hidden">
        <div className="sticky top-0 bg-gray-900/90 backdrop-blur-md border-b border-gray-800 
                      p-4 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold">{title} Attendance</h2>
            <p className="text-sm text-gray-400">
              Present in {stats.present} out of {stats.total} classes ({stats.percentage}%)
            </p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-800 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="max-h-[calc(100vh-8rem)] overflow-y-auto p-4">
          <div className="space-y-3">
            {classes.map(class_ => (
              <AttendanceClassCard key={class_.id} class_={class_} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 