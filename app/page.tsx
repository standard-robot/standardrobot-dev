import React from 'react';
import Image from 'next/image';
import Navbar from '../components/navbar';
import BlinkingCursor, { Test } from '..//components/typed';

export default function Home() {
  return (
    <body id="main-body">
      <div className="flex min-h-screen custom-sm:color-blue min-w-screen flex-col items-center p-10">
        <Navbar />
        <Test />
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

        <div className="lg:w-3/6">
          <div>
            <h1 className="text-center font-fira">
              <code className="font-mono font-bold text-lg">$ whoami</code>
            </h1>
            <div className="mt-5 mb-5 text-center relative lg:justify-between">
              <p className="font-fira text-center lg:text-lg">
                I'm standardrobot. I enjoy making electronic music and
                programming. Professionally, I&lsquo;m a systems engineer, but I
                have a strong interest in offensive security and software
                development. This project came about because I bought this
                domain to secure the name. I'll be using the opportunity as a
                trial by fire dive into web-dev
                <BlinkingCursor />
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
              <p className="font-fira text-center lg:text-lg">
                I will be building a more dynamic site, written with TypeScript,
                utilizing React/NextJS, as well as ThreeJS and Framer-Motion. I
                am also working on an EP, which I plan to release within the
                next few months. Finally, I would like to create a VST before
                the summer, as well as some other smaller tools. At the moment,
                the links below point to relevant sites, and will be updated as
                the site evolves
                <BlinkingCursor />
              </p>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}
