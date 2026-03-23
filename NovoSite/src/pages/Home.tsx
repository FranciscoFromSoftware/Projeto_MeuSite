import React from 'react';
import { Cpu, Activity, Terminal, Shield, Network, Settings } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-4 relative group">
          <div className="absolute -inset-1 bg-primary/20 blur opacity-25 group-hover:opacity-50 transition duration-1000" />
          <div className="relative bg-surface-low border border-outline/30 overflow-hidden">
            <img 
              src="https://picsum.photos/seed/cyberpunk/800/1000" 
              alt="Neural Architect" 
              className="w-full h-[400px] object-cover grayscale brightness-75 contrast-125"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60" />
            <div className="absolute top-4 left-4 font-mono text-[10px] text-primary/60 bg-surface/80 px-2 py-1">
              SUBJECT_ID: 9920-X
            </div>
          </div>
        </div>

        <div className="lg:col-span-8 flex flex-col justify-between">
          <div className="bg-surface-low/60 backdrop-blur-md p-8 border border-outline/20 clip-corner relative">
            <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-secondary">
              CLEARANCE: OMEGA
            </div>
            <h1 className="font-headline font-black text-5xl md:text-7xl text-primary tracking-tighter mb-4 uppercase">
              System Status: Active
            </h1>
            <div className="w-24 h-1 bg-primary mb-6 shadow-[0_0_10px_#00f3ff]" />
            <p className="font-mono text-on-surface-variant text-lg leading-relaxed mb-6 max-w-2xl">
              Neural architect specializing in high-density data visualization and distributed systems core logic. Bridging the gap between raw biometric inputs and predictive behavioral models.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Uptime', value: '12.4YRS', color: 'text-secondary' },
                { label: 'Core Nodes', value: '42+', color: 'text-primary' },
                { label: 'Latency', value: '0.04ms', color: 'text-tertiary' },
                { label: 'Encryption', value: 'AES-QNTM', color: 'text-on-surface' },
              ].map((stat) => (
                <div key={stat.label} className="bg-surface-high p-4 border-l-2 border-primary/30">
                  <span className="block font-mono text-[10px] text-on-surface-variant uppercase">{stat.label}</span>
                  <span className={`block font-mono text-xl ${stat.color}`}>{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-6 flex flex-wrap gap-4">
            <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 border border-primary/20">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-xs text-primary uppercase tracking-widest">Awaiting Command...</span>
            </div>
            <div className="flex items-center gap-2 bg-surface-high px-4 py-2 border border-outline/30">
              <Activity size={12} className="text-primary" />
              <span className="font-mono text-xs uppercase tracking-widest">Grid-7, Sector-B</span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section>
        <div className="flex items-center gap-4 mb-8">
          <h2 className="font-headline font-bold text-2xl uppercase tracking-widest">Technical_Skills.exe</h2>
          <div className="h-[1px] flex-grow bg-outline/30" />
          <span className="font-mono text-[10px] text-primary/40 tracking-[0.3em]">SKILL_MATRIX_V4.0</span>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { icon: Cpu, label: 'Neural Logic', progress: 95, color: 'text-primary' },
            { icon: Activity, label: 'Data HUDs', progress: 88, color: 'text-secondary' },
            { icon: Terminal, label: 'Core Scripts', progress: 92, color: 'text-tertiary' },
            { icon: Shield, label: 'Sec_Protocols', progress: 75, color: 'text-primary' },
            { icon: Network, label: 'Node Networks', progress: 82, color: 'text-secondary' },
            { icon: Settings, label: 'Hardware', progress: 68, color: 'text-tertiary' },
          ].map((skill) => (
            <div key={skill.label} className="bg-surface-low border border-outline/20 p-6 flex flex-col items-center justify-center group hover:border-primary/50 transition-colors">
              <skill.icon className={`${skill.color} mb-4 group-hover:scale-110 transition-transform`} size={32} />
              <span className="font-mono text-[10px] uppercase tracking-tighter text-center">{skill.label}</span>
              <div className="w-full bg-surface-high h-1 mt-4 relative overflow-hidden">
                <div 
                  className={`absolute top-0 left-0 h-full ${skill.color.replace('text-', 'bg-')}`} 
                  style={{ width: `${skill.progress}%` }} 
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="pb-20">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="font-headline font-bold text-2xl uppercase tracking-widest">Professional_Timeline.log</h2>
          <div className="h-[1px] flex-grow bg-outline/30" />
          <span className="font-mono text-[10px] text-secondary/40 tracking-[0.3em]">CHRONOS_SEQUENCE</span>
        </div>

        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary before:via-secondary before:to-transparent">
          {[
            {
              date: '2023 - PRESENT',
              title: 'Lead Neural Architect',
              company: 'CYBERDINE_SYSTEMS.hq',
              desc: 'Implementing large-scale synaptic mapping for autonomous defense clusters. Reduced data overhead by 40% using custom-compiled bio-logics.',
              status: 'ACTIVE_PROCESS',
              color: 'primary'
            },
            {
              date: '2020 - 2023',
              title: 'Sr. Data Visualizer',
              company: 'TYRELL_CORP.datalake',
              desc: 'Designed holographic interface overlays for biometric off-world harvesting units. Specialized in high-stress tactical telemetry display.',
              status: 'COMPLETE',
              color: 'secondary'
            },
            {
              date: '2018 - 2020',
              title: 'Junior Sys_Core Eng',
              company: 'NETRUN_SOLUTIONS.node',
              desc: 'Maintained distributed ledger security for black-market neural data exchanges. Optimized low-level C++ drivers for sensory input buffers.',
              status: 'ARCHIVED',
              color: 'tertiary'
            }
          ].map((item, idx) => (
            <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className={`flex items-center justify-center w-10 h-10 rounded-full border border-${item.color} bg-surface shadow-[0_0_15px_rgba(0,243,255,0.4)] z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2`}>
                <div className={`w-2 h-2 bg-${item.color}`} />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-surface-low p-6 border border-outline/20 hover:border-primary/40 transition-all">
                <div className="flex items-center justify-between mb-2">
                  <time className={`font-mono text-[10px] text-${item.color}`}>{item.date}</time>
                  <span className="font-mono text-[10px] text-on-surface-variant uppercase bg-surface-high px-2 py-0.5">{item.status}</span>
                </div>
                <h3 className="font-headline font-bold text-xl uppercase mb-1">{item.title}</h3>
                <p className={`font-mono text-[10px] text-${item.color} mb-4`}>{item.company}</p>
                <p className="text-on-surface-variant text-sm leading-relaxed italic">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
