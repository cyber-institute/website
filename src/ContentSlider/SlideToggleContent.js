import React, { useRef } from 'react'

import styled from 'styled-components'
import { useTransition, animated } from 'react-spring'

const Inner = styled.div`
  &:before,
  &:after {
    content: "";
    display: table;
  }
`

const visibleStyle = { height: 'auto', opacity: 1, overflow: 'visible' }
const hiddenStyle = { opacity: 0, height: 0, overflow: 'hidden' }

function getElementHeight (ref) {
  return ref.current ? ref.current.getBoundingClientRect().height : 0
}

// https://medium.com/clever-franke/create-a-react-slidetoggle-component-with-hooks-and-react-spring-748919c38667
/** The children of this component will slide down on mount and will slide up on unmount */
const SlideToggleContent = ({ isVisible, children, forceSlideIn }) => {
  const isVisibleOnMount = useRef(isVisible && !forceSlideIn)
  const containerRef = useRef(null)
  const innerRef = useRef(null)

  const transitions = useTransition(isVisible, null, {
    enter: () => async (next, cancel) => {
      const height = getElementHeight(innerRef)

      cancel()

      await next({ height, opacity: 1, overflow: 'hidden' })
      await next(visibleStyle)
    },
    leave: () => async (next, cancel) => {
      const height = getElementHeight(containerRef)

      cancel()

      await next({ height, overflow: 'hidden' })
      await next(hiddenStyle)

      isVisibleOnMount.current = false
    },
    from: isVisibleOnMount.current ? visibleStyle : hiddenStyle,
    unique: true
  })

  return transitions.map(({ item: show, props: springProps, key }) => {
    if (show) {
      return (
        <animated.div ref={containerRef} key={key} style={springProps}>
          <Inner ref={innerRef}>{children}</Inner>
        </animated.div>
      )
    }

    return null
  })
}

SlideToggleContent.defaultProps = {
  forceSlideIn: false
}

export default SlideToggleContent