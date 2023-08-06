'use client';
import React, { useState, useEffect } from 'react';

interface TWProps {
  text: string;
  delay: number;
  loop?: boolean;
}

export const Typewriter: React.FC<TWProps> = ({
  text,
  delay,
  loop = false,
}) => {
  const [currText, setCurrText] = useState('');
  const [currIndex, setCurrIndex] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout | undefined;
    let n = text.length;
    if (loop == true) {
      n = text.length - 1;
    }

    if (currIndex < n) {
      timeout = setTimeout(() => {
        setCurrText((prevText) => prevText + text[currIndex]);
        setCurrIndex((prevIndex) => prevIndex + 1);
      }, delay);
    } else if (loop == true || loop == undefined) {
      setCurrIndex(0);
      setCurrText('');
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [currIndex, delay, loop, text]);

  return <span>{currText}</span>;
};

export function Test() {
  return (
    <div className=" max-w-3/6">
      <p className=" text-center left-0 top-0 w-full border-red-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit flex  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        &nbsp;
        <code className="font-mono w-36 font-bold">
          <Typewriter text="standardrobot" delay={150} />
        </code>
      </p>
    </div>
  );
}

export default function BlinkingCursor() {
  return <span className="blinking-cursor">|</span>;
}
