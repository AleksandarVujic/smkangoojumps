import React from 'react';

const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating Kangoo Boot Outlines */}
      <div className="absolute top-1/4 left-10 opacity-5">
        <svg width="80" height="80" viewBox="0 0 100 100" className="text-accent-pink animate-float">
          <path
            d="M20 40 C20 30, 30 20, 40 20 L60 20 C70 20, 80 30, 80 40 L80 60 C80 70, 70 80, 60 80 L40 80 C30 80, 20 70, 20 60 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle cx="35" cy="45" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="65" cy="45" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>

      <div className="absolute top-1/2 right-16 opacity-5" style={{ animationDelay: '2s' }}>
        <svg width="60" height="60" viewBox="0 0 100 100" className="text-accent-coral animate-float">
          <path
            d="M20 40 C20 30, 30 20, 40 20 L60 20 C70 20, 80 30, 80 40 L80 60 C80 70, 70 80, 60 80 L40 80 C30 80, 20 70, 20 60 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle cx="35" cy="45" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="65" cy="45" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>

      <div className="absolute bottom-1/4 left-1/4 opacity-5" style={{ animationDelay: '4s' }}>
        <svg width="100" height="100" viewBox="0 0 100 100" className="text-accent-gold animate-float">
          <path
            d="M20 40 C20 30, 30 20, 40 20 L60 20 C70 20, 80 30, 80 40 L80 60 C80 70, 70 80, 60 80 L40 80 C30 80, 20 70, 20 60 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle cx="35" cy="45" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="65" cy="45" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>

      {/* Geometric Shapes */}
      <div className="absolute top-20 right-1/4 w-4 h-4 bg-accent-pink rounded-full opacity-10 animate-float"></div>
      <div className="absolute bottom-32 right-12 w-6 h-6 bg-accent-coral rounded-full opacity-10 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 left-1/3 w-8 h-8 bg-accent-gold rounded-full opacity-10 animate-float" style={{ animationDelay: '3s' }}></div>
      
      {/* Subtle Movement Lines */}
      <div className="absolute top-40 left-20 opacity-5" style={{ animationDelay: '1.5s' }}>
        <svg width="120" height="3" className="text-accent-pink animate-float">
          <line x1="0" y1="1.5" x2="120" y2="1.5" stroke="currentColor" strokeWidth="1" strokeDasharray="5,5" />
        </svg>
      </div>
      
      <div className="absolute bottom-40 right-32 opacity-5" style={{ animationDelay: '3.5s' }}>
        <svg width="80" height="3" className="text-accent-coral animate-float">
          <line x1="0" y1="1.5" x2="80" y2="1.5" stroke="currentColor" strokeWidth="1" strokeDasharray="3,3" />
        </svg>
      </div>
    </div>
  );
};

export default FloatingElements;