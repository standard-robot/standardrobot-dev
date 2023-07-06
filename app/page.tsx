import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/navbar';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-32">
      <Navbar />
      <div className="left-0 max-w-3/6">
        <p className="fixed left-0 top-0 flex w-full justify-left border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          &nbsp;
          <code className="font-mono font-bold">EP - COMING 2023</code>
        </p>
      </div>

      <div>
        <Image
          className="block ml-auto mr-auto justify-between relative filter: invert(1) drop-shadow(0 0 0.3rem #ffffff70);"
          src="/robot.svg"
          alt="standardrobot logo"
          width={300}
          height={250}
          priority
        />
      </div>

      <div className="w-3/6">
        <div>
          <h1 className="text-center font-fira">
            <code className="font-mono font-bold text-lg">$ whoami</code>
          </h1>
          <div className="mt-5 mb-5 text-center relative justify-between">
            <p className="font-fira text-center text-lg">
              Online, I go by the name standardrobot. I enjoy making electronic
              music, programming, and playing video games. Professionally,
              I&lsquo;m a cyber systems engineer with a strong interest in
              offensive security. This project came about because I bought this
              domain to secure the name. I'll be using the opportunity as a
              trial by fire dive into web-dev_
            </p>
          </div>
        </div>

        <div>
          <h1 className="text-center font-fira">
            <code className="font-mono font-bold text-lg">
              $ cat in_dev.txt
            </code>
          </h1>
          <div className="mt-5 mb-5">
            <p className="font-fira text-center text-lg">
              _I will be building a more dynamic site, written with the T3 Stack
              with ThreeJS and Framer-Motion. Employing typesafety and having
              agency throughout my DX, and I want to mess around with basic 3D
              graphic work. I am also working on an EP, which I plan to release
              within the next few months. Finally, I would like to create a VST
              before the summer, as well as some other smaller tools. At the
              moment, the links below point to relevant sites, and will be
              updated as the site evolves_
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
