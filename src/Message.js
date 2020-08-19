import React from 'react';
import './App.css';

export function Message(props) {
    return (
        <div>
            <h3>
                react counter is: {
                    props.counter
                }
            </h3>
        </div>
    )
}