const Contact2 = () => {
  return (
    <div
      id="contact"
      className="h-full bg-white flex flex-col items-center justify-center px-8 pt-6 pb-12"
    >
      {/* <div
        className="mb-12 max-w-6xl mx-auto py-12 px-24 rounded-3xl"
        style={{
          backgroundImage:
            'linear-gradient(to bottom, #1f1f1f, #272727, #2f2f2f, #373737, #3f3f3f)',
        }}
      >
        <div className="mb-8">
        <h2 className="text-3xl w-full md:text-4xl font-bold mb-3 text-white leading-tight bricolage-grotesque text-center">
          Let’s craft pixels that speak louder than words.
        </h2>
        <p className="text-base w-full md:text-lg font-poppins font-light text-white/60 text-center">
          From concept to creation, I bring your ideas to life through thoughtful design. Each pixel is crafted with precision to make your brand stand out and speak for itself.
        </p>
        </div>

        <form>
          <input type="text" placeholder="Name" className="w-full p-2 rounded-md bg-white mb-4" />
          <input type="email" placeholder="Email" className="w-full p-2 rounded-md bg-white mb-4" />
          <textarea placeholder="Message" className="w-full p-2 rounded-md bg-white mb-4" />
          <button type="submit" className="w-full p-2  bg-white text-[#1f1f1f] rounded-full">Send</button>
        </form>
      </div> */}
      <div className="flex lg:flex-row flex-col gap-8 max-w-6xl h-full bg-white w-full">
        {/* Left Panel - Contact Info */}
        <div className="bg-[#F7F7F7] rounded-3xl md:p-12 p-4  flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1f1f1f] mb-8 leading-tight bricolage-grotesque">
            Let's <br /> connect
            <br />
            and chat
          </h1>
          <div className="flex justify-between items-center gap-4">
            <span className="text-xl md:text-lg font-medium text-[#1f1f1f]">
              sheriffrafiq71@gmail.com
            </span>
            <button
              type="button"
              className="w-10 h-10 bg-[#1f1f1f] rounded-full flex items-center justify-center transition hover:bg-[#333]"
              onClick={() => {
                window.location.href = 'mailto:sheriffrafiq71@gmail.com';
              }}
              aria-label="Send Email"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e3e3e3"
              >
                <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Panel - Social Media Buttons */}
        <div
          className="rounded-3xl flex-1 relative overflow-hidden flex items-center justify-center"
          style={{
            backgroundImage:
              'linear-gradient(to bottom, #1f1f1f, #272727, #2f2f2f, #373737, #3f3f3f)',
          }}
        >
          <div className="relative w-full h-full flex flex-col items-center justify-center">
            {/* Mobile absolute layout (matches requested structure) */}
            <div
              className="md:hidden relative flex items-center justify-center"
              style={{
                width: 'min(92vw, 380px)',
                height: 'min(65vw, 230px)',
                maxWidth: '380px',
                maxHeight: '230px',
              }}
            >
              {/* FOLLOW ME! - top center */}
              <button
                className="absolute flex items-center justify-center border-[1px] border-white text-white font-medium uppercase tracking-wide"
                style={{
                  top: '18%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'transparent',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  zIndex: 10,
                  padding: '12px 24px',
                  fontSize: '14px',
                  whiteSpace: 'nowrap',
                }}
              >
                FOLLOW ME!
              </button>

              {/* Emoji - top right of follow */}
              <button
                className="absolute flex items-center justify-center border-[1px] border-white text-white font-medium"
                style={{
                  top: '22.5%',
                  left: '68%',
                  transform: 'rotate(28deg)',
                  background: 'transparent',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  zIndex: 9,
                  padding: '10px 20px',
                  fontSize: '16px',
                }}
              >
                👀🤩
              </button>

              {/* INSTAGRAM - mid left rotated */}
              <button
                className="absolute flex items-center justify-center bg-transparent text-white font-medium hover:bg-white border-[1px] border-white hover:text-[#1f1f1f] uppercase tracking-wide"
                style={{
                  top: '39%',
                  left: '18%',
                  transform: 'rotate(20deg)',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  transition: 'all 0.1s ease',
                  zIndex: 8,
                  padding: '12px 24px',
                  fontSize: '14px',
                  whiteSpace: 'nowrap',
                }}
                onClick={() => {
                  window.open('https://www.instagram.com/rafiq_sheriff/', '_blank');
                }}
              >
                INSTAGRAM
              </button>

                {/* twitter - center right */}
                <button
                  className="absolute flex items-center justify-center bg-transparent text-white font-medium hover:bg-white border-[1px] border-white hover:text-[#1f1f1f] uppercase tracking-wide"
                  style={{
                    top: '44.7%',
                    left: '53.8%',
                    borderRadius: '50px',
                    cursor: 'pointer',
                    transition: 'all 0.1s ease',
                    zIndex: 7,
                    padding: '12px 24px',
                    fontSize: '14px',
                    whiteSpace: 'nowrap',
                  }}
                  onClick={() => {
                    window.open('https://x.com/RafiqSheriff?t=kTtCEeaX78JSKrFElEPuCg&s=09', '_blank');
                  }}
                >
                  TWITTER
                </button>

              {/* BEHANCE - bottom left */}
              <button
                className="absolute flex items-center justify-center bg-transparent text-white font-medium hover:bg-white border-[1px] border-white hover:text-[#1f1f1f] uppercase tracking-wide"
                style={{
                  bottom: '15%',
                  left: '18.5%',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  transition: 'all 0.1s ease',
                  zIndex: 6,
                  padding: '12px 24px',
                  fontSize: '14px',
                  whiteSpace: 'nowrap',
                }}
                onClick={() => {
                  window.open('https://www.behance.net/rafiqsheriff1', '_blank');
                }}
              >
                BEHANCE
              </button>

              {/* LINKEDIN - bottom right */}
              <button
                className="absolute flex items-center justify-center bg-transparent text-white font-medium hover:bg-white border-[1px] border-white hover:text-[#1f1f1f] uppercase tracking-wide"
                style={{
                  bottom: '15%',
                  right: '18.5%',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  transition: 'all 0.1s ease',
                  zIndex: 5,
                  padding: '12px 24px',
                  fontSize: '14px',
                  whiteSpace: 'nowrap',
                }}
                onClick={() => {
                  window.open('https://www.linkedin.com/in/rafiq-sheriff-2ab36b282/', '_blank');
                }}
              >
                LINKEDIN
              </button>
            </div>

            {/* Desktop/tablet original layout (unchanged) */}
            <div
              className="hidden md:flex relative items-center justify-center"
              style={{
                width: 'min(60vw, 500px)',
                height: 'min(40vw, 300px)',
                maxWidth: '500px',
                maxHeight: '300px',
              }}
            >
              {/* FOLLOW ME! Button - Top Center */}
              <button
                className="absolute flex items-center justify-center border-[1px] border-white text-white font-medium uppercase tracking-wide"
                style={{
                  top: '26.3%',
                  left: '51%',
                  transform: 'translateX(-50%) ',
                  background: 'transparent',

                  borderRadius: '50px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  zIndex: 10,
                  padding: '12px 24px',
                  fontSize: '14px',
                  whiteSpace: 'nowrap',
                }}
              >
                FOLLOW ME!
              </button>

              {/* Emoji Button - Close to FOLLOW ME! */}
              <button
                className="absolute flex items-center justify-center border-[1px] border-white text-white font-medium"
                style={{
                  top: '31%',
                  left: '64.8%',
                  transform: 'rotate(28deg)',
                  background: 'transparent',

                  borderRadius: '50px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  zIndex: 9,
                  padding: '10px 20px',
                  fontSize: '16px',
                }}
              >
                👀🤩
              </button>

              {/* INSTAGRAM Button - Mid Left */}
              <button
                className="absolute flex items-center justify-center bg-transparent text-white font-medium hover:bg-white border-[1px] border-white  hover:text-[#1f1f1f] uppercase tracking-wide"
                style={{
                  top: '41%',
                  left: '24.9%',
                  transform: 'rotate(20deg)',

                  borderRadius: '50px',
                  cursor: 'pointer',
                  transition: 'all 0.1s ease',
                  zIndex: 8,
                  padding: '12px 24px',
                  fontSize: '14px',
                  whiteSpace: 'nowrap',
                }}
                onClick={() => {
                  window.open('https://www.instagram.com/rafiq_sheriff/', '_blank');
                }}
              >
                INSTAGRAM
              </button>

              {/* TWITTER Button - Mid Right */}
              <button
                className="absolute flex items-center justify-center bg-transparent text-white font-medium hover:bg-white border-[1px] border-white  hover:text-[#1f1f1f] uppercase tracking-wide"
                style={{
                  top: '45.5%',
                  right: '25%',

                  borderRadius: '50px',
                  cursor: 'pointer',
                  transition: 'all 0.1s ease',
                  zIndex: 7,
                  padding: '12px 24px',
                  fontSize: '14px',
                  whiteSpace: 'nowrap',
                }}
                onClick={() => {
                  window.open('https://x.com/RafiqSheriff?t=kTtCEeaX78JSKrFElEPuCg&s=09', '_blank');
                }}
              >
                TWITTER
              </button>

              {/* BEHANCE Button - Bottom Left */}
              <button
                className="absolute flex items-center justify-center bg-transparent text-white font-medium hover:bg-white border-[1px] border-white  hover:text-[#1f1f1f] uppercase tracking-wide"
                style={{
                  bottom: '23%',
                  left: '25.5%',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  transition: 'all 0.1s ease',
                  zIndex: 6,
                  padding: '12px 24px',
                  fontSize: '14px',
                  whiteSpace: 'nowrap',
                }}
                onClick={() => {
                  window.open('https://www.behance.net/rafiqsheriff1', '_blank');
                }}
              >
                BEHANCE
              </button>

              {/* LINKEDIN Button - Bottom Right */}
              <button
                className="absolute flex items-center justify-center bg-transparent text-white font-medium hover:bg-white border-[1px] border-white  hover:text-[#1f1f1f] uppercase tracking-wide"
                style={{
                  bottom: '23%',
                  right: '27.3%',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  transition: 'all 0.1s ease',
                  zIndex: 5,
                  padding: '12px 24px',
                  fontSize: '14px',
                  whiteSpace: 'nowrap',
                }}
                onClick={() => {
                  window.open('https://www.linkedin.com/in/rafiq-sheriff-2ab36b282/', '_blank');
                }}
              >
                LINKEDIN
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact2;
