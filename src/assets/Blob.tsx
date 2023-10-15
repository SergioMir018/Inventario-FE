import { useEffect } from 'react'
import KUTE from 'kute.js'

import '../components/styles/blob.css'

export default function Blob() {
  useEffect(() => {
    KUTE.fromTo('#blob1',
      { path: '#blob1' },
      { path: '#blob2' },
      { // options
        easing: 'easingCubicInOut',
        yoyo: true, repeat: 1000, duration: 2500, 
      }
    ).start();

  }, [])

  return (
    <svg id="visual" className='blur z-0 relative opacity-50 drop-shadow-lg group-hover:drop-shadow-neon group-hover:opacity-100 h-[250px] max-w-screen sm:h-[600px] sm:w-[700px] md:h-[600px] md:w-[800px] lg:w-[900px] lg:h-[600px] transition duration-700 ease-in-out' viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg"
      version="1.1">
      <g transform="translate(470.13994821379146 305.49864079264313)">
        <path id="blob1" d="M140.6 -212.3C170.3 -171.9 174.3 -114.9 187.7 -63.4C201 -12 223.7 34 222.5 83.1C221.4 132.1 196.5 184.2 155.5 220C114.4 255.8 57.2 275.4 8 264.4C-41.1 253.3 -82.3 211.6 -127.3 177.1C-172.3 142.5 -221.2 115.1 -244.9 72.5C-268.5 29.8 -266.9 -28.2 -251.1 -83C-235.3 -137.8 -205.2 -189.5 -161 -225.1C-116.8 -260.7 -58.4 -280.4 -1.5 -278.3C55.4 -276.3 110.9 -252.6 140.6 -212.3" fill="#6c30c9">
        </path>
      </g>
      <g transform="translate(447.5740824635633 293.91091911587847)">
        <path id="blob2" d="M123.2 -159.9C162.2 -141.3 198.1 -108.7 219.5 -65.9C240.9 -23.1 247.9 29.9 237.2 81.5C226.5 133.1 198.2 183.5 155.7 206.7C113.2 229.9 56.6 225.9 0.1 225.8C-56.4 225.7 -112.9 229.3 -150.6 204.6C-188.3 179.8 -207.3 126.7 -220.8 74.3C-234.3 21.9 -242.2 -29.7 -233.9 -82.4C-225.5 -135.1 -200.9 -188.9 -159.2 -206.6C-117.6 -224.3 -58.8 -205.9 -8.3 -194.4C42.1 -183 84.2 -178.5 123.2 -159.9" fill="#6c30c9">
        </path>
      </g>
    </svg>
  )
}
