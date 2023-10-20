import React from "react";

export interface props {
    test: string;
}

export function Sparely({test} : props) {
    return <div>This is a test, {test}!</div>
}