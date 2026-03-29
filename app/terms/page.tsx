import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col">
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex-grow">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-gray-400">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20 space-y-8">
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Agreement to Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                By accessing and using Nexio Dev's website and services, you accept and agree to be bound 
                by the terms and provision of this agreement. If you do not agree to abide by the above, 
                please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Services Description</h2>
              <p className="text-gray-300 mb-4">
                Nexio Dev provides the following services:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Web Application Development</li>
                <li>Mobile Application Development</li>
                <li>UI/UX Design Services</li>
                <li>Digital Marketing Solutions</li>
                <li>IT Consulting</li>
                <li>Software Maintenance & Support</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Client Responsibilities</h2>
              <p className="text-gray-300 mb-4">As a client, you agree to:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Provide accurate and complete information for your project</li>
                <li>Respond promptly to requests for feedback or approvals</li>
                <li>Make timely payments as outlined in project agreements</li>
                <li>Provide necessary assets and content in a timely manner</li>
                <li>Test deliverables and provide constructive feedback</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Payment Terms</h2>
              <p className="text-gray-300 mb-4">
                Payment terms are outlined in individual project agreements. Generally:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>30% upfront payment required for project initiation</li>
                <li>Remaining final payment upon project completion</li>
                <li>Additional work billed at hourly rates</li>
                <li>Late payments may incur interest charges</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Project Timeline and Delivery</h2>
              <p className="text-gray-300 mb-4">
                Project timelines are estimates based on current requirements. We reserve the right to 
                adjust timelines based on:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Client feedback and revision cycles</li>
                <li>Changes in project scope</li>
                <li>Technical challenges or third-party dependencies</li>
                <li>Delay in receiving client-provided materials</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Intellectual Property Rights</h2>
              <p className="text-gray-300 mb-4">
                Upon full payment, clients receive full ownership of the final deliverables. 
                However, Nexio Dev retains rights to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Use project in our portfolio and marketing materials</li>
                <li>Reuse general code and components for other projects</li>
                <li>Retain ownership of tools and proprietary methodologies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Confidentiality</h2>
              <p className="text-gray-300">
                Both parties agree to keep confidential all proprietary information shared during 
                the course of the project. This includes but is not limited to business strategies, 
                technical specifications, and project details.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Warranty and Support</h2>
              <p className="text-gray-300 mb-4">
                We provide a 30-day warranty for all deliverables covering:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Bugs and errors that affect core functionality</li>
                <li>Issues with browser compatibility as specified</li>
                <li>Security vulnerabilities in delivered code</li>
              </ul>
              <p className="text-gray-300 mt-4">
                Ongoing support and maintenance services are available under separate agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
              <p className="text-gray-300">
                Nexio Dev shall not be liable for any indirect, incidental, special, or consequential 
                damages resulting from the use or inability to use our services. Our total liability 
                shall not exceed the amount paid for the specific service in question.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Termination</h2>
              <p className="text-gray-300 mb-4">
                Either party may terminate the agreement with written notice. In case of termination:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Client pays for work completed up to termination date</li>
                <li>All deliverables completed to date will be provided</li>
                <li>Final payment is due upon termination</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Dispute Resolution</h2>
              <p className="text-gray-300">
                Any disputes arising from this agreement shall be resolved through good faith 
                negotiations. If unresolved, disputes will be subject to the laws of the Philippines.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Changes to Terms</h2>
              <p className="text-gray-300">
                We reserve the right to modify these terms at any time. Changes will be effective 
                immediately upon posting to our website. Continued use of our services constitutes 
                acceptance of any modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
              <p className="text-gray-300 mb-4">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-slate-800/50 rounded-lg p-4 border border-white/10">
                <p className="text-gray-300">Email: nexiodevsph@gmail.com</p>
                <p className="text-gray-300">Facebook: Nexio Devs</p>
                <p className="text-gray-300">Website: nexiodev.com</p>
              </div>
            </section>

          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <Link 
            href="/"
            className="inline-flex items-center px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-md font-medium transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
