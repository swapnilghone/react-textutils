import React from 'react';

export default function Footer(props) {
  return (
    <footer className={`footer mt-auto py-3 bg-${props.mode}`}>
        <div className="container">
        <span>© 2022 SwapNet. All Rights Reserved.</span>
        </div>
    </footer>
  );
}
