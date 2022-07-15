export default function Projects() {
  return (
    // <div className='flex gap-6 flex-col md:flex-row'>
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>

        {/* Portfolio */}
        <a className='transform hover:scale-[1.01] transition-all rounded-xl w-full bg-gradient-to-r p-1 from-[#D8B4FE] to-[#818CF8]'>
            <div className="flex flex-col justify-between h-full bg-white dark:bg-gray-900 rounded-lg p-4">
                <div>
                    <h5 className="text-xl leading-tight font-bold mb-2">Portfolio</h5>
                </div>
                <div className="flex flex-col md:flex-row justify-between">
                    <h4 className="text-lg md:text-lg font-medium mb-6 sm:mb-10 w-full text-gray-900 dark:text-gray-100 tracking-tight">
                        The portfolio I built with NextJs, Tailwind and hosted on Netlify.
                    </h4>
                </div>
                {/* <div className="flex items-center text-gray-800 dark:text-gray-200 capsize">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                    </svg>            
                </div> */}
                <div className="flex">
                    <a href="" target="_blank" rel="noopener noreferrer">Visit Site</a>
                    <a href="" target="_blank" rel="noopener noreferrer" className="px-3">Github</a>
                </div>                
            </div>
        </a>

        
        <a className='transform hover:scale-[1.01] transition-all rounded-xl w-full md:w-2/2 bg-gradient-to-r p-1 from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]'>
            <div className="flex flex-col justify-between h-full bg-white dark:bg-gray-900 rounded-lg p-4">
                <div>
                    <h5 className="text-xl leading-tight font-bold mb-2">Book App</h5>
                </div>
                <div className="flex flex-col md:flex-row justify-between">
                    <h4 className="text-lg md:text-lg font-medium mb-6 sm:mb-10 w-full text-gray-900 dark:text-gray-100 tracking-tight">
                        A project I'm working on that uses Firebase, Google Books Api, Google Identity Services.
                    </h4>
                </div>
                
                <div className="flex">
                    <a href="" target="_blank" rel="noopener noreferrer">Visit Site</a>
                    <a href="" target="_blank" rel="noopener noreferrer" className="px-3">Github</a>
                </div>                
            </div>
        </a>

        
        <a className='transform hover:scale-[1.01] transition-all rounded-xl w-full md:w-2/2 bg-gradient-to-r p-1 from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]'>
            <div className="flex flex-col justify-between h-full bg-white dark:bg-gray-900 rounded-lg p-4">
                <div>
                    <h5 className="text-xl leading-tight font-bold mb-2">Netlify</h5>
                </div>
                <div className="flex flex-col md:flex-row justify-between">
                    <h4 className="text-lg md:text-lg font-medium mb-6 sm:mb-10 w-full text-gray-900 dark:text-gray-100 tracking-tight">
                        A project I'm working on that uses NextJs, Netlify-Identity, hosted on Netlify.
                    </h4>
                </div>
                
                <div className="flex">
                    <a href="https://whimsical-sunburst-e3bc84.netlify.app/" target="_blank" rel="noopener noreferrer">Visit Site</a>
                    <a href="https://github.com/web-development2017/nextjs-netlify" target="_blank" rel="noopener noreferrer" className="px-3">Github</a>
                </div>                
            </div>
        </a>

        
        <a className='transform hover:scale-[1.01] transition-all rounded-xl w-full md:w-2/2 bg-gradient-to-r p-1 from-[#D8B4FE] to-[#818CF8]'>
            <div className="flex flex-col justify-between h-full bg-white dark:bg-gray-900 rounded-lg p-4">
                <div>
                    <h5 className="text-xl leading-tight font-bold mb-2">Vercel</h5>
                </div>
                <div className="flex flex-col md:flex-row justify-between">
                    <h4 className="text-lg md:text-lg font-medium mb-6 sm:mb-10 w-full text-gray-900 dark:text-gray-100 tracking-tight">
                        A project I'm working on that uses NextJs, PlanetScale, Prisma, Next-Auth, Tailwind and hosted on Vercel.
                    </h4>
                </div>
                
                <div className="flex">
                    <a href="https://nextjs-starter-dusky.vercel.app/" target="_blank" rel="noopener noreferrer">Visit Site</a>
                    <a href="https://github.com/web-development2017/nextjs-starter" target="_blank" rel="noopener noreferrer" className="px-3">Github</a>
                </div>                
            </div>
        </a>

        <a className='transform hover:scale-[1.01] transition-all rounded-xl w-full md:w-2/2 bg-gradient-to-r p-1 from-[#D8B4FE] to-[#818CF8]'>
            <div className="flex flex-col justify-between h-full bg-white dark:bg-gray-900 rounded-lg p-4">
                <div>
                    <h5 className="text-xl leading-tight font-bold mb-2">MERN Stack</h5>
                </div>
                <div className="flex flex-col md:flex-row justify-between">
                    <h4 className="text-lg md:text-lg font-medium mb-6 sm:mb-10 w-full text-gray-900 dark:text-gray-100 tracking-tight">
                        A project I'm working on that uses MongoDB Atlas, Express, React, Node, GraphQL, JWT Auth and hosted on Heroku.
                    </h4>
                </div>
                
                <div className="flex">
                    <a href="https://mernstack888.herokuapp.com/" target="_blank" rel="noopener noreferrer">Visit Site</a>
                    <a href="https://github.com/web-development2017/MERN_Stack" target="_blank" rel="noopener noreferrer" className="px-3">Github</a>
                </div>                
            </div>
        </a>
    </div>
  )
}
