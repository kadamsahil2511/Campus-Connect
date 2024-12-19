import { useState } from 'react';
import { Class } from '../types';

interface AttendanceDetails {
  weekly: {
    classes: Class[];
    stats: {
      total: number;
      present: number;
      percentage: number;
    };
  };
  overall: {
    classes: Class[];
    stats: {
      total: number;
      present: number;
      percentage: number;
    };
  };
}

const mockWeeklyClasses: Class[] = [
  {
    id: 'w1',
    name: 'Advanced Mathematics',
    instructor: 'Dr. Smith',
    room: '101',
    time: '09:00 AM',
    date: '2024-03-18',
    description: 'Complex analysis',
    startTime: new Date('2024-03-18T09:00:00'),
    endTime: new Date('2024-03-18T10:30:00'),
    status: 'completed',
    attendance: 'present'
  },
  {
    id: 'w2',
    name: 'Computer Science',
    instructor: 'Prof. Johnson',
    room: '205',
    time: '11:00 AM',
    date: '2024-03-19',
    description: 'Data structures',
    startTime: new Date('2024-03-19T11:00:00'),
    endTime: new Date('2024-03-19T12:30:00'),
    status: 'completed',
    attendance: 'present'
  },
  {
    id: 'w3',
    name: 'Physics',
    instructor: 'Dr. Wilson',
    room: '302',
    time: '02:00 PM',
    date: '2024-03-20',
    description: 'Quantum mechanics',
    startTime: new Date('2024-03-20T14:00:00'),
    endTime: new Date('2024-03-20T15:30:00'),
    status: 'completed',
    attendance: 'absent'
  }
];

const mockOverallClasses: Class[] = [
  ...mockWeeklyClasses,
  {
    id: 'o1',
    name: 'Advanced Mathematics',
    instructor: 'Dr. Smith',
    room: '101',
    time: '09:00 AM',
    date: '2024-03-11',
    description: 'Differential equations',
    startTime: new Date('2024-03-11T09:00:00'),
    endTime: new Date('2024-03-11T10:30:00'),
    status: 'completed',
    attendance: 'present'
  },
  {
    id: 'o2',
    name: 'Computer Science',
    instructor: 'Prof. Johnson',
    room: '205',
    time: '11:00 AM',
    date: '2024-03-12',
    description: 'Algorithms',
    startTime: new Date('2024-03-12T11:00:00'),
    endTime: new Date('2024-03-12T12:30:00'),
    status: 'completed',
    attendance: 'present'
  }
];

const mockDetails: AttendanceDetails = {
  weekly: {
    classes: mockWeeklyClasses,
    stats: {
      total: 3,
      present: 2,
      percentage: 67
    }
  },
  overall: {
    classes: mockOverallClasses,
    stats: {
      total: 5,
      present: 4,
      percentage: 80
    }
  }
};

export function useAttendanceDetails() {
  const [details] = useState<AttendanceDetails>(mockDetails);
  return { details };
} 