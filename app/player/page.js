"use client";
import React, { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/Button';
import { sql, createClient } from "@vercel/postgres";

export default function Player({ isConnected}) {

  const client = createClient({
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    database: process.env.PGDATABASE,
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
  });

  try {
    client.connect();
  } catch(err) {
    console.log(err);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <h1 className="text-6xl">Add and remove player</h1>
      { client.isConnected ? (
        <p className="text-green-600">Connected to postgres</p>
      ) : (
        <p className="text-red-600">Not connected to postgres</p>
      )}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Delete</th> 
          </tr>
        </thead>
        <tbody>
          {/* {names.map(name => (
            <tr key={name.id}>
              <td>{name.name}</td>
              <td>
                <Button color="danger" onClick={() => handleDeleteName(name.id)}>Delete</Button>
              </td>
            </tr>
          ))} */}
        </tbody>
      </table>
      <input type="text" placeholder="Add Riot ID Username#000" className="input input-bordered w-full max-w-xs" />
      <Button text="Add Player" />
      <Footer />
    </main>
  )
}