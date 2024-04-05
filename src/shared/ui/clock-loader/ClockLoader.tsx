import * as React from 'react';

const ClockLoader: React.FC = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      enable-background='new 0 0 128 128'
      viewBox='0 0 128 128'
      width='100px'
      height='100px'
    >
      <linearGradient
        id='a'
        gradientUnits='userSpaceOnUse'
        x1='83.2'
        x2='46.534'
        y1='111.65'
        y2='20.316'
      >
        <stop offset='.0021923' stop-color='#bbdefb'>
          <animate
            attributeName='stop-opacity'
            values='1;0.5;1'
            dur='1s'
            repeatCount='indefinite'
          />
        </stop>
        <stop offset='1' stop-color='#e3f2fd'>
          <animate
            attributeName='stop-opacity'
            values='1;0.5;1'
            dur='1s'
            repeatCount='indefinite'
          />
        </stop>
      </linearGradient>
      <linearGradient
        id='b'
        gradientUnits='userSpaceOnUse'
        x1='64.395'
        x2='64.395'
        y1='38.333'
        y2='114.21'
      >
        <stop offset='0' stop-color='#ffca7b'>
          <animate
            attributeName='stop-opacity'
            values='1;0.5;1'
            dur='1s'
            repeatCount='indefinite'
          />
        </stop>
        <stop offset='.2539' stop-color='#ffa726'>
          <animate
            attributeName='stop-opacity'
            values='1;0.5;1'
            dur='1s'
            repeatCount='indefinite'
          />
        </stop>
        <stop offset='.4688' stop-color='#ffcc80'>
          <animate
            attributeName='stop-opacity'
            values='1;0.5;1'
            dur='1s'
            repeatCount='indefinite'
          />
        </stop>
        <stop offset='.6586' stop-color='#ffc875'>
          <animate
            attributeName='stop-opacity'
            values='1;0.5;1'
            dur='1s'
            repeatCount='indefinite'
          />
        </stop>
        <stop offset='.8665' stop-color='#ffa726'>
          <animate
            attributeName='stop-opacity'
            values='1;0.5;1'
            dur='1s'
            repeatCount='indefinite'
          />
        </stop>
      </linearGradient>
      <path
        d='m56.31 59.58c1.57.67 1.61 3.21.05 3.93-5.14 2.39-30.07 12.39-30.07 48.79l-.16 6.72 75.75.13-.05-6.78c0-37.1-25.08-46.31-30.25-48.72-1.55-.72-1.52-3.26.05-3.93 5.13-2.2 29.63-12.65 29.63-45.39l.63-5.7-75.76-.12.66 5.97c0 31.72 24.37 42.89 29.52 45.1z'
        fill='url(#a)'
      ></path>
      <path
        d='m95.85 109.3c-1.85-8.67-4.92-14.3-12.81-14.3h-16.25l-.01-34.35c0-8.93 22.91-11.52 22.91-24.07l-50.95.03c0 12.1 22.75 15.28 22.75 24.13l.03 34.26h-15.88c-7.95 0-11.05 5.72-12.84 14.48l-2.19 10.46 67.56.18z'
        fill='url(#b)'
      ></path>
      <path
        d='m29.48 11.52 69.05.11-.27 2.37c-.01.11-.02.22-.02.33 0 20.07-9.6 34.81-27.81 42.63-1.8.77-2.98 2.6-3.01 4.66s1.1 3.93 2.88 4.75c.27.13.59.27.96.43 6.82 3.03 27.56 12.26 27.56 45.59l.03 3.75-69.65-.12.09-3.65v-.07c0-14.14 3.9-25.69 11.61-34.33 6.15-6.92 13.1-10.09 16.07-11.44.24-.11.46-.21.66-.3 1.78-.83 2.91-2.69 2.88-4.75s-1.21-3.88-3.01-4.66c-8.33-3.58-27.71-14.87-27.71-42.34 0-.11-.01-.22-.02-.33l-.29-2.63m-3.35-3.01.66 5.97c0 31.72 24.37 42.89 29.52 45.1 1.57.67 1.61 3.21.05 3.93-5.14 2.39-30.07 12.39-30.07 48.79l-.16 6.72 75.74.13-.05-6.78c0-37.1-25.08-46.31-30.25-48.72-1.55-.72-1.52-3.26.05-3.93 5.13-2.2 29.63-12.65 29.63-45.39l.63-5.7-75.75-.12z'
        fill='#424242'
        opacity='.2'
      >
        <animate attributeName='opacity' dur='1s' repeatCount='indefinite' values='1;0.5;1' />
      </path>
      <path
        d='m25.02 4h77.96c3.33 0 6.02 2.7 6.02 6.02 0 3.33-2.7 6.02-6.02 6.02h-77.96c-3.33 0-6.02-2.7-6.02-6.02s2.7-6.02 6.02-6.02z'
        fill='#795548'
      ></path>
      <path
        d='m102.98 7c1.67 0 3.02 1.36 3.02 3.02 0 1.67-1.36 3.02-3.02 3.02h-77.96c-1.67 0-3.02-1.36-3.02-3.02s1.36-3.02 3.02-3.02zm0-3h-77.96c-3.32 0-6.02 2.7-6.02 6.02 0 3.33 2.7 6.02 6.02 6.02h77.96c3.33 0 6.02-2.7 6.02-6.02s-2.7-6.02-6.02-6.02z'
        fill='#424242'
        opacity='.2'
      ></path>
      <path
        d='m87.43 38.61c-1.23 4.51-6.51 7.56-11.65 10.51-5.66 3.26-11 6.34-11 11.58l.01 34.35c0 1.1.9 1.95 2 1.95h16.25c5.94 0 8.88 3.48 10.85 12.73l1.81 8.39-62.62-.16 1.69-8.08c1.88-9.24 4.93-12.88 10.87-12.88h15.88c.53 0 1.04-.16 1.41-.54.38-.38.59-.86.59-1.39l-.03-34.29c0-5.21-5.35-8.4-11.02-11.78-5.02-3-10.19-6.08-11.44-10.38zm2.26-2.01-50.95.02c0 12.1 22.75 15.28 22.75 24.12l.03 34.26h-15.88c-7.95 0-11.05 5.72-12.84 14.48l-2.19 10.46 67.56.2-2.33-10.84c-1.84-8.67-4.91-14.3-12.8-14.3h-16.25l-.01-34.35c0-8.93 22.91-11.49 22.91-24.05z'
        fill='#424242'
        opacity='.2'
      ></path>
      <path
        d='m24.86 112.31h78.28c3.23 0 5.85 2.62 5.85 5.85s-2.62 5.85-5.85 5.85h-78.28c-3.23 0-5.85-2.62-5.85-5.85 0-3.24 2.62-5.85 5.85-5.85z'
        fill='#795548'
      ></path>
      <path
        d='m103.14 115.31c1.57 0 2.85 1.28 2.85 2.85s-1.28 2.85-2.85 2.85h-78.28c-1.57 0-2.85-1.28-2.85-2.85s1.28-2.85 2.85-2.85zm0-3h-78.28c-3.23 0-5.85 2.62-5.85 5.85s2.62 5.85 5.85 5.85h78.28c3.23 0 5.85-2.62 5.85-5.85s-2.62-5.85-5.85-5.85z'
        fill='#424242'
        opacity='.2'
      ></path>
    </svg>
  );
};

export default ClockLoader;
