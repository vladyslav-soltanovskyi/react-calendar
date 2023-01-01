module.exports = {
  presets: [
    ['@babel/preset-env', { targets: '> 1%', useBuiltIns: 'usage', corejs: 3 }],
    '@babel/preset-typescript',
    '@babel/preset-react',
  ],
  plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-transform-runtime'],
};
