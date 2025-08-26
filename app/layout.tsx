import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Ashreet Nagar - Software Developer',
	description:
		'I’m Ashreet Nagar, a software developer with a strong focus on full-stack development, cloud infrastructure, and scalable system design. I enjoy building reliable applications and solving complex engineering challenges with modern technologies.',
	keywords: [
		'Software Developer',
		'Software Engineer',
		'System Architecture',
		'API Development',
		'Database Design',
		'Cloud Computing',
		'Microservices',
		'DevOps',
		'Ashreet Nagar',
		'Node.js',
		'Python',
		'Java',
		'Distributed Systems',
		'System Design',
		'Software Architecture',
	],
	authors: [{ name: 'Ashreet Nagar' }],
	creator: 'Ashreet Nagar',
	openGraph: {
		title: 'Ashreet Nagar - Software Developer Portfolio',
		description: 'Explore my portfolio showcasing projects in full-stack development, backend engineering, and cloud systems. Learn more about my technical skills and experience.',
		url: 'https://your-domain.com',
		siteName: 'Ashreet Nagar - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Ashreet Nagar - Software Developer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
