import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col">
      <Header />

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="space-y-12 sm:space-y-16 lg:space-y-20">
          {/* Main Hero */}
          <div className="text-center space-y-4 sm:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" style={{ color: '#0A71F9' }}>
              About Nexio Dev
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We started with a simple goal to create solutions that truly matter. At Nexio Devs, our mission is what keeps us grounded: working together, learning from each other, and building technology that solves real problems.
            </p>
          </div>

          {/* Mission & Vision Section */}
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Our Mission</h2>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  NEXIO DEV is commited to delivering innovation and reliable technology solutions by bringing together skilled developers, hardward specialist, software engineers and graphic designers to collaborate, create, and solve real-world problems.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Our Vision</h2>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  NEXIO DEVS envisions becoming a leading technology startup the unites developers, hardware specialist, software Engineers and graphic designers to create innovative and impactful digital solutionsfor a better future.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center order-first md:order-last">
              <div className="w-full max-w-sm h-64 sm:h-80 md:h-96 bg-slate-800 rounded-lg flex items-center justify-center border border-slate-700">
                <span className="text-gray-400 text-base sm:text-lg">Team Image</span>
              </div>
            </div>
          </div>

          {/* Journey Section */}
          <div className="text-center space-y-6 sm:space-y-8 py-8 sm:py-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Our Journey</h2>
            <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                This is our journey—one step, one idea, one innovation at a time. From our humble beginnings to our ambitious future, every project we undertake is a testament to our dedication and passion for excellence. We embrace challenges as opportunities for growth, and we celebrate every milestone as a stepping stone toward greater achievements.
              </p>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                As we continue to evolve, we remain true to our core values: integrity, innovation, and impact. These principles guide every decision we make, every client we serve, and every solution we deliver. We're not just building software—we're building relationships, fostering trust, and creating lasting value for our partners and community.
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 py-8 sm:py-12">
            <div className="text-center space-y-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white">Collaboration</h3>
              <p className="text-gray-300 text-sm sm:text-base">
                Working together to achieve extraordinary results through shared knowledge and expertise.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white">Innovation</h3>
              <p className="text-gray-300 text-sm sm:text-base">
                Pushing boundaries and exploring new possibilities to create cutting-edge solutions.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white">Impact</h3>
              <p className="text-gray-300 text-sm sm:text-base">
                Making a meaningful difference in every project we undertake and every client we serve.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
