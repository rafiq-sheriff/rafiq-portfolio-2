'use client';

import { useRouter } from 'next/navigation';
import ShinyText from '@/components/effects/ShinyText';
import GlareHover from '@/components/effects/GlareHover';

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
      <GlareHover
        width="auto"
        height="auto"
        background="linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(42,42,42,0.7) 100%)"
        borderRadius="16px"
        borderColor="rgba(255, 255, 255, 0.2)"
        glareColor="#ffffff"
        glareOpacity={0.3}
        glareAngle={-30}
        glareSize={300}
        transitionDuration={800}
        playOnce={false}
        style={{
          backdropFilter: 'blur(5px) saturate(120%)',
          WebkitBackdropFilter: 'blur(0px) saturate(10%)',
        }}
        onClick={handleBack}
      >
        <button
          className="flex items-center gap-2 px-4 py-2 rounded-full text-white font-normal transition-all duration-300 hover:scale-105 bg-transparent border-none"
          style={{
            background: 'transparent',
            border: 'none',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#F5EFF7',
            fontFamily: 'Sora, sans-serif',
            fontSize: '14px',
            fontWeight: '400',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
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
      </GlareHover>
    </div>
  );
};

export default BackButton;
