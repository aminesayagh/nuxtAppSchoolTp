// webpack.config.js

module.exports = {
    module: {
      rules: [
        {
          test: /\.s(c|a)ss$/,
          use: [
            'vue-style-loader',
            'css-loader',
            {
              loader: 'sass-loader',
              // Requires sass-loader@^7.0.0
              options: {
                implementation: require('sass'),
                indentedSyntax: true, // optional
                // This is the path to your variables
                data: "@import '@/styles/variables.scss'"
              },
              // Requires sass-loader@^8.0.0
              options: {
                implementation: require('sass'),
                sassOptions: {
                  indentedSyntax: true // optional
                },
                // This is the path to your variables
                prependData: "@import '@/styles/variables.scss'",
                additionalData: "@import '@/styles/variables.scss'"
              },
            },
          ],
        },
      ],
    }
  }