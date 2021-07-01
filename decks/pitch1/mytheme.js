const blue = '#0af'

export default {
    breakpoints: ['40rem', '65rem','81rem'],
  googleFont: 'https://fonts.googleapis.com/css?family=Poppins:400,600',
  fonts: {
    body: '"Poppins", sans-serif',
  },
  fontWeights: {
    heading: 600,
    bold: 600,
  },
  colors: {
    text: '#fff',
    background: '#111',
    primary: blue,
    black: '#000',
  },
  text: {
    heading: {
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
    },
  },
  styles: {
    pre: {
      color: 'primary',
      bg: 'black',
    },
    code: {
        color: 'primary',
        fontSize: [12,14, 22,32]
    },
       h3: {
          textTransform: 'none',
      },
      h4: {
          textTransform: 'none',
      },
      h5: {
          textTransform: 'none',
      },
  },
}
