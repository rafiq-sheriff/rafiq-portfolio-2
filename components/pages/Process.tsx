'use client';
import { Meteors } from '@/components/ui/meteors';

interface ProcessStep {
  title: string;
  description: string;
}

interface ProcessProps {
  processSteps: ProcessStep[];
}

export default function Process({ processSteps }: ProcessProps) {
  return (
    <div className="py-20 px-8 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-5xl text-neutral-200 font-bold text-center mb-16">
        My Process
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {processSteps.map((step, index) => (
          <div key={index} className="relative w-full">
            <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-gradient-to-r from-blue-500 to-purple-600 blur-3xl opacity-30" />
            <div className="relative flex h-full flex-col items-start justify-end overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 px-6 py-8 shadow-xl min-h-[280px]">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-neutral-700 bg-gradient-to-r from-blue-500 to-purple-600">
                <span className="text-white font-bold text-xl">
                  {index + 1}
                </span>
              </div>

              <h3 className="relative z-50 mb-4 text-2xl font-bold text-white">
                {step.title}
              </h3>

              <p className="relative z-50 mb-4 text-base font-normal text-neutral-400 leading-relaxed">
                {step.description}
              </p>

              {/* Meteors effect */}
              <Meteors number={15} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
