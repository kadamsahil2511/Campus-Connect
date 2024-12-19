import { useState, useEffect } from 'react';
import { Class } from '../types';

const mockClasses: Class[] = [
  {
    id: '1',
    name: 'Advanced Mathematics',
    instructor: 'Dr. Smith',
    room: '101',
    time: '09:00 AM',
    date: '2024-03-20',
    startTime: new Date('2024-03-20T09:00:00'),
    endTime: new Date('2024-03-20T10:30:00'),
    description: 'Complex analysis and differential equations',
    status: 'ongoing',
    remarks: [
      {
        id: 'r1',
        text: 'Please review chapter 3 before class',
        timestamp: new Date('2024-03-19T15:00:00'),
        author: 'Dr. Smith'
      }
    ],
    curriculum: {
      totalTopics: 12,
      completedTopics: 8,
      progress: 67,
      topics: [
        {
          id: 't1',
          title: 'Complex Numbers',
          completed: true,
          duration: '2h',
          materials: [
            {
              id: 'm1',
              title: 'Introduction to Complex Numbers',
              type: 'video',
              description: 'Learn the basics of complex numbers and their operations',
              duration: '15 min',
              url: 'https://example.com/video1',
              resources: [
                {
                  id: 'r1',
                  name: 'Lecture Notes',
                  type: 'pdf',
                  url: 'https://example.com/notes.pdf',
                  size: '2.5 MB'
                },
                {
                  id: 'r2',
                  name: 'Practice Problems',
                  type: 'pdf',
                  url: 'https://example.com/problems.pdf',
                  size: '1.8 MB'
                }
              ]
            },
            {
              id: 'm2',
              title: 'Complex Numbers Quiz',
              type: 'quiz',
              description: 'Test your understanding of complex numbers',
              duration: '30 min',
              deadline: new Date('2024-03-25'),
              url: 'https://example.com/quiz1',
              resources: []
            }
          ]
        },
        {
          id: 't2',
          title: 'Complex Functions',
          completed: true,
          duration: '3h',
          materials: [
            {
              id: 'm3',
              title: 'Introduction to Complex Functions',
              type: 'video',
              description: 'Learn the basics of complex functions and their properties',
              duration: '15 min',
              url: 'https://example.com/video2',
              resources: [
                {
                  id: 'r3',
                  name: 'Lecture Notes',
                  type: 'pdf',
                  url: 'https://example.com/notes2.pdf',
                  size: '2.5 MB'
                },
                {
                  id: 'r4',
                  name: 'Practice Problems',
                  type: 'pdf',
                  url: 'https://example.com/problems2.pdf',
                  size: '1.8 MB'
                }
              ]
            },
            {
              id: 'm4',
              title: 'Complex Functions Quiz',
              type: 'quiz',
              description: 'Test your understanding of complex functions',
              duration: '30 min',
              deadline: new Date('2024-03-25'),
              url: 'https://example.com/quiz2',
              resources: []
            }
          ]
        },
        {
          id: 't3',
          title: 'Differentiation',
          completed: true,
          duration: '2h',
          materials: [
            {
              id: 'm5',
              title: 'Introduction to Differentiation',
              type: 'video',
              description: 'Learn the basics of differentiation and its applications',
              duration: '15 min',
              url: 'https://example.com/video3',
              resources: [
                {
                  id: 'r5',
                  name: 'Lecture Notes',
                  type: 'pdf',
                  url: 'https://example.com/notes3.pdf',
                  size: '2.5 MB'
                },
                {
                  id: 'r6',
                  name: 'Practice Problems',
                  type: 'pdf',
                  url: 'https://example.com/problems3.pdf',
                  size: '1.8 MB'
                }
              ]
            },
            {
              id: 'm6',
              title: 'Differentiation Quiz',
              type: 'quiz',
              description: 'Test your understanding of differentiation',
              duration: '30 min',
              deadline: new Date('2024-03-25'),
              url: 'https://example.com/quiz3',
              resources: []
            }
          ]
        },
        {
          id: 't4',
          title: 'Integration',
          completed: false,
          duration: '3h',
          materials: [
            {
              id: 'm7',
              title: 'Introduction to Integration',
              type: 'video',
              description: 'Learn the basics of integration and its applications',
              duration: '15 min',
              url: 'https://example.com/video4',
              resources: [
                {
                  id: 'r7',
                  name: 'Lecture Notes',
                  type: 'pdf',
                  url: 'https://example.com/notes4.pdf',
                  size: '2.5 MB'
                },
                {
                  id: 'r8',
                  name: 'Practice Problems',
                  type: 'pdf',
                  url: 'https://example.com/problems4.pdf',
                  size: '1.8 MB'
                }
              ]
            },
            {
              id: 'm8',
              title: 'Integration Quiz',
              type: 'quiz',
              description: 'Test your understanding of integration',
              duration: '30 min',
              deadline: new Date('2024-03-25'),
              url: 'https://example.com/quiz4',
              resources: []
            }
          ]
        },
        {
          id: 't5',
          title: 'Series Expansions',
          completed: false,
          duration: '2h',
          materials: [
            {
              id: 'm9',
              title: 'Introduction to Series Expansions',
              type: 'video',
              description: 'Learn the basics of series expansions and their applications',
              duration: '15 min',
              url: 'https://example.com/video5',
              resources: [
                {
                  id: 'r9',
                  name: 'Lecture Notes',
                  type: 'pdf',
                  url: 'https://example.com/notes5.pdf',
                  size: '2.5 MB'
                },
                {
                  id: 'r10',
                  name: 'Practice Problems',
                  type: 'pdf',
                  url: 'https://example.com/problems5.pdf',
                  size: '1.8 MB'
                }
              ]
            },
            {
              id: 'm10',
              title: 'Series Expansions Quiz',
              type: 'quiz',
              description: 'Test your understanding of series expansions',
              duration: '30 min',
              deadline: new Date('2024-03-25'),
              url: 'https://example.com/quiz5',
              resources: []
            }
          ]
        }
      ]
    }
  },
  {
    id: '2',
    name: 'Computer Science',
    instructor: 'Prof. Johnson',
    room: '205',
    time: '11:00 AM',
    date: '2024-03-20',
    startTime: new Date('2024-03-20T11:00:00'),
    endTime: new Date('2024-03-20T12:30:00'),
    description: 'Data structures and algorithms',
    status: 'upcoming',
    remarks: [],
    curriculum: {
      totalTopics: 10,
      completedTopics: 4,
      progress: 40,
      topics: [
        {
          id: 't1',
          title: 'Arrays & Strings',
          completed: true,
          duration: '2h',
          materials: [
            {
              id: 'm11',
              title: 'Introduction to Arrays & Strings',
              type: 'video',
              description: 'Learn the basics of arrays and strings and their operations',
              duration: '15 min',
              url: 'https://example.com/video6',
              resources: [
                {
                  id: 'r11',
                  name: 'Lecture Notes',
                  type: 'pdf',
                  url: 'https://example.com/notes6.pdf',
                  size: '2.5 MB'
                },
                {
                  id: 'r12',
                  name: 'Practice Problems',
                  type: 'pdf',
                  url: 'https://example.com/problems6.pdf',
                  size: '1.8 MB'
                }
              ]
            },
            {
              id: 'm12',
              title: 'Arrays & Strings Quiz',
              type: 'quiz',
              description: 'Test your understanding of arrays and strings',
              duration: '30 min',
              deadline: new Date('2024-03-25'),
              url: 'https://example.com/quiz6',
              resources: []
            }
          ]
        },
        {
          id: 't2',
          title: 'Linked Lists',
          completed: true,
          duration: '2h',
          materials: [
            {
              id: 'm13',
              title: 'Introduction to Linked Lists',
              type: 'video',
              description: 'Learn the basics of linked lists and their operations',
              duration: '15 min',
              url: 'https://example.com/video7',
              resources: [
                {
                  id: 'r13',
                  name: 'Lecture Notes',
                  type: 'pdf',
                  url: 'https://example.com/notes7.pdf',
                  size: '2.5 MB'
                },
                {
                  id: 'r14',
                  name: 'Practice Problems',
                  type: 'pdf',
                  url: 'https://example.com/problems7.pdf',
                  size: '1.8 MB'
                }
              ]
            },
            {
              id: 'm14',
              title: 'Linked Lists Quiz',
              type: 'quiz',
              description: 'Test your understanding of linked lists',
              duration: '30 min',
              deadline: new Date('2024-03-25'),
              url: 'https://example.com/quiz7',
              resources: []
            }
          ]
        },
        {
          id: 't3',
          title: 'Trees & Graphs',
          completed: false,
          duration: '3h',
          materials: [
            {
              id: 'm15',
              title: 'Introduction to Trees & Graphs',
              type: 'video',
              description: 'Learn the basics of trees and graphs and their operations',
              duration: '15 min',
              url: 'https://example.com/video8',
              resources: [
                {
                  id: 'r15',
                  name: 'Lecture Notes',
                  type: 'pdf',
                  url: 'https://example.com/notes8.pdf',
                  size: '2.5 MB'
                },
                {
                  id: 'r16',
                  name: 'Practice Problems',
                  type: 'pdf',
                  url: 'https://example.com/problems8.pdf',
                  size: '1.8 MB'
                }
              ]
            },
            {
              id: 'm16',
              title: 'Trees & Graphs Quiz',
              type: 'quiz',
              description: 'Test your understanding of trees and graphs',
              duration: '30 min',
              deadline: new Date('2024-03-25'),
              url: 'https://example.com/quiz8',
              resources: []
            }
          ]
        },
        {
          id: 't4',
          title: 'Dynamic Programming',
          completed: false,
          duration: '4h',
          materials: [
            {
              id: 'm17',
              title: 'Introduction to Dynamic Programming',
              type: 'video',
              description: 'Learn the basics of dynamic programming and its applications',
              duration: '15 min',
              url: 'https://example.com/video9',
              resources: [
                {
                  id: 'r17',
                  name: 'Lecture Notes',
                  type: 'pdf',
                  url: 'https://example.com/notes9.pdf',
                  size: '2.5 MB'
                },
                {
                  id: 'r18',
                  name: 'Practice Problems',
                  type: 'pdf',
                  url: 'https://example.com/problems9.pdf',
                  size: '1.8 MB'
                }
              ]
            },
            {
              id: 'm18',
              title: 'Dynamic Programming Quiz',
              type: 'quiz',
              description: 'Test your understanding of dynamic programming',
              duration: '30 min',
              deadline: new Date('2024-03-25'),
              url: 'https://example.com/quiz9',
              resources: []
            }
          ]
        }
      ]
    }
  }
];

export function useClasses() {
  const [upcomingClasses] = useState<Class[]>(mockClasses);
  const [ongoingClass, setOngoingClass] = useState<Class | null>(null);

  useEffect(() => {
    // In a real app, this would be determined by the current time
    // For demo purposes, we'll use the first class as ongoing
    if (mockClasses.length > 0) {
      setOngoingClass({
        ...mockClasses[0],
        status: 'ongoing'
      });
    }
  }, []);

  return { upcomingClasses, ongoingClass };
}