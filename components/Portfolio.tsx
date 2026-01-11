
import React, { useState } from 'react';
import { GraduationCap, Award, BookOpen, User, Mail, Phone, ExternalLink, Briefcase, Microscope, FileText, Calendar, Building2, Globe, X, Link as LinkIcon, Info, Presentation } from 'lucide-react';
import { Degree } from '../types';

const Portfolio: React.FC = () => {
  const [showPublications, setShowPublications] = useState(false);
  const [showConferences, setShowConferences] = useState(false);

  const bioText = "Dr. A. A. Annapurna holds a Ph.D. in Women Empowerment through Micro Finance, complemented by an MBA in Marketing, an M.Com, and a B.A. in Corporate Secretaryship. Her interdisciplinary research focuses on the intersection of social and digital economies, specifically exploring women's empowerment, microfinance, green consumerism, and the evolution of blockchain and cryptocurrency.";

  const degrees: Degree[] = [
    { title: 'Doctor of Philosophy (Ph.D.)', institution: 'SV University, Tirupathi, India', year: '2013', specialization: 'Women empowerment through micro finance' },
    { title: 'Master of Business Administration (M.B.A)', institution: 'IGNOU, India', year: '2023', specialization: 'Marketing' },
    { title: 'Master of Commerce (M.Com)', institution: 'MADRAS UNIVERSITY, India', year: '1992', specialization: 'COMMERCE' },
    { title: 'Bachelor of Arts (B.A)', institution: 'MADRAS UNIVERSITY, India', year: '1990', specialization: 'CORPORATE SECRETARYSHIP' },
  ];

  const journalPapers = [
    {
      title: "THE NEW EDUCATION POLICY 2020: ENHANCING WORKFORCE READINESS: A CASE STUDY OF REFORMS IN ANDHRA PRADESH STATE HIGHER EDUCATION",
      journal: "INTERNATIONAL JOURNAL OF MULTIDISCIPLINARY EDUCATIONAL RESEARCH",
      year: "2024",
      issn: "2277 – 788",
      impactFactor: "9.01",
      link: "www.ijmer.in"
    },
    {
      title: "CRYPTOCURRENCY & BLOCKCHAIN SECURITY STANDARDS",
      journal: "Gurukul International Multidisciplinary Research",
      year: "2024",
      issn: "2394-8426",
      impactFactor: "8.25",
      link: "https://gurukuljournal.com/cryptocurrency-blockchain-security-standards/"
    },
    {
      title: "Green Consumerism for Environmental Sustainability",
      journal: "IJRAR - International Journal of Research and Analytical Reviews",
      year: "2024",
      issn: "E-ISSN 2348-1269",
      impactFactor: "7.17",
      link: "http://www.ijrar.org/IJRAR24C1847.pdf"
    },
    {
      title: "Social Media: A Game Change in Consumers’ Buying Decision-Making A study in East Godavari District, Andhra Pradesh",
      journal: "MUKT SHABD JOURNAL Volume XIII, Issue VI",
      year: "2024",
      issn: "2347-3150",
      impactFactor: "4.60",
      link: "https://shabdbooks.com/current-issue"
    },
    {
      title: "A STUDY ON CUSTOMERS AWARENESS AND PRODUCTS TOWARDS SHGs IN EAST GODAVARI DISTRICT",
      journal: "MUKT SHABD JOURNAL",
      year: "2023",
      issn: "2347-3150",
      impactFactor: "4.60",
      link: "https://drive.google.com/file/d/1iWtBOz6XR47twC1t8ZnfCDpSFxdevnD-/view"
    },
    {
      title: "A study on Customer Satisfaction on Banking Facilities and Services Providing in East Godavari District of Andhra Pradesh",
      journal: "TIJER - International Research Journal",
      year: "2023",
      issn: "2349-9249",
      impactFactor: "8.57",
      link: "https://tijer.org/papers/TIJER2305254.pdf"
    },
    {
      title: "SHG-Bank Linkage Programme: An Indian Perspective",
      journal: "International Journal of Engineering science & Computing",
      year: "2017",
      issn: "2319-7242",
      impactFactor: "6.13",
      link: "https://drive.google.com/file/d/1SRT77N1Di7OVMLnhDoHLFIENUm5FR260/view?usp=sharing"
    },
    {
      title: "Women Empowerment through Microfinance-A case study of East Godavari, Andhra Pradesh",
      journal: "International Journal for Research in Science & Advanced Technologies 2",
      year: "2012",
      issn: "2319-2690",
      impactFactor: "0.00",
      link: "https://drive.google.com/file/d/1dV_M-HuFMn8ksN-WpFyPMBW2D6POznMM/view?usp=sharing"
    }
  ];

  const conferencePapers = [
    {
      title: "women empowerment through Entrepreneurship",
      organizedBy: "Government college (Autonomous) Rajahmundry",
      date: "10-04-2023",
      details: "Full Paper presented at Women Entrepreneurship Conference",
      isbn: "978-93-340-0079-5",
      link: "nA"
    }
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20 max-w-6xl mx-auto">
      {/* Header Profile Section */}
      <div className="bg-white rounded-[3rem] p-6 md:p-12 shadow-2xl border border-slate-100 mb-12 overflow-hidden relative text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[140%] h-64 bg-gradient-to-b from-orange-50/80 to-transparent -mt-20 blur-3xl opacity-60"></div>
        
        <div className="relative z-10 flex flex-col items-center">
          {/* Adjusted Small Size Image */}
          <div className="w-44 h-56 rounded-[2rem] overflow-hidden ring-[10px] ring-white shadow-2xl bg-slate-100 mb-6 transition-all hover:scale-105 duration-500">
            <img 
              src="https://gcrjy.ac.in/faculty/images/662fce37af0cc_DSC_0727%201%20(1).jpg" 
              alt="Dr. A. A. Annapurna"  
              className="w-full h-full object-cover object-center"
            />
          </div>
          
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full text-[10px] font-black bg-orange-100 text-orange-700 uppercase tracking-[0.3em] mb-4 shadow-sm border border-orange-200">
              State Level Best NAAC Coordinator
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-2">Dr. A. A. Annapurna</h2>
            <p className="text-xl text-orange-600 font-bold mb-6 italic tracking-tight opacity-90">Assistant Professor of Commerce</p>
            
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-8 text-slate-600 font-bold text-xs">
              <a href="mailto:annapurnaaa@gcrjy.ac.in" className="flex items-center gap-2 hover:text-orange-600 transition-colors">
                <Mail size={16} className="text-orange-500" />
                <span>annapurnaaa@gcrjy.ac.in</span>
              </a>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-orange-500" />
                <span>+91 8978737858</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-orange-500" />
                <span>Joined: 01-10-2014</span>
              </div>
            </div>

            {/* Academic IDs Row */}
            <div className="flex flex-wrap justify-center gap-2.5 mb-8">
              {[
                { label: 'ORCID', val: '0000-0002-2309-6610' },
                { label: 'Vidwaan', val: '8003' },
                { label: 'Scholar', val: '9' }
              ].map(id => (
                <div key={id.label} className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-lg text-[9px] font-black text-slate-500 uppercase tracking-widest shadow-inner">
                  <span className="text-orange-600 mr-2">{id.label}:</span>{id.val}
                </div>
              ))}
            </div>

            <div className="bg-white/60 backdrop-blur-md p-8 rounded-[2rem] border border-slate-100 shadow-xl relative group max-w-3xl mx-auto ring-1 ring-slate-100/50">
              <p className="text-slate-700 leading-relaxed text-base md:text-lg font-medium italic relative z-10 text-center">
                "{bioText}"
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 px-4">
        {/* Experience & Qualifications (Left) */}
        <div className="lg:col-span-7 space-y-12">
          {/* Work Experience */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-emerald-600 rounded-2xl text-white shadow-xl shadow-emerald-100">
                <Briefcase size={28} />
              </div>
              <h3 className="text-3xl font-black text-slate-900 tracking-tight">Professional Experience</h3>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm relative group overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-emerald-500"></div>
                <div className="flex justify-between items-start mb-4">
                  <h4 className="font-black text-slate-900 text-xl">Assistant Professor in EDUCATION</h4>
                  <span className="text-xs font-black text-emerald-600 bg-emerald-50 px-4 py-1.5 rounded-full uppercase tracking-widest">2011 - Present</span>
                </div>
                <p className="text-slate-600 font-bold text-lg mb-2">COMMISIONARATE OF COLLEGIATE EDUCATION, AP</p>
                <p className="text-slate-400 font-medium italic">Leading academic reforms and classroom excellence.</p>
              </div>

              <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm relative group overflow-hidden opacity-80">
                <div className="absolute top-0 left-0 w-2 h-full bg-slate-300"></div>
                <div className="flex justify-between items-start mb-4">
                  <h4 className="font-black text-slate-900 text-xl">Lecturer in EDUCATION</h4>
                  <span className="text-xs font-black text-slate-500 bg-slate-100 px-4 py-1.5 rounded-full uppercase tracking-widest">2002 - 2011</span>
                </div>
                <p className="text-slate-600 font-bold text-lg mb-2">INTERMEDIATE BOARD OF EDUCATION, AP</p>
                <p className="text-slate-400 font-medium italic">Foundation for higher education and student mentoring.</p>
              </div>
            </div>
          </section>

          {/* Academic Degrees */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-indigo-600 rounded-2xl text-white shadow-xl shadow-indigo-100">
                <GraduationCap size={28} />
              </div>
              <h3 className="text-3xl font-black text-slate-900 tracking-tight">Academic Qualifications</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {degrees.map((degree, idx) => (
                <div key={idx} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-indigo-100 transition-all flex flex-col">
                  <span className="text-[11px] font-black text-indigo-600 bg-indigo-50 px-4 py-1.5 rounded-xl mb-4 self-start uppercase tracking-widest border border-indigo-100">{degree.year}</span>
                  <h4 className="font-black text-slate-900 text-xl mb-2 leading-tight flex-grow">{degree.title}</h4>
                  <p className="text-sm text-slate-500 font-bold mb-4">{degree.institution}</p>
                  <div className="pt-4 border-t border-slate-50 text-[10px] font-black text-slate-400 uppercase tracking-widest leading-relaxed">
                    Spec: {degree.specialization}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Research & Administrative (Right) */}
        <div className="lg:col-span-5 space-y-12">
          {/* Research Stats & Projects */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-orange-600 rounded-2xl text-white shadow-xl shadow-orange-100">
                <Microscope size={28} />
              </div>
              <h3 className="text-3xl font-black text-slate-900 tracking-tight">Research Portfolio</h3>
            </div>
            <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm p-8 space-y-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-3xl text-center border border-orange-200">
                  <div className="text-4xl font-black text-orange-600 mb-1">08</div>
                  <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Journal Papers</div>
                </div>
                <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-3xl text-center border border-indigo-200">
                  <div className="text-4xl font-black text-indigo-600 mb-1">01</div>
                  <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Conference Papers</div>
                </div>
              </div>

              <div className="space-y-4">
                <h5 className="font-black text-slate-400 text-xs uppercase tracking-[0.2em] mb-2 text-center">Publications & Events</h5>
                
                <button 
                  onClick={() => setShowPublications(true)}
                  className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] shadow-xl hover:bg-orange-600 transition-all flex items-center justify-center gap-3"
                >
                  <FileText size={16} />
                  Journal Papers (08)
                </button>

                <button 
                  onClick={() => setShowConferences(true)}
                  className="w-full py-4 bg-white border border-slate-200 text-slate-600 rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] shadow-sm hover:border-indigo-600 hover:text-indigo-600 transition-all flex items-center justify-center gap-3"
                >
                  <Presentation size={16} />
                  Conference Papers (01)
                </button>
              </div>

              <div className="pt-6 border-t border-slate-100">
                 <h5 className="font-black text-slate-400 text-xs uppercase tracking-[0.2em] mb-4">Research Project (2024-2026)</h5>
                 <div className="bg-indigo-600 text-white p-6 rounded-3xl shadow-lg shadow-indigo-100 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                      <Briefcase size={64} />
                    </div>
                    <p className="text-sm font-bold leading-relaxed mb-3 relative z-10">"WOMEN ENTREPRENEURSHIP A MEANS FOR SUSTENANCE AND DEVELOPMENT IN EAST GODAVARI DISTRICT"</p>
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest opacity-80 relative z-10">
                      <span>Fund: INR 1.2 Lakhs</span>
                      <span>Status: Ongoing</span>
                    </div>
                 </div>
              </div>
            </div>
          </section>

          {/* Admin Roles & Awards */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-amber-500 rounded-2xl text-white shadow-xl shadow-amber-100">
                <Building2 size={28} />
              </div>
              <h3 className="text-3xl font-black text-slate-900 tracking-tight">Responsibilities</h3>
            </div>
            <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm divide-y divide-slate-50 overflow-hidden">
              {[
                { title: 'IQAC Coordinator', role: 'Strategic Quality Planning', time: '01-07-2017 - Present' },
                { title: 'NAAC Coordinator', role: 'Accreditation Excellence', time: 'State Level Best Award 2024' },
                { title: 'Entrepreneurship Club', role: 'Student Startup Mentoring', time: '29-11-2023 - Present' },
                { title: 'Commerce Association', role: 'Life Member', time: 'since 01-08-2023' }
              ].map((item, i) => (
                <div key={i} className="p-7 flex gap-5 hover:bg-slate-50 transition-colors">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-amber-500 border border-slate-100 shadow-sm flex-shrink-0">
                    {i === 1 ? <Award size={24} /> : i === 0 ? <Globe size={24} /> : <User size={24} />}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-black text-slate-900 mb-1 leading-tight">{item.title}</h4>
                    <p className="text-xs font-bold text-slate-500 mb-1 uppercase tracking-wider">{item.role}</p>
                    <p className="text-[10px] font-black text-orange-600 uppercase tracking-widest">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Journal Publications Modal */}
      {showPublications && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" onClick={() => setShowPublications(false)}></div>
          
          <div className="bg-slate-50 w-full max-w-5xl h-full max-h-[90vh] rounded-[3rem] shadow-2xl flex flex-col relative z-10 overflow-hidden border border-white/20">
            {/* Modal Header */}
            <div className="bg-white px-8 py-6 border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-orange-100 text-orange-600 rounded-2xl">
                  <FileText size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">Journal Publications</h3>
                  <p className="text-xs font-black text-orange-600 uppercase tracking-widest">08 Peer-Reviewed Articles</p>
                </div>
              </div>
              <button 
                onClick={() => setShowPublications(false)}
                className="p-3 bg-slate-100 text-slate-500 rounded-full hover:bg-red-50 hover:text-red-600 transition-all shadow-sm"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex-1 overflow-y-auto p-8 space-y-6 bg-slate-50/50">
              {journalPapers.map((paper, idx) => (
                <div key={idx} className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all group">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="text-[10px] font-black text-orange-600 bg-orange-50 px-3 py-1 rounded-lg border border-orange-100 uppercase tracking-widest">
                          Year: {paper.year}
                        </span>
                        <span className="text-[10px] font-black text-indigo-600 bg-indigo-50 px-3 py-1 rounded-lg border border-indigo-100 uppercase tracking-widest">
                          Impact Factor: {paper.impactFactor}
                        </span>
                      </div>
                      <h4 className="text-xl font-black text-slate-900 leading-tight mb-4 group-hover:text-orange-600 transition-colors tracking-tight uppercase">
                        {paper.title}
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mb-6">
                        <div className="flex items-start gap-2">
                          <BookOpen size={16} className="text-slate-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Journal</p>
                            <p className="text-slate-600 font-bold leading-tight">{paper.journal}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Info size={16} className="text-slate-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">ISSN / Identifier</p>
                            <p className="text-slate-600 font-bold uppercase">{paper.issn}</p>
                          </div>
                        </div>
                      </div>
                      <a 
                        href={paper.link.startsWith('http') ? paper.link : `https://${paper.link}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[10px] font-black text-indigo-600 uppercase tracking-[0.2em] bg-indigo-50 px-6 py-3 rounded-2xl hover:bg-indigo-600 hover:text-white transition-all shadow-sm border border-indigo-100"
                      >
                        <LinkIcon size={14} />
                        View Journal Details
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-white px-8 py-6 border-t border-slate-100 text-center">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Dr. A. A. Annapurna • Research Excellence</p>
            </div>
          </div>
        </div>
      )}

      {/* Conference Papers Modal */}
      {showConferences && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-in zoom-in-95 duration-300">
          <div className="absolute inset-0 bg-indigo-900/60 backdrop-blur-md" onClick={() => setShowConferences(false)}></div>
          
          <div className="bg-white w-full max-w-4xl rounded-[3rem] shadow-2xl flex flex-col relative z-10 overflow-hidden">
            <div className="bg-indigo-600 px-8 py-8 text-white flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/20 rounded-2xl">
                  <Presentation size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-black tracking-tight">Conference Papers</h3>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80">Research Dissemination</p>
                </div>
              </div>
              <button onClick={() => setShowConferences(false)} className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-all">
                <X size={24} />
              </button>
            </div>

            <div className="p-10">
              {conferencePapers.map((paper, idx) => (
                <div key={idx} className="bg-slate-50 rounded-[2.5rem] p-8 border border-slate-100 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Presentation size={120} className="text-indigo-600" />
                  </div>
                  <div className="relative z-10">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                       <span className="text-[11px] font-black text-indigo-700 bg-indigo-100 px-4 py-1.5 rounded-full uppercase tracking-widest border border-indigo-200">
                          {paper.date}
                       </span>
                       <span className="text-[11px] font-black text-slate-500 uppercase tracking-widest">
                          ISSN: {paper.isbn}
                       </span>
                    </div>
                    <h4 className="text-2xl font-black text-slate-900 mb-6 leading-tight uppercase">"{paper.title}"</h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                       <div>
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Organized By</p>
                          <p className="text-slate-700 font-bold flex items-center gap-2">
                             <Building2 size={16} className="text-indigo-500" />
                             {paper.organizedBy}
                          </p>
                       </div>
                       <div>
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Type</p>
                          <p className="text-slate-700 font-bold flex items-center gap-2">
                             <FileText size={16} className="text-indigo-500" />
                             Full Paper Presentation
                          </p>
                       </div>
                    </div>

                    <div className="pt-8 border-t border-slate-200 flex flex-wrap gap-4 items-center">
                       <span className="px-6 py-3 bg-slate-200 text-slate-500 rounded-2xl font-black text-[10px] uppercase tracking-widest">
                          Weblink: Not Available
                       </span>
                       <div className="flex-1 text-right">
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic opacity-60">Presented at GCA Rajahmundry</p>
                       </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
