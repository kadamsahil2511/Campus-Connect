import { useState } from 'react';
import { AcademicPerformance } from '../types';

const mockPerformance: AcademicPerformance = {
  gpa: 3.8,
  rank: 5,
  totalStudents: 120,
  semesterProgress: 65,
  attendanceRate: 92,
  subjects: [
    {
      id: '1',
      name: 'Advanced Mathematics',
      grade: 'A',
      score: 92,
      average: 78,
      highest: 95,
      trend: 'up',
      assignments: {
        completed: 8,
        total: 10
      }
    },
    {
      id: '2',
      name: 'Computer Science',
      grade: 'A-',
      score: 88,
      average: 75,
      highest: 92,
      trend: 'stable',
      assignments: {
        completed: 6,
        total: 8
      }
    },
    {
      id: '3',
      name: 'Physics',
      grade: 'B+',
      score: 85,
      average: 72,
      highest: 90,
      trend: 'up',
      assignments: {
        completed: 7,
        total: 9
      }
    }
  ],
  strengths: [
    'Excellent problem-solving skills',
    'Strong mathematical foundation',
    'Consistent performance in assignments'
  ],
  areasToImprove: [
    'Class participation could be increased',
    'More regular submission of assignments',
    'Group project engagement'
  ]
};

export function useAcademicPerformance() {
  const [performance] = useState<AcademicPerformance>(mockPerformance);
  return { performance };
} 