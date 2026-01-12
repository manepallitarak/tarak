
import React, { useState } from 'react';
import { Search, UserCheck, UserX, Users, UserMinus, FileSpreadsheet, CheckCircle2, Circle, CheckCircle } from 'lucide-react';
import { Student } from '../types';

const Attendance: React.FC = () => {
  // Standardized Logo Configuration
  const collegeLogo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzRPGb0yNg4L_3i8xH_J3_sz6wHYoGYGfqVQ&s";
  const estdText = "ESTD. 1853";

  // Real Student Data from Government College (A), Rajahmundry - BBA (DM)
  const getOfficialStudents = (): Student[] => {
    return [
      { id: '1', rollNumber: '32322601', name: 'CHEKKA HEZEKIAH', isPresent: false },
      { id: '2', rollNumber: '32322602', name: 'YARRAMSETTI AYYAPPA SWAMY', isPresent: false },
      { id: '3', rollNumber: '32322603', name: 'MOHAMMAD RUMANA KULSUM', isPresent: false },
      { id: '4', rollNumber: '32322604', name: 'MANDA ABHISHEK', isPresent: false },
      { id: '5', rollNumber: '32322605', name: 'PINAPOTHU SHIVA RAMA KRISHNA', isPresent: false },
      { id: '6', rollNumber: '32322606', name: 'DOMMETI CHANDRIKA', isPresent: false },
      { id: '7', rollNumber: '32322607', name: 'JALAGAM NAGA SAI SATISH', isPresent: false },
      { id: '8', rollNumber: '32322608', name: 'RAVIPATI TARUN KUMAR', isPresent: false },
      { id: '9', rollNumber: '32322609', name: 'ALLANKI THANUJA', isPresent: false },
      { id: '10', rollNumber: '32322610', name: 'MADDA RIZWAN SAMPATH', isPresent: false },
      { id: '11', rollNumber: '32322611', name: 'GUTTULA VINODINI', isPresent: false },
      { id: '12', rollNumber: '32322612', name: 'BURIDI MADHULATHA', isPresent: false },
      { id: '13', rollNumber: '32322613', name: 'KOTHALANKA LAKSHMI HARSHITA', isPresent: false },
      { id: '14', rollNumber: '32322614', name: 'MUNTHA SYAM', isPresent: false },
      { id: '15', rollNumber: '32322615', name: 'GANGAVARAPU SATWIK', isPresent: false },
      { id: '16', rollNumber: '32322616', name: 'MULAPARTHI PALLAVI', isPresent: false },
      { id: '17', rollNumber: '32322617', name: 'DARABALLA RAJESH', isPresent: false },
      { id: '18', rollNumber: '32322618', name: 'MEDAPATI DINESH KUMAR', isPresent: false },
      { id: '19', rollNumber: '32322619', name: 'MUPPIDI VIJAY', isPresent: false },
      { id: '20', rollNumber: '32322620', name: 'ATTA RAMAKRISHNA', isPresent: false },
      { id: '21', rollNumber: '32322621', name: 'VALLAPUDI JOHN BABU', isPresent: false },
      { id: '22', rollNumber: '32322622', name: 'PEDAPUDI MUTHYA SRIVAMSI', isPresent: false },
      { id: '23', rollNumber: '32322623', name: 'VEMULA RATNA KUMAR', isPresent: false },
      { id: '24', rollNumber: '32322624', name: 'INTI SEKHAR', isPresent: false },
      { id: '25', rollNumber: '32322625', name: 'KOTARI ANUSHA', isPresent: false },
      { id: '26', rollNumber: '32322626', name: 'DADALA MADAN KUMAR', isPresent: false },
      { id: '27', rollNumber: '32322627', name: 'KODI LOKESH', isPresent: false },
      { id: '28', rollNumber: '32322628', name: 'BENDA PURNIMA DEVI', isPresent: false },
      { id: '29', rollNumber: '32322629', name: 'MELLIMI RAKESH', isPresent: false },
      { id: '30', rollNumber: '32322630', name: 'VAMISETTI NARESH', isPresent: false },
      { id: '31', rollNumber: '32322631', name: 'NALLA DURGABHAVANI', isPresent: false },
      { id: '32', rollNumber: '32322632', name: 'SAMPARA CHETHA SUBHARJANI', isPresent: false },
      { id: '33', rollNumber: '32322633', name: 'YANNAMSETTI AKSHAY KUMAR', isPresent: false },
      { id: '34', rollNumber: '32322634', name: 'TADI LAKSHMI MOHAN CHANDRA KANTH', isPresent: false },
      { id: '35', rollNumber: '32322635', name: 'SHAIK NAGUR MEERA SAHEB', isPresent: false },
      { id: '36', rollNumber: '32322636', name: 'AINAPARTHI DEVI APARNA', isPresent: false },
      { id: '37', rollNumber: '32322637', name: 'SODASANI SHIVA JYOTHI', isPresent: false },
      { id: '38', rollNumber: '32322638', name: 'NAMANI CHANDRIKA SAI DURGA', isPresent: false },
      { id: '39', rollNumber: '32322639', name: 'SETTIBATHINA CHARAN TEJA', isPresent: false },
      { id: '40', rollNumber: '32322640', name: 'INJARAPU ANIL KUMAR', isPresent: false },
      { id: '41', rollNumber: '32322641', name: 'SHAIK JABEER AHMAD', isPresent: false },
      { id: '42', rollNumber: '32322642', name: 'BHAVARAJU V V S S N S R P VISWANADH', isPresent: false },
      { id: '43', rollNumber: '32322643', name: 'YATLA GUNA SEKHARA REDDY', isPresent: false },
      { id: '44', rollNumber: '32322644', name: 'SURIA RAMALAKSHMI', isPresent: false },
      { id: '45', rollNumber: '32322645', name: 'KADALI SRIRAMGANESH', isPresent: false },
      { id: '46', rollNumber: '32322646', name: 'KONALA SANJAY', isPresent: false },
      { id: '47', rollNumber: '32322647', name: 'MANEPALLI TARAKA NAGESWARARAO', isPresent: false },
      { id: '48', rollNumber: '32322648', name: 'KALLA SIVA TEJA', isPresent: false },
      { id: '49', rollNumber: '32322649', name: 'GOLLU NAVYA', isPresent: false },
      { id: '50', rollNumber: '32322650', name: 'VADDI JHANSI', isPresent: false },
      { id: '51', rollNumber: '32322651', name: 'PERABATTHULA NAVYA SRI ADILAKSHMI', isPresent: false },
      { id: '52', rollNumber: '32322652', name: 'CHINTHA SAI BABU', isPresent: false },
      { id: '53', rollNumber: '32322653', name: 'NARALA NAGESWARA RAO', isPresent: false },
      { id: '54', rollNumber: '32322654', name: 'VEMULA HEMA PHANI CHANDRA', isPresent: false },
      { id: '55', rollNumber: '32322655', name: 'CHINTAKAYALA SURYA TEJA', isPresent: false },
      { id: '56', rollNumber: '32322656', name: 'POSINA DHANUSH', isPresent: false },
      { id: '57', rollNumber: '32322657', name: 'THORATI SAI PRAKASH', isPresent: false },
      { id: '58', rollNumber: '32322658', name: 'KILARI LUCKY PRASANTH', isPresent: false },
      { id: '59', rollNumber: '32322659', name: 'ICHA PARAPU MANI', isPresent: false },
      { id: '60', rollNumber: '32322660', name: 'PEETHALA MADHUBABU', isPresent: false },
      { id: '61', rollNumber: '32322661', name: 'ANAPARTHI AVINASH', isPresent: false },
      { id: '62', rollNumber: '32322662', name: 'YERRAMSETTI VAMSI KRISHNA', isPresent: false },
      { id: '63', rollNumber: '32322663', name: 'CHELLINKI MAHASINGH', isPresent: false },
      { id: '64', rollNumber: '32322664', name: 'DURGASI PUSHPA', isPresent: false },
      { id: '65', rollNumber: '32322665', name: 'MATTA RAJESWARIDEVI', isPresent: false },
      { id: '66', rollNumber: '32322666', name: 'VANAPALLI SAI SRI DIVYA', isPresent: false },
    ];
  };

  const [students, setStudents] = useState<Student[]>(getOfficialStudents());
  const [searchTerm, setSearchTerm] = useState('');

  const toggleAttendance = (id: string) => {
    setStudents(prev => prev.map(s => s.id === id ? { ...s, isPresent: !s.isPresent } : s));
  };

  const markAll = (status: boolean) => {
    setStudents(prev => prev.map(s => ({ ...s, isPresent: status })));
  };

  const filteredStudents = students.filter(s => 
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    s.rollNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalMembers = students.length;
  const presentCount = students.filter(s => s.isPresent).length;
  const absentCount = totalMembers - presentCount;
  const attendancePercentage = ((presentCount / totalMembers) * 100).toFixed(1);

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-6xl mx-auto px-4 md:px-0">
      {/* Standardized Institutional Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
        <div className="flex items-center gap-6">
           <div className="flex flex-col items-center group">
              <div className="w-24 h-24 bg-white rounded-full p-2 border border-slate-100 flex items-center justify-center transition-transform group-hover:scale-105 duration-500 shadow-sm">
                <img src={collegeLogo} alt="GCRJY Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-sm font-black text-[#1e3a8a] tracking-widest uppercase mt-2">{estdText}</span>
           </div>
           <div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-none uppercase mb-2">Government College (A)</h2>
              <div className="flex flex-wrap items-center gap-3">
                <p className="text-slate-600 font-bold text-lg">BBA Digital Marketing Registry</p>
                <div className="w-1.5 h-1.5 bg-slate-300 rounded-full"></div>
                <p className="text-blue-600 font-black text-sm uppercase tracking-widest">Academic Year 2025</p>
              </div>
           </div>
        </div>
        <div className="flex flex-col items-end justify-center">
          <div className="px-6 py-4 bg-white/80 backdrop-blur-md border border-slate-200 rounded-[2rem] shadow-xl text-center">
            <span className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-1">Current Session</span>
            <span className="text-xl font-black text-slate-900 uppercase">Active Daily Registry</span>
          </div>
        </div>
      </div>

      {/* Metrics Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm flex flex-col justify-between group hover:border-blue-200 transition-all overflow-hidden relative">
          <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
            <Users size={80} />
          </div>
          <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-4">Total Members</p>
          <div className="flex items-end gap-3">
            <h4 className="text-5xl font-black text-slate-950 tracking-tighter">{totalMembers}</h4>
            <span className="text-xs font-bold text-slate-400 mb-2 uppercase">Students</span>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm flex flex-col justify-between group hover:border-emerald-200 transition-all overflow-hidden relative">
          <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
            <UserCheck size={80} />
          </div>
          <p className="text-[11px] font-black text-emerald-600 uppercase tracking-widest mb-4 flex items-center gap-2">
            Present
          </p>
          <div className="flex items-end gap-3">
            <h4 className="text-5xl font-black text-emerald-600 tracking-tighter">{presentCount}</h4>
          </div>
        </div>

        <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm flex flex-col justify-between group hover:border-red-200 transition-all overflow-hidden relative">
          <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
            <UserMinus size={80} />
          </div>
          <p className="text-[11px] font-black text-red-600 uppercase tracking-widest mb-4">Absent</p>
          <div className="flex items-end gap-3">
            <h4 className="text-5xl font-black text-red-600 tracking-tighter">{absentCount}</h4>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-700 to-indigo-900 p-8 rounded-[3rem] shadow-2xl flex flex-col justify-between text-white group hover:scale-[1.02] transition-transform">
          <p className="text-[11px] font-black text-white/70 uppercase tracking-widest mb-4">Daily Attendance</p>
          <div className="flex items-end gap-2">
            <h4 className="text-5xl font-black tracking-tighter">{attendancePercentage}%</h4>
          </div>
        </div>
      </div>

      {/* Registry Table */}
      <div className="bg-white border border-slate-200 shadow-2xl overflow-hidden mb-12 rounded-none">
        <div className="bg-slate-900 px-10 py-6 flex items-center justify-between text-white">
           <div className="flex items-center gap-3">
              <FileSpreadsheet size={20} className="text-blue-400" />
              <h3 className="text-sm font-black uppercase tracking-widest">Live Enrollment Registry</h3>
           </div>
        </div>
        <div className="max-h-[800px] overflow-y-auto custom-scrollbar">
          <table className="w-full text-left table-fixed">
            <thead className="sticky top-0 bg-white/98 backdrop-blur-md z-10 shadow-md">
              <tr className="bg-slate-50 border-b border-slate-100">
                <th className="w-[15%] px-8 py-8 text-[11px] font-black text-slate-500 uppercase tracking-[0.3em] text-left">Code</th>
                <th className="w-[60%] px-8 py-8 text-[11px] font-black text-slate-500 uppercase tracking-[0.3em] text-left">Student Identity</th>
                <th className="w-[25%] px-8 py-8 text-[11px] font-black text-slate-500 uppercase tracking-[0.3em] text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredStudents.map((student) => (
                <tr key={student.id} className="hover:bg-blue-50/40 transition-colors group">
                  <td className="px-8 py-8 align-middle">
                     <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black text-sm border ${student.isPresent ? 'bg-blue-600 text-white border-blue-600 shadow-xl' : 'bg-white text-slate-400 border-slate-100'}`}>
                        {student.rollNumber.slice(-3)}
                      </div>
                  </td>
                  <td className="px-8 py-8 align-middle">
                    <div className="flex flex-col justify-center">
                      <div className="text-[13px] font-black text-blue-600 uppercase tracking-[0.2em] mb-1 font-mono">{student.rollNumber}</div>
                      <div className="font-bold text-slate-700 text-sm leading-none uppercase tracking-tight">{student.name}</div>
                    </div>
                  </td>
                  <td className="px-8 py-8 align-middle text-center">
                    <button 
                      onClick={() => toggleAttendance(student.id)}
                      className={`
                        w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300
                        ${student.isPresent 
                          ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/40 ring-4 ring-emerald-500/10' 
                          : 'bg-white border-2 border-slate-200 text-slate-300 hover:border-emerald-400 hover:text-emerald-500 shadow-sm'}
                      `}
                    >
                      {student.isPresent ? <CheckCircle size={32} strokeWidth={2.5} /> : <Circle size={32} strokeWidth={2} />}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar { width: 10px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(59, 130, 246, 0.08); border-radius: 30px; border: 3px solid transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(59, 130, 246, 0.2); }
      `}} />
    </div>
  );
};

export default Attendance;
