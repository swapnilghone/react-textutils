import React from 'react';
import { useEffect } from 'react';

export default function About(props) {

    // const [themeStyle,setStyle] = useState({
    //     background: 'white',
    //     color: '#212529'
    // });

    // const [cardStyle,setCardStyle] = useState({
    //     color: '#6c756b',
    //     background: '#f7f7f7'
    // });

    useEffect(() => {
        document.title = "TextUtils - About"
    }, []);

    let themeStyle,cardStyle;
    if(props.mode === 'dark'){
        themeStyle = {
            background: '#212529',
            color: 'white'
        };
        
        cardStyle = {
            color: '#f7f7f7',
            background: '#6c756b'
        };
    }else{
        themeStyle = {
            background: 'white',
            color: '#212529'
        };
        
        cardStyle = {
            color: '#6c756b',
            background: '#f7f7f7'
        };
    }

    return (
        <div className="container my-4">
            <div className="card text-center">
                <div className="card-header" style={cardStyle}>
                    <h2>About Us</h2>
                </div>
                <div className="card-body" style={themeStyle}>
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis velit beatae necessitatibus dolorum iure veritatis dignissimos quam odio earum id! Nobis libero ipsa doloremque impedit optio architecto quaerat. Ad culpa corrupti cumque voluptatibus dolore totam, labore ullam vitae dolorem blanditiis consequatur qui veniam amet ratione nobis itaque porro quisquam architecto ab aliquam iure. Aliquam vel quis esse amet sed molestias quod harum aut aspernatur!</p>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis velit beatae necessitatibus dolorum iure veritatis dignissimos quam odio earum id! Nobis libero ipsa doloremque impedit optio architecto quaerat. Ad culpa corrupti cumque voluptatibus dolore totam, labore ullam vitae dolorem blanditiis consequatur qui veniam amet ratione nobis itaque porro quisquam architecto ab aliquam iure. Aliquam vel quis esse amet sed molestias quod harum aut aspernatur!</p>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis velit beatae necessitatibus dolorum iure veritatis dignissimos quam odio earum id! Nobis libero ipsa doloremque impedit optio architecto quaerat. Ad culpa corrupti cumque voluptatibus dolore totam, labore ullam vitae dolorem blanditiis consequatur qui veniam amet ratione nobis itaque porro quisquam architecto ab aliquam iure. Aliquam vel quis esse amet sed molestias quod harum aut aspernatur!</p>
                </div>
                <div className="card-footer" style={cardStyle}>
                    Theme Change Demo
                </div>
                </div>
        </div>
    );
}