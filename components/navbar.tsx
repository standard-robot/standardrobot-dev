import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="mb-32  grid custom-sm:text-center w-full phone:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 lg:text-center">
      <Link
        className="group rounded-lg border px-5 py-4 border-transparent transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        href="https://instagram.com/@standardrobot.wav"
      >
        <h2 className={`mb-3 lg:text-2xl font-semibold`}>
          Instagram{' '}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>pics</p>
      </Link>

      <Link
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        href="https://twitter.com/standard_robot"
      >
        <h2 className={`mb-3 lg:text-2xl font-semibold`}>
          Twitter{' '}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>posts </p>
      </Link>

      <Link
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        href="https://soundcloud.com/standardrobot"
      >
        <h2 className={`mb-3 lg:text-2xl font-semibold`}>
          SoundCloud{' '}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>music</p>
      </Link>

      <Link
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        href="https://github.com/standard-robot"
      >
        <h2 className={'mb-3 lg:text-2xl font-semibold'}>
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
        <h2 className={'mb-3 lg:text-2xl font-semibold'}>
          Blog{' '}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>words</p>
      </Link>
    </div>
  );
}
