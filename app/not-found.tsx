import React from 'react';
import { Typewriter } from '../components/typed';
import FullScreenGlitch from '../components/visuals';

export default function BlueScren() {
  return (
    <body className="bg-bsod">
      <div className="flex flex-col items-center justify-center min-w-screen min-h-screen">
        <div className="fixed items-center justify-center top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-border w-2/12 h-1/8">
          <h1 className="font-w95fa text-center text-bsod max-md:text-2xl  text-4xl">
            uh - oh
          </h1>
        </div>
        <div className="mt-60 text-center fixed max-w-2xl text-white font-w95fa text-3xl">
          <p>
            look at what you fucking did. You navigated to a nonexistent page.
          </p>
          <p className="mt-20 ">nothing but a bsod here.</p>
          <p className="mt-10">Go back</p>
        </div>
      </div>
    </body>
  );
}
