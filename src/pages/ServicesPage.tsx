import { Helmet } from 'react-helmet-async';
import Button from '../components/Button';
import Section from '../components/Section';
import SectionHeading from '../components/SectionHeading';

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Services | DevTalent</title>
        <meta name="description" content="Our services include staff augmentation with vetted offshore engineers and project-based custom software development. Hire developers hourly or by project." />
        <meta name="keywords" content="staff augmentation agency, hire developers hourly, custom software development, offshore development team" />
      </Helmet>

      {/* Hero Section */}
      <Section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Flexible engineering solutions tailored to your business needs
          </p>
        </div>
      </Section>

      {/* Staff Augmentation */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading 
              title="Staff Augmentation" 
              subtitle="Add top-tier engineering talent to your team at a fraction of the cost"
            />
            <p className="text-gray-600 mb-6">
              Our staff augmentation service provides you with pre-vetted, highly skilled software engineers who work as an extension of your team. Whether you need to scale up quickly, add specialized skills, or reduce costs, our engineers integrate seamlessly with your existing processes.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="bg-blue-100 text-blue-600 p-2 rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Hourly Contracting</h3>
                  <p className="text-gray-600">Pay only for the hours worked, with transparent billing and reporting.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 text-blue-600 p-2 rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Vetted Overseas Engineers</h3>
                  <p className="text-gray-600">Our rigorous selection process ensures you get top talent with proven skills and experience.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 text-blue-600 p-2 rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Optional Management Oversight</h3>
                  <p className="text-gray-600">We can provide technical leadership and project management to ensure smooth delivery.</p>
                </div>
              </div>
            </div>
            <Button to="/contact" variant="primary">
              Hire Engineers
            </Button>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">Technologies We Cover</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold mb-3">Frontend</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    React / Next.js
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    Angular
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    Vue.js
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    TypeScript
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3">Backend</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    Node.js
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    Python / Django / Flask
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    Java / Spring
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    PHP / Laravel
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3">Mobile</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    React Native
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    Flutter
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    iOS (Swift)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    Android (Kotlin)
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3">DevOps & Cloud</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    AWS / Azure / GCP
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    Docker / Kubernetes
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    CI/CD Pipelines
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    Infrastructure as Code
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Project-Based Development */}
      <Section bgColor="gray">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6">Our Project-Based Services</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-lg mb-2">Custom Software Development</h4>
                  <p className="text-gray-600">End-to-end development of bespoke software applications tailored to your specific business needs.</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Web Application Development</h4>
                  <p className="text-gray-600">Responsive, scalable web applications with modern frontend frameworks and robust backend systems.</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Mobile App Development</h4>
                  <p className="text-gray-600">Native and cross-platform mobile applications for iOS and Android devices.</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">API Development & Integration</h4>
                  <p className="text-gray-600">Building and integrating APIs to connect your systems with third-party services and platforms.</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Legacy System Modernization</h4>
                  <p className="text-gray-600">Upgrading and refactoring outdated systems to improve performance, security, and maintainability.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <SectionHeading 
              title="Project-Based Development" 
              subtitle="Complete software solutions delivered from concept to launch"
            />
            <p className="text-gray-600 mb-6">
              Our project-based development service provides end-to-end software development for clients who prefer a hands-off approach. We handle everything from requirements gathering to deployment and ongoing support, delivering high-quality software on time and on budget.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="bg-blue-100 text-blue-600 p-2 rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Fixed-Scope and Milestone Billing</h3>
                  <p className="text-gray-600">Clear deliverables and payment schedules tied to project milestones.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 text-blue-600 p-2 rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Dedicated Project Team</h3>
                  <p className="text-gray-600">A full team including developers, QA engineers, designers, and a project manager.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 text-blue-600 p-2 rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Optional Ongoing Support</h3>
                  <p className="text-gray-600">Maintenance, updates, and support packages available after project completion.</p>
                </div>
              </div>
            </div>
            <Button to="/contact" variant="primary">
              Discuss Your Project
            </Button>
          </div>
        </div>
      </Section>

      {/* Comparison Table */}
      <Section>
        <SectionHeading 
          title="Choose the Right Model for Your Needs" 
          subtitle="Compare our service models to find the best fit for your business"
          centered
        />
        
        <div className="mt-12 max-w-4xl mx-auto overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="p-4 text-left">Feature</th>
                <th className="p-4 text-left">Staff Augmentation</th>
                <th className="p-4 text-left">Project-Based Development</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="p-4 font-medium">Billing Model</td>
                <td className="p-4">Hourly rates</td>
                <td className="p-4">Fixed price or milestone-based</td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50">
                <td className="p-4 font-medium">Team Management</td>
                <td className="p-4">Client-managed with optional oversight</td>
                <td className="p-4">Fully managed by us</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-4 font-medium">Flexibility</td>
                <td className="p-4">High (scale up/down as needed)</td>
                <td className="p-4">Moderate (change requests possible)</td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50">
                <td className="p-4 font-medium">Client Involvement</td>
                <td className="p-4">High (regular collaboration)</td>
                <td className="p-4">Low to moderate (approvals and feedback)</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-4 font-medium">Best For</td>
                <td className="p-4">Ongoing development, team extension</td>
                <td className="p-4">Specific projects with clear requirements</td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50">
                <td className="p-4 font-medium">Timeline</td>
                <td className="p-4">Continuous</td>
                <td className="p-4">Fixed with defined end date</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section bgColor="blue">
        <SectionHeading 
          title="Frequently Asked Questions" 
          subtitle="Common questions about our services"
          centered
        />
        
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">How quickly can you provide engineers?</h3>
              <p className="text-gray-600">We can typically match you with qualified engineers within 1-2 weeks, depending on your specific requirements and the availability of talent with the required skills.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">What if an engineer isn't a good fit?</h3>
              <p className="text-gray-600">If you're not satisfied with an engineer's performance, we'll replace them at no additional cost. Our goal is to ensure you have the right talent for your needs.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">How do you ensure quality?</h3>
              <p className="text-gray-600">We have a rigorous vetting process that includes technical assessments, communication skills evaluation, and background checks. We also provide ongoing performance monitoring and regular check-ins.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">What are your typical rates?</h3>
              <p className="text-gray-600">Our rates vary based on the engineer's experience level, technical skills, and the engagement model. However, our clients typically save 50-70% compared to hiring locally in the US or Western Europe.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="py-20">
        <div className="bg-blue-600 rounded-xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to discuss your needs?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Contact us today to learn more about our services and how we can help you achieve your goals.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/contact" variant="primary" className="bg-white text-blue-600 hover:bg-gray-100">
              Schedule a Consultation
            </Button>
            <Button to="/how-it-works" variant="outline" className="border-white text-white hover:bg-white hover:bg-opacity-10">
              Learn More About Our Process
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default ServicesPage; 