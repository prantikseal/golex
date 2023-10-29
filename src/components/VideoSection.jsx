import React from 'react'

const VideoSection = () => {
  return (
    <>
    <div className="flex justify-center items-center">
    <video 
      className="w-full max-w-3xl"
      autoPlay
      loop
      muted
      playsInline
    >
      <source src="/Trophy_1_VP8.webm" type="video/webm" />
    </video>  
  </div>
  </>
  )
}

export default VideoSection