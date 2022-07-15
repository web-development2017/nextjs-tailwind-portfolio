import Image from 'next/image'
import Head from 'next/head'
import Link from "next/link"

export default function Contact() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center"> */}
      <main className="p-10 mx-auto max-w-2xl">
        <h1 className="text-3xl font-bold md:text-5xl tracking-tight mb-16">
          Contact
        </h1>

        <h2 className="mt-5 text-2xl font-bold">
          Feel free to use the below form to contact me
        </h2>

        <p className="text-xl mt-5 ">Hi, my name's Richard, and I'm a self-taught web developer seeking a career change and to find my first job in web development.</p>
        <p className="text-xl  mt-5">I have decided to pursue a career in web development because I appreciate the enriching benefits technology can achieve for business and the increasing growth of the digital sector.</p>
        <p className="text-xl  mt-5">I'm currently looking to work with a company that will support me in an entry-level role and guide me towards a suitable future career.</p>
        <p className="text-xl mb-5 mt-5">Please feel free to visit my <Link href="/contact">contact</Link> section to contact me.</p>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-between sm:w-full">
          <a
            href="https://github.com/web-development2017/my_portfolio/blob/master/src/components/Resume-RST-V0.2.pdf"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            target="_blank" rel="noopener noreferrer"
          >
            <h3 className="text-2xl font-bold">CV &rarr;</h3>
            <p className="mt-4 text-xl">
              View My CV
            </p>
          </a>

          <a
            href="https://www.linkedin.com/in/richard-taylor-a570a6164" target="_blank" rel="noopener noreferrer"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">LinkedIn &rarr;</h3>
            <p className="mt-4 text-xl">
              View my LinkedIn Page
            </p>
          </a>

          <a
            href="https://github.com/web-development2017" target="_blank" rel="noopener noreferrer"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Github &rarr;</h3>
            <p className="mt-4 text-xl">
              View my Github Page
            </p>
          </a>
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
    </div>
    
  )
}
