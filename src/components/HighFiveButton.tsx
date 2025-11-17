'use client';

import { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';

interface HighFiveProps {
  blogKey: string;
}

export const HighFiveButton = ({ blogKey }: HighFiveProps) => {
  const [likes, setLikes] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const divRef = useRef<HTMLDivElement>(null);

  const fireConfetti = () => {
    if (!divRef.current) return;

    const rect = divRef.current.getBoundingClientRect();

    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 50,
      spread: 50,
      origin: { x, y },
      colors: ["#ffffff"],
    });
  }

  const updateLikes = async () => {
    try {
      setLoading(true);

      const res = await fetch(`/api/blog/likeCount?blogKey=${blogKey}`);

      if (!res.ok) {
        throw new Error(`Like count request failed with ${res.status}`);
      }

      const data = await res.json();
      
      setLikes(data.data.count);
      setLoading(false);
    } catch (error) {
      console.log(`Error getting like count: ${error}`);
      setLoading(false);
    }
  }

  const addLike = async () => {
    try {
      const bodyData = { 'blogKey': blogKey };
      const res = await fetch('/api/blog/like', {
        method: 'Post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bodyData),
      });

      if (!res.ok) {
        throw new Error(`Like request failed with ${res.status}`);
      }

      const data = await res.json();

      setLikes(data.data.newCount);
      fireConfetti();
    } catch (error) {
      console.log(`Error adding like: ${error}`);
    }
  }

  useEffect(() => {
    updateLikes();
  }, [])

  return (
    <div className='flex gap-3'>
      <div className='transition-transform duration-200 hover:scale-105 active:scale-95 flex'>
        <span
          className={`${loading ? 'opacity-0 translate-y-1' : ''} cursor-pointer select-none px-3.5 py-2 text-sm bg-white text-black rounded-2xl transition duration-1000`}
          onClick={addLike}
          ref={divRef}
        >
            High Five!
        </span>
      </div>
      <span
        className={`${loading ? 'opacity-0 translate-y-1' : ''} transition duration-1000 py-2 text-sm text-white`}
      >
        —
      </span>
      <span
        className={`${loading ? 'opacity-0 translate-y-1' : ''} transition duration-1000 py-2 text-sm text-white`}
      >
        {likes} High Fives
      </span>
    </div>
  )
}