import Image from 'next/image'

export default function About() {
  return (
    <>
    <main className="p-10 mx-auto max-w-4xl">
        <div>
            <h1 className="text-3xl font-bold">About</h1>
        </div>
    </main>

    <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
        className="flex items-center justify-center gap-2"
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
        >
        Powered by{' '}
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
    </footer>
    </>
    
  )
}
