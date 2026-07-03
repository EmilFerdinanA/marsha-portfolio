import Me from "@/assets/Contact.png";
import PhotoshopIcon from "@/assets/photoshop.png";
import AdobeIllustratorIcon from "@/assets/illustrator.png";
import FigmaIcon from "@/assets/figma.png";
import CanvaIcon from "@/assets/canva.png";
import PremierProIcon from "@/assets/premiere-pro.png";
import AfterEffectIcon from "@/assets/after-effects.png";
import CapcutIcon from "@/assets/capcut.png";
import DavinciIcon from "@/assets/davinci.png";

const TechnicalSkills = () => {
  return (
    <section className="bg-[#F4F9FC] py-20 md:py-28 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Technical Skills */}
          <div className="lg:col-span-6 flex flex-col justify-start">
            <span className="text-[#64748B] text-xs font-bold uppercase tracking-widest mb-3 block">
              My Skills
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-[#1E293B] tracking-tight">
              Technical Skills
            </h2>

            <div className="space-y-6">
              {/* Design Tools Card */}
              <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-[0_10px_30px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-[0_20px_40px_rgba(107,90,237,0.04)] hover:-translate-y-1">
                <span className="text-xs text-left font-semibold text-[#64748B] uppercase tracking-wider block mb-4">
                  Design Tools
                </span>
                <div className="flex items-center justify-between gap-4">
                  <img
                    src={PhotoshopIcon}
                    className="w-26 aspect-square object-contain"
                    alt="photoshop"
                  />
                  <img
                    src={AdobeIllustratorIcon}
                    className="w-26 aspect-square object-contain"
                    alt="illustrator"
                  />
                  <img
                    src={FigmaIcon}
                    className="w-26 aspect-square object-contain"
                    alt="figma"
                  />
                  <img
                    src={CanvaIcon}
                    className="w-26 aspect-square"
                    alt="canva"
                  />
                </div>
              </div>

              {/* Video Editing Tools Card */}
              <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-[0_10px_30px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-[0_20px_40px_rgba(107,90,237,0.04)] hover:-translate-y-1">
                <span className="text-xs text-left font-semibold text-[#64748B] uppercase tracking-wider block mb-4">
                  Video Editing Tools
                </span>
                <div className="flex items-center gap-4">
                  <img
                    src={PremierProIcon}
                    className="w-26 aspect-square object-contain"
                    alt="premiere-pro"
                  />
                  <img
                    src={AfterEffectIcon}
                    className="w-26 aspect-square object-contain"
                    alt="after-effects"
                  />
                  <img
                    src={CapcutIcon}
                    className="w-26 aspect-square object-contain"
                    alt="capcut"
                  />
                  <img
                    src={DavinciIcon}
                    className="w-26 aspect-square object-contain"
                    alt="davinci"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interpersonal Skills */}
          <div className="lg:col-span-6 flex flex-col justify-start">
            <span className="text-[#64748B] text-xs font-bold uppercase tracking-widest mb-3 block">
              My Skills
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-[#1E293B] tracking-tight">
              Interpersonal Skills
            </h2>

            {/* 4 Mini-Cards arranged in a tight responsive grid */}
            <div className="grid grid-cols-2 gap-4">
              {/* Card 1: Communication */}
              <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-[0_10px_30px_rgba(0,0,0,0.02)] flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-[0_20px_40px_rgba(107,90,237,0.06)] hover:-translate-y-1 group">
                <div className="w-12 h-12 rounded-xl bg-[#F4F9FC] flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-[#6B5AED]/10">
                  <svg
                    className="w-6 h-6 text-[#6B5AED]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>
                <span className="text-sm font-semibold text-[#1E293B]">
                  Communication
                </span>
              </div>

              {/* Card 2: Time Management */}
              <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-[0_10px_30px_rgba(0,0,0,0.02)] flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-[0_20px_40px_rgba(107,90,237,0.06)] hover:-translate-y-1 group">
                <div className="w-12 h-12 rounded-xl bg-[#F4F9FC] flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-[#6B5AED]/10">
                  <svg
                    className="w-6 h-6 text-[#6B5AED]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <span className="text-sm font-semibold text-[#1E293B]">
                  Time Management
                </span>
              </div>

              {/* Card 3: Teamwork */}
              <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-[0_10px_30px_rgba(0,0,0,0.02)] flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-[0_20px_40px_rgba(107,90,237,0.06)] hover:-translate-y-1 group">
                <div className="w-12 h-12 rounded-xl bg-[#F4F9FC] flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-[#6B5AED]/10">
                  <svg
                    className="w-6 h-6 text-[#6B5AED]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <span className="text-sm font-semibold text-[#1E293B]">
                  Teamwork
                </span>
              </div>

              {/* Card 4: Problem Solving */}
              <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-[0_10px_30px_rgba(0,0,0,0.02)] flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-[0_20px_40px_rgba(107,90,237,0.06)] hover:-translate-y-1 group">
                <div className="w-12 h-12 rounded-xl bg-[#F4F9FC] flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-[#6B5AED]/10">
                  <svg
                    className="w-6 h-6 text-[#6B5AED]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.663 17h4.673M12 3v1m6.364.364l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <span className="text-sm font-semibold text-[#1E293B]">
                  Problem Solving
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section className="h-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center h-full px-6 py-16 md:py-24 lg:py-32">
        {/* Left */}
        <div className="lg:col-span-5">
          <img src={Me} alt="Me" />
        </div>

        {/* Right */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          <span className="text-[#64748B] text-xs font-bold uppercase tracking-widest mb-3 block">
            About
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-[#1E293B] tracking-tight leading-none">
            About Me
          </h1>

          <div className="space-y-6 text-[#475569] text-[15px] leading-relaxed max-w-xl">
            <p>
              Fresh graduate with a Bachelor of Design from Telkom University,
              specializing in Design Management, with a focus on design
              strategy, branding, and the management of design within a business
              context.
            </p>
            <p>
              Demonstrates a strong interest in marketing and design, with the
              ability to understand consumer behavior and develop effective
              visual communication to support marketing strategies. Experienced
              in handling design projects and collaborating with clients to
              deliver creative solutions that align with market needs and
              business objectives.
            </p>
          </div>
        </div>
      </div>

      <TechnicalSkills />
    </section>
  );
};

export default About;
//
