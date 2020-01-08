import React from 'react'

import Canvas from './Canvas'

const SIZE = 25
let lastRenderTimestamp = null
let mspf = null

export default class Animation extends React.Component {
  constructor (props) {
    super(props)

    // Initial state
    const arr = []
    for (let i = 0; i < SIZE; i++) {
      arr[i] = []
      for (let j = 0; j < SIZE; j++) {
        const g = Math.exp(-0.8 * ((i - 0.5 * (SIZE - 1)) * (i - 0.5 * (SIZE - 1)) + (j - 0.5 * (SIZE - 1)) * (j - 0.5 * (SIZE - 1))))
        arr[i][j] = [50 * g, 0]
      }
    }

    for (let k = 0; k < SIZE; k++) {
      arr[k][0] = [0, 0]
      arr[k][SIZE - 1] = [0, 0]
      arr[0][k] = [0, 0]
      arr[SIZE - 1][k] = [0, 0]
    }

    this.state = {
      maxH4x: 1200,
      t0: new Array(SIZE),
      t1: new Array(SIZE),
      arr
    }

    this.updateAnimationState = this.updateAnimationState.bind(this)
  }

  componentDidMount () {
    this.rAF = requestAnimationFrame(this.updateAnimationState)
  }

  updateAnimationState (timestamp) {
    if (lastRenderTimestamp) {
      mspf = timestamp - lastRenderTimestamp
    }
    lastRenderTimestamp = timestamp

    let { arr, t0, t1, maxH4x } = this.state
    let p0 = 0
    let p1 = 0
    let h4x = 0
    if (mspf > 20) {
      maxH4x = Math.max(maxH4x - 10, 10)
    } else if (mspf < 17) {
      maxH4x += 10
    }
    while (h4x < maxH4x) {
      for (let i = 0; i < SIZE; i++) {
        t0[i] = 0
        t1[i] = 0
      }
      for (let i = 1; i < SIZE - 1; i++) {
        t0[0] = 0
        t1[0] = 0
        for (let j = 1; j < SIZE - 1; j++) {
          p0 = arr[i][j][0]
          p1 = arr[i][j][1]
          arr[i][j][0] += 1 / SIZE * 0.001 * (arr[i + 1][j][1] - 2 * p1 + t1[j] + arr[i][j + 1][1] - 2 * p1 + t1[j - 1]) - 0.0000001 * (j - (SIZE - 1) / 2) * (j - (SIZE - 1) / 2) * (i - (SIZE - 1) / 2) * (i - (SIZE - 1) / 2) * p1
          arr[i][j][1] -= 1 / SIZE * 0.001 * (arr[i + 1][j][0] - 2 * p0 + t0[j] + arr[i][j + 1][0] - 2 * p0 + t0[j - 1]) - 0.0000001 * (j - (SIZE - 1) / 2) * (j - (SIZE - 1) / 2) * (i - (SIZE - 1) / 2) * (i - (SIZE - 1) / 2) * p0
          t0[j] = p0
          t1[j] = p1
        }
      }
      h4x++
    }
    this.setState({
      arr,
      t0,
      t1,
      maxH4x
    })
    this.rAF = requestAnimationFrame(this.updateAnimationState)
  }

  componentWillUnmount () {
    cancelAnimationFrame(this.rAF)
  }

  render () {
    return <Canvas arr={this.state.arr} />
  }
}
