import React from 'react'

export default class Animation extends React.Component {
  bindCanvas = (cnv) => {
    const ctx = cnv.getContext('2d')
    let ctxWidth = ctx.canvas.width
    let ctxHeight = ctx.canvas.height
    window.addEventListener('resize', () => {
      ctxWidth = ctx.canvas.width
      ctxHeight = ctx.canvas.height
    })


    const SIZE = 25


    // Initial state
    let arr = []
    for (let i=0; i<SIZE; i++) {
      arr[i] = []
      for (let j=0; j<SIZE; j++) {
        let th = 8 * Math.PI / (SIZE - 1) * i
        let ph = 8 * Math.PI / (SIZE - 1) * j
        let g = Math.exp(-0.8*((i - 0.5 * (SIZE - 1))*(i - 0.5 * (SIZE - 1)) + (j - 0.5 * (SIZE - 1))*(j - 0.5 * (SIZE - 1))))
        arr[i][j] = [50 * g, 0]
      }
    }

    for (let k=0; k<SIZE; k++) {
      arr[k][0] = [0, 0]
      arr[k][SIZE-1] = [0, 0]
      arr[0][k] = [0, 0]
      arr[SIZE-1][k] = [0, 0]
    }

    // Render
    let isRendering = false
    let mspf = null
    let lastRenderTimestamp = null
    function render (timestamp) {
      if (lastRenderTimestamp) {
        mspf = timestamp - lastRenderTimestamp
      }
      lastRenderTimestamp = timestamp

      ctx.clearRect(0, 0, ctxWidth, ctxHeight)
      for (let i=0; i<SIZE; i++) {
        for (let j=0; j<SIZE; j++) {
          let re = arr[i][j][0]
          let im = arr[i][j][1]
          if (
            j - i <= SIZE / 64
            // j % 2 === 0
            // i >= SIZE / 2
          ) ctx.fillStyle = '#523178'
          else ctx.fillStyle = 'rgba(241, 241, 241, 1.0)'
          // ctx.fillStyle = '#faa'
          
          ctx.fillRect(i*16 + j*16, 300 - 2*re -i*6 + j*6, 2, 2)
          // ctx.fillStyle = '#0ff'
          
          ctx.fillRect(i*16 + j*16, 300 - 2*im -i*6 + j*6, 2, 2)
        }
      }

      isRendering = false
    }


    // Update
    let maxH4x = 1200
    let t0 = new Array(SIZE)
    let t1 = new Array(SIZE)
    function update(){
      let p0 = 0
      let p1 = 0
      let h4x = 0
      if (mspf > 20) {
        maxH4x = Math.max(maxH4x - 10, 10)
      }
      else if (mspf < 17) {
        maxH4x += 10
      }
      while (h4x < maxH4x) {
        for (let i=0; i<SIZE; i++) {
          t0[i] = 0
          t1[i] = 0
        }
        for (let i=1; i<SIZE-1; i++) {
          t0[0] = 0
          t1[0] = 0
          for (let j=1; j<SIZE-1; j++) {
            p0 = arr[i][j][0]
            p1 = arr[i][j][1]
            arr[i][j][0] += 1 / SIZE * 0.001 * (arr[i+1][j][1] - 2*p1 + t1[j] + arr[i][j+1][1] - 2*p1 + t1[j-1]) - 0.0000001 * (j - (SIZE - 1)/2) * (j - (SIZE - 1)/2) * (i - (SIZE - 1)/2) * (i - (SIZE - 1)/2) * p1
            arr[i][j][1] -= 1 / SIZE * 0.001 * (arr[i+1][j][0] - 2*p0 + t0[j] + arr[i][j+1][0] - 2*p0 + t0[j-1]) - 0.0000001 * (j - (SIZE - 1)/2) * (j - (SIZE - 1)/2) * (i - (SIZE - 1)/2) * (i - (SIZE - 1)/2) * p0
            t0[j] = p0
            t1[j] = p1
          }
        }
        h4x++
      }
      if (!isRendering) {
        isRendering = true
        requestAnimationFrame(render)
      }
      setTimeout(update, 0)
    }
    update()
  }

  render () {
    return <canvas
      ref={this.bindCanvas}
      width='830'
      height='500px'
      style={{
        'display': 'block',
        position: 'absolute',
        top: '-300px',
        left: 'calc(50% - 415px)'
      }}
    />
  }
}
