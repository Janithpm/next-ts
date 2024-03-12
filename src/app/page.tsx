import Link from 'next/link'
import React from 'react'

export default function Home(): JSX.Element {
  return (
    <main className='min-h-screen'>
      <div className='flex h-screen flex-col items-center justify-center'>
        <h1 className='text-4xl'>NextJs | NextUI | Typesript Starter</h1>
        <p className='text-md mt-3 text-gray-500'>
          by{' '}
          <Link className='text-blue-400' href={'https://github.com/Janithpm'}>
            Janithpm
          </Link>
        </p>
      </div>
    </main>
  )
}
