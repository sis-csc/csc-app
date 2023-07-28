"use client";

import React from 'react'

export default function JoinButton() {

  const ToJoinForm = () => {
    window.open("https://www.google.com");
  };

    return (
        <button onClick={ToJoinForm} className='flex justify-center p-4'>
            Click Here and Join Our Club!!
        </button>
    );
}
