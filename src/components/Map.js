import React from 'react'

export default function Map() {
  return (
    <div className='Container-2'>
    {/* <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" /> */}
      <iframe className='Map' src='https://map.mclive.ml' title='Map' width={1400} height={800} allowFullScreen={false} />
    </div>
  )
}
