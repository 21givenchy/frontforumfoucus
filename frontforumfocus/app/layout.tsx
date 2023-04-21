import './globals.css'
import { Open_Sans} from 'next/font/google'

const openSans = Open_Sans ({
  subsets: ['latin', 'latin-ext', 'vietnamese'],
});
export const metadata = {
  title: 'frontforumfocus',
  description: 'Empowering Sustainable Growth',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={openSans.classname} lang="en">
      <body>{children}</body>
    </html>
  )
}
