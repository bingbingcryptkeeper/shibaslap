// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)

// const debug = process.env.NODE_ENV !== 'production'

// module.exports = {
//   assetPrefix: !debug ? '/shibaslap/' : '',
// }

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["i.imgur.com"],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.pdf$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
    });
    return config;
  }
}
