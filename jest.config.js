require('@babel/register')({
    // Опции Babel, если требуется
});
  
module.exports = {
    // Остальные настройки Jest
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
};
  