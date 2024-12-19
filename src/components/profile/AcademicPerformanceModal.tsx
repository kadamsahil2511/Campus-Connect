import React from 'react';
import { X, TrendingUp, TrendingDown, Minus, Award, Target, BookOpen } from 'lucide-react';
import { AcademicPerformance, SubjectPerformance } from '../../types';

interface AcademicPerformanceModalProps {
  performance: AcademicPerformance;
  onClose: () => void;
}

function SubjectCard({ subject }: { subject: SubjectPerformance }) {
  const getTrendIcon = (trend: 'up' | 'down' | 'stable') => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="w-4 h-4 text-green-400" />;
      case 'down':
        return <TrendingDown className="w-4 h-4 text-red-400" />;
      default:
        return <Minus className="w-4 h-4 text-gray-400" />;
    }
  };

  return (
    <div className="bg-gray-800/50 rounded-lg p-4">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h4 className="font-medium">{subject.name}</h4>
          <p className="text-sm text-gray-400">Grade: {subject.grade}</p>
        </div>
        {getTrendIcon(subject.trend)}
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Score</span>
          <span>{subject.score}%</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Class Average</span>
          <span>{subject.average}%</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Assignments</span>
          <span>{subject.assignments.completed}/{subject.assignments.total}</span>
        </div>
      </div>
    </div>
  );
}

export function AcademicPerformanceModal({ performance, onClose }: AcademicPerformanceModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative mt-16 w-full max-w-lg mx-4 bg-gray-900/95 rounded-xl shadow-2xl 
                      border border-gray-800 backdrop-blur-md overflow-hidden">
        <div className="sticky top-0 bg-gray-900/90 backdrop-blur-md border-b border-gray-800 
                      p-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold">Academic Performance</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-800 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="max-h-[calc(100vh-8rem)] overflow-y-auto p-4 space-y-6">
          {/* Overview Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gray-800/50 rounded-lg p-3 text-center">
              <Award className="w-5 h-5 mx-auto mb-1 text-yellow-400" />
              <div className="text-2xl font-bold">{performance.gpa}</div>
              <div className="text-xs text-gray-400">GPA</div>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-3 text-center">
              <Target className="w-5 h-5 mx-auto mb-1 text-blue-400" />
              <div className="text-2xl font-bold">#{performance.rank}</div>
              <div className="text-xs text-gray-400">Class Rank</div>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-3 text-center">
              <BookOpen className="w-5 h-5 mx-auto mb-1 text-green-400" />
              <div className="text-2xl font-bold">{performance.attendanceRate}%</div>
              <div className="text-xs text-gray-400">Attendance</div>
            </div>
          </div>

          {/* Subjects */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Subject Performance</h3>
            <div className="space-y-3">
              {performance.subjects.map(subject => (
                <SubjectCard key={subject.id} subject={subject} />
              ))}
            </div>
          </div>

          {/* Strengths & Areas to Improve */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-3">Strengths</h3>
              <ul className="space-y-2">
                {performance.strengths.map((strength, index) => (
                  <li key={index} className="text-sm text-gray-300 flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1.5" />
                    {strength}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Areas to Improve</h3>
              <ul className="space-y-2">
                {performance.areasToImprove.map((area, index) => (
                  <li key={index} className="text-sm text-gray-300 flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-1.5" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 