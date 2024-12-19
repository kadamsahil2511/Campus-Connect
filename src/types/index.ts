export interface Student {
  id: string;
  name: string;
  email: string;
  studentId: string;
  profilePicture?: string;
}

export interface Topic {
  id: string;
  title: string;
  completed: boolean;
  duration: string;
  materials?: CourseMaterial[];
}

export interface Curriculum {
  totalTopics: number;
  completedTopics: number;
  topics: Topic[];
  progress: number; // percentage
}

export type ClassStatus = 'ongoing' | 'upcoming' | 'completed' | 'cancelled';

export interface ClassRemark {
  id: string;
  text: string;
  timestamp: Date;
  author: string;
}

export interface Class {
  id: string;
  name: string;
  instructor: string;
  room: string;
  time: string;
  date: string;
  description: string;
  startTime: Date;
  endTime: Date;
  status: ClassStatus;
  remarks?: ClassRemark[];
  curriculum?: Curriculum;
  attendance?: 'present' | 'absent';
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'warning' | 'success' | 'error';
  timestamp: Date;
  read: boolean;
}

export interface AcademicPerformance {
  gpa: number;
  rank: number;
  totalStudents: number;
  semesterProgress: number;
  subjects: SubjectPerformance[];
  attendanceRate: number;
  strengths: string[];
  areasToImprove: string[];
}

export interface SubjectPerformance {
  id: string;
  name: string;
  grade: string;
  score: number;
  average: number;
  highest: number;
  trend: 'up' | 'down' | 'stable';
  assignments: {
    completed: number;
    total: number;
  };
}

export interface CourseMaterial {
  id: string;
  title: string;
  type: 'video' | 'pdf' | 'quiz' | 'assignment';
  description: string;
  duration?: string;
  url?: string;
  deadline?: Date;
  resources: CourseResource[];
}

export interface CourseResource {
  id: string;
  name: string;
  type: 'pdf' | 'video' | 'link';
  url: string;
  size?: string;
}