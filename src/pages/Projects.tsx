import React from 'react';
import { Database, Terminal, History, ArrowUpRight, Info } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Dashboard Header */}
      <div className="mb-8 flex justify-between items-end border-b border-outline pb-4">
        <div>
          <h1 className="font-headline font-black text-4xl text-primary tracking-tighter uppercase">Project_Databanks.exe</h1>
          <p className="font-mono text-xs text-secondary mt-2 tracking-widest uppercase">Central Command // Repository Access: Active</p>
        </div>
        <div className="flex gap-4">
          <div className="bg-surface-high p-3 border-l-4 border-primary">
            <span className="block font-mono text-[10px] text-outline uppercase">Network_Load</span>
            <span className="font-headline font-bold text-xl text-primary">0.42 TB/S</span>
          </div>
          <div className="bg-surface-high p-3 border-l-4 border-secondary">
            <span className="block font-mono text-[10px] text-outline uppercase">Active_Nodes</span>
            <span className="font-headline font-bold text-xl text-secondary">1,204</span>
          </div>
        </div>
      </div>

      {/* Bento Project Gallery */}
      <div className="grid grid-cols-12 gap-4">
        {/* Main Project */}
        <div className="col-span-12 lg:col-span-8 group">
          <div className="relative bg-surface-low border border-outline hover:border-primary/40 transition-colors p-6 flex flex-col gap-6 overflow-hidden">
            <div className="absolute top-0 right-0 p-2 bg-primary/10 border-b border-l border-primary/20 font-mono text-[10px] text-primary">ID: PX-992-ALPHA</div>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/2 aspect-video bg-surface relative overflow-hidden group-hover:shadow-[0_0_30px_rgba(0,243,255,0.1)] transition-shadow">
                <img 
                  className="w-full h-full object-cover opacity-40 mix-blend-screen" 
                  src="https://picsum.photos/seed/tech1/800/600" 
                  alt="NeuroSync Kernel"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Database className="text-primary/20" size={64} />
                </div>
                <div className="absolute bottom-2 left-2 flex gap-1">
                  <div className="px-2 py-0.5 bg-primary text-surface text-[8px] font-mono font-bold uppercase tracking-widest">LIVE_FEED</div>
                  <div className="px-2 py-0.5 bg-black/60 text-primary text-[8px] font-mono uppercase">SECURE_TUNNEL_01</div>
                </div>
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-between">
                <div>
                  <h2 className="font-headline font-bold text-2xl text-primary mb-2 uppercase tracking-tight">NeuroSync_Kernel</h2>
                  <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                    Next-gen neural interfacing protocol for low-latency biometric data transmission. Optimized for high-density sensor arrays.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="flex flex-col gap-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-mono text-[10px] text-outline uppercase">Accuracy</span>
                      <span className="font-mono text-[10px] text-primary">99.8%</span>
                    </div>
                    <div className="h-1 bg-surface-bright w-full">
                      <div className="h-full bg-primary w-[99.8%]" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-mono text-[10px] text-outline uppercase">Response</span>
                      <span className="font-mono text-[10px] text-secondary">1.2MS</span>
                    </div>
                    <div className="h-1 bg-surface-bright w-full">
                      <div className="h-full bg-secondary w-[85%]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-outline/10">
              {['#C++_ASM', '#CUDA_CORES', '#WEBSOCKET_V4', '#BIO_ENCRYPTION'].map(tag => (
                <span key={tag} className="font-mono text-[10px] bg-surface-high px-2 py-1 border border-outline/30 text-on-surface">{tag}</span>
              ))}
              <button className="ml-auto font-mono text-[10px] text-primary flex items-center gap-1 hover:underline">
                INIT_EXPAND <ArrowUpRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Small Module */}
        <div className="col-span-12 md:col-span-6 lg:col-span-4">
          <div className="bg-surface-low border border-outline p-6 flex flex-col h-full relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 w-16 h-16 bg-tertiary/5 rotate-45 border-l border-b border-tertiary/20" />
            <div className="flex justify-between items-start mb-4">
              <Terminal className="text-tertiary" size={32} />
              <div className="px-2 py-0.5 bg-tertiary/10 text-tertiary font-mono text-[9px] border border-tertiary/20 uppercase">Critical_Process</div>
            </div>
            <h3 className="font-headline font-bold text-xl text-primary mb-2 uppercase tracking-tight">Vortex_Firewall_V2</h3>
            <p className="font-body text-xs text-on-surface-variant mb-6 line-clamp-3">
              Active threat detection system utilizing behavioral analysis and heuristic shielding against zero-day quantum exploits.
            </p>
            <div className="mt-auto pt-4 border-t border-outline/10 flex justify-between items-center">
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
                <span className="font-mono text-[10px] text-tertiary uppercase">Intercepting_32</span>
              </div>
              <Info className="text-outline group-hover:text-tertiary transition-colors" size={16} />
            </div>
          </div>
        </div>

        {/* Asymmetric Log */}
        <div className="col-span-12 md:col-span-6 lg:col-span-3">
          <div className="bg-surface-low border border-outline p-4 h-full relative group">
            <div className="flex items-center gap-2 mb-4 border-b border-outline/20 pb-2">
              <History className="text-primary" size={14} />
              <span className="font-mono text-[10px] text-outline uppercase tracking-widest">DEPLOYMENT_LOG</span>
            </div>
            <div className="space-y-4">
              <div className="border-l-2 border-primary/30 pl-3">
                <span className="block font-mono text-[9px] text-outline">T-MINUS 04:22:01</span>
                <span className="block font-mono text-[11px] text-on-surface">UPLINK_ESTABLISHED_77</span>
              </div>
              <div className="border-l-2 border-secondary/30 pl-3">
                <span className="block font-mono text-[9px] text-outline">T-MINUS 02:15:45</span>
                <span className="block font-mono text-[11px] text-on-surface">CORE_DUMP_ANALYSIS_COMPLETED</span>
              </div>
              <div className="border-l-2 border-primary/30 pl-3">
                <span className="block font-mono text-[9px] text-outline">T-MINUS 00:05:12</span>
                <span className="block font-mono text-[11px] text-on-surface">PATCH_2.4.1_STAGED</span>
              </div>
            </div>
          </div>
        </div>

        {/* Code View Module */}
        <div className="col-span-12 lg:col-span-9">
          <div className="bg-surface-low border border-outline overflow-hidden flex flex-col md:flex-row min-h-[400px]">
            <div className="w-full md:w-2/5 p-8 border-r border-outline/20 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-secondary" />
                  <h4 className="font-mono text-xs text-secondary uppercase tracking-[0.2em]">PROJECT_DEEP_DIVE</h4>
                </div>
                <h2 className="font-headline font-black text-3xl text-primary mb-6 uppercase tracking-tight">Quantum_Mapper</h2>
                <div className="space-y-6">
                  <div>
                    <span className="block font-mono text-[10px] text-outline mb-1 uppercase">_PROBLEM</span>
                    <p className="font-body text-sm text-on-surface-variant leading-relaxed">Classical spatial algorithms failed to account for multi-dimensional data folding in large-scale VR simulations.</p>
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] text-outline mb-1 uppercase">_SOLUTION</span>
                    <p className="font-body text-sm text-on-surface-variant leading-relaxed">Implemented a custom non-Euclidean pathfinding kernel utilizing tensor-based acceleration.</p>
                  </div>
                </div>
              </div>
              <div className="pt-8">
                <button className="w-full bg-secondary text-surface font-mono text-xs py-3 font-bold flex items-center justify-center gap-2 hover:brightness-110 active:scale-[0.98] transition-all uppercase tracking-widest">
                  <Terminal size={14} />
                  EXECUTE_SIMULATION
                </button>
              </div>
            </div>
            <div className="w-full md:w-3/5 bg-surface p-6 font-mono text-xs overflow-x-auto relative">
              <div className="absolute top-0 right-0 p-3 flex gap-2">
                <div className="w-2 h-2 rounded-full bg-surface-bright" />
                <div className="w-2 h-2 rounded-full bg-surface-bright" />
                <div className="w-2 h-2 rounded-full bg-surface-bright" />
              </div>
              <div className="flex gap-4">
                <div className="text-outline/40 select-none text-right">
                  01<br/>02<br/>03<br/>04<br/>05<br/>06<br/>07<br/>08<br/>09<br/>10<br/>11<br/>12<br/>13<br/>14<br/>15
                </div>
                <div className="text-on-surface-variant">
                  <span className="text-secondary">template</span> &lt;<span className="text-primary">typename</span> T&gt;<br/>
                  <span className="text-primary">class</span> QuantumKernel &#123;<br/>
                  &nbsp;&nbsp;<span className="text-primary">private</span>:<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;T *tensor_array;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-outline">// Initialize coordinate matrix</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-primary">void</span> <span className="text-secondary">init_map</span>() &#123;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-primary">for</span>(<span className="text-primary">int</span> i = 0; i &lt; MAX_DIM; ++i) &#123;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;tensor_array[i] = <span className="text-tertiary">__builtin_qmap</span>(i);<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-outline">/* SYNC_ERR_RECOVERY */</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
                  &nbsp;&nbsp;<span className="text-primary">public</span>:<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;QuantumKernel() &#123; init_map(); &#125;<br/>
                  &#125;;
                </div>
              </div>
              <div className="absolute bottom-10 right-10 bg-surface-bright border border-primary/40 p-3 shadow-[0_0_20px_rgba(0,243,255,0.1)] backdrop-blur-md">
                <div className="flex items-center gap-2 mb-1">
                  <Info className="text-primary" size={12} />
                  <span className="font-mono text-[9px] text-primary uppercase">Compiler_Alert</span>
                </div>
                <p className="font-mono text-[10px] text-on-surface">MEMORY_LEAK_PREVENTED: PTR_77X</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
