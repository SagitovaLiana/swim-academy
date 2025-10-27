const WaveIcon = ({ 
  width = 200, 
  height = 200, 
  waveColor = "#e5e5e5",
  className = "#edeae8",
}) => {
  return (
//     <svg width={width} height={height}  viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" className={className}>
//   <rect width={width} height={height}  fill="none"/>

//   <path d="M0,60 Q37.5,35 75,60 T150,60 T225,60 T300,60"
//         fill="none" stroke={waveColor}  stroke-width="2" opacity="0.45"/>
//   <path d="M0,90 Q37.5,65 75,90 T150,90 T225,90 T300,90"
//         fill="none" stroke={waveColor}  stroke-width="2" opacity="0.4"/>
//   <path d="M0,120 Q37.5,95 75,120 T150,120 T225,120 T300,120"
//         fill="none" stroke={waveColor}  stroke-width="2" opacity="0.35"/>
//   <path d="M0,150 Q37.5,125 75,150 T150,150 T225,150 T300,150"
//         fill="none" stroke={waveColor} stroke-width="2" opacity="0.3"/>
// </svg>

    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 200 200" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        d="M0,50 Q25,25 50,50 T100,50 T150,50 T200,50"
        fill="none" 
        stroke={waveColor} 
        strokeWidth="2" 
        opacity="0.4"
      />
      <path 
        d="M0,90 Q25,65 50,90 T100,90 T150,90 T200,90"
        fill="none" 
        stroke={waveColor} 
        strokeWidth="2" 
        opacity="0.35"
      />
      <path 
        d="M0,130 Q25,105 50,130 T100,130 T150,130 T200,130"
        fill="none" 
        stroke={waveColor} 
        strokeWidth="2" 
        opacity="0.3"
      />
      <path 
        d="M0,170 Q25,145 50,170 T100,170 T150,170 T200,170"
        fill="none" 
        stroke={waveColor} 
        strokeWidth="2" 
        opacity="0.25"
      />
    </svg>
  );
};

export default WaveIcon;