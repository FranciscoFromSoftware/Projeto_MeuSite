import React from 'react';
import { Layout as LayoutIcon, Database, Copy, Download, Activity } from 'lucide-react';

export const Templates: React.FC = () => {
  const svgs = [
    { id: 'GAUGE_01', color: 'text-primary' },
    { id: 'CIRCUIT_X', color: 'text-secondary' },
    { id: 'FLOW_NET', color: 'text-tertiary' },
    { id: 'BENTO_GEN', color: 'text-primary' },
    { id: 'PYR_ARCH', color: 'text-on-surface' },
    { id: 'LOAD_BAR', color: 'text-secondary' },
  ];

  return (
    <div className="space-y-8">
      <div className="mb-12 border-l-4 border-primary pl-6 py-2 bg-primary/5">
        <h2 className="text-4xl font-headline font-black tracking-tight text-on-surface uppercase mb-1">Sector_Alpha: Resource_Hub</h2>
        <p className="font-mono text-sm text-primary/70">UPLINK STATUS: STABLE // DATALINK: SECURED_ENCRYPTION_LAYER_8</p>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* SVG Foundry */}
        <section className="col-span-12 lg:col-span-7 space-y-6">
          <div className="flex items-center justify-between border-b border-outline pb-4">
            <div className="flex items-center gap-3">
              <LayoutIcon className="text-primary" size={20} />
              <h3 className="font-headline font-bold text-xl uppercase tracking-wider">SVG Graphics Foundry</h3>
            </div>
            <span className="font-mono text-[10px] bg-primary/10 text-primary px-2 py-0.5 border border-primary/20">FOUNDRY_V.4.2</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {svgs.map((svg) => (
              <div key={svg.id} className="bg-surface-low border border-outline p-4 flex flex-col gap-4 aspect-square hover:bg-surface-high transition-colors group">
                <div className="flex-1 flex items-center justify-center relative">
                  <div className={svg.color}>
                    <Activity size={48} className="opacity-80 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className={`absolute top-0 right-0 font-mono text-[8px] ${svg.color} opacity-40`}>{svg.id}</div>
                </div>
                <div className="flex flex-col gap-2">
                  <button className={`w-full bg-surface-high border border-${svg.color.split('-')[1]}/30 py-2 text-[10px] font-mono uppercase ${svg.color} hover:bg-primary hover:text-surface transition-all`}>
                    Copy SVG Code
                  </button>
                  <button className="w-full bg-transparent border border-outline/30 py-2 text-[10px] font-mono uppercase text-on-surface-variant hover:border-primary transition-all">
                    Download Shard
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Power BI Datastore */}
        <section className="col-span-12 lg:col-span-5 space-y-6">
          <div className="flex items-center justify-between border-b border-outline pb-4">
            <div className="flex items-center gap-3">
              <Database className="text-secondary" size={20} />
              <h3 className="font-headline font-bold text-xl uppercase tracking-wider">Power BI Datastore</h3>
            </div>
            <span className="font-mono text-[10px] bg-secondary/10 text-secondary px-2 py-0.5 border border-secondary/20">SQL_MASTER_ACTIVE</span>
          </div>

          {[
            {
              title: 'Mainframe_Metrics.json',
              type: 'HOLOGRAPHIC_PREVIEW',
              v: 'V.8.4',
              color: 'secondary',
              code: `{
  "node_id": "OMEGA_01",
  "latency": "14ms",
  "throughput": "4.2TB/s",
  "status": "OPTIMIZED",
  "active_processes": [
    "CORE_LINK", "NEURAL_SYNC"
  ]
}`
            },
            {
              title: 'Sensor_Stream_v4.api',
              type: 'REALTIME_FLOW',
              v: 'V.2.1',
              color: 'primary',
              code: `GET /v1/sensor/telemetry
Authorization: Bearer {UPLINK_TOKEN}

Response:
[
  {"temp": 24.5, "unit": "C"},
  {"temp": 24.8, "unit": "C"}
]`
            }
          ].map((item) => (
            <div key={item.title} className="bg-surface-low border border-outline p-6 relative overflow-hidden group">
              <div className="relative z-10 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className={`font-headline font-bold text-${item.color} uppercase`}>{item.title}</h4>
                    <p className="font-mono text-[10px] text-on-surface-variant">TYPE: {item.type} // {item.v}</p>
                  </div>
                </div>
                <div className="bg-surface p-4 border border-outline/10 font-mono text-[11px] leading-relaxed text-on-surface-variant h-32 overflow-hidden relative">
                  <pre><code>{item.code}</code></pre>
                  <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-surface to-transparent" />
                </div>
                <button className={`w-full bg-${item.color}/10 border border-${item.color} text-${item.color} py-3 font-mono text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-${item.color} hover:text-surface transition-all`}>
                  <Download size={14} />
                  Download Datastore Shard
                </button>
              </div>
            </div>
          ))}
        </section>
      </div>

      {/* Terminal Log */}
      <div className="mt-12 bg-surface border border-outline/20 p-4 font-mono text-[10px] text-on-surface-variant max-h-40 overflow-y-auto">
        <p className="text-primary">&gt;&gt; INITIALIZING_FOUNDRY_SERVICE... SUCCESS</p>
        <p>&gt;&gt; SCANNING_SECTOR_A... 6 RESOURCES FOUND</p>
        <p>&gt;&gt; SCANNING_SECTOR_B... 2 DATASTORES ACTIVE</p>
        <p className="text-secondary">&gt;&gt; WARNING: DATASTORE_OMEGA_01 LATENCY DETECTED (14ms)</p>
        <p>&gt;&gt; WAITING_FOR_INPUT...</p>
      </div>
    </div>
  );
};
