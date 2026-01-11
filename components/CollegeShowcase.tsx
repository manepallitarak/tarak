
import React from 'react';
import { Landmark, Building, Book, Users, Coffee, Camera, ShieldCheck, Award } from 'lucide-react';

const CollegeShowcase: React.FC = () => {
  const images = [
    {
      url: "	https://bhavanajagat.com/wp-content/uploads/2023/11/img_3076.jpeg?w=1000",
      title: "Main Administrative Building",
      category: "Infrastructure",
      desc: "The historic Victorian-style architecture, a hallmark of Rajahmundry's education."
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoN0rCTJuavJQ_LaSmvVxTqUdhAEqJc602Uw&s",
      title: "Campus Serenity",
      category: "Exterior",
      desc: "Lush green surroundings fostering a peaceful academic environment."
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ-ZczAB8CoP6yKKueG_cKciDD9uKJ4CpQ-g&s",
      title: "Advanced Laboratories",
      category: "Facilities",
      desc: "State-of-the-art lab equipment for practical learning."
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwTT59Ky2hH58DDoK-PH8gHOkkFDYAuViGTg&s",
      title: "Digital Classrooms",
      category: "Furniture & Tech",
      desc: "Modern ergonomic furniture paired with smart board technology."
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbL3q0SDZFiI17mhAmsod_rz799egHAY8ZLw&s",
      title: "Institutional Library",
      category: "Academics",
      desc: "Vast collection of journals, research papers, and textbooks."
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsPEHOJyh6qPayvkfOv4otN6fax2pEtPXUOQ&s",
      title: "Auditorium Hub",
      category: "Events",
      desc: "Spacious venue for national seminars and cultural events."
    }
  ];

  const features = [
    { icon: Building, label: "Heritage Campus", val: "ESTD 1853" },
    { icon: Award, label: "NAAC Grade", val: "A+ Accredited" },
    { icon: ShieldCheck, label: "Autonomy", val: "UGC Certified" },
    { icon: Landmark, label: "Legacy", val: "170+ Years" }
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-7xl mx-auto pb-20">
      {/* Hero Section */}
      <div className="relative rounded-[3rem] overflow-hidden mb-12 shadow-2xl bg-slate-900 group">
        <div className="absolute inset-0">
          <img 
            src="https://gcrjy.ac.in/assets/images/banner/1.jpg" 
            alt="Arts College Main Building" 
            className="w-full h-full object-cover opacity-40 scale-105 group-hover:scale-100 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 p-12 md:p-20 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-2 bg-blue-600/20 backdrop-blur-md rounded-full border border-blue-400/30 text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-6">
            <Landmark size={14} />
            Imperial Legacy
          </div>
          <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-4 leading-none uppercase">
            Government College <span className="text-blue-500">(Autonomous)</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 font-bold mb-10 max-w-3xl mx-auto italic">
            Commonly known as the "Arts College" - A testament to academic excellence and historical grandeur in Rajahmundry.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {features.map((f, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-xl p-6 rounded-[2rem] border border-white/10 hover:border-blue-500/50 transition-all group">
                <f.icon className="mx-auto text-blue-500 mb-3 group-hover:scale-110 transition-transform" size={28} />
                <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">{f.label}</p>
                <p className="text-white font-black text-lg">{f.val}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Campus Gallery */}
      <div className="mb-16">
        <div className="flex items-center justify-between mb-10 px-4">
          <div>
            <h3 className="text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
              <Camera className="text-blue-600" />
              Campus Showcase
            </h3>
            <p className="text-slate-400 font-bold mt-1 uppercase text-[10px] tracking-widest">Visual Infrastructure Tour</p>
          </div>
          <button className="px-6 py-3 bg-white border border-slate-200 rounded-2xl font-black text-[10px] uppercase tracking-widest text-slate-600 hover:bg-slate-50 transition-all shadow-sm">
            View Virtual Tour
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {images.map((img, i) => (
            <div key={i} className="group relative rounded-[2.5rem] overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all border border-slate-100">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={img.url} 
                  alt={img.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-[9px] font-black text-blue-400 uppercase tracking-[0.2em] bg-blue-950/50 px-3 py-1 rounded-full mb-3 inline-block">
                  {img.category}
                </span>
                <h4 className="text-2xl font-black text-white tracking-tight mb-2 uppercase">{img.title}</h4>
                <p className="text-slate-300 text-sm font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                  {img.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Facilities & Furniture Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-4">
        <div className="bg-white p-10 md:p-14 rounded-[3.5rem] border border-slate-100 shadow-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10">
            <Book size={120} className="text-blue-600" />
          </div>
          <h3 className="text-3xl font-black text-slate-900 tracking-tight mb-6 uppercase">Modern Furniture & Classrooms</h3>
          <p className="text-slate-600 text-lg font-medium leading-relaxed mb-8">
            The college has undergone significant infrastructure modernization. Our classrooms feature ergonomic seating designed for long academic hours, integrated audio-visual aids, and smart desks that facilitate collaborative learning.
          </p>
          <ul className="space-y-4">
            {[
              "High-grade polymer student desks",
              "Individual locker facilities",
              "Smart-board enabled classrooms",
              "Tiered seating arrangements",
              "Climate controlled seminar halls"
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 text-sm font-black text-slate-500 uppercase tracking-widest">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-slate-900 p-10 md:p-14 rounded-[3.5rem] border border-slate-800 shadow-xl relative overflow-hidden group text-white">
          <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20">
            <Users size={120} className="text-blue-500" />
          </div>
          <h3 className="text-3xl font-black text-white tracking-tight mb-6 uppercase">Student Community Hubs</h3>
          <p className="text-slate-400 text-lg font-medium leading-relaxed mb-8">
            Beyond academics, the campus provides premium furniture in shared spaces like the Innovation Hub and Central Library, ensuring students have the best resources for research and creative projects.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-white/5 rounded-3xl border border-white/10 hover:border-blue-500/50 transition-colors">
              <Coffee className="text-blue-500 mb-3" />
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Comfort</p>
              <p className="font-bold text-sm">Lounge Areas</p>
            </div>
            <div className="p-6 bg-white/5 rounded-3xl border border-white/10 hover:border-blue-500/50 transition-colors">
              <Building className="text-blue-500 mb-3" />
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Structure</p>
              <p className="font-bold text-sm">170+ Classrooms</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-20 text-center px-4">
        <div className="max-w-3xl mx-auto py-12 border-t border-slate-100">
          <img src="https://gcrjy.ac.in/assets/images/logo.png" alt="GCRJY Logo" className="w-20 mx-auto mb-6 opacity-30 grayscale hover:grayscale-0 transition-all cursor-pointer" />
          <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em]">Government College (A) • Rajahmundry • ESTD 1853</p>
        </div>
      </div>
    </div>
  );
};

export default CollegeShowcase;
