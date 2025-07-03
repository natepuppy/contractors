import { Helmet } from 'react-helmet-async';
import Button from '../components/Button';
import Section from '../components/Section';
import SectionHeading from '../components/SectionHeading';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us | DevTalent</title>
        <meta name="description" content="Learn about DevTalent, our mission to connect businesses with top overseas engineering talent, our values, and our leadership team." />
        <meta name="keywords" content="offshore development company, software engineering agency, remote development team" />
      </Helmet>

      {/* Hero Section */}
      <Section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Connecting businesses with exceptional engineering talent worldwide
          </p>
        </div>
      </Section>

      {/* Our Story Section */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading 
              title="Our Story" 
              subtitle="How DevTalent was born from a vision to bridge the global talent gap"
            />
            <p className="text-gray-600 mb-6">
              DevTalent was founded with a simple yet powerful vision: to connect innovative businesses with exceptional software engineering talent, regardless of geographical boundaries.
            </p>
            <p className="text-gray-600 mb-6">
              Our founder, a seasoned software engineer and entrepreneur, experienced firsthand the challenges that companies face when trying to build high-performing engineering teams. The traditional hiring model was expensive, time-consuming, and often failed to deliver the right talent at the right time.
            </p>
            <p className="text-gray-600 mb-6">
              At the same time, he recognized the vast pool of untapped talent in regions like Eastern Europe, Asia, and Latin America – skilled engineers who could deliver Silicon Valley-quality work at a fraction of the cost.
            </p>
            <p className="text-gray-600">
              DevTalent was established to bridge this gap, creating a win-win solution that provides companies with cost-effective access to top-tier engineering talent while offering skilled overseas developers opportunities to work on exciting projects with innovative companies.
            </p>
          </div>
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
            {/* Placeholder for founder image */}
            <div className="text-gray-400 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 mx-auto mb-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <p>Founder Image</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Our Values Section */}
      <Section bgColor="gray">
        <SectionHeading 
          title="Our Values" 
          subtitle="The principles that guide everything we do"
          centered
        />
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="bg-blue-100 text-blue-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Honesty & Transparency</h3>
            <p className="text-gray-600">
              We believe in complete transparency in our operations, pricing, and communication. We're honest about what we can deliver and set realistic expectations.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="bg-blue-100 text-blue-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Efficiency & Quality</h3>
            <p className="text-gray-600">
              We're committed to delivering high-quality work efficiently. We continuously optimize our processes to ensure we provide maximum value to our clients and engineers.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="bg-blue-100 text-blue-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Clear Communication</h3>
            <p className="text-gray-600">
              We prioritize clear, consistent communication. We ensure that our clients and engineers are always on the same page, with regular updates and open channels of communication.
            </p>
          </div>
        </div>
      </Section>

      {/* Global Talent Section */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Our Global Talent Network</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-lg mb-2">Eastern Europe</h4>
                  <p className="text-gray-600">Ukraine, Poland, Romania, Bulgaria</p>
                  <div className="mt-2 bg-gray-200 h-2 rounded-full">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold text-lg mb-2">Asia</h4>
                  <p className="text-gray-600">India, Philippines, Vietnam</p>
                  <div className="mt-2 bg-gray-200 h-2 rounded-full">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold text-lg mb-2">Latin America</h4>
                  <p className="text-gray-600">Argentina, Brazil, Mexico, Colombia</p>
                  <div className="mt-2 bg-gray-200 h-2 rounded-full">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold text-lg mb-2">Africa</h4>
                  <p className="text-gray-600">Nigeria, Kenya, South Africa</p>
                  <div className="mt-2 bg-gray-200 h-2 rounded-full">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <SectionHeading 
              title="Our Global Talent Network" 
              subtitle="Connecting skilled engineers from around the world with innovative companies"
            />
            <p className="text-gray-600 mb-6">
              We've built a diverse network of talented software engineers from across the globe. Our engineers come from regions known for their strong technical education and growing tech ecosystems.
            </p>
            <p className="text-gray-600 mb-6">
              We carefully select engineers who not only possess exceptional technical skills but also demonstrate strong communication abilities and cultural compatibility with Western business practices.
            </p>
            <p className="text-gray-600">
              Our US-based leadership team ensures quality control, effective communication, and seamless integration with your existing teams and processes.
            </p>
          </div>
        </div>
      </Section>

      {/* Leadership Section */}
      <Section bgColor="blue">
        <SectionHeading 
          title="Our Leadership" 
          subtitle="Meet the team behind DevTalent"
          centered
        />
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
              {/* Placeholder for team member image */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-gray-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-1">John Doe</h3>
            <p className="text-blue-600 mb-4">Founder & CEO</p>
            <p className="text-gray-600">
              Former software engineer with 15+ years of experience at leading tech companies. Passionate about connecting global talent with innovative businesses.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
              {/* Placeholder for team member image */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-gray-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-1">Jane Smith</h3>
            <p className="text-blue-600 mb-4">CTO</p>
            <p className="text-gray-600">
              Technical leader with extensive experience in software architecture and engineering management. Ensures the highest quality standards for all our projects.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
              {/* Placeholder for team member image */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-gray-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-1">Michael Johnson</h3>
            <p className="text-blue-600 mb-4">Head of Talent Acquisition</p>
            <p className="text-gray-600">
              Expert in global talent sourcing with a keen eye for identifying exceptional engineers who excel both technically and in communication.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to work with us?</h2>
          <p className="text-xl mb-8">Contact us today to learn more about our services and how we can help you achieve your goals.</p>
          <Button to="/contact" variant="primary">
            Get in Touch
          </Button>
        </div>
      </Section>
    </>
  );
};

export default AboutPage; 