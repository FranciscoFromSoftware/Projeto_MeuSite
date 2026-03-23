import React from 'react';
import { Award, Shield, Zap, Microscope, Network, Database } from 'lucide-react';

export const Certifications: React.FC = () => {
  const certs = [
    {
      id: 'SHARD_02',
      title: 'Tensor Flow Dynamics',
      issuer: 'DEEP_MINDS_LAB',
      status: 'VERIFIED',
      date: 'Q4_2023',
      icon: Award,
      color: 'text-primary'
    },
    {
      id: 'SHARD_03',
      title: 'Crypto-Static Defense',
      issuer: 'CYBER_CORE_SEC',
      status: 'VERIFIED',
      date: 'Q1_2024',
      icon: Shield,
      color: 'text-secondary'
    },
    {
      id: 'SHARD_04',
      title: 'High-Freq Computing',
      issuer: 'PLASMA_NETWORKS',
      status: 'EXPIRES_SOON',
      date: 'Q2_2024',
      icon: Zap,
      color: 'text-tertiary'
    },
    {
      id: 'SHARD_05',
      title: 'Bio-Link Synthesis',
      issuer: 'SYNTH_CORP',
      status: 'VERIFIED',
      date: 'JAN_2024',
      icon: Microscope,
      color: 'text-primary'
    },
    {
      id: 'SHARD_06',
      title: 'Mesh Network Master',
      issuer: 'GLOBAL_UPLINK',
      status: 'VERIFIED',
      date: 'MAR_2024',
      icon: Network,
      color: 'text-secondary'
    },
    {
      id: 'SHARD_07',
      title: 'Quantum DB Logic',
      issuer: 'QBIT_SYSTEMS',
      status: 'VERIFIED',
      date: 'APR_2024',
      icon: Database,
      color: 'text-primary'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end mb-8 border-b border-outline pb-4">
        <div>
          <h1 className="text-4xl font-headline font-black uppercase tracking-tighter text-on-surface leading-none">
            Certifications & <span className="text-primary">Courses</span>
          </h1>
          <div className="flex gap-4 mt-2 font-mono text-[10px] uppercase text-primary/60 tracking-widest">
            <span>NODE_ID: DATA_ARCHITECT_01</span>
            <span className="text-outline">//</span>
            <span>ACCESS_LEVEL: OMEGA_PROTOCOL</span>
            <span className="text-outline">//</span>
            <span className="animate-pulse">STATUS: NEURAL_LINK_STABLE</span>
          </div>
        </div>
        <div className="text-right font-mono text-[10px] text-outline uppercase">
          <div>SYSTEM_UPTIME: 1422:45:12</div>
          <div className="text-secondary">LATENCY: 4.2ms</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Featured Shard */}
        <div className="md:col-span-2 lg:col-span-2 relative group overflow-hidden bg-surface-low border border-primary/20 p-1 shard-clip">
          <div className="relative bg-surface-high h-[500px] p-8 flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-primary/40 select-none">
              SHARD_REF: 0xFF-001
            </div>
            <div>
              <div className="inline-block px-3 py-1 bg-secondary text-surface font-mono text-[10px] font-bold uppercase mb-6 shard-clip">
                Featured Certification
              </div>
              <h2 className="text-6xl font-headline font-black uppercase leading-tight tracking-tighter mb-4 text-primary">
                Advanced Neural <br/>Architect v4.0
              </h2>
              <p className="max-w-md font-body text-on-surface-variant leading-relaxed">
                Complete neural pathway validation for large-scale cognitive processing units. Specialization in recursive data-flow and biometric parity algorithms.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-2">
                <span className="w-2 h-2 bg-primary"></span>
                <span className="w-2 h-2 bg-primary/40"></span>
                <span className="w-2 h-2 bg-primary/20"></span>
              </div>
              <div className="flex justify-between items-center border-t border-outline pt-4">
                <div className="font-mono text-xs uppercase text-secondary">
                  Issued: OCT_202X // Validated: YES
                </div>
                <button className="bg-primary text-surface font-mono px-6 py-2 text-xs font-bold uppercase transition-all hover:translate-x-1">
                  VIEW_VALIDATION_STREAM
                </button>
              </div>
            </div>
              <div className="absolute -bottom-20 -right-20 w-64 h-64 border-[1px] border-primary/10 rounded-full animate-[spin_20s_linear_infinite] pointer-events-none overflow-hidden">
                <img 
                  src="https://picsum.photos/seed/abstract/400/400?blur=2" 
                  alt="Neural Seal" 
                  className="w-full h-full object-cover opacity-20"
                  referrerPolicy="no-referrer"
                />
              </div>
          </div>
        </div>

        {/* Shard Grid */}
        {certs.map((cert) => (
          <div key={cert.id} className="bg-surface-low border border-outline hover:border-primary/50 transition-colors group cursor-crosshair shard-clip p-1">
            <div className="bg-surface-high p-6 flex flex-col h-full gap-4 transition-transform group-hover:scale-[0.98]">
              <div className="flex justify-between items-start">
                <cert.icon className={`${cert.color} text-3xl`} size={32} />
                <span className="font-mono text-[10px] text-outline uppercase tracking-widest">{cert.id}</span>
              </div>
              <div className="flex-1">
                <h3 className="font-headline font-bold text-xl uppercase tracking-tighter text-on-surface group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <p className="font-mono text-[10px] text-on-surface-variant mt-2 uppercase tracking-tight">
                  ISSUER: {cert.issuer}
                </p>
              </div>
              <div className="bg-surface p-3 flex justify-between items-center font-mono text-[9px] uppercase">
                <span className={cert.status === 'EXPIRES_SOON' ? 'text-tertiary' : 'text-secondary'}>
                  {cert.status}
                </span>
                <span className="text-outline">{cert.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Telemetry Section */}
      <section className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-surface-low border border-outline p-6 shard-clip">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-2 w-2 bg-primary animate-pulse"></div>
            <h4 className="font-headline font-bold uppercase tracking-widest text-sm">Validation_Stream: Active</h4>
          </div>
          <div className="space-y-2 font-mono text-[10px] text-on-surface-variant overflow-hidden h-48 relative">
            <p className="text-primary/60">[0.0012] Initializing handshake with neural certification authority...</p>
            <p>[0.0045] Public key exchange: 0x82...9F1 confirmed.</p>
            <p>[0.0122] Fetching credential hash: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855</p>
            <p className="text-secondary">[0.0543] VALIDATING SIGNATURE: ADVANCED NEURAL ARCHITECT v4.0</p>
            <p>[0.0611] Authority match: UNIVERSAL DATA CONSORTIUM [UDC]</p>
            <p>[0.0892] Expiration check: FOREVER_ACTIVE</p>
            <p className="text-primary">[0.1102] STREAM STABLE. RENDERING HOLOGRAPHIC SEAL...</p>
            <p>[0.1255] Loading biometric metadata...</p>
            <p>[0.1344] User verified: ARCHITECT_PRIMARY</p>
            <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-surface-low to-transparent" />
          </div>
        </div>

        <div className="bg-surface-high border-l-2 border-secondary p-6 relative">
          <div className="absolute top-2 right-2 flex gap-1">
            <div className="w-1 h-1 bg-secondary"></div>
            <div className="w-1 h-1 bg-secondary/50"></div>
          </div>
          <h4 className="font-headline font-bold uppercase tracking-widest text-sm mb-4 text-secondary">System Information</h4>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-mono text-[10px] text-outline uppercase">Total Shards</span>
              <span className="font-mono text-xs font-bold text-on-surface">24/24</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-mono text-[10px] text-outline uppercase">Mastery Level</span>
              <span className="font-mono text-xs font-bold text-primary">ELITE_TIER</span>
            </div>
            <div className="w-full bg-surface h-1 mt-2">
              <div className="bg-primary h-full w-[92%] shadow-[0_0_10px_rgba(0,243,255,0.5)]"></div>
            </div>
            <div className="pt-4 border-t border-outline">
              <p className="font-mono text-[9px] text-outline-variant italic leading-tight">
                "The architecture of the mind is the only blueprint that matters in the post-silicon era."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
