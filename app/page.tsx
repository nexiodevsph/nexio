import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col">
      <Header />

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 overflow-x-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            <h1 className="hero-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
              Digital Solutions for Your Business
            </h1>
            <p className="hero-description text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed">
              We provide comprehensive digital solutions to help your business grow and succeed in the digital world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="button-touch bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 rounded-lg text-sm sm:text-base font-medium transition-colors w-full sm:w-auto">
                <a href="/about" className="text-white hover:text-gray-200 transition-colors">Learn More</a>
              </button>
            </div>
          </div>

          {/* Right Image - Responsive */}
          <div className="flex justify-center items-center order-first md:order-last">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl">
              <div className="relative w-full h-40 sm:h-48 md:h-56 lg:h-64 xl:h-80 bg-white/5 rounded-xl overflow-hidden">
                <Image
                  src="/images/Graphic/pclaptop.png"
                  alt="PC Laptop showing development work"
                  fill
                  className="object-contain w-full h-full responsive-img"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <section className="py-8 sm:py-12 lg:py-16 overflow-x-hidden">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">Our Tech Stack</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 px-4">Technologies we use to build amazing solutions</p>
          </div>
          
          {/* Mobile: Static Grid, Desktop: Carousel */}
          <div className="block md:hidden">
            <div className="grid grid-cols-3 gap-4 px-4">
              {[
                { name: 'HTML', src: '/images/icn/html.png' },
                { name: 'CSS', src: '/images/icn/css.png' },
                { name: 'JavaScript', src: '/images/icn/javascript.png' },
                { name: 'PHP', src: '/images/icn/php.png' },
                { name: 'Laravel', src: '/images/icn/laravel.png' },
                { name: 'MySQL', src: '/images/icn/mysql.png' },
                { name: 'React Native', src: '/images/icn/react-native.png' },
                { name: 'Tailwind CSS', src: '/images/icn/tailwind.png' },
                { name: 'Bootstrap', src: '/images/icn/bootstrap.png' }
              ].map((tech, index) => (
                <div key={index} className="flex flex-col items-center group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3 flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                    <Image
                      src={tech.src}
                      alt={tech.name}
                      width={32}
                      height={32}
                      className="object-contain responsive-img"
                    />
                  </div>
                  <span className="mt-1 sm:mt-2 text-xs text-gray-300 group-hover:text-white transition-colors text-center">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Carousel */}
          <div className="hidden md:block relative overflow-hidden tech-stack-carousel">
            <div className="flex animate-scroll space-x-6 sm:space-x-8 min-w-max">
              {/* First set of icons */}
              <div className="flex space-x-6 sm:space-x-8 flex-shrink-0">
                {[
                  { name: 'HTML', src: '/images/icn/html.png' },
                  { name: 'CSS', src: '/images/icn/css.png' },
                  { name: 'JavaScript', src: '/images/icn/javascript.png' },
                  { name: 'PHP', src: '/images/icn/php.png' },
                  { name: 'Laravel', src: '/images/icn/laravel.png' },
                  { name: 'MySQL', src: '/images/icn/mysql.png' },
                  { name: 'React Native', src: '/images/icn/react-native.png' },
                  { name: 'Tailwind CSS', src: '/images/icn/tailwind.png' },
                  { name: 'Bootstrap', src: '/images/icn/bootstrap.png' },
                  { name: 'Git', src: '/images/icn/git.png' },
                  { name: 'WordPress', src: '/images/icn/wordpress.png' },
                  { name: 'React', src: '/images/icn/physics.png' }
                ].map((tech, index) => (
                  <div key={index} className="flex flex-col items-center group flex-shrink-0">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 flex items-center justify-center group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                      <Image
                        src={tech.src}
                        alt={tech.name}
                        width={40}
                        height={40}
                        className="object-contain responsive-img"
                      />
                    </div>
                    <span className="mt-2 sm:mt-3 text-xs sm:text-sm text-gray-300 group-hover:text-white transition-colors">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* Duplicate set for seamless scrolling */}
              <div className="flex space-x-6 sm:space-x-8 flex-shrink-0">
                {[
                  { name: 'HTML', src: '/images/icn/html.png' },
                  { name: 'CSS', src: '/images/icn/css.png' },
                  { name: 'JavaScript', src: '/images/icn/javascript.png' },
                  { name: 'PHP', src: '/images/icn/php.png' },
                  { name: 'Laravel', src: '/images/icn/laravel.png' },
                  { name: 'MySQL', src: '/images/icn/mysql.png' },
                  { name: 'React Native', src: '/images/icn/react-native.png' },
                  { name: 'Tailwind CSS', src: '/images/icn/tailwind.png' },
                  { name: 'Bootstrap', src: '/images/icn/bootstrap.png' },
                  { name: 'Git', src: '/images/icn/git.png' },
                  { name: 'WordPress', src: '/images/icn/wordpress.png' },
                  { name: 'Physics', src: '/images/icn/physics.png' }
                ].map((tech, index) => (
                  <div key={`duplicate-${index}`} className="flex flex-col items-center group flex-shrink-0">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 flex items-center justify-center group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                      <Image
                        src={tech.src}
                        alt={tech.name}
                        width={40}
                        height={40}
                        className="object-contain responsive-img"
                      />
                    </div>
                    <span className="mt-2 sm:mt-3 text-xs sm:text-sm text-gray-300 group-hover:text-white transition-colors">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Showcase Section */}
        <section className="py-8 sm:py-12 lg:py-16 overflow-x-hidden">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">Our Projects</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 px-4">Showcasing our latest work and solutions</p>
          </div>
          
          <div className="project-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-0">
            {/* Online Entrance Exam Web */}
            <div className="group relative bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
              <div className="absolute top-2 sm:top-4 right-2 sm:right-4 z-10">
                <span className="px-2 py-1 bg-green-500 text-white text-xs font-bold rounded-full shadow-lg">Live</span>
              </div>
              <div className="relative h-40 sm:h-48 md:h-56 lg:h-64 overflow-hidden bg-white/5 rounded-t-xl">
                <Image
                  src="/images/Graphic/Admission Web/eadmit3.png"
                  alt="Online Entrance Exam Web"
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-500 responsive-img"
                />
              </div>
              <div className="p-3 sm:p-4 lg:p-6">
                <h3 className="text-sm sm:text-base lg:text-xl font-bold text-white mb-2">Online Entrance Exam Web</h3>
                <p className="text-gray-300 mb-3 text-xs sm:text-sm leading-relaxed line-clamp-2">Comprehensive web-based entrance examination system with secure testing environment.</p>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  <span className="px-2 py-1 bg-green-600/20 text-green-400 rounded-full text-xs">Web App</span>
                  <span className="px-2 py-1 bg-green-600/20 text-green-400 rounded-full text-xs">Examination</span>
                  <span className="px-2 py-1 bg-green-600/20 text-green-400 rounded-full text-xs">TailWind CSS</span>
                  <span className="px-2 py-1 bg-green-600/20 text-green-400 rounded-full text-xs hidden sm:inline">Inertia.JS</span>
                  <span className="px-2 py-1 bg-green-600/20 text-green-400 rounded-full text-xs hidden sm:inline">Laravel</span>
                  <span className="px-2 py-1 bg-green-600/20 text-green-400 rounded-full text-xs hidden lg:inline">MySql</span>
                </div>
              </div>
            </div>

            {/* Online Entrance Exam Mobile */}
            <div className="group relative bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
              <div className="absolute top-2 sm:top-4 right-2 sm:right-4 z-10">
                <span className="px-2 py-1 bg-green-500 text-white text-xs font-bold rounded-full shadow-lg">Live</span>
              </div>
              <div className="relative h-40 sm:h-48 md:h-56 lg:h-64 overflow-hidden bg-white/5 rounded-t-xl">
                <Image
                  src="/images/Graphic/Admission Mobile/eadmitm4.jpg"
                  alt="Online Entrance Exam Mobile"
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-500 responsive-img"
                />
              </div>
              <div className="p-3 sm:p-4 lg:p-6">
                <h3 className="text-sm sm:text-base lg:text-xl font-bold text-white mb-2">Online Entrance Exam Mobile</h3>
                <p className="text-gray-300 mb-3 text-xs sm:text-sm leading-relaxed line-clamp-2">Mobile-optimized entrance exam application for seamless testing on any device connected to Web Via API.</p>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  <span className="px-2 py-1 bg-green-600/20 text-green-400 rounded-full text-xs">Mobile</span>
                  <span className="px-2 py-1 bg-green-600/20 text-green-400 rounded-full text-xs">Examination</span>
                  <span className="px-2 py-1 bg-green-600/20 text-green-400 rounded-full text-xs">React Native</span>
                </div>
              </div>
            </div>

            {/* Web-Based Enrollment System */}
            <div className="group relative bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
              <div className="absolute top-2 sm:top-4 right-2 sm:right-4 z-10">
                <span className="px-2 py-1 bg-red-500 text-white text-xs font-bold rounded-full shadow-lg">Expired</span>
              </div>
              <div className="relative h-40 sm:h-48 md:h-56 lg:h-64 overflow-hidden bg-white/5 rounded-t-xl">
                <Image
                  src="/images/Graphic/Onsts/onsts2.png"
                  alt="Web-Based Enrollment System"
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-500 responsive-img"
                />
              </div>
              <div className="p-3 sm:p-4 lg:p-6">
                <h3 className="text-sm sm:text-base lg:text-xl font-bold text-white mb-2">Web-Based Enrollment System</h3>
                <p className="text-gray-300 mb-3 text-xs sm:text-sm leading-relaxed line-clamp-2">Streamlined online enrollment platform for efficient student registration and management.</p>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  <span className="px-2 py-1 bg-green-600/20 text-green-400 rounded-full text-xs">Web App</span>
                  <span className="px-2 py-1 bg-green-600/20 text-green-400 rounded-full text-xs">Enrollment</span>
                  <span className="px-2 py-1 bg-green-600/20 text-green-400 rounded-full text-xs hidden sm:inline">TailWind CSS</span>
                  <span className="px-2 py-1 bg-green-600/20 text-green-400 rounded-full text-xs hidden sm:inline">Inertia.JS</span>
                  <span className="px-2 py-1 bg-green-600/20 text-green-400 rounded-full text-xs hidden lg:inline">Laravel</span>
                  <span className="px-2 py-1 bg-green-600/20 text-green-400 rounded-full text-xs hidden lg:inline">MySql</span>
                </div>
              </div>
            </div>

            {/* CampoArco Baleno */}
            <a 
              href="https://arcobaleno.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 block"
            >
              <div className="absolute top-2 sm:top-4 right-2 sm:right-4 z-10">
                <span className="px-2 py-1 bg-green-500 text-white text-xs font-bold rounded-full shadow-lg">Live</span>
              </div>
              <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 z-10">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white/80 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <div className="relative h-40 sm:h-48 md:h-56 lg:h-64 overflow-hidden bg-white/5 rounded-t-xl">
                <Image
                  src="/images/Graphic/Arco/arco.png"
                  alt="CampoArco Baleno"
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-500 responsive-img"
                />
              </div>
              <div className="p-3 sm:p-4 lg:p-6">
                <h3 className="text-sm sm:text-base lg:text-xl font-bold text-white mb-2">CampoArco Baleno</h3>
                <p className="text-gray-300 mb-3 text-xs sm:text-sm leading-relaxed line-clamp-2">College art club platform where members can showcase their artistic works using different mediums.</p>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  <span className="px-2 py-1 bg-green-600/20 text-green-400 rounded-full text-xs">Art Community</span>
                  <span className="px-2 py-1 bg-green-600/20 text-green-400 rounded-full text-xs">Portfolio</span>
                  <span className="px-2 py-1 bg-green-600/20 text-green-400 rounded-full text-xs">Gallery</span>
                </div>
              </div>
            </a>

            {/* OJT Time Tracker */}
            <a 
              href="https://www.mediafire.com/file/xy7ygnqw3s09m3i/Time_Tracker.apk/file" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 block"
            >
              <div className="absolute top-2 sm:top-4 right-2 sm:right-4 z-10">
                <span className="px-2 py-1 bg-green-500 text-white text-xs font-bold rounded-full shadow-lg">Live</span>
              </div>
              <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 z-10">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white/80 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <div className="relative h-40 sm:h-48 md:h-56 lg:h-64 overflow-hidden bg-white/5 rounded-t-xl">
                <Image
                  src="/images/Graphic/TimeTracker/Screenshot_20260329-192248-portrait.png"
                  alt="OJT Time Tracker"
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-500 responsive-img"
                />
              </div>
              <div className="p-3 sm:p-4 lg:p-6">
                <h3 className="text-sm sm:text-base lg:text-xl font-bold text-white mb-2">OJT Time Tracker</h3>
                <p className="text-gray-300 mb-3 text-xs sm:text-sm leading-relaxed line-clamp-2">Mobile app for students to track hours rendered during internship with detailed time logging.</p>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  <span className="px-2 py-1 bg-green-600/20 text-green-400 rounded-full text-xs">Mobile App</span>
                  <span className="px-2 py-1 bg-green-600/20 text-green-400 rounded-full text-xs">Time Tracking</span>
                  <span className="px-2 py-1 bg-green-600/20 text-green-400 rounded-full text-xs hidden sm:inline">OJT</span>
                  <span className="px-2 py-1 bg-green-600/20 text-green-400 rounded-full text-xs hidden lg:inline">React Native CLI</span>
                  <span className="px-2 py-1 bg-green-600/20 text-green-400 rounded-full text-xs hidden xl:inline">SQLite</span>
                </div>
              </div>
            </a>

            {/* PTA Accounting System */}
            <div className="group relative bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
              <div className="absolute top-2 sm:top-4 right-2 sm:right-4 z-10">
                <span className="px-2 py-1 bg-orange-500 text-white text-xs font-bold rounded-full shadow-lg">Local</span>
              </div>
              <div className="relative h-40 sm:h-48 md:h-56 lg:h-64 overflow-hidden bg-white/5 rounded-t-xl">
                <Image
                  src="/images/Graphic/PTA Accounting/PTA Accounting3.png"
                  alt="PTA Accounting System"
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-500 responsive-img"
                />
              </div>
              <div className="p-3 sm:p-4 lg:p-6">
                <h3 className="text-sm sm:text-base lg:text-xl font-bold text-white mb-2">PTA Accounting System</h3>
                <p className="text-gray-300 mb-3 text-xs sm:text-sm leading-relaxed line-clamp-2">Financial management system for PTA transactions and membership at Alubijid National Comprehensive High School.</p>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  <span className="px-2 py-1 bg-green-600/20 text-green-400 rounded-full text-xs">Web App</span>
                  <span className="px-2 py-1 bg-green-600/20 text-green-400 rounded-full text-xs">Accounting</span>
                  <span className="px-2 py-1 bg-green-600/20 text-green-400 rounded-full text-xs hidden sm:inline">PTA</span>
                  <span className="px-2 py-1 bg-green-600/20 text-green-400 rounded-full text-xs hidden sm:inline">TailWind CSS</span>
                  <span className="px-2 py-1 bg-green-600/20 text-green-400 rounded-full text-xs hidden lg:inline">Inertia.JS</span>
                  <span className="px-2 py-1 bg-green-600/20 text-green-400 rounded-full text-xs hidden lg:inline">Laravel</span>
                  <span className="px-2 py-1 bg-green-600/20 text-green-400 rounded-full text-xs hidden xl:inline">MySql</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
