'use client';

import GridBackground from '@/components/GridBackground';
import PaperContent from '@/components/PaperContent';
import TerminalInput from '@/components/TerminalInput';

export default function TaskPage() {
  return (
    <div className="min-h-screen relative p-8">
      <GridBackground />

      <div className="relative z-10 flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto min-h-[calc(100vh-4rem)]">
        {/* Left side - 60% */}
        <div className="lg:w-[60%] flex items-start">
          <PaperContent />
        </div>

        {/* Right side - 40% */}
        <div className="lg:w-[40%] flex items-start">
          <div className="w-full">
            <TerminalInput />
          </div>
        </div>
      </div>
    </div>
  );
}
