import React from 'react';

import Link from 'next/link';

interface TWProps {
  title?: string;
  link: string;
  content?: string;
}

const NewLink: React.FC<TWProps> = ({ title, link, content }) => {
  return (
    <Link
      className="group rounded-lg border transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      href={link}
    >
      <h2 className={` max-md:text-xs  lg:text-2xl font-semibold`}>
        {title}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>
      <p className={` max-md:mt-5 text-center text-sm opacity-50`}>{content}</p>
    </Link>
  );
};

export default function Navbar() {
  return (
    <div className="mb-10 grid max-md:text-center max-md:w-screen w-full justify-between grid-cols-5 text-center">
      <NewLink
        title="Instagram"
        link="https://instagram.com/@standardrobot.wav"
        content="pics"
      />
      <NewLink
        title="Twitter"
        link="https://twitter.com/standard_robot"
        content="bird shit"
      />
      <NewLink
        title="SoundCloud"
        link="https://soundcloud.com/standardrobot"
        content="music"
      />
      <NewLink
        title="GitHub"
        link="https://github.com/standard-robot"
        content="src code"
      />
      <NewLink
        title="Blog"
        link="https://blog.standardrobot.dev"
        content="words"
      />
    </div>
  );
}
