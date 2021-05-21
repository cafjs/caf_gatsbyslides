/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

export const SplitCode = ({ children, ...props }) => {
  const [first, ...rest] = React.Children.toArray(children)
  return (
    <div
      {...props}
      sx={{
        display: 'flex',
        alignItems: 'center',
          height: '100%',
          width: '100%',
        textAlign: 'center',
      }}>
      <div sx={{ width: '30%' }}>{first}</div>
      <div sx={{ width: '69%' }}>{rest}</div>
    </div>
  )
}

export default SplitCode
