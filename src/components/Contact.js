import React from 'react';
import { useEffect } from 'react';

export default function Contact() {
    useEffect(() => {
        document.title = "TextUtils - Contact"
    }, []);
  return (
    <div className="container">
        <h1>Contact Us</h1>
        <div className="row">
            <div className="col">
            Column
            </div>
            <div className="col">
            Column
            </div>
            <div className="col">
            Column
            </div>
        </div>
    </div>
);
}
