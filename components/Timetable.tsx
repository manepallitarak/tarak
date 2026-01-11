
import React from 'react';
import { Clock, MapPin, BookOpen } from 'lucide-react';
import { ScheduleItem } from '../types';

const Timetable: React.FC = () => {
  const schedule: ScheduleItem[] = [
    { id: '1', day: 'Monday', time: '09:00 - 10:30', subject: 'Corporate Secretaryship', room: 'Room 201' },
    { id: '2', day: 'Tuesday', time: '11:00 - 12:30', subject: 'Marketing Management', room: 'Commerce Lab' },
    { id: '3', day: 'Wednesday', time: '10:00 - 11:30', subject: 'Research Methodology', room: 'Room 204' },
    { id: '4', day: 'Thursday', time: '09:00 - 10:30', subject: 'NEP 2020 Seminar', room: 'Seminar Hall' },
    { id: '5', day: 'Friday', time: '14:00 - 15:30', subject: 'Financial Markets', room: 'Room 205' },
    { id: '6', day: 'Saturday', time: '10:00 - 12:30', subject: 'Women Entrepreneurship', room: 'Innovation Hub' },
  ];

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <h2 className="text-4xl font-black text-slate-900 tracking-tight">Academic Engagement</h2>
          <p className="text-slate-500 font-bold text-lg mt-1">Current Semester • Dept. of Commerce</p>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-3 bg-white border border-slate-200 rounded-2xl font-black text-xs uppercase tracking-widest text-slate-600 hover:bg-slate-50 transition-all shadow-sm">Sync Calendar</button>
          <button className="px-6 py-3 bg-orange-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-orange-100 hover:bg-orange-700 transition-all">Add Class</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {days.map((day) => {
          const itemsForDay = schedule.filter(item => item.day === day);
          return (
            <div key={day} className="space-y-5">
              <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 shadow-lg text-center">
                <h3 className="font-black text-white text-xs uppercase tracking-[0.25em]">{day}</h3>
              </div>
              
              {itemsForDay.length > 0 ? (
                itemsForDay.map((item) => (
                  <div key={item.id} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-orange-100 transition-all group relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-2 opacity-5 group-hover:opacity-10">
                      <BookOpen size={48} className="text-orange-600" />
                    </div>
                    <div className="flex items-center gap-2 text-orange-600 font-black mb-3">
                      <Clock size={14} strokeWidth={3} />
                      <span className="text-[10px] uppercase tracking-widest">{item.time}</span>
                    </div>
                    <h4 className="font-black text-slate-900 text-base mb-4 leading-tight group-hover:text-orange-600 transition-colors">{item.subject}</h4>
                    <div className="flex items-center gap-2 text-slate-400">
                      <MapPin size={14} />
                      <span className="text-[10px] font-black uppercase tracking-widest">{item.room}</span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="bg-slate-50/50 border-2 border-dashed border-slate-100 rounded-[2rem] h-40 flex items-center justify-center p-6 text-center">
                  <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Research / Admin Focus</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timetable;
