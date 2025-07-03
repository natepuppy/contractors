import { Helmet } from 'react-helmet-async';
import Button from '../components/Button';
import Section from '../components/Section';
import SectionHeading from '../components/SectionHeading';

const HowItWorksPage = () => {
  return (
    <>
      <Helmet>
        <title>How It Works | DevTalent</title>
        <meta name="description" content="Learn how our software developer outsourcing process works. From matching you with the right engineers to ongoing support, we make hiring remote developers simple." />
        <meta name="keywords" content="software developer outsourcing process, how to hire remote developers, offshore development workflow" />
      </Helmet>

      {/* Hero Section */}
      <Section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">How It Works</h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Our simple, transparent process for connecting you with exceptional engineering talent
          </p>
        </div>
      </Section>

      {/* Hourly Contract Model */}
      <Section>
        <SectionHeading 
          title="Staff Augmentation Process" 
          subtitle="How our hourly contracting model works to augment your team with top overseas talent"
        />
        
        <div className="mt-12">
          <div className="max-w-4xl mx-auto">
            <ol className="relative border-l border-gray-200">
              <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-4 ring-white">
                  <span className="text-blue-600 font-bold">1</span>
                </span>
                <h3 className="flex items-center mb-2 text-xl font-bold text-gray-900">Initial Consultation</h3>
                <p className="mb-4 text-gray-600">We start with a thorough discussion about your project needs, technical requirements, team dynamics, and timeline expectations. This helps us understand exactly what kind of engineers you need.</p>
              </li>
              
              <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-4 ring-white">
                  <span className="text-blue-600 font-bold">2</span>
                </span>
                <h3 className="flex items-center mb-2 text-xl font-bold text-gray-900">Engineer Matching</h3>
                <p className="mb-4 text-gray-600">Based on your requirements, we select pre-vetted engineers from our network who match your technical needs, communication style, and time zone preferences.</p>
              </li>
              
              <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-4 ring-white">
                  <span className="text-blue-600 font-bold">3</span>
                </span>
                <h3 className="flex items-center mb-2 text-xl font-bold text-gray-900">Interview & Selection</h3>
                <p className="mb-4 text-gray-600">You interview the candidates we've selected to ensure they're a perfect fit for your team. We facilitate the process and gather your feedback.</p>
              </li>
              
              <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-4 ring-white">
                  <span className="text-blue-600 font-bold">4</span>
                </span>
                <h3 className="flex items-center mb-2 text-xl font-bold text-gray-900">Onboarding</h3>
                <p className="mb-4 text-gray-600">Once you've selected your engineers, we handle all the paperwork and set up communication channels. Our engineers integrate with your existing tools and workflows.</p>
              </li>
              
              <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-4 ring-white">
                  <span className="text-blue-600 font-bold">5</span>
                </span>
                <h3 className="flex items-center mb-2 text-xl font-bold text-gray-900">Ongoing Support</h3>
                <p className="mb-4 text-gray-600">We provide continuous support, regular check-ins, and performance monitoring. If needed, we can also provide project management oversight to ensure smooth collaboration.</p>
              </li>
              
              <li className="ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-4 ring-white">
                  <span className="text-blue-600 font-bold">6</span>
                </span>
                <h3 className="flex items-center mb-2 text-xl font-bold text-gray-900">Flexible Scaling</h3>
                <p className="mb-4 text-gray-600">As your needs change, you can scale your team up or down with minimal notice. No long-term commitments required.</p>
              </li>
            </ol>
          </div>
        </div>
      </Section>

      {/* Project-Based Model */}
      <Section bgColor="gray">
        <SectionHeading 
          title="Project-Based Development" 
          subtitle="How our turnkey development process works for clients who want a complete solution"
        />
        
        <div className="mt-12">
          <div className="max-w-4xl mx-auto">
            <ol className="relative border-l border-gray-200">
              <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-4 ring-white">
                  <span className="text-blue-600 font-bold">1</span>
                </span>
                <h3 className="flex items-center mb-2 text-xl font-bold text-gray-900">Discovery & Requirements</h3>
                <p className="mb-4 text-gray-600">We begin with a comprehensive discovery phase to understand your business goals, user needs, and technical requirements. This forms the foundation of our project plan.</p>
              </li>
              
              <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-4 ring-white">
                  <span className="text-blue-600 font-bold">2</span>
                </span>
                <h3 className="flex items-center mb-2 text-xl font-bold text-gray-900">Proposal & Agreement</h3>
                <p className="mb-4 text-gray-600">Based on the requirements, we provide a detailed proposal with scope, timeline, milestones, and fixed pricing. Once approved, we formalize the agreement.</p>
              </li>
              
              <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-4 ring-white">
                  <span className="text-blue-600 font-bold">3</span>
                </span>
                <h3 className="flex items-center mb-2 text-xl font-bold text-gray-900">Team Assembly</h3>
                <p className="mb-4 text-gray-600">We assemble a dedicated project team with the right mix of skills for your project, including developers, QA engineers, and a project manager who serves as your primary point of contact.</p>
              </li>
              
              <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-4 ring-white">
                  <span className="text-blue-600 font-bold">4</span>
                </span>
                <h3 className="flex items-center mb-2 text-xl font-bold text-gray-900">Design & Development</h3>
                <p className="mb-4 text-gray-600">We follow an agile development process with regular sprints, demos, and feedback cycles. You'll have visibility into progress through our project management tools.</p>
              </li>
              
              <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-4 ring-white">
                  <span className="text-blue-600 font-bold">5</span>
                </span>
                <h3 className="flex items-center mb-2 text-xl font-bold text-gray-900">Quality Assurance</h3>
                <p className="mb-4 text-gray-600">Our QA team thoroughly tests the application to ensure it meets all requirements and quality standards before delivery.</p>
              </li>
              
              <li className="ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-4 ring-white">
                  <span className="text-blue-600 font-bold">6</span>
                </span>
                <h3 className="flex items-center mb-2 text-xl font-bold text-gray-900">Delivery & Support</h3>
                <p className="mb-4 text-gray-600">After successful delivery, we provide documentation, knowledge transfer, and optional ongoing maintenance and support services.</p>
              </li>
            </ol>
          </div>
        </div>
      </Section>

      {/* Visual Process Flow */}
      <Section>
        <SectionHeading 
          title="Our Engagement Model" 
          subtitle="A visual representation of how we work with clients"
          centered
        />
        
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 text-blue-600 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Consult</h3>
                <p className="text-gray-600">We understand your needs and goals</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 text-blue-600 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Match</h3>
                <p className="text-gray-600">We connect you with the perfect talent</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 text-blue-600 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Deliver</h3>
                <p className="text-gray-600">We ensure quality results and satisfaction</p>
              </div>
            </div>
            
            <div className="mt-12 border-t pt-8">
              <h3 className="text-xl font-bold mb-4 text-center">Our Commitment to You</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-blue-600 mr-2 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Transparent communication at every stage</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-blue-600 mr-2 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Regular progress updates and reporting</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-blue-600 mr-2 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Quality assurance at every step</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-blue-600 mr-2 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Responsive support when you need it</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="py-20" bgColor="blue">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-xl mb-8">Schedule a free consultation to discuss your needs and see how we can help.</p>
          <Button to="/contact" className="bg-white text-blue-600 hover:bg-gray-100 hover:text-blue-700">
            Request a Consultation
          </Button>
        </div>
      </Section>
    </>
  );
};

export default HowItWorksPage; 