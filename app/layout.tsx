import './globals.css'
import Nav from './components/Nav'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/pages/api/auth/[...nextauth]'

export const metadata = {
  title: 'neat',
  description: 'neat clothing',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Fetch the user
  const session = await getServerSession(authOptions)
  console.log(session)

  return (
    <html lang="en">
      <body className='container mx-auto'>
        <Nav user={session?.user} expires={session?.expires as string} />
        {children}
      </body>
    </html>
  )
}
