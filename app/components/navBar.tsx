'use client'
import Link from "next/link";
import React from "react";
import { House } from 'lucide-react';
import { Mail } from 'lucide-react';



const navBar = () => {
  return (
    <div className="navbar shadow-md bg-slate-600 rounded-2xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href="/projects"><button>Projects</button></Link>
            </li>
            <li>
              <Link href="/resume"><button>Resume</button></Link>
            </li>
            <li>
              <Link href="/mystory"><button>My Story</button></Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl">JC</a>
      </div>
      <div className="navbar-end">
      <Link href="/connect"><button className="btn btn-ghost btn-circle"><Mail/></button></Link>
        <Link href="/home"><button className="btn btn-ghost btn-circle">
          <House/>
        </button></Link>
        
      </div>
    </div>
  );
};

export default navBar;
