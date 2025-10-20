'use client';

import { useRouter } from 'next/navigation';
import ShinyText from '@/components/effects/ShinyText';

const BackButton = () => {
  const router = useRouter();

  const handleBack = () => {
    // Check if there's history to go back to
    if (window.history.length > 1) {
      router.back();
    } else {
      // If no history, navigate to home page
      router.push('/');
    }
  };

  return (
    <div className="flex justify-start mb-8">
      <button
        onClick={handleBack}
        className="flex items-center gap-2 px-4 py-2 rounded-full text-white font-normal transition-all duration-300 hover:scale-105 bg-white/10 border border-white/20"
        style={{
          background:
            'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(42,42,42,0.7) 100%)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(5px) saturate(120%)',
          WebkitBackdropFilter: 'blur(0px) saturate(10%)',
          borderRadius: '16px',
        }}
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        <ShinyText
          text="Back"
          disabled={false}
          speed={2}
          className="text-white font-sora text-sm font-normal"
        />
      </button>
    </div>
  );
};

export default BackButton;
