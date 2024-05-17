import React from 'react';
import ReactDOM from 'react-dom/client';
import MyApp from './MyApp';
import Display from './MyPhoto';
const root=ReactDOM.createRoot(document.getElementById("demo-app"));
root.render(
    <>
        <h1 align='center'>Hello world</h1>
        <MyApp />
        <Display />
    </>
)