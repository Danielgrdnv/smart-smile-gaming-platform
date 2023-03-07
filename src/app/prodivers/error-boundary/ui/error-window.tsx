import React from 'react';

export const ErrorWindow = () => (
  <div>
    <h1>An error occurred</h1>
    <button type='button' onClick={() => window.location.reload()}>
      Try again
    </button>
  </div>
);
