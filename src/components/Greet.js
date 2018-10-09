import React, { Component } from 'react';
export const Greet =({match,props})=>(
    <div>
        <h1>Hello ! Welcome to React {match.params.username} from {match.params.city}</h1>
        
    </div>
)
