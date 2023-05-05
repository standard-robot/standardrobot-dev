import Image from 'next/image'
import { rm } from '@/styles/fonts'

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            Get started by editing&nbsp;
            <code className="font-mono font-bold">app/page.tsx</code>
          </p>
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            <a
              className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
              href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className="dark:invert"
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

            <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
                <Image
                className="relative filter: invert(1) drop-shadow(0 0 0.3rem #ffffff70);"
                src="/next.svg"
                alt="Next.js Logo"
                width={180}
                height={37}
                priority
                />
            </div>
            
            <div className={rm.className}>
                <div>
                    <h1 className={rm.className}><code className="font-mono font-bold">$ whoami</code></h1>
                    <div className="flex justify-center items-center relative px-0 py-16;">
                        <p className={rm.className}>Online, I go by the name standardrobot. I enjoy making electronic music, programming, and playing video games. <br />Professionally, I&lsquom a cyber systems engineer with a strong rmest in offensive security.<br />This project came about because I bought this domain to secure the name. I'll be using the opportunity as a trial<br />by fire dive into web-dev.</p>
                    </div>
                </div>

                <div>
                    <h1 className={rm.className}><code className="font-mono font-bold">$ cat in_dev.txt</code></h1>
                    <div className="flex justify-center items-center relative px-0 py-16;">
                        <p className={rm.className}>I will be building a more dynamic site, written with the T3 Stack with ThreeJS and Framer-Motion. <br />Employing typesafety and have agency throughout my DX, and I want to mess around with basic 3D graphic work.<br />I am also working on an EP, which I plan to release within the next few months.<br />Finally, I would like to create a VST before the summer, as well as some other smaller tools. <br /> At the moment, the links below point to relevant sites, and will be updated as the site evolves </p>
                    </div>
                </div>
            </div>


            <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
                <a
                    href="https://instagram.com/standard_robot/"
                    className="rounded-[var(--border-radius)] border border-[rgba(var(--card-border-rgb),0)] transition-[background] duration-[200ms,border] delay-200 px-[1.2rem] py-4 border-solid;
                    background: rgba(var(--card-rgb), 0);"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2 className={rm.className}>
                        Instagram{' '}
                    </h2>
                    <p className={rm.className}>
                        Look at me
                    </p>
                </a>

                <a
                    href="https://soundcloud.com/standardrobot"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2 className={rm.className}>
                        SoundCloud{' '}
                    </h2>
                    <p className={rm.className}>
                        Listen to stuff I made
                    </p>
                </a>

                <a
                    href="https://github.com/standard-robot/"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2 className={rm.className}>
                        GitHub{' '}
                    </h2>
                    <p className={rm.className}>
                        Developed stuff
                    </p>
                </a>

                <a
                    href="https://github.com/standard-robot/"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2 className={rm.className}>
                        VSTs{' '}
                    </h2>
                    <p className={rm.className}>
                        Download DAW plugins I designed/developed
                    </p>
                </a>

            </div>
        </main>
    )
}
