import Me from "@/assets/Contact.png";

const CONTACT_DATA = [
  {
    id: "phone",
    label: "Phone",
    value: "+62 857 6555 7588",
    link: "https://wa.me/+6285765557588",
    icon: (
      <svg
        className="w-5 h-5 text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M6.62 10.79a15.15 15.15 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27 11.72 11.72 0 003.7.59 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.7 1 1 0 01-.27 1.1l-2.2 2.19z" />
      </svg>
    ),
  },
  {
    id: "instagram",
    label: "Instagram",
    value: "@mrshaa.a",
    link: "https://instagram.com/mrshaa.a",
    icon: (
      <svg
        className="w-5 h-5 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        viewBox="0 0 24 24"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    id: "email",
    label: "Email",
    value: "mrshaann11@gmail.com",
    link: "mailto:mrshaann11@gmail.com",
    icon: (
      <svg
        className="w-5 h-5 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "www.linkedin.com/in/annisa-marshaa-tsabita",
    link: "https://www.linkedin.com/in/annisa-marsha-tsabita/",
    icon: (
      <svg
        className="w-5 h-5 text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
];

const Contact = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12">
      <div className="flex justify-center items-center lg:col-span-6 order-1 lg:order-2">
        <ul className="space-y-6">
          {CONTACT_DATA.map((item) => (
            <li key={item.id} className="flex items-center space-x-6">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-[#E11D48] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-sm active:scale-95 shrink-0"
                title={`Go to ${item.label}`}
              >
                {item.icon}
              </a>

              <div className="flex flex-col min-w-0 text-justify">
                <span className="text-xs text-gray-400 uppercase tracking-widest font-semibold">
                  {item.label}
                </span>
                <div className="flex items-center space-x-2">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-lg md:text-xl font-medium text-black hover:text-[#6D28D9] transition-colors duration-200 truncate outline-none focus-visible:underline"
                  >
                    {item.value}
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="lg:col-span-6 order-1 lg:order-2">
        <div>
          <div className="absolute bottom-0 right-0 w-[33%] h-[51%] bg-[#6D28D9] z-10" />
          <img src={Me} alt="Me" className="relative z-20" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
