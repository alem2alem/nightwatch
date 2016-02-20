module.exports = {

  "Verify About us tab" : function (browser) {
    browser
      .url("https://superqa.herokuapp.com/")
      .waitForElementVisible ('body', 1000)
      .click('.aboutus-tab')
      .pause (1000)
      .verify.urlEquals("https://superqa.herokuapp.com/aboutus")
      .end();
  },

  "Verify Courses tab" : function (browser) {
    browser
      .url("https://superqa.herokuapp.com/")
      .waitForElementVisible ('body', 1000)
      .click('.courses-tab')
      .pause (1000)
      .verify.urlEquals("https://superqa.herokuapp.com/courses")
      .end();
  },
  "Verify Staff tab" : function (browser) {
    browser
      .url("https://superqa.herokuapp.com/")
      .waitForElementVisible ('body', 1000)
      .click('.staff-tab')
      .pause (1000)
      .verify.urlEquals("https://superqa.herokuapp.com/staff")
      .end();
  },
  "Verify login modal" : function (browser) {
    browser
      .url("https://superqa.herokuapp.com/")
      .waitForElementVisible ('body', 1000)
      .click('.login')
      .pause (1000)
      .verify.elementPresent(".loginForm")
      .end();
  },
  "Verify Register modal" : function (browser) {
    browser
      .url("https://superqa.herokuapp.com/")
      .waitForElementVisible ('body', 1000)
      .click('.register')
      .pause (1000)
      .verify.elementPresent(".registrationForm")
      .end();
  }
};

// orginal code from dani //
/*
module.exports = {

  "Super QA login Modal" : function (browser) {
    browser
      .url("https://superqa.herokuapp.com/")
      .waitForElementVisible ('body', 1000)
      .click('a[class="recruter login"]')
       // open the login
      .pause (1000)
      .waitForElementVisible ('div[class="loginForm"]', 1000)
      .assert.elementPresent("form")
      .assert.elementPresent(".login-field")
      .assert.elementPresent('input[name=email]')
      .assert.elementPresent('input[name=password]')
      .assert.elementPresent(".button")
      .assert.containsText(".loginForm", "Forget password")
      .click('a[class="recruter login"]')
      .end();
  }
};
*/
