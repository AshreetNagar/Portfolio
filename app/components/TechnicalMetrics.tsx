'use client';

import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

export default function ProjectsMetrics() {
	const projects = [
		{
		title: 'Home IoT App with AI Energy Optimization',
		github: 'https://github.com/AshreetNagar/IOTApp',
		description:
			'Led the development of a full-stack mobile IoT application for real-time device control, monitoring, and AI-powered energy optimization recommendations in residential environments.',
		details: [
			'Designed and implemented REST API microservices using AWS Lambda and Python, improving system scalability and handling real-time device control requests with low latency.',
			'Integrated DynamoDB and S3 for structured device data and user file storage, optimizing retrieval speed by 20% for real-time updates.',
			'Implemented user authentication and secure access control with JWT and AWS Cognito to protect user data and devices.',
			'Developed a self-hosted Linux server with Docker and automated Bash scripts, reducing hosting costs by 50% and simplifying system maintenance.',
			'Built React Native frontend for iOS and Android with live device status updates, intuitive control interfaces, and push notifications for user actions.',
			'Implemented deep learning-based energy usage analysis using LSTM neural networks in Python, predicting peak energy consumption periods and generating recommendations for optimal device operation times.',
			'Preprocessed historical energy consumption and device usage data using Pandas and NumPy, extracting features such as daily/weekly usage patterns, device types, and temporal context.',
			'Trained and validated the LSTM model with TensorFlow to predict energy usage and identify periods when devices could be safely turned off, achieving accurate recommendations with minimal false positives.',
			'Automated notifications via React Native push alerts and email when device operation could be optimized, enabling energy savings without compromising user comfort.',
			'Integrated AI predictions into the dashboard and device control interfaces, allowing users to follow recommendations and change their device schedules.',
		],
		tech: [
			'React Native', 'Python', 'AWS Lambda', 'DynamoDB', 'S3', 'Docker',
			'JWT', 'AWS Cognito', 'REST APIs', 'LSTM', 'TensorFlow', 'NumPy',
			'Pandas', 'AI/Deep Learning', 'Push Notifications', 'Energy Optimization'
		],
		},
		{
		title: 'Task Harbour – Project & Task Management Platform',
		github: 'https://github.com/shameerrehman/Task-Management-App',
		description:
			'Developed a scalable project and task management platform for teams, replicating the core functionality of Asana with real-time collaboration, task tracking, and automated notifications.',
		details: [
			'Led a 12-member team using SCRUM methodologies to design and implement a full-stack web application with React frontend and AWS-powered backend microservices.',
			'Built backend microservices with AWS Lambda, DynamoDB, and Python, enabling efficient storage, retrieval, and updating of tasks, projects, and user information in a serverless environment.',
			'Implemented secure user authentication and management using AWS Cognito and password hashing with salting, ensuring compliance with best practices in data security.',
			'Designed dynamic React components for dashboards, task lists, and project boards, providing an intuitive and responsive user experience.',
			'Added real-time notifications and status updates using WebSockets and AWS SNS, keeping team members informed of task assignments, project changes, and deadlines.',
			'Integrated role-based access controls to manage permissions for project members, admins, and guest users, allowing flexible team management and project visibility.',
			'Developed sorting, searching, and filtering algorithms for tasks and projects based on multiple criteria such as due dates, priority, tags, and assignees, improving usability for large-scale teams.',
		],
		tech: [
			'React', 'Python', 'AWS Lambda', 'DynamoDB', 'AWS Cognito', 'boto3',
			'WebSockets', 'REST APIs', 'Frontend Design', 'Security', 'Task Management Algorithms', 'Serverless Architecture'
		],
		},
		{
			title: 'Coding Social Website',
			github: 'https://github.com/AshreetNagar/CodingSocial',
			description:
				'A secure social platform for programmers to share code, manage friends, and collaborate in real time, with built-in IDE support.',
			details: [
				'Implemented Spring Boot REST APIs secured with Spring Security, enabling role-based access control and safe sharing of user code snippets.',
				'Designed a normalized PostgreSQL database to store N:M friend relationships efficiently and handle large volumes of user interactions.',
				'Developed an embedded Python IDE using Tkinter to allow users to run code snippets directly on the platform.',
				'Built React-based UI for real-time social features, including friend lists, code sharing, and notifications.',
				'Optimized API and database performance using caching strategies to reduce response time and enhance scalability.',
			],
			tech: ['Spring Boot', 'PostgreSQL', 'Python', 'Tkinter', 'React', 'JavaScript', 'Security', 'Database Design'],
		},
		{
			title: 'Counting People in a Room',
			github: 'https://github.com/AshreetNagar/countingPeople',
			description:
				'A computer vision system to count people entering or leaving a room, with automated notifications when capacity thresholds are reached.',
			details: [
				'Processed live video streams with OpenCV and imutils to detect individuals and track movement in real time.',
				'Developed centroid-based tracking and state management algorithms to maintain accurate entry/exit counts.',
				'Automated email notifications using Python smtplib when occupancy exceeded limits, improving compliance with safety guidelines.',
				'Optimized detection algorithms to reduce false positives, lower CPU usage, and improve system reliability.',
			],
			tech: ['Python', 'OpenCV', 'imutils', 'smtplib', 'Computer Vision', 'Real-Time Systems'],
		},
		{
			title: 'Peer-to-Peer File Transfer',
			github: 'https://github.com/AshreetNagar/P2Pproject',
			description:
				'A secure peer-to-peer file transfer system with a centralized index server, focusing on reliability, speed, and fault tolerance.',
			details: [
				'Implemented an index server using UDP for peer discovery and TCP for peer-to-peer file transfers in Python.',
				'Developed custom data structures to manage file metadata, transfer queues, and control information.',
				'Monitored network and I/O resources with select syscall to efficiently handle multiple simultaneous connections.',
				'Added encryption and integrity verification to ensure secure, reliable file delivery.',
			],
			tech: ['Python', 'TCP/UDP', 'Networking', 'Data Structures', 'Security', 'File Transfer'],
		},
		{
			title: 'Clips Website DevOps/Backend',
			github: 'https://github.com/yourusername/clips-website-devops',
			description:
				'A YouTube Shorts-inspired video sharing platform optimized with DevOps workflows and cloud infrastructure for scalability and cost efficiency.',
			details: [
				'Provisioned and managed 21 cloud resources with AWS, Terraform, and Kubernetes, including EKS clusters, S3 buckets, and EC2 instances.',
				'Optimized API performance with Flask and Boto3, improving request handling by 25%.',
				'Implemented CI/CD pipelines for automated testing, deployment, and monitoring of microservices.',
				'Reduced AWS operational costs by $2/hour using Cost Explorer and resource scaling strategies.',
				'Configured Kubernetes ReplicaSets for high availability and rapid load balancing across services.',
			],
			tech: ['AWS', 'Terraform', 'Kubernetes', 'Flask', 'Boto3', 'DevOps', 'CI/CD', 'Cloud Infrastructure'],
		},
		{
			title: 'Self-Driving Vehicle in a Game',
			github: 'https://github.com/AshreetNagar/selfDrivingGTA',
			description:
				'A game-based AI system to autonomously navigate a virtual vehicle using computer vision techniques for lane detection.',
			details: [
				'Developed lane detection algorithms using HSV color masks, Hough lines, and Canny edge detection to identify road boundaries.',
				'Controlled game vehicle input with PyAutoGUI to translate algorithmic decisions into smooth, responsive movements.',
				'Optimized performance to minimize input latency, ensuring accurate real-time navigation.',
				'Tested multiple scenarios to improve the robustness of lane-following and obstacle avoidance.',
			],
			tech: ['Python', 'OpenCV', 'NumPy', 'PyAutoGUI', 'Computer Vision', 'Game Automation'],
		},
		{
			title: 'E-Learning Database System',
			github: 'https://github.com/AshreetNagar/ELearningDatabase',
			description:
				'A comprehensive database system to manage e-learning content, courses, students, and assessments, with automated testing and optimized queries.',
			details: [
				'Designed 15 BCNF-compliant tables using Oracle SQL and Java, ensuring efficient storage and minimal redundancy.',
				'Automated testing with Bash scripts to reduce manual QA effort by 50%, streamlining validation of database integrity.',
				'Developed Java-based interface to execute and verify 31 test cases, ensuring correct database operations.',
				'Optimized indexing and queries to improve performance and scalability for a growing user base.',
			],
			tech: ['Oracle SQL', 'Java', 'Bash', 'ER Diagrams', 'Database Design', 'Automated Testing'],
		},
	];

	return (
		<section className="py-20 px-4 bg-gray-900/50">
			<div className="max-w-6xl mx-auto">
				<motion.h2
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className="text-3xl font-bold mb-12 text-center"
				>
					Projects & Technical Impact
				</motion.h2>

				<div className="grid grid-cols-1 gap-12">
					{projects.map((project, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, scale: 0.95 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2 }}
							className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
						>
							<div className="flex items-center mb-2 gap-2">
								<a
									href={project.github}
									target="_blank"
									rel="noopener noreferrer"
									className="text-green-400 font-bold text-xl hover:underline"
								>
									{project.title}
								</a>
								<a
									href={project.github}
									target="_blank"
									rel="noopener noreferrer"
									className="text-gray-300 hover:text-white"
								>
									<FaGithub size={20} />
								</a>
							</div>
							<p className="text-gray-300 mb-4">{project.description}</p>
							<ul className="list-disc list-inside space-y-2 text-gray-400 mb-4">
								{project.details.map((detail, i) => (
									<li key={i}>{detail}</li>
								))}
							</ul>
							<div className="flex flex-wrap gap-2">
								{project.tech.map((tech, i) => (
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
