import { Helmet } from 'react-helmet-async';
import Button from '../components/Button';
import Section from '../components/Section';
import SectionHeading from '../components/SectionHeading';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>DevTalent | Affordable, High-Quality Software Engineers</title>
        <meta name="description" content="Hire top overseas engineers by the hour or project — fully vetted, flexible, and reliable. Get Silicon Valley-quality engineering at 1/3 the cost." />
        <meta name="keywords" content="hire offshore developers, remote software engineers, contract software engineers, developer staffing agency" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-800 text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/src/assets/pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight">
              Affordable, High-Quality Software Engineers — Without the Overhead
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-blue-100 font-light">
              Hire top overseas engineers by the hour or project — fully vetted, flexible, and reliable.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button to="/contact" variant="primary" className="text-lg px-8 py-4 font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                Book a Call
              </Button>
              <Button to="/services" variant="outline" className="text-lg px-8 py-4 font-bold bg-white bg-opacity-10 hover:bg-opacity-20 border-2 border-white text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                Request Engineers
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <Section bgColor="gray" className="py-10">
        <div className="text-center mb-6">
          <p className="text-gray-500 font-medium">Trusted by innovative companies</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {/* Replace with actual client logos */}
          <div className="h-8 w-32 bg-gray-300 rounded"></div>
          <div className="h-8 w-32 bg-gray-300 rounded"></div>
          <div className="h-8 w-32 bg-gray-300 rounded"></div>
          <div className="h-8 w-32 bg-gray-300 rounded"></div>
          <div className="h-8 w-32 bg-gray-300 rounded"></div>
        </div>
      </Section>

      {/* Benefits Section */}
      <Section bgColor="gradient">
        <SectionHeading 
          title="Why Choose DevTalent?" 
          subtitle="We connect you with exceptional engineering talent at a fraction of the cost, without compromising on quality or communication."
          centered
          highlight
        />
        
        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-b-4 border-blue-500">
            <div className="bg-blue-100 text-blue-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3">Cost-Efficient, Vetted Engineers</h3>
            <p className="text-gray-600">Get Silicon Valley-quality engineering at 1/3 the cost — without the hiring headaches.</p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-b-4 border-blue-500">
            <div className="bg-blue-100 text-blue-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3">Flexible Hiring Models</h3>
            <p className="text-gray-600">Hire by the hour or get turnkey delivery — we adapt to your project needs.</p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-b-4 border-blue-500">
            <div className="bg-blue-100 text-blue-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3">No Long-Term Contracts</h3>
            <p className="text-gray-600">Scale your engineering team up or down on demand, with no long-term commitments.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-8">
          <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-b-4 border-blue-500">
            <div className="bg-blue-100 text-blue-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3">Time Zone Overlap</h3>
            <p className="text-gray-600">Our developers are selected for strong communication and work on US time zones.</p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-b-4 border-blue-500">
            <div className="bg-blue-100 text-blue-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3">Management Included</h3>
            <p className="text-gray-600">We include a product manager and senior technical oversight when needed to guarantee results.</p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-b-4 border-blue-500">
            <div className="bg-blue-100 text-blue-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3">Fast Matching & Onboarding</h3>
            <p className="text-gray-600">We match you with engineers very quickly, getting your projects off the ground faster.</p>
          </div>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section bgColor="blue">
        <SectionHeading 
          title="What Our Clients Say" 
          subtitle="Don't just take our word for it. Here's what our clients have to say about working with DevTalent."
          centered
          highlight
        />
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-xl relative">
            <div className="absolute top-4 right-4">
              <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 25H7.5C6.83696 25 6.20107 24.7366 5.73223 24.2678C5.26339 23.7989 5 23.163 5 22.5V17.5C5 16.837 5.26339 16.2011 5.73223 15.7322C6.20107 15.2634 6.83696 15 7.5 15H10C10.663 15 11.2989 14.7366 11.7678 14.2678C12.2366 13.7989 12.5 13.163 12.5 12.5V10C12.5 9.33696 12.2366 8.70107 11.7678 8.23223C11.2989 7.76339 10.663 7.5 10 7.5H7.5M27.5 25H22.5C21.837 25 21.2011 24.7366 20.7322 24.2678C20.2634 23.7989 20 23.163 20 22.5V17.5C20 16.837 20.2634 16.2011 20.7322 15.7322C21.2011 15.2634 21.837 15 22.5 15H25C25.663 15 26.2989 14.7366 26.7678 14.2678C27.2366 13.7989 27.5 13.163 27.5 12.5V10C27.5 9.33696 27.2366 8.70107 26.7678 8.23223C26.2989 7.76339 25.663 7.5 25 7.5H22.5" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="mb-6">
              <div className="flex items-center space-x-1 mb-1">
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              </div>
            </div>
            <p className="text-gray-600 mb-6 italic">"DevTalent helped us scale our engineering team quickly with high-quality developers at a fraction of the cost. Their engineers integrated seamlessly with our team."</p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl mr-4">JS</div>
              <div>
                <h4 className="font-bold text-lg">Jane Smith</h4>
                <p className="text-sm text-gray-500">CTO, TechStartup</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-xl relative">
            <div className="absolute top-4 right-4">
              <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 25H7.5C6.83696 25 6.20107 24.7366 5.73223 24.2678C5.26339 23.7989 5 23.163 5 22.5V17.5C5 16.837 5.26339 16.2011 5.73223 15.7322C6.20107 15.2634 6.83696 15 7.5 15H10C10.663 15 11.2989 14.7366 11.7678 14.2678C12.2366 13.7989 12.5 13.163 12.5 12.5V10C12.5 9.33696 12.2366 8.70107 11.7678 8.23223C11.2989 7.76339 10.663 7.5 10 7.5H7.5M27.5 25H22.5C21.837 25 21.2011 24.7366 20.7322 24.2678C20.2634 23.7989 20 23.163 20 22.5V17.5C20 16.837 20.2634 16.2011 20.7322 15.7322C21.2011 15.2634 21.837 15 22.5 15H25C25.663 15 26.2989 14.7366 26.7678 14.2678C27.2366 13.7989 27.5 13.163 27.5 12.5V10C27.5 9.33696 27.2366 8.70107 26.7678 8.23223C26.2989 7.76339 25.663 7.5 25 7.5H22.5" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="mb-6">
              <div className="flex items-center space-x-1 mb-1">
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              </div>
            </div>
            <p className="text-gray-600 mb-6 italic">"DevTalent helped us scale our engineering team quickly with high-quality developers at a fraction of the cost. Their engineers integrated seamlessly with our team."</p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl mr-4">JS</div>
              <div>
                <h4 className="font-bold text-lg">Jane Smith</h4>
                <p className="text-sm text-gray-500">CTO, TechStartup</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-xl relative">
            <div className="absolute top-4 right-4">
              <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 25H7.5C6.83696 25 6.20107 24.7366 5.73223 24.2678C5.26339 23.7989 5 23.163 5 22.5V17.5C5 16.837 5.26339 16.2011 5.73223 15.7322C6.20107 15.2634 6.83696 15 7.5 15H10C10.663 15 11.2989 14.7366 11.7678 14.2678C12.2366 13.7989 12.5 13.163 12.5 12.5V10C12.5 9.33696 12.2366 8.70107 11.7678 8.23223C11.2989 7.76339 10.663 7.5 10 7.5H7.5M27.5 25H22.5C21.837 25 21.2011 24.7366 20.7322 24.2678C20.2634 23.7989 20 23.163 20 22.5V17.5C20 16.837 20.2634 16.2011 20.7322 15.7322C21.2011 15.2634 21.837 15 22.5 15H25C25.663 15 26.2989 14.7366 26.7678 14.2678C27.2366 13.7989 27.5 13.163 27.5 12.5V10C27.5 9.33696 27.2366 8.70107 26.7678 8.23223C26.2989 7.76339 25.663 7.5 25 7.5H22.5" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="mb-6">
              <div className="flex items-center space-x-1 mb-1">
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              </div>
            </div>
            <p className="text-gray-600 mb-6 italic">"DevTalent helped us scale our engineering team quickly with high-quality developers at a fraction of the cost. Their engineers integrated seamlessly with our team."</p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl mr-4">JS</div>
              <div>
                <h4 className="font-bold text-lg">Jane Smith</h4>
                <p className="text-sm text-gray-500">CTO, TechStartup</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-xl relative">
            <div className="absolute top-4 right-4">
              <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 25H7.5C6.83696 25 6.20107 24.7366 5.73223 24.2678C5.26339 23.7989 5 23.163 5 22.5V17.5C5 16.837 5.26339 16.2011 5.73223 15.7322C6.20107 15.2634 6.83696 15 7.5 15H10C10.663 15 11.2989 14.7366 11.7678 14.2678C12.2366 13.7989 12.5 13.163 12.5 12.5V10C12.5 9.33696 12.2366 8.70107 11.7678 8.23223C11.2989 7.76339 10.663 7.5 10 7.5H7.5M27.5 25H22.5C21.837 25 21.2011 24.7366 20.7322 24.2678C20.2634 23.7989 20 23.163 20 22.5V17.5C20 16.837 20.2634 16.2011 20.7322 15.7322C21.2011 15.2634 21.837 15 22.5 15H25C25.663 15 26.2989 14.7366 26.7678 14.2678C27.2366 13.7989 27.5 13.163 27.5 12.5V10C27.5 9.33696 27.2366 8.70107 26.7678 8.23223C26.2989 7.76339 25.663 7.5 25 7.5H22.5" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="mb-6">
              <div className="flex items-center space-x-1 mb-1">
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              </div>
            </div>
            <p className="text-gray-600 mb-6 italic">"DevTalent helped us scale our engineering team quickly with high-quality developers at a fraction of the cost. Their engineers integrated seamlessly with our team."</p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl mr-4">JS</div>
              <div>
                <h4 className="font-bold text-lg">Jane Smith</h4>
                <p className="text-sm text-gray-500">CTO, TechStartup</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="py-24">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-12 md:p-16 text-white text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/src/assets/pattern.svg')] opacity-10"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to boost your development capacity?</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto">Schedule a call today to discuss your needs and see how we can help you achieve your goals with top engineering talent.</p>
            <Button to="/contact" className="bg-white text-blue-600 hover:bg-gray-100 hover:text-blue-700 text-lg px-10 py-4 font-bold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
              Book a Free Consultation
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default HomePage; 