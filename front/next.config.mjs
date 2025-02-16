/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['localhost', 'drive.google.com', 'shveya.onrender.com'], // Укажите домены, которые можно использовать
	},
	env: {
		BACK_URL: process.env.BACK_URL,
		BACK_URL_EN: process.env.BACK_URL_EN,
		BACK_URL_IMG: process.env.BACK_URL_IMG,
		CLIENT_ID: process.env.CLIENT_ID,
		DISCOVERY_DOCS: process.env.DISCOVERY_DOCS,
		SCOPES: process.env.SCOPES
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
};

export default nextConfig;
