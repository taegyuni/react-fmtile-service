import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
//import 'antd/dist/antd.css';

const App = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>FMtile</title>
      </Head>
      <div>공통메뉴</div>
      <Component />
    </>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default App;
