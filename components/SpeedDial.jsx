"use client";

import React, { useState } from 'react';

export function SpeedDial ({ actions }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="">
      <button className="bg-base-content text-white w-12 h-12 rounded-full focus:outline-none" onClick={() => setOpen(!open)}>
        +
      </button>
      {open && (
        <div className="flex flex-col-reverse space-y-reverse space-y-2 mt-2">
          {actions.map((action, index) => (
            <button key={index} className="bg-white text-gray-600 w-12 h-12 rounded-full shadow-md focus:outline-none" onClick={action.onClick}>
              {action.icon}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
