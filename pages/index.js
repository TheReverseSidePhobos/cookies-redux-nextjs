import Head from 'next/head';
import { useEffect, useState } from 'react';
import Cookie from 'js-cookie';
import { setCheck } from '../pages/redux/actions';
import { useDispatch, useSelector } from 'react-redux';

function Home({ initialRememberValue = false }) {
  let { txt } = useSelector((state) => state.red);

  const dispatch = useDispatch();

  useEffect(() => {}, []);

  useEffect(() => {
    // const a = localStorage.getItem('txt');
    const a = Cookie.get('txt');
    console.log(a);
    dispatch(setCheck(a));
  }, []);

  const handleCheck = (e) => {
    dispatch(setCheck(e.target.value));
    // localStorage.setItem('txt', e.target.value);
    Cookie.set('txt', e.target.value);
  };

  return (
    <div>
      remember me
      <div>{JSON.stringify(txt)}</div>
      <input type="text" value={txt} onChange={(e) => handleCheck(e)} />
    </div>
  );
}

export default Home;
