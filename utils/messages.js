const generateNote = (text) => {
  return {
    text,
    createdAt: new Date().getTime()
  };
};

module.exports = {
  generateNote
};