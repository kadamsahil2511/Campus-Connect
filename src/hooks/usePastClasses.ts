import { useState } from 'react';
import { Class } from '../types';

const mockPastClasses: Class[] = [
  {
    id: 'p1',
    name: 'Advanced Mathematics',
    instructor: 'Dr. Smith',
    room: '101',
    time: '09:00 AM',
    date: '2024-03-15',
    startTime: new Date('2024-03-15T09:00:00'),
    endTime: new Date('2024-03-15T10:30:00'),
    description: 'Introduction to Complex Analysis',
    status: 'completed',
    attendance: 'present',
    curriculum: {
      totalTopics: 5,
      completedTopics: 5,
      progress: 100,
      topics: [
        {
          id: 'pt1',
          title: 'Complex Numbers Basics',
          completed: true,
          duration: '1h',
          materials: [
            {
              id: 'pm1',
              title: 'Complex Numbers Lecture',
              type: 'video',
              description: 'Introduction to complex numbers and their properties',
              duration: '45 min',
              url: 'https://example.com/past-video1',
              resources: [
                {
                  id: 'pr1',
                  name: 'Lecture Slides',
                  type: 'pdf',
                  url: 'https://example.com/past-slides1.pdf',
                  size: '2.1 MB'
                },
                {
                  id: 'pr2',
                  name: 'Practice Problems',
                  type: 'pdf',
                  url: 'https://example.com/past-problems1.pdf',
                  size: '1.5 MB'
                }
              ]
            },
            {
              id: 'pm2',
              title: 'Complex Numbers Quiz',
              type: 'quiz',
              description: 'Test your understanding of complex numbers',
              duration: '30 min',
              url: 'https://example.com/past-quiz1',
              resources: []
            }
          ]
        },
        // Add more topics as needed...
      ]
    }
  },
  {
    id: 'p2',
    name: 'Data Structures',
    instructor: 'Prof. Johnson',
    room: '205',
    time: '11:00 AM',
    date: '2024-03-14',
    startTime: new Date('2024-03-14T11:00:00'),
    endTime: new Date('2024-03-14T12:30:00'),
    description: 'Binary Trees and Graph Algorithms',
    status: 'completed',
    attendance: 'present',
    curriculum: {
      totalTopics: 4,
      completedTopics: 4,
      progress: 100,
      topics: [
        {
          id: 'pt2',
          title: 'Binary Trees',
          completed: true,
          duration: '2h',
          materials: [
            {
              id: 'pm3',
              title: 'Binary Trees Implementation',
              type: 'video',
              description: 'Learn about binary tree data structure and operations',
              duration: '1h 15min',
              url: 'https://example.com/past-video2',
              resources: [
                {
                  id: 'pr3',
                  name: 'Code Examples',
                  type: 'pdf',
                  url: 'https://example.com/past-code2.pdf',
                  size: '1.8 MB'
                },
                {
                  id: 'pr4',
                  name: 'Implementation Guide',
                  type: 'pdf',
                  url: 'https://example.com/past-guide2.pdf',
                  size: '2.3 MB'
                }
              ]
            },
            {
              id: 'pm4',
              title: 'Binary Trees Assignment',
              type: 'assignment',
              description: 'Implement various binary tree operations',
              deadline: new Date('2024-03-21'),
              url: 'https://example.com/past-assignment2',
              resources: [
                {
                  id: 'pr5',
                  name: 'Assignment Template',
                  type: 'pdf',
                  url: 'https://example.com/past-template2.pdf',
                  size: '1.2 MB'
                }
              ]
            }
          ]
        },
        // Add more topics as needed...
      ]
    }
  }
];

export function usePastClasses() {
  const [pastClasses] = useState<Class[]>(mockPastClasses);
  return { pastClasses };
}