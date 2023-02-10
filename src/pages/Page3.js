import React, { useState } from 'react';
import Link from '../Router/Link';
import { useDispatch } from "react-redux";
import * as actions from '../Redux/actionTypes';

function Page3() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function updateInfo(email, password) {
    dispatch({ type: actions.UPDATE_EMAIL, payload: email });
    dispatch({ type: actions.UPDATE_PASSWORD, payload: password });
  }

  return (
    <>
      <h1>PAGE3</h1>
      <Link to='/' ><h2>PAGE1</h2></Link>
      <Link to='/page2' ><h2>PAGE2</h2></Link>
      <form>
        <label>
          Email:
          <input
            type='email'
            autoComplete='new-password'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </label>
        <br /> <br />
        <label>
          Password:
          <input
            type='password'
            autoComplete='new-password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        <br /> <br />
        <input type='submit' onClick={(e) => {
          e.preventDefault();
          updateInfo(email, password);
          console.log(email, password)
        }
        }
        />
      </form>
    </>
  );
}

export default Page3;