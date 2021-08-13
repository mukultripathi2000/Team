import React, { useReducer } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import '../Header/Header.css';

export default function HeaderJoin() {
  const { url } = useRouteMatch();
  return (
    <>
      <div className="header-join">
        <h1 className="links">Team Organizer</h1>
        <Link to="/login" className="links material-ui-link">
          <h2>Log in</h2>
        </Link>
        <Link to="/signup" className=" links material-ui-link">
          <h2>Sign up</h2>
        </Link>
      </div>
    </>
  );
}
