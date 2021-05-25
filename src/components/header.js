/** @jsx jsx */
import { jsx } from 'theme-ui'

export default props =>
  <header
    {...props}
    sx={{
      position: 'absolute',
      zIndex: 1,
      top: 3,
      right: 3,
      pointerEvents: 'none',
        variant: 'styles.Header',
        width: '100%'
    }}
  />
