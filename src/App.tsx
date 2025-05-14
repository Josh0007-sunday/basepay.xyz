import './App.css';
import {  CheckCircle,  DollarSign, Zap, ChevronRight, Globe, Shield } from 'lucide-react';

import usdcLogo from './assets/usd-coin-usdc-logo.png'

function App() {
  return (
    <div className="app font-sans bg-[#0a0b1e]">
      {/* Animated background with modern gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#0a0b1e] via-[#1a1b3d] to-[#2a2b5d] opacity-70 z-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJub25lIi8+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSI1MCIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')] opacity-10"></div>
      </div>

      {/* Modern Navbar with Glassmorphism */}
      <header className="backdrop-blur-xl bg-[#0a0b1e]/70 text-white py-4 px-4 sm:py-5 sm:px-8 sticky top-0 z-50 border-b border-white/10">
        <nav className="flex flex-col sm:flex-row justify-between items-center max-w-7xl mx-auto gap-2 sm:gap-0">
          <div className="logo mb-2 sm:mb-0">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight bg-clip-text text-white bg-gradient-to-r from-[#00f6ff] to-[#ff00ff]">
              basepay<span className="text-[#ff00ff]">.</span>
            </h2>
          </div>
          <div className="nav-links">
            <ul className="flex flex-wrap justify-center space-x-6 sm:space-x-10">
              <li><a href="https://diagnostic-middle-7f6.notion.site/BasePay-Core-BaseBatch-Africa-1f3c7e25ebf280c58229db35a87bd23f?pvs=4" className="hover:text-[#00f6ff] transition-colors duration-300 font-medium">docs</a></li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Hero Section with Modern Web3 Elements */}
      <section className="hero text-white min-h-screen flex items-center px-4 sm:px-8 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-[#00f6ff] rounded-full filter blur-[100px] sm:blur-[160px] opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-[#ff00ff] rounded-full filter blur-[100px] sm:blur-[160px] opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <div className="hero-content w-full md:w-3/5">
              <div className="inline-block px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6 sm:mb-10">
                <span className="text-[#00f6ff] font-medium text-base sm:text-lg">Web3 Banking Infrastructure</span>
              </div>
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-8 leading-tight">
                basepay<span className="text-[#ff00ff]">.</span> 
                <span className="block text-xl sm:text-3xl md:text-4xl lg:text-5xl font-normal mt-3 sm:mt-6 bg-gradient-to-r from-[#00f6ff] to-[#ff00ff] text-white bg-clip-text">
                  the infrastructure for banking freedom.
                </span>
              </h1>
              <p className="text-base sm:text-xl text-gray-300 mb-6 sm:mb-10 max-w-xl leading-relaxed">
                Empowering financial transactions with seamless, secure, and intelligent banking infrastructure.
              </p>
              <div className="buttons flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6">
                <button className="group bg-gradient-to-r from-[#00f6ff] to-[#ff00ff] p-[1px] rounded-full w-full sm:w-auto">
                  <div className="bg-[#0a0b1e] px-8 sm:px-10 py-4 sm:py-5 rounded-full font-medium transition-all duration-300 group-hover:bg-transparent text-base sm:text-lg">
                    contact sales <ChevronRight className="inline-block ml-2" size={18} />
                  </div>
                </button>
                <button className="px-8 sm:px-10 py-4 sm:py-5 rounded-full font-medium border border-white/20 hover:bg-white/10 transition-all duration-300 backdrop-blur-xl text-base sm:text-lg w-full sm:w-auto">
                  get started
                </button>
              </div>
            </div>
            <div className="w-full md:w-2/5 flex justify-center items-center mt-8 md:mt-0">
              <div className="relative w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-[#00f6ff] to-[#ff00ff] rounded-full opacity-20 blur-2xl sm:blur-3xl animate-pulse"></div>
                <img 
                  src={usdcLogo} 
                  alt="USDC Logo" 
                  className="w-[140px] h-[140px] sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[300px] relative z-10 animate-float"
                  style={{
                    animation: 'float 6s ease-in-out infinite'
                  }}
                />
                <div className="absolute -top-2 -right-2 w-5 h-5 sm:w-8 sm:h-8 bg-[#00f6ff] rounded-full animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 w-5 h-5 sm:w-8 sm:h-8 bg-[#ff00ff] rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section with Modern Design */}
      <section id="problem" className="py-16 sm:py-24 px-4 sm:px-8 bg-[#0a0b1e] relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a1b3d]/20 to-transparent"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 flex items-center">
            problem<span className="text-[#ff00ff]">.</span>
            <span className="h-px bg-gradient-to-r from-[#00f6ff] to-transparent flex-grow ml-4 sm:ml-6 opacity-30"></span>
          </h2>
          <div className="flex flex-col md:flex-row gap-10 md:gap-16">
            <div className="md:w-1/2">
              <p className="text-gray-300 text-base sm:text-lg mb-6 leading-relaxed">
                Friction, inconvenience, and barriers exist between people and banks transferring their credit card and bank payments between financial institutions, even when traditional banking is at its best.
              </p>
              <div className="flex items-center space-x-2 text-[#00f6ff] font-medium">
                <Globe size={20} />
                <p>Industrial Banking</p>
              </div>
              <div className="mt-8 sm:mt-12 space-y-4">
                <div className="flex items-start group">
                  <div className="bg-red-900/20 p-2 rounded-full mr-4 mt-1 border border-red-500/20">
                    <span className="text-red-500">✕</span>
                  </div>
                  <p className="text-gray-400 group-hover:text-white transition-colors duration-300">Complex transfers between institutions</p>
                </div>
                <div className="flex items-start group">
                  <div className="bg-red-900/20 p-2 rounded-full mr-4 mt-1 border border-red-500/20">
                    <span className="text-red-500">✕</span>
                  </div>
                  <p className="text-gray-400 group-hover:text-white transition-colors duration-300">High processing fees cutting into profits</p>
                </div>
                <div className="flex items-start group">
                  <div className="bg-red-900/20 p-2 rounded-full mr-4 mt-1 border border-red-500/20">
                    <span className="text-red-500">✕</span>
                  </div>
                  <p className="text-gray-400 group-hover:text-white transition-colors duration-300">Outdated user interfaces and experiences</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
              <div className="relative w-full max-w-[500px] h-[220px] sm:h-[350px] flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-[#00f6ff] to-[#ff00ff] rounded-2xl opacity-20 blur-2xl sm:blur-3xl animate-pulse"></div>
                <div className="bg-[#1a1b3d]/50 backdrop-blur-xl rounded-2xl border border-white/10 relative z-10 hover:shadow-[0_0_50px_0_rgba(0,246,255,0.3)] transition-all duration-500 w-full h-full flex items-center justify-center p-0">
                  <pre className="w-full h-full bg-transparent text-left text-[13px] sm:text-[15px] leading-snug font-mono text-white overflow-auto rounded-xl p-3 sm:p-6 m-0 flex items-center"><code>
                    <span className="text-blue-400">const</span> <span className="text-cyan-300">result</span> = <span className="text-pink-400">await</span> <span className="text-blue-300">basePay</span>.<span className="text-yellow-300">createInvoice</span>(&#123;
                    <br />  <span className="text-cyan-300">token</span>: <span className="text-yellow-200">'USDC'</span>,
                    <br />  <span className="text-cyan-300">amount</span>: <span className="text-yellow-200">'2'</span>,
                    <br />  <span className="text-cyan-300">memo</span>: <span className="text-yellow-200">'Test invoice'</span>,
                    <br />  <span className="text-cyan-300">merchant</span>: <span className="text-blue-200">MERCHANT_ADDRESS</span>
                    <br />&#125;, <span className="text-cyan-300">signer</span>);
                  </code></pre>
                  <div className="absolute -top-3 -right-3 w-4 h-4 sm:w-6 sm:h-6 bg-[#00f6ff] rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-3 -left-3 w-4 h-4 sm:w-6 sm:h-6 bg-[#ff00ff] rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section with Glassmorphism */}
      <section id="solution" className="py-16 sm:py-24 px-4 sm:px-8 bg-[#0a0b1e] relative">
        <div className="absolute right-0 top-0 w-40 h-40 sm:w-96 sm:h-96 bg-[#00f6ff] rounded-full filter blur-2xl sm:blur-[128px] opacity-10"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 flex items-center">
            solution<span className="text-[#ff00ff]">.</span>
            <span className="h-px bg-gradient-to-r from-[#00f6ff] to-transparent flex-grow ml-4 sm:ml-6 opacity-30"></span>
          </h2>
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
            <div className="md:w-1/2">
              <p className="text-gray-300 text-base sm:text-lg mb-6 leading-relaxed">
                Basepay enables Web2 apps to integrate Web3 payments and banking infrastructure with just a few lines of code. Our APIs and SDKs make it easy for any traditional app to unlock the power of decentralized finance—no blockchain expertise required.
              </p>
              <div className="mt-8 sm:mt-12 space-y-4">
                <div className="flex items-start group">
                  <div className="bg-emerald-900/20 p-2 rounded-full mr-4 mt-1 border border-emerald-500/20">
                    <CheckCircle size={16} className="text-emerald-500" />
                  </div>
                  <p className="text-gray-400 group-hover:text-white transition-colors duration-300">Seamless integration with existing systems</p>
                </div>
                <div className="flex items-start group">
                  <div className="bg-emerald-900/20 p-2 rounded-full mr-4 mt-1 border border-emerald-500/20">
                    <CheckCircle size={16} className="text-emerald-500" />
                  </div>
                  <p className="text-gray-400 group-hover:text-white transition-colors duration-300">Transparent fee structure with significant savings</p>
                </div>
                <div className="flex items-start group">
                  <div className="bg-emerald-900/20 p-2 rounded-full mr-4 mt-1 border border-emerald-500/20">
                    <CheckCircle size={16} className="text-emerald-500" />
                  </div>
                  <p className="text-gray-400 group-hover:text-white transition-colors duration-300">Modern interfaces built for today's digital world</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
              <div className="w-full max-w-[350px] min-h-[220px] sm:min-h-[320px] bg-[#1a1b3d]/60 border border-white/10 rounded-2xl shadow-xl backdrop-blur-xl flex flex-col items-center justify-center p-4 sm:p-8 relative hover:shadow-[0_0_40px_0_rgba(0,246,255,0.15)] transition-all duration-300">
                <div className="bg-gradient-to-r from-[#00f6ff] to-[#ff00ff] p-3 sm:p-4 rounded-full mb-4 sm:mb-6 flex items-center justify-center">
                  <svg xmlns='http://www.w3.org/2000/svg' className='w-8 h-8 sm:w-10 sm:h-10 text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M13 16h-1v-4h-1m4 4h1a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-1m-4 0H7a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1' />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-2xl font-bold text-white mb-2 sm:mb-3 text-center">Plug & Play API for Web2 Apps</h3>
                <div className="flex flex-wrap items-center gap-2 mb-3 sm:mb-4 justify-center">
                  <span className="bg-[#00f6ff]/20 text-[#00f6ff] px-2 sm:px-3 py-1 rounded-full text-xs font-semibold">API</span>
                  <span className="bg-[#ff00ff]/20 text-[#ff00ff] px-2 sm:px-3 py-1 rounded-full text-xs font-semibold">SDK</span>
                  <span className="bg-white/10 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-semibold">No Blockchain Required</span>
                </div>
                <p className="text-gray-300 text-center text-sm sm:text-base leading-relaxed">
                  Integrate Web3 payments and banking into your Web2 app in minutes. Simple, secure, and developer-friendly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section with Modern Cards */}
      <section id="benefits" className="py-16 sm:py-24 px-4 sm:px-8 bg-[#0a0b1e] relative">
        <div className="absolute left-0 bottom-0 w-40 h-40 sm:w-96 sm:h-96 bg-[#ff00ff] rounded-full filter blur-2xl sm:blur-[128px] opacity-10"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 flex items-center">
            benefits<span className="text-[#ff00ff]">.</span>
            <span className="h-px bg-gradient-to-r from-[#00f6ff] to-transparent flex-grow ml-4 sm:ml-6 opacity-30"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="benefit-card group p-6 sm:p-8 rounded-xl border border-white/10 backdrop-blur-xl bg-[#1a1b3d]/50 hover:bg-[#1a1b3d]/70 transition-all duration-300 hover:shadow-[0_0_30px_0_rgba(0,246,255,0.2)]">
              <div className="icon mb-4 sm:mb-6 bg-[#00f6ff]/10 p-3 sm:p-4 rounded-lg inline-block group-hover:bg-[#00f6ff]/20 transition-colors">
                <Zap size={28} className="sm:w-8 sm:h-8 text-[#00f6ff]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 text-white">Convenience</h3>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">Zero friction required to complete a transfer to individual end user's option, making the process seamless.</p>
              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-white/10">
                <a href="#" className="text-[#00f6ff] font-medium flex items-center hover:text-[#ff00ff] transition-colors text-sm sm:text-base">
                  Learn more <ChevronRight size={14} className="sm:ml-1" />
                </a>
              </div>
            </div>
            <div className="benefit-card group p-6 sm:p-8 rounded-xl border border-white/10 backdrop-blur-xl bg-[#1a1b3d]/50 hover:bg-[#1a1b3d]/70 transition-all duration-300 hover:shadow-[0_0_30px_0_rgba(0,246,255,0.2)]">
              <div className="icon mb-4 sm:mb-6 bg-[#00f6ff]/10 p-3 sm:p-4 rounded-lg inline-block group-hover:bg-[#00f6ff]/20 transition-colors">
                <DollarSign size={28} className="sm:w-8 sm:h-8 text-[#00f6ff]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 text-white">Cost Effective</h3>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">Significantly reduce transaction costs and processing fees while maintaining high security standards.</p>
              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-white/10">
                <a href="#" className="text-[#00f6ff] font-medium flex items-center hover:text-[#ff00ff] transition-colors text-sm sm:text-base">
                  Learn more <ChevronRight size={14} className="sm:ml-1" />
                </a>
              </div>
            </div>
            <div className="benefit-card group p-6 sm:p-8 rounded-xl border border-white/10 backdrop-blur-xl bg-[#1a1b3d]/50 hover:bg-[#1a1b3d]/70 transition-all duration-300 hover:shadow-[0_0_30px_0_rgba(0,246,255,0.2)]">
              <div className="icon mb-4 sm:mb-6 bg-[#00f6ff]/10 p-3 sm:p-4 rounded-lg inline-block group-hover:bg-[#00f6ff]/20 transition-colors">
                <Shield size={28} className="sm:w-8 sm:h-8 text-[#00f6ff]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 text-white">Security</h3>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">Enterprise-grade security with modern encryption and authentication protocols built-in.</p>
              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-white/10">
                <a href="#" className="text-[#00f6ff] font-medium flex items-center hover:text-[#ff00ff] transition-colors text-sm sm:text-base">
                  Learn more <ChevronRight size={14} className="sm:ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;