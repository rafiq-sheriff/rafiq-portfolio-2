const Contact2 = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="flex gap-8 max-w-6xl w-full">
        {/* Left Panel - Contact Info */}
        <div className="bg-white rounded-3xl p-12  flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-8 leading-tight">
            Let's <br /> connect
            <br />
            and chat
          </h1>
          <div className="flex items-center gap-4">
            <span className="text-lg font-medium text-black">
              HELLO@COZY.COM
            </span>
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Right Panel - Social Media Buttons */}
        <div className="bg-teal-500 rounded-3xl p-12 flex-1 flex items-center justify-center relative overflow-hidden">
          {/* Clustered Button Layout */}
          <div className="relative w-full h-full flex items-center justify-center">
            {/* FOLLOW ME! - Top center */}
            <button
              className="absolute border-2 border-white rounded-full px-6 py-3 text-white font-bold text-sm whitespace-nowrap z-10"
              style={{ top: '25%', left: '50%', transform: 'translateX(-50%)' }}
            >
              FOLLOW ME!
            </button>

            {/* INSTAGRAM - Left, tilted counter-clockwise */}
            <button
              className="absolute border-2 border-white rounded-full px-6 py-3 text-white font-bold text-sm whitespace-nowrap z-20"
              style={{
                top: '40%',
                left: '20%',
                transform: 'translateX(-50%) rotate(-12deg)',
              }}
            >
              INSTAGRAM
            </button>

            {/* DRIBBBLE - Right of FOLLOW ME */}
            <button
              className="absolute border-2 border-white rounded-full px-6 py-3 text-white font-bold text-sm whitespace-nowrap z-20"
              style={{ top: '35%', left: '75%', transform: 'translateX(-50%)' }}
            >
              DRIBBBLE
            </button>

            {/* BEHANCE - Below INSTAGRAM */}
            <button
              className="absolute border-2 border-white rounded-full px-6 py-3 text-white font-bold text-sm whitespace-nowrap z-30"
              style={{
                top: '60%',
                left: '25%',
                transform: 'translateX(-50%) rotate(-8deg)',
              }}
            >
              BEHANCE
            </button>

            {/* LINKEDIN - Below DRIBBBLE */}
            <button
              className="absolute border-2 border-white rounded-full px-6 py-3 text-white font-bold text-sm whitespace-nowrap z-30"
              style={{
                top: '65%',
                left: '70%',
                transform: 'translateX(-50%) rotate(-10deg)',
              }}
            >
              LINKEDIN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact2;
