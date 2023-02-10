import React from 'react';
import Link from '../Router/Link';

function Page1() {
  return (
    <>
      <h1>PAGE1</h1>
      <Link to='#' ><h2>PAGE1</h2></Link>
      <Link to='/page2' ><h2>PAGE2</h2></Link>
      <Link to='/page3' ><h2>PAGE3</h2></Link>
    </>
  );
}

export default Page1;