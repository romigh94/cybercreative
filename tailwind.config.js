module.exports = {
  content: [
    './src/**/*.vue',
    './src/**/*.js',
  ],
  theme: {
    extend: {
      transitionDuration: {
        '2000': '2000ms',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
    },
    transitionTimingFunction: {
      'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
      'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
    },
    transitionDelay: {
      '2000': '2000ms',
    },
    scale: {
      '175': '1.75',
    }
  },
  plugins: [],
}
}


/*
module.exports = {
  theme: {
    extend: {
      transitionDuration: {
        '2000': '2000ms',
      }
    }
  }
}
*/