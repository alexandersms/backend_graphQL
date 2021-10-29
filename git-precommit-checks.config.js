module.exports = {
  rules: [
    {
      regex: /console.log/,
      message: "Tu as laissé un console.log",
    },
    {
      filter: /\.(js|vue)$/,
      regex: /(?:FIXME|TODO)/i,
      message: "Tu as du travail non terminé",
      nonBlocking: true,
    },
    {
      regex: /do not commit/i,
      message: "Tu as du travail qui ne dois pas être commité",
    },
  ],
};
