import React, { Fragment } from 'react';

// FC
const PrimeraApp = ( { saludo = 'Holas!' }) => {

    return (
        <Fragment>
            <h1>{ saludo }</h1>
            <p>My first app</p>
        </Fragment>
    );
} 

export default PrimeraApp;