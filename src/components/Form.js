import React, {useState} from 'react';
import PropTypes from 'prop-types'

export default function Form(props) {

    const [text,setText] = useState('');

    const handleUpClick = () => {
        // console.log(text);
        setText(text.toUpperCase());

        props.alert('Converted To Uppercase');
    }
    
    const handleLowClick = () => {
        setText(text.toLowerCase());
        props.alert('Converted To LowerCase');
    }

    const handleTextChange = (e) => {
        setText(e.target.value);
    }

    const handleClear = () => {
        setText('');
        props.alert('Text Cleared!');
    }

    // Credits: A
    const handleCopy = () => {
        navigator.clipboard.writeText(text); 
        props.alert("Copied to Clipboard!", "success");
    }

    // Credits: Coding Wala
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.alert("Extra spaces removed!", "success");
    }

    return (
        <>
        <div className="form-group mt-4">
            <label htmlFor="exampleFormControlTextarea1">{props.title}</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" value={text} onChange={handleTextChange}></textarea>
            <div className='my-4'>
            <input className="btn btn-primary me-2 my-2" type="button" value="Convert UPPERCASE" onClick={handleUpClick} disabled = {text.length === 0}/>
                <input className="btn btn-primary mx-2 my-2" type="button" value="Convert lowercase" onClick={handleLowClick} disabled = {text.length === 0}/>
                <input className="btn btn-primary mx-2 my-2" type="button" value="Copy Text" onClick={handleCopy} disabled = {text.length === 0}/>
                <input className="btn btn-primary mx-2 my-2" type="button" value="Clear Text" onClick={handleClear} disabled = {text.length === 0}/>
                <input className="btn btn-primary mx-2 my-2" type="button" value="Remove Whitespace" onClick={handleExtraSpaces} disabled = {text.length === 0}/>
            </div>
        </div>
        <div className="container">
            <h2>Text Summary</h2>
            <p>
                {text.split(/\s+/).filter((ele) => {
                    return ele.length !== 0;
                }).length} Words, {text.length} characters
            </p>
        </div>
        </>
    );
}

Form.propTypes = {
    'title': PropTypes.string.isRequired
}