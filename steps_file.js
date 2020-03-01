// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({

    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.
    loginPage: function (email, password) {
      this.amOnPage('/login')
      this.fillField('email', email);
      this.fillField('password', password);
      this.click('Login');
    }
  });
}
