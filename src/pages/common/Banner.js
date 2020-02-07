import React from 'react'

export default ({ banner }) =>
  <div style={{
    marginTop: '64px',
    position: 'relative',
    height: 'calc(100vh - 64px)'
  }}
  >
    <div style={{
      background: '0 0',
      overflow: 'hidden',
      position: 'relative',
      width: '100%',
      zIndex: '0',
      height: '100%',
      clipPath: 'polygon(50% 100%, 100% 40%, 100% 0, 0 0, 0 40%)',
      backgroundColor: '#000'
    }}
    >
      <picture
        className='bannerImg'
        style={{
          height: '100%',
          position: 'relative',
          display: 'block',
          marginRight: 'auto',
          width: '100%',
          backgroundSize: 'cover',
          backgroundPosition: '50% 0%',
          backgroundImage: `url(${banner})`,
          opacity: 0.3
        }}
      />
    </div>
    <div style={{
      position: 'absolute',
      top: 0,
      width: '100%',
      height: '100%'
    }}
    >
      <div style={{
        position: 'absolute',
        left: '0px',
        right: '0px',
        bottom: '50%',
        margin: 'auto',
        color: '#fff',
        maxWidth: '800px',
        textAlign: 'center'
      }}
      >
        <h2
          className='Bold'
          style={{
            fontSize: '60px',
            margin: 0,
            paddingBottom: '1rem'
          }}
        >
        What we do
        </h2>
        <h2
          className='Bold'
          style={{
            fontSize: '37px',
            margin: 0
          }}
        >
        Doing for cyber what the MBA did for management
        </h2>
      </div>
    </div>
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