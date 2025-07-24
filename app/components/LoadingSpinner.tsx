import * as React from 'react';

export default function LoadingSpinner() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '100vw',
      position: 'fixed',
      top: 0,
      left: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      zIndex: 9999,
    }}>
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#000"
      >
        <g fill="none" fillRule="evenodd">
          <g transform="translate(1 1)" strokeWidth="2">
            <circle strokeOpacity=".5" cx="24" cy="24" r="24" />
            <path d="M48 24c0-13.255-10.745-24-24-24">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 24 24"
                to="360 24 24"
                dur="1s"
                repeatCount="indefinite"
              />
            </path>
          </g>
        </g>
      </svg>
    </div>
  );
}
