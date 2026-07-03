import Me from "@/assets/Home.webp";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 items-center h-full">
      {/* Left Content */}
      <div className="md:col-span-7 space-y-6 text-left">
        <span className="inline-block text-[#5B47E0] text-sm md:text-base font-semibold tracking-wide uppercase">
          Hey, I am Marsha
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1F2937] tracking-tight leading-[1.1]">
          I create strategic{" "}
          <span className="text-[#5B47E0]">visual communication</span> and
          branding solutions
        </h1>
        <p className="text-[#4B5563] text-base md:text-lg leading-relaxed max-w-xl">
          A Visual Communication Designer focused on branding, visual identity,
          and strategic design to help brands communicate and grow.
        </p>
        <div className="pt-4">
          <button className="inline-flex items-center justify-center bg-[#5B47E0] text-white px-8 py-3.5 rounded-lg font-semibold text-sm hover:bg-[#4835C4] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 shadow-sm shadow-[#5B47E0]/20">
            Get In Touch
          </button>
        </div>
      </div>

      {/* Right Content */}
      <div className="md:col-span-5 relative flex justify-center items-center">
        <img src={Me} alt="Me" />
      </div>
    </div>
  );
};

export default Hero;
