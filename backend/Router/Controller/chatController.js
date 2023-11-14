const allchat = (req, res) => {
  res.send("Api is running");
};
const chatIndividual = (req, res) => {
  res.send("This is individual");
};

module.exports = { allchat, chatIndividual };
