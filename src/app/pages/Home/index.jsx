import React from 'react';
import { Helmet } from 'react-helmet-async';
import SharedLayout from './SharedLayout';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name='Home Page' content='Home Page' />
      </Helmet>

      <SharedLayout />
    </>
  );
}
