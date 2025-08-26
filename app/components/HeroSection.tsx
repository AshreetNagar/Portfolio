'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20 opacity-10" />
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
			</div>

			<div className="relative z-10 max-w-4xl w-full mx-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="bg-black/50 backdrop-blur-lg rounded-lg border border-gray-800 p-6"
				>
					{/* Window controls (Windows style, right aligned) */}
					<div className="flex justify-end items-center gap-3 mb-4 text-gray-400">
						{/* Minimize */}
						<svg
							className="w-4 h-4 hover:text-yellow-500 transition-colors"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							viewBox="0 0 24 24"
						>
							<path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16" />
						</svg>

						{/* Maximize / Restore */}
						<svg
							className="w-4 h-4 hover:text-green-500 transition-colors"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							viewBox="0 0 24 24"
						>
							{/* Single square for Maximize */}
							<rect x="6" y="6" width="12" height="12" />
						</svg>

						{/* Close */}
						<svg
							className="w-4 h-4 hover:text-red-500 transition-colors"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							viewBox="0 0 24 24"
						>
							<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</div>

					<div className="font-mono">
						<p className="text-green-500">$ about</p>
						<h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Ashreet Nagar</h1>
						<p className="text-gray-400 mb-2">Software Developer</p>
						<p className="text-green-500">$ skills</p>
						<div className="flex flex-wrap gap-2 mt-2">
							{/* Programming Languages */}
							<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Python</span>
							<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Java</span>
							<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">JavaScript</span>
							<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">TypeScript</span>

							{/* Frameworks */}
							<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">React</span>
							<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Next.js</span>
							<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Spring Boot</span>
							<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Django</span>
							<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Node.js</span>

							{/* Databases */}
							<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">PostgreSQL</span>
							<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">MongoDB</span>
							<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">MySQL</span>

							{/* Cloud & DevOps */}
							<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">AWS</span>
							<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Docker</span>
							<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Kubernetes</span>
							<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">CI/CD</span>
							
							{/* Data & AI */}
							<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Pandas</span>
							<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">TensorFlow</span>
							<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Scikit-learn</span>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
