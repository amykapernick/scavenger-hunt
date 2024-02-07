import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
	title: "Scavenger Hunt",
	description: "Let's have some fun and explore Perth!",
	generator: 'Next.js',
	manifest: '/manifest.webmanifest',
	themeColor: '#275942',
	viewport: 'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover',
	icons: [
		{ rel: "apple-touch-icon", url: "icons/icon-128x128.png" },
		{ rel: "icon", url: "icons/icon-128x128.png" },
	],
};

export default function RootLayout ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>)
{
	return (
		<ClerkProvider>
			<html lang="en">
				<body>
					<main>
						{children}
					</main>
				</body>
			</html>
		</ClerkProvider>
	);
}
