import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <ul>
        <li>
          <Link to={`${process.env.PUBLIC_URL}/waiter`}>Waiter</Link>
        </li>
        <li>
          <Link to={`${process.env.PUBLIC_URL}/kitchen`}>Kitchen</Link>
        </li>
        <li>
          <Link to={`${process.env.PUBLIC_URL}/tables`}>Tables</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
