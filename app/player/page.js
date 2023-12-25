"use client";
import React, { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/Button'; 
import axios from 'axios';

export default function Player() {
    const [names, setNames] = useState([]);
    const [newName, setNewName] = useState('');

    const handleAddName = () => {
        axios.post('/names', { name: newName })
          .then(response => {
            const updatedNames = [...names, response.data];
            setNames(updatedNames);
            setNewName('');
          })
          .catch(error => {
            console.error('Error adding name:', error);
          });
      };

    const handleDeleteName = (id) => {
    axios.delete('/names/' + id)
        .then(response => {
        const updatedNames = names.filter(name => name.id !== id);
        setNames(updatedNames);
        })
        .catch(error => {
        console.error('Error deleting name:', error);
        });
    };

    useEffect(() => {
        axios.get('/names')
          .then(response => {
            setNames(response.data);
          })
          .catch(error => {
            console.error('Error fetching names:', error);
          });
      }, []);

    return (
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Navbar />
        <h1 className="text-6xl">Add and remove player</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {names.map(name => (
              <tr key={name.id}>
                <td>{name.name}</td>
                <td>
                  <Button color="danger" onClick={() => handleDeleteName(name.id)}>Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Footer />
      </main>
    )
}