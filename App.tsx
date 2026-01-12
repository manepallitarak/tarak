
import React, { useState, useEffect } from 'react';
import { User, Calendar, CheckSquare, Menu, X, Landmark, ArrowLeft, Home } from 'lucide-react';
import { AppSection } from './types';
import Portfolio from './components/Portfolio';
import Timetable from './components/Timetable';
import Attendance from './components/Attendance';
import CollegeShowcase from './components/CollegeShowcase';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<AppSection>(AppSection.PORTFOLIO);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Standardized Logo Configuration
  const collegeLogo = "https://gcrjy.ac.in/assets/images/logo.png";
  const estdText = "ESTD. 1853";

  const navigation = [
    { id: AppSection.PORTFOLIO, name: 'Portfolio Hub', icon: User },
    { id: AppSection.COLLEGE_VIEW, name: 'College View', icon: Landmark },
    { id: AppSection.TIMETABLE, name: 'Schedule', icon: Calendar },
    { id: AppSection.ATTENDANCE, name: 'Students', icon: CheckSquare },
  ];

  return (
    <div className="min-h-screen bg-white relative flex flex-col md:flex-row overflow-hidden font-sans">
      {/* Dynamic Academic Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-500/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-green-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-yellow-400/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between p-4 bg-white/95 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="flex flex-col items-center">
            <img src={collegeLogo} alt="GCRJY Logo" className="w-10 h-10 object-contain" />
            <span className="text-[7px] font-black text-[#1e3a8a] mt-0.5 tracking-tighter">{estdText}</span>
          </div>
          <div className="h-8 w-[1px] bg-slate-200 mx-1"></div>
          <span className="font-black text-slate-900 tracking-tight text-[10px] uppercase leading-tight">Govt College (A)<br/>Rajahmundry</span>
        </div>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <nav className={`
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0 transition-transform fixed md:sticky top-0 h-screen w-72 bg-white border-r border-slate-100 z-40 p-8 flex flex-col shadow-2xl md:shadow-none
      `}>
        <div className="hidden md:flex flex-col items-center gap-4 mb-12">
          <div className="flex flex-col items-center group">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center p-1 border border-slate-50 shadow-sm transition-transform group-hover:scale-105 duration-500">
              <img src={collegeLogo} alt="GCRJY Logo" className="w-full h-full object-contain" />
            </div>
            <span className="text-xs font-black text-[#1e3a8a] tracking-widest uppercase mt-2">{estdText}</span>
          </div>
          
          <div className="text-center mt-2">
            <h1 className="font-black text-slate-900 leading-none text-2xl tracking-tight mb-2 uppercase">Dr. Annapurna</h1>
            <p className="text-[10px] text-blue-700 font-black uppercase tracking-[0.2em]">Arts College (Autonomous)</p>
          </div>
        </div>

        <div className="space-y-2">
          {navigation.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveSection(item.id);
                setIsMobileMenuOpen(false);
              }}
              className={`
                w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-bold transition-all
                ${activeSection === item.id 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' 
                  : 'text-slate-500 hover:bg-slate-50 hover:text-blue-600'}
              `}
            >
              <item.icon size={20} strokeWidth={2.5} />
              <span className="text-[11px] uppercase tracking-widest font-black">{item.name}</span>
            </button>
          ))}
        </div>

        <div className="mt-auto pt-8 border-t border-slate-100">
          <div className="p-5 bg-slate-50 rounded-3xl border border-slate-100 flex items-center gap-3">
            <img src={collegeLogo} alt="Small Logo" className="w-8 h-8 object-contain opacity-40" />
            <div>
              <h4 className="text-slate-400 font-black text-[9px] uppercase tracking-widest">{estdText}</h4>
              <p className="text-slate-900 text-[10px] font-black leading-tight uppercase">BBA Digital Marketing</p>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 p-4 md:p-10 lg:p-14 pb-24 md:pb-14 max-w-7xl mx-auto w-full relative z-10 overflow-x-hidden">
        {activeSection !== AppSection.PORTFOLIO && (
          <div className="mb-8 animate-in fade-in slide-in-from-left-4 duration-500">
            <button 
              onClick={() => setActiveSection(AppSection.PORTFOLIO)}
              className="group flex items-center gap-3 px-6 py-3 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md hover:border-blue-500 transition-all active:scale-95"
            >
              <div className="p-2 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <ArrowLeft size={18} strokeWidth={3} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 group-hover:text-blue-600">Back to Portfolio</span>
            </button>
          </div>
        )}

        {activeSection === AppSection.PORTFOLIO && <Portfolio />}
        {activeSection === AppSection.TIMETABLE && <Timetable />}
        {activeSection === AppSection.ATTENDANCE && <Attendance />}
        {activeSection === AppSection.COLLEGE_VIEW && <CollegeShowcase />}
      </main>

      {/* Mobile Bottom Nav */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-t flex justify-around p-4 z-40 shadow-2xl rounded-t-[2rem]">
        {navigation.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            className={`flex flex-col items-center gap-1.5 transition-all ${activeSection === item.id ? 'text-blue-600' : 'text-slate-400'}`}
          >
            <item.icon size={22} strokeWidth={activeSection === item.id ? 3 : 2} />
            <span className="text-[9px] font-black uppercase tracking-widest">{item.name.split(' ')[0]}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;
