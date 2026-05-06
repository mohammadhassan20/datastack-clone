import React from 'react';
import { Search, ArrowDownRight, MapPin, FileText, Copy, Link as LinkIcon, Star } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden relative">
      {/* Global Vertical Grid Lines */}
      <div className="fixed inset-0 pointer-events-none z-50 flex justify-center">
        <div className="w-full max-w-[1400px] flex justify-between h-full border-x border-gray-200">
          <div className="w-[1px] h-full bg-gray-200 absolute left-1/2 -translate-x-1/2"></div>
        </div>
      </div>

      {/* Header */}
      <header className="border-b border-gray-200 relative z-10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo & Nav */}
            <div className="flex items-center gap-12">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 text-[#00e640]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93" />
                  </svg>
                </div>
                <span className="font-bold text-xl tracking-tight">datashake</span>
              </div>
              
              <nav className="hidden md:flex gap-8">
                <a href="#" className="text-gray-500 hover:text-gray-900 text-sm font-medium">Product</a>
                <a href="#" className="text-gray-500 hover:text-gray-900 text-sm font-medium">Solutions</a>
                <a href="#" className="text-gray-500 hover:text-gray-900 text-sm font-medium">Resources</a>
                <a href="#" className="text-gray-500 hover:text-gray-900 text-sm font-medium">Company</a>
              </nav>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <button className="px-5 py-2.5 text-sm font-medium text-gray-700 border border-gray-300 border-dashed rounded hover:bg-gray-50">
                Login
              </button>
              <button className="px-5 py-2.5 text-sm font-medium text-white bg-[#111] rounded hover:bg-black">
                Book a call
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 min-h-[600px]">
            {/* Left Content */}
            <div className="px-4 sm:px-6 lg:px-8 py-20 lg:py-24 lg:pr-20">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-gray-300 border-dashed text-[13px] text-blue-600 mb-8">
                The Social Data Coverage Report 2026 is here <span className="text-orange-500">⚡</span>
              </div>
              
              <h1 className="text-[3.5rem] lg:text-[4rem] font-medium leading-[1.1] tracking-tight mb-8 text-[#111]">
                One API. One schema.<br />
                Cleaned, normalized.<br />
                Search and filter across<br />
                <span className="text-[#00e640]">social media</span>
              </h1>
              
              <p className="text-lg text-gray-500 mb-10 max-w-[480px] leading-relaxed">
                Replace multiple vendors with one partner you can trust for comprehensive, fast and scalable data from 150+ sources.
              </p>
              
              <div className="flex flex-wrap items-center gap-4">
                <button className="flex items-center gap-2 px-6 py-3.5 bg-[#00e640] text-[#111] font-medium rounded hover:bg-[#00d03a] transition-colors">
                  Book a demo
                  <ArrowDownRight className="w-5 h-5 ml-1" />
                </button>
                <button className="px-6 py-3.5 text-gray-700 font-medium border border-gray-300 border-dashed rounded hover:bg-gray-50 transition-colors">
                  Explore the platform
                </button>
              </div>
            </div>

            {/* Right Graphic */}
            <div className="relative w-full bg-white overflow-hidden flex flex-col items-center justify-center py-20">
              {/* Background Pattern */}
              <div className="absolute inset-0 z-0 opacity-40">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="matrix" width="24" height="40" patternUnits="userSpaceOnUse">
                      <rect x="10" y="4" width="4" height="12" fill="#00e640" opacity="0.3" />
                      <rect x="10" y="20" width="4" height="8" fill="#00e640" opacity="0.6" />
                      <rect x="10" y="32" width="4" height="16" fill="#00e640" opacity="0.2" />
                    </pattern>
                    <pattern id="matrix2" width="32" height="60" patternUnits="userSpaceOnUse">
                      <rect x="14" y="10" width="4" height="20" fill="#00e640" opacity="0.5" />
                      <rect x="14" y="38" width="4" height="12" fill="#00e640" opacity="0.2" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#matrix)" />
                  <rect width="100%" height="100%" fill="url(#matrix2)" />
                </svg>
              </div>
              
              {/* Horizontal Green Line - Extending to the right edge of the screen */}
              <div className="absolute top-[38%] left-0 w-[200vw] h-[2px] bg-[#00e640] z-10"></div>

              <div className="relative z-20 w-full max-w-[500px] flex flex-col items-center px-8">
                {/* File Exported Card */}
                <div className="w-full bg-white border border-gray-200 rounded shadow-sm p-4 flex items-center gap-4 mb-16">
                  <div className="w-10 h-10 bg-[#e6fcf0] rounded flex items-center justify-center">
                    <FileText className="w-5 h-5 text-[#00e640]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-gray-900">File Exported</div>
                    <div className="text-xs text-gray-400 truncate">tesla-or-tsla_and_recall-or-defect...</div>
                  </div>
                  <div className="flex gap-2">
                    <Copy className="w-4 h-4 text-gray-300 cursor-pointer hover:text-gray-500" />
                    <LinkIcon className="w-4 h-4 text-gray-300 cursor-pointer hover:text-gray-500" />
                  </div>
                </div>

                {/* Center Icon */}
                <div className="w-16 h-16 bg-white border-2 border-[#00e640] flex items-center justify-center mb-16 relative">
                  <div className="w-8 h-8 text-[#00e640]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93" />
                    </svg>
                  </div>
                </div>

                {/* Stats Card */}
                <div className="w-full bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-t-xl p-5 mb-1">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-4">
                      <div className="flex gap-1">
                        {[...Array(7)].map((_, i) => (
                          <div key={i} className="w-2 h-5 bg-[#00e640]"></div>
                        ))}
                      </div>
                      <span className="font-semibold text-gray-900">384,589</span>
                      <span className="text-gray-500">results</span>
                    </div>
                    <div className="flex items-center gap-4 text-[11px]">
                      <span className="text-gray-500">Export as</span>
                      <span className="font-medium text-gray-900">API Call</span>
                      <span className="font-medium text-gray-900">CSV/XLS</span>
                    </div>
                  </div>
                </div>

                {/* Review Card */}
                <div className="w-full bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-b-xl p-6">
                  <div className="flex gap-2 mb-4">
                    <span className="px-2 py-1 bg-gray-100 text-gray-500 text-[10px] font-medium rounded uppercase tracking-wider">Real-Time</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-500 text-[10px] font-medium rounded uppercase tracking-wider">Review Site</span>
                  </div>
                  <p className="text-[13px] font-semibold text-gray-900 leading-snug mb-4">
                    Tesla ownership is a mixed bag. Performance is great, but recalls and service delays are frustrating.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-[11px] text-gray-400">
                      Dante Roberts <span className="mx-1">•</span> November 21, 14:25
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(3)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      ))}
                      <Star className="w-3 h-3 fill-yellow-400/20 text-yellow-400/20" />
                      <Star className="w-3 h-3 fill-yellow-400/20 text-yellow-400/20" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logos Section */}
      <section className="relative">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center py-10 text-sm text-gray-500">
            Powering data intelligence for leading platforms & global brands
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-t border-gray-200">
            {/* Logo 1 */}
            <div className="flex flex-col items-center justify-center p-10 border-r border-b lg:border-b-0 border-gray-200 h-40">
              <div className="h-10 mb-3 flex items-center justify-center text-gray-500 font-medium text-2xl tracking-tight">
                qualtrics<span className="text-sm align-top ml-0.5 mt-1 font-bold">XM</span>
              </div>
              <span className="text-xs text-gray-400">Customer experience</span>
            </div>
            {/* Logo 2 */}
            <div className="flex flex-col items-center justify-center p-10 border-r border-b lg:border-b-0 border-gray-200 h-40">
              <div className="h-10 mb-3 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full border-2 border-gray-400 flex items-center justify-center text-gray-500 font-bold text-sm">
                  YE<br/>XT
                </div>
              </div>
              <span className="text-xs text-gray-400">Reputation management</span>
            </div>
            {/* Logo 3 */}
            <div className="flex flex-col items-center justify-center p-10 border-r border-b lg:border-b-0 border-gray-200 h-40">
              <div className="h-10 mb-3 flex items-center justify-center">
                <div className="w-10 h-10 bg-[#f96302] text-white font-bold text-[8px] leading-tight flex flex-col items-center justify-center text-center p-1">
                  <span>THE</span>
                  <span>HOME</span>
                  <span>DEPOT</span>
                </div>
              </div>
              <span className="text-xs text-gray-400">Retail</span>
            </div>
            {/* Logo 4 */}
            <div className="flex flex-col items-center justify-center p-10 border-r border-b lg:border-b-0 border-gray-200 h-40">
              <div className="h-10 mb-3 flex items-center justify-center gap-1.5 text-gray-600 font-bold text-xl tracking-tight">
                <MapPin className="w-5 h-5" />
                brightlocal
              </div>
              <span className="text-xs text-gray-400">Marketing automation</span>
            </div>
            {/* Logo 5 */}
            <div className="flex flex-col items-center justify-center p-10 border-r border-b lg:border-b-0 border-gray-200 h-40">
              <div className="h-10 mb-3 flex items-center justify-center text-gray-500 font-bold text-2xl tracking-widest">
                EPICOR
              </div>
              <span className="text-xs text-gray-400">Agencies</span>
            </div>
            {/* Logo 6 */}
            <div className="flex flex-col items-center justify-center p-10 border-b lg:border-b-0 border-gray-200 h-40">
              <div className="h-10 mb-3 flex items-center justify-center gap-2 text-gray-600 font-medium text-xl">
                <div className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                Talkwalker
              </div>
              <span className="text-xs text-gray-400">Social listening</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Bottom Pattern */}
      <div className="h-20 border-t border-gray-200 w-full" style={{
        backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 10px, #f3f4f6 10px, #f3f4f6 11px)'
      }}></div>
    </div>
  );
}
