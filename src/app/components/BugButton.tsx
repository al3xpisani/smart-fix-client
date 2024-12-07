'use client';
import React, { useState } from 'react';

function BugButton() {
  const [clicked, setClicked] = useState(false);

  if (clicked) throw new Error('Ups... Something went wrong');
  return (
    <div>
      <button className='border bg-red-300' onClick={() => setClicked(true)}>
        Fire Error
      </button>
    </div>
  );
}

export default BugButton;
