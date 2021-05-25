/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

export const SplitImage = ({ children, ...props }) => {
  const [first, ...rest] = React.Children.toArray(children)
  return (
    <div
      {...props}
      sx={{
        display: 'flex',
          alignItems: 'center',
          height: '80%',
          width: '100%',
        textAlign: 'left',
      }}>
          <div sx={{ width: '50%', display: 'flex','justify-content':"center" }}>{first}</div>
          <div sx={{ width: '50%', height: '100%', display: 'flex','justify-content':"center" }}>{rest}</div>
    </div>
  )
}

export default SplitImage
