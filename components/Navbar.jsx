"use client";
import { SwitchLD } from "./SwitchLD";
import Link from 'next/link';

export function Navbar() {
    return (
    <nav className="navbar bg-base-100 py-6 px-12">
        <div className="navbar-start">
        </div>
        <div className="navbar-center">
          <a className="text-5xl font-bold">Leaderboard</a>
        </div>
        <div className="flex gap-x-10 navbar-end">
          <Link className="" href="/player">Manage player</Link>
          <SwitchLD />
        </div>
    </nav>
    );
}