import React from 'react'

export default ({ topBanner, bottomBanner }) =>
  <div style={{
    marginTop: '64px'
  }}
  >
    <img
      src={topBanner} className='width100' style={{
        clipPath: `${!bottomBanner && 'polygon(50% 100%, 0 0, 100% 0)'}`
      }}
    />
    {
      bottomBanner &&
        <img
          src={bottomBanner} className='width100' style={{
            clipPath: 'polygon(50% 100%, 0 0, 100% 0)'
          }}
        />
    }
    <div style={{
      position: 'relative',
      height: '8rem'
    }}
    >
      <div style={{
        margin: 'auto',
        position: 'absolute',
        height: '100%',
        width: '0px',
        left: 'calc(50% - 1px)',
        borderLeft: '2px solid',
        color: '#523178'
      }}
      />
    </div>
  </div>
