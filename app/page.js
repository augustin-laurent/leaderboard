"use client";
import { useState } from 'react'; 
import { Footer } from '@/components/Footer'; 
import { TFT } from '@/components/TFT';
import { Arena } from '@/components/Arena';
import { Navbar } from '@/components/Navbar';
import Link from 'next/link';

export default function Home() {

  const [currentComponent, setCurrentComponent] = useState('TFT');

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <div className="flex flex-row gap-x-4">
        <p>TFT</p>
        <input type="checkbox" className="toggle" onClick={componentSwitch} />
        <p>Arena</p>
      </div>
      <div>
        { currentComponent === "TFT" ? <TFT /> : <Arena />}
      </div>
      <Footer />
    </main>
  )

  function componentSwitch() {
    if (currentComponent === "TFT") {
      setCurrentComponent("Arena");
    }
    else {
      setCurrentComponent("TFT");
    }
  }
}
