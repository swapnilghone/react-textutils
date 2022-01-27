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

    return (
        <>
        <div className="form-group mt-4">
            <label htmlFor="exampleFormControlTextarea1">{props.title}</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" value={text} onChange={handleTextChange}></textarea>
            <div className='my-4'>
                <input className="btn btn-primary me-4" type="button" value="Convert UPPERCASE" onClick={handleUpClick} />
                <input className="btn btn-primary" type="button" value="Convert lowercase" onClick={handleLowClick} />
            </div>
        </div>
        <div className="container">
            <h2>Text Summary</h2>
            <p>
                {text.split(' ').length} Words, {text.length} characters
            </p>
        </div>
        </>
    );
}

Form.propTypes = {
    'title': PropTypes.string.isRequired
}