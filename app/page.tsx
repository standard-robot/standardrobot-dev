import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Atkinson_Hyperlegible, Fira_Code, Fira_Mono } from 'next/font/google';

const ah = Atkinson_Hyperlegible({ weight: '400', subsets: ['latin'] });
const fc = Fira_Mono({ weight: '400', subsets: ['latin'] });
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          &nbsp;
          <code className="font-mono font-bold">EP - COMING 2023</code>
        </p>
      </div>

      <div className="bg-swamp-green-500">
        <Image
          className="relative filter: invert(1) drop-shadow(0 0 0.3rem #ffffff70);"
          src="/robot.svg"
          alt="standardrobot logo"
          width={300}
          height={250}
          priority
        />
      </div>
      <div className="position: relative; text-align: center; vertical-align: center;">
        <div>
          <h1 className="text-align: center; {fc.className}">
            <code className="font-mono; font-bold; position: relative;">
              $ whoami
            </code>
          </h1>
          <div className="mt-5 mb-5">
            <p className={fc.className}>
              Online, I go by the name standardrobot. I enjoy making electronic
              music, programming, and playing video games. Professionally,
              I&lsquo;m a cyber systems engineer with a strong interest in
              offensive security. This project came about because I bought this
              domain to secure the name. I'll be using the opportunity as a
              trial by fire dive into web-dev.
            </p>
          </div>
        </div>

        <div>
          <h1 className={fc.className}>
            <code className="font-mono font-bold">$ cat in_dev.txt</code>
          </h1>
          <div className="mt-5 mb-5">
            <p className={fc.className}>
              I will be building a more dynamic site, written with the T3 Stack
              with ThreeJS and Framer-Motion. Employing typesafety and have
              agency throughout my DX, and I want to mess around with basic 3D
              graphic work. I am also working on an EP, which I plan to release
              within the next few months. Finally, I would like to create a VST
              before the summer, as well as some other smaller tools. At the
              moment, the links below point to relevant sites, and will be
              updated as the site evolves{' '}
            </p>
          </div>
        </div>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://twitter.com/standard_robot"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Twitter{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>posts</p>
        </a>

        <a
          href="https://soundcloud.com/standardrobot"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            SoundCloud{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>music</p>
        </a>

        <Link
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          href="https://github.com/standard-robot"
        >
          <h2 className={'mb-3 text-2xl font-semibold'}>
            GitHub{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>src code</p>
        </Link>

        <Link
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          href="https://blog.standardrobot.dev"
        >
          <h2 className={'mb-3 text-2xl font-semibold'}>
            Blog{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>words</p>
        </Link>
      </div>
    </main>
  );
}
