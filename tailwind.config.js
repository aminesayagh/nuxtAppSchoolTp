module.exports = {
    purge: [],
    prefix: 'sc-',// prefixe generer pour tout les class tailwind
    darkMode: false, // or 'media' or 'class'
    // conception réactive : https://tailwindcss.com/docs/responsive-design
    theme: {
      colors: {
        transparent: 'transparent',
        // https://colors.dopely.top/palette/ycp4ji
        blue: {
          1: '#125488',
          op1: {
            2: '#3E749E',
            3: '#5484A9',
            4: '#6A94B4',
            5: '#80A4BF',
            6: '#96B4CA',
            7: '#ACC4D5',
            8: '#C2D4E0',
            9: '#D8E4EB',
            10: '#EEF4F6'
          },
          2: '#2A93D5',
          op2: {
            2: '#50A7DD',
            3: '#63B1E1',
            4: '#76BBE5',
            5: '#89C5E9',
            6: '#9CCFED',
            7: '#AFD9F1',
            8: '#C2E3F5',
            9: '#D5EDF9',
            10: '#E8F7FD'
          },
          3: '#37CAEC',
          op3: {
            2: '#5BD4F0',
            3: '#6DD9F2',
            4: '#7FDEF4',
            5: '#91E3F6',
            6: '#A3E8F8',
            7: '#B5EDFA',
            8: '#C7F2FC',
            9: '#D9F7FE',
            10: '#EBFC100'
          },
          4: '#3DD9D6',
          op4: {
            2: '#61DFDE',
            3: '#73E2E2',
            4: '#85E5E6',
            5: '#97E8EA',
            6: '#A9EBEE',
            7: '#BBEEF2',
            8: '#CDF1F6',
            9: '#DFF4FA',
            10: '#F1F7FE'
          },
          5: '#ADD9D8',
          op5: {
            2: '#BBDFE0',
            3: '#C2E2E4',
            4: '#C9E5E8',
            5: '#D0E8EC',
            6: '#D7EBF0',
            7: '#DEEEF4',
            8: '#E5F1F8',
            9: '#ECF4FC',
            10: '#F3F7100'
          },
        },
        // https://colors.dopely.top/palette/xcb2hk/
        gray: {
          1: '#050506',
          2: '#333334',
          3: '#4A4A4B',
          4: '#616162',
          5: '#787879',
          6: '#8F8F90',
          7: '#BDBDBE',
          8: '#D4D4D5',
          9: '#EEEEEF',
          10: '#FFFFFF'
        }
      },
      fontFamily: {
        'sans': ['roboto'],
        'serif': ['roboto-condonced'],
        'mono': [],
      },
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
        normal:'0',
        wide: '.025em',
        wider: '.05em',
        widest: '.25em',
      },
      width: {
        '1/16': '6.25%',
        '2/16': '12.5%',
        '3/16': '18.7%',
        '4/16': '25%',
        '5/16': '31.25%',
        '6/16': '37.5%',
        '7/16': '43.75%',
        '8/16': '50%',
        '9/16': '56.25%',
        '10/16': '62.5%',
        '11/16': '68.75%',
        '12/16': '75.5%',
        '13/16': '81.25%',
        '14/16': '87.5%',
        '15/16': '93.75%',
        '16/16': '100%',
        
        
  
      }
    },
    // Survol, mise au point et autres états : https://tailwindcss.com/docs/hover-focus-and-other-states
    variants: {
      extend: {
        scale: ['focus-within'],
        textDecoration: ['focus-visible'],
        letterSpacing: ['hover', 'focus'],
      },
      accessibility: ['responsive', 'focus-within', 'focus',],
    },
    // mode sombre
    // darkMode: 'class',
  }
  