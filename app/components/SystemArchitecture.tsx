'use client';

import { motion } from 'framer-motion';

export default function WorkExperience() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Work Experience
        </motion.h2>

        <div className="grid grid-cols-1 gap-8">
          {[
            {
              role: 'Software Developer',
              company: 'Don Mills Career College, Toronto, ON',
              duration: 'Sep 2024 – Present',
              description:
                'Developed and optimized internal backend systems and dashboards to automate reporting, improve operational efficiency, and enhance staff productivity across the college.',
              details: [
                'Architected an Automated Reporting System to generate internal reports for student performance, attendance, and faculty metrics.',
                'Built secure RESTful APIs with Java Spring Boot to fetch, filter, and aggregate data from multiple internal databases.',
                'Designed role-based access controls using Spring Security, JWT, and Azure to ensure that internal data is only accessible to authorized staff.',
                'Optimized database queries with indexing, caching, and query restructuring, increasing system responsiveness by 40% and reducing server load.',
                'Moved hosting from on premise to Azure, using Azures Load Balancer and CDN to improve access times by 25%.',
                'Created interactive dashboards with real-time data visualizations for staff to monitor key metrics and trends efficiently.',
                'Collaborated with IT and admin teams to identify bottlenecks in internal workflows and implement automated solutions, improving productivity and reducing manual errors.',
              ],
              tech: [
                'Java',
                'Spring Boot',
                'Flask',
                'Python',
                'PostgreSQL',
                'AWS Cognito',
                'JWT',
                'Cron Jobs',
                'Caching',
                'REST APIs',
                'Data Visualization',
              ],
            },
			{
			role: 'Apple Software Driver Development Engineer',
			company: 'AMD, Markham, ON',
			duration: 'May 2022 – May 2023',
			description:
				'Developed and maintained AMD’s internal benchmarking website for Apple driver testing, combining frontend dashboards, backend automation, task queues, and PostgreSQL data management to streamline workflows and reporting.',
			details: [
				'Built and enhanced the web dashboard using JavaScript, providing engineers with real-time status updates for machines, queued tasks, and benchmarking results.',
				'Developed the "Add New Device" form and associated frontend workflows, enabling seamless onboarding of new machines into the system.',
				'Scripted Python automation for Mac and Windows benchmark applications, generating data analysis reports for 5+ benchmarking tools.',
				'Implemented a Celery-based task queue for 50+ distributed machines, converting a manual process into an automated system, ensuring fair scheduling and efficient execution.',
				'Restructured an 8-state Finite State Machine (FSM) to improve frontend status clarity, allowing 50+ users to track jobs more effectively.',
				'Optimized 2000+ database entries using Django with caching, pagination, and sorting algorithms, improving load speed by 20x.',
				'Implemented filtering and sorting functionality in the computer management system using tags (by name, specs, or attributes), enabling users to select the correct machine efficiently.',
				'Updated database and server configurations on 10+ distributed workers to improve software version compatibility and overall system reliability.',
				'Created setup scripts in Python to deploy benchmarking applications on new machines, reducing setup time by 30%.',
				'Integrated hardware spec detection and automated reporting to ensure accurate tracking of machine capabilities and benchmarking outcomes.',
				'Debugged and stabilized the site by analyzing PostgreSQL queries and server logs, preventing crashes and improving uptime.',
			],
			tech: [
				'Python',
				'Django',
				'Celery',
				'Flower',
				'PostgreSQL',
				'JavaScript',
				'CSS',
				'Automation',
				'Queue Management',
				'Pagination',
				'Searching & Sorting',
			],
			},
            {
              role: 'Freelance Full Stack Developer',
              company: 'HT Productions, Toronto, ON',
              duration: 'June 2021 – Aug 2021',
              description:
                'Delivered multiple web applications for event management and RSVP tracking, integrating secure admin controls and real-time user interactions.',
              details: [
                'Designed and developed 4 RSVP websites using Python, React, Bootstrap, HTML, and CSS, enabling clients to efficiently manage event registrations.',
                'Built authenticated admin dashboards for managing users, events, and RSVPs, supporting over 300 concurrent users.',
                'Configured Google Firestore with security rules to protect sensitive attendee data, while streamlining development workflows by 75%.',
                'Implemented email notifications and confirmation workflows for attendees, improving engagement and reducing manual administrative effort.',
                'Collaborated with clients to gather requirements and iteratively improve application UX and performance.',
              ],
              tech: [
                'Python',
				'React',
                'Bootstrap',
                'Google Cloud',
                'Firestore',
				'JavaScript',
                'HTML',
                'CSS',
                'Authentication',
              ],
            },
            {
              role: 'Software Development Intern',
              company: 'Terra Media Design Ltd., Toronto, ON',
              duration: 'Feb 2018 – June 2018',
              description:
                'Built an AR prototype and automated deployment processes, enhancing interactive media experiences and reducing setup time for clients.',
              details: [
                'Developed an augmented reality prototype using Blippar SDK and JavaScript to visualize interactive media for marketing campaigns.',
                'Containerized the application using Docker and automated deployment with Terraform, enabling consistent environments across multiple clients.',
                'Implemented automated asset management scripts to streamline content updates and reduce manual configuration efforts.',
                'Worked with the design and marketing teams to iterate on prototype features, boosting client engagement across 50+ trade show stalls.',
                'Optimized AR assets for performance and cross-device compatibility, improving user experience and adoption.',
              ],
              tech: ['JavaScript', 'Blippar SDK', 'Docker', 'Terraform', 'AR Development'],
            },
          ].map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-800"
            >
              <h3 className="text-2xl font-bold mb-1">{job.role}</h3>
              <p className="text-gray-400 mb-2">
                {job.company} &bull; {job.duration}
              </p>
              <p className="text-gray-300 mb-4">{job.description}</p>
              <div className="mb-4">
                <h4 className="text-lg font-semibold mb-2">Key Achievements & Responsibilities:</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {job.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-2">
                {job.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
