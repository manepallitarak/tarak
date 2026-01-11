
export interface Degree {
  title: string;
  institution: string;
  year: string;
  specialization: string;
}

export interface ScheduleItem {
  id: string;
  day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday';
  time: string;
  subject: string;
  room: string;
}

export interface Student {
  id: string;
  name: string;
  rollNumber: string;
  isPresent: boolean;
}

export enum AppSection {
  PORTFOLIO = 'portfolio',
  TIMETABLE = 'timetable',
  ATTENDANCE = 'attendance',
  COLLEGE_VIEW = 'college_view'
}
