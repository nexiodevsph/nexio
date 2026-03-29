import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col">
      <Header />

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
        
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Digital Solutions for Your Business
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We provide comprehensive digital solutions to help your business grow and succeed in the digital world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors">
                <a href="/about" className="text-gray-White hover:text-white transition-colors">Learn More</a>
              </button>
     
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
              <Image
                src="/images/Graphic/pclaptop.png"
                alt="PC Laptop"
                width={900}
                height={450}
                className="object-contain"
              />
          </div>
        </div>

        {/* Tech Stack Section */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Our Tech Stack</h2>
            <p className="text-xl text-gray-300">Technologies we use to build amazing solutions</p>
          </div>
          
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll space-x-8">
              {/* First set of icons */}
              <div className="flex space-x-8 flex-shrink-0">
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
                  <div key={index} className="flex flex-col items-center group">
                    <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center justify-center group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                      <Image
                        src={tech.src}
                        alt={tech.name}
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                    <span className="mt-3 text-sm text-gray-300 group-hover:text-white transition-colors">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* Duplicate set for seamless scrolling */}
              <div className="flex space-x-8 flex-shrink-0">
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
                  <div key={`duplicate-${index}`} className="flex flex-col items-center group">
                    <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center justify-center group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                      <Image
                        src={tech.src}
                        alt={tech.name}
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                    <span className="mt-3 text-sm text-gray-300 group-hover:text-white transition-colors">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Showcase Section */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Our Projects</h2>
            <p className="text-xl text-gray-300">Showcasing our latest work and solutions</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Online Entrance Exam Web */}
            <div className="group relative bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
              <div className="absolute top-4 right-4 z-10">
                <span className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full shadow-lg">Live</span>
              </div>
              <div className="relative h-64 overflow-hidden bg-white/5 rounded-t-xl">
                <Image
                  src="/images/Graphic/Admission Web/eadmit3.png"
                  alt="Online Entrance Exam Web"
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Online Entrance Exam Web</h3>
                <p className="text-gray-300 mb-4">Comprehensive web-based entrance examination system with secure testing environment.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-sm">Web App</span>
                  <span className="px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-sm">Examination</span>
                  <span className="px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-sm">TailWind CSS</span>
                  <span className="px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-sm">Inertia.JS</span>
                  <span className="px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-sm">Laravel</span>
                  <span className="px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-sm">MySql</span>
                </div>
              </div>
            </div>

            {/* Online Entrance Exam Mobile */}
            <div className="group relative bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
              <div className="absolute top-4 right-4 z-10">
                <span className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full shadow-lg">Live</span>
              </div>
              <div className="relative h-64 overflow-hidden bg-white/5 rounded-t-xl">
                <Image
                  src="/images/Graphic/Admission Mobile/eadmitm4.jpg"
                  alt="Online Entrance Exam Mobile"
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Online Entrance Exam Mobile</h3>
                <p className="text-gray-300 mb-4">Mobile-optimized entrance exam application for seamless testing on any device connected to Web Via API.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-sm">Mobile</span>
                  <span className="px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-sm">Examination</span>
                     <span className="px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-sm">React Native</span>
                </div>
              </div>
            </div>

            {/* Web-Based Enrollment System */}
            <div className="group relative bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
              <div className="absolute top-4 right-4 z-10">
                <span className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full shadow-lg">Expired</span>
              </div>
              <div className="relative h-64 overflow-hidden bg-white/5 rounded-t-xl">
                <Image
                  src="/images/Graphic/Onsts/onsts2.png"
                  alt="Web-Based Enrollment System"
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Web-Based Enrollment System</h3>
                <p className="text-gray-300 mb-4">Streamlined online enrollment platform for efficient student registration and management.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-sm">Web App</span>
                  <span className="px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-sm">Enrollment</span>
                  <span className="px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-sm">TailWind CSS</span>
                  <span className="px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-sm">Inertia.JS</span>
                  <span className="px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-sm">Laravel</span>
                  <span className="px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-sm">MySql</span>
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
              <div className="absolute top-4 right-4 z-10">
                <span className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full shadow-lg">Live</span>
              </div>
              <div className="absolute bottom-4 right-4 z-10">
                <svg className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <div className="relative h-64 overflow-hidden bg-white/5 rounded-t-xl">
                <Image
                  src="/images/Graphic/Arco/arco.png"
                  alt="CampoArco Baleno"
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">CampoArco Baleno</h3>
                <p className="text-gray-300 mb-4">College art club platform where members can showcase their artistic works using different mediums.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-sm">Art Community</span>
                  <span className="px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-sm">Portfolio</span>
                  <span className="px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-sm">Gallery</span>
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
              <div className="absolute top-4 right-4 z-10">
                <span className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full shadow-lg">Live</span>
              </div>
              <div className="absolute bottom-4 right-4 z-10">
                <svg className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <div className="relative h-64 overflow-hidden bg-white/5 rounded-t-xl">
                <Image
                  src="/images/Graphic/TimeTracker/Screenshot_20260329-192248-portrait.png"
                  alt="OJT Time Tracker"
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">OJT Time Tracker</h3>
                <p className="text-gray-300 mb-4">Mobile app for students to track hours rendered during internship with detailed time logging.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-sm">Mobile App</span>
                  <span className="px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-sm">Time Tracking</span>
                  <span className="px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-sm">OJT</span>
                  <span className="px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-sm">React Native CLI</span>
                  <span className="px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-sm">SQLite</span>
                </div>
              </div>
            </a>

            {/* PTA Accounting System */}
            <div className="group relative bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
              <div className="absolute top-4 right-4 z-10">
                <span className="px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full shadow-lg">Local</span>
              </div>
              <div className="relative h-64 overflow-hidden bg-white/5 rounded-t-xl">
                <Image
                  src="/images/Graphic/PTA Accounting/PTA Accounting3.png"
                  alt="PTA Accounting System"
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">PTA Accounting System</h3>
                <p className="text-gray-300 mb-4">Financial management system for PTA transactions and membership at Alubijid National Comprehensive High School.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-sm">Web App</span>
                  <span className="px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-sm">Accounting</span>
                  <span className="px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-sm">PTA</span>
                  <span className="px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-sm">TailWind CSS</span>
                  <span className="px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-sm">Inertia.JS</span>
                  <span className="px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-sm">Laravel</span>
                  <span className="px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-sm">MySql</span>
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
