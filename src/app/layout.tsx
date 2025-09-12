import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GovIQ - AI Solutions for Government Agencies',
  description: 'Innovative AI solutions designed specifically for government agencies. Secure, compliant, and efficient artificial intelligence services.',
  keywords: 'AI, government, artificial intelligence, public sector, compliance, security',
  icons: {
    icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiByeD0iNCIgZmlsbD0iIzFlM2E4YSIvPgo8dGV4dCB4PSI1IiB5PSIyMiIgZm9udC1mYW1pbHk9IkludGVyLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0id2hpdGUiPmlRPC90ZXh0Pgo8L3N2Zz4K',
    shortcut: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiByeD0iNCIgZmlsbD0iIzFlM2E4YSIvPgo8dGV4dCB4PSI1IiB5PSIyMiIgZm9udC1mYW1pbHk9IkludGVyLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0id2hpdGUiPmlRPC90ZXh0Pgo8L3N2Zz4K',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className="antialiased">{children}</body>
    </html>
  )
}