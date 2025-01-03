# Campus Connect - Student Management System

## Overview
Campus Connect is a comprehensive student management system designed to streamline academic activities, track attendance, and manage course materials. Built with modern web technologies, it provides an intuitive interface for students to manage their academic journey.

- [Campus Connect Dashboard](https://proxyguard.netlify.app/)
- [Process flowchart](https://github.com/kadamsahil2511/Campus-Connect/blob/main/Anti_Proxy_Framework.png) 

## Table of Contents
- [Features](#features)
- [Technical Architecture](#technical-architecture)
- [Installation](#installation)
- [Usage Guide](#usage-guide)
- [Component Documentation](#component-documentation)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)

## Features

### Authentication System
The system provides secure access through:
- Biometric authentication (fingerprint)
- Email/password authentication
- Session management

**Implementation Details:**
```typescript
// Example usage of authentication
const { user, signIn, signUp, logout } = useAuth();
```

### Dashboard System

#### 1. Class Management

##### Ongoing Classes
```typescript
// OngoingClass component usage
<OngoingClass />
```
Features:
- Real-time class status
- Join class functionality
- Instructor information
- Room details

##### Upcoming Classes
```typescript
// UpcomingClasses component usage
<UpcomingClasses />
```
Features:
- Scheduled class listing
- Course progress tracking
- Room assignments

##### Past Classes
```typescript
// PastClasses component usage
<PastClasses />
```
Features:
- Historical records
- Attendance records
- Course material access

#### 2. Course Curriculum
```typescript
// CurriculumProgress component usage
<CurriculumProgress curriculum={courseCurriculum} />
```
Features:
- Topic tracking
- Progress visualization
- Material access

#### 3. Course Materials
```typescript
// CourseMaterialModal component usage
<CourseMaterialModal topic={selectedTopic} onClose={handleClose} />
```
Supported content types:
- Video lectures
- PDF documents
- Quizzes
- Assignments

#### 4. Attendance System
```typescript
// AttendanceStats component usage
<AttendanceStats />
```
Features:
- Weekly statistics
- Overall tracking
- Detailed logs

#### 5. Academic Performance
```typescript
// AcademicPerformanceModal component usage
<AcademicPerformanceModal performance={academicData} onClose={handleClose} />
```
Tracks:
- GPA
- Class ranking
- Subject performance
- Progress trends

## Technical Architecture

### Component Structure
```
src/
├── components/
│   ├── auth/          # Authentication components
│   ├── dashboard/     # Dashboard components
│   ├── course/        # Course-related components
│   ├── shared/        # Reusable components
│   └── notifications/ # Notification system
├── hooks/             # Custom React hooks
├── types/             # TypeScript definitions
└── utils/             # Utility functions
```

### Key Components

#### 1. Shared Components
```typescript
// Input component example
<Input
  icon={<Mail />}
  type="email"
  placeholder="Email"
/>
```

#### 2. Custom Hooks
```typescript
// Authentication hook
const { user, signIn } = useAuth();

// Notifications hook
const { notifications, markAsRead } = useNotifications();
```

## Installation

### Prerequisites
- Node.js >= 14.0
- npm >= 6.0

### Setup
```bash
# Clone repository
git clone https://github.com/kadamsahil2511/Campus-Connect.git

# Install dependencies
cd campus-connect
npm install

# Start development server
npm run dev
```

## Usage Guide

### 1. Authentication
- Launch the application
- Choose authentication method (fingerprint/email)
- Complete login process

### 2. Dashboard Navigation
- View ongoing classes
- Check upcoming schedule
- Access course materials
- Track attendance

### 3. Course Material Access
- Select course
- Choose topic
- Access materials
- Download resources

## Component Documentation

### DashboardFrame
Main dashboard container component.

Props:
```typescript
interface DashboardFrameProps {
  user: Student | null;
}
```

### ClassCard
Reusable class information component.

Props:
```typescript
interface ClassCardProps {
  class_: Class;
  showStatus?: boolean;
}
```

## API Documentation

### Authentication
```typescript
interface AuthAPI {
  signIn: (data: { email: string; password: string }) => Promise<void>;
  signUp: (data: { name: string; email: string; password: string }) => Promise<void>;
  logout: () => void;
}
```

### Notifications
```typescript
interface NotificationAPI {
  markAsRead: (id: string) => void;
  clearNotification: (id: string) => void;
}
```

## Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## License

This project is licensed under the MIT License.

## Support

kadamsahil2511@gmail.com or open an issue in the repository.
