module.exports = {

  // "Verify About us tab" : function (browser) {
  //   browser
  //     .url("https://superqa.herokuapp.com/")
  //     .waitForElementVisible ('body', 1000)
  //     .click('.aboutus-tab')
  //     .pause (1000)
  //     .verify.urlEquals("https://superqa.herokuapp.com/aboutus")
  //     .end();
  // },
  //
  // "Verify Courses tab" : function (browser) {
  //   browser
  //     .url("https://superqa.herokuapp.com/")
  //     .waitForElementVisible ('body', 1000)
  //     .click('.courses-tab')
  //     .pause (1000)
  //     .verify.urlEquals("https://superqa.herokuapp.com/courses")
  //     .end();
  // },
  // "Verify Staff tab" : function (browser) {
  //   browser
  //     .url("https://superqa.herokuapp.com/")
  //     .waitForElementVisible ('body', 1000)
  //     .click('.staff-tab')
  //     .pause (1000)
  //     .verify.urlEquals("https://superqa.herokuapp.com/staff")
  //     .end();
  // },
  // "Verify login modal" : function (browser) {
  //   browser
  //     .url("https://superqa.herokuapp.com/")
  //     .waitForElementVisible ('body', 1000)
  //     .click('.login')
  //     .pause (1000)
  //     .verify.elementPresent(".loginForm")
  //     .end();
  // },
  // "Verify Register modal" : function (browser) {
  //   browser
  //     .url("https://superqa.herokuapp.com/")
  //     .waitForElementVisible ('body', 1000)
  //     .click('.register')
  //     .pause (1000)
  //     .verify.elementPresent(".registrationForm")
  //     .end();
  // },

  // "Super QA login Modal" : function (browser) {
  //   browser
  //     .url("https://superqa.herokuapp.com/")
  //     .waitForElementVisible ('body', 1000)
  //     .click('a[class="recruter login"]')
  //      // open the login
  //     .pause (1000)
  //     .waitForElementVisible ('div[class="loginForm"]', 1000)
  //     .assert.elementPresent("form")
  //     .assert.elementPresent(".login-field")
  //     .assert.elementPresent('input[name=email]')
  //     .assert.elementPresent('input[name=password]')
  //     .assert.elementPresent(".button")
  //     .assert.containsText(".loginForm", "Forget password")
  //     .click('a[class="recruter login"]')
  //     .end();
  // },

  "Regester A student" : function (browser) {
  browser
   .url("https://superqa.herokuapp.com/")
   .waitForElementVisible('body', 1000)
   .click('.login')
   .pause(1000)
   .verify.elementPresent('.loginForm')
   .setValue('input[name=email]', 'alem2alem@aol.com')
   .setValue('input[type=password]', '@password')
   .click('input[type=submit]')
   .pause(1000)
   .click(".accounts-tab")
   .pause(1000)
   .click(".newAccountButton")
   .pause(1000)
   .setValue('input[name=cohort]', 'Cohort 2002')
   .setValue("input[name=startDate]", '02/02/2015')
   .setValue("input[name=endDate]", '02/02/2016')
   .setValue("input[name=amount]", '2000')
   .click('.addAccount')
   .pause(1000)
   .verify.containsText(".top li:nth-child(1) .mainLine a", "Cohort 2002")
   .verify.containsText(".rightSideBar .cohortMenu", "Cohort 2002")
   //.jqueryClick(".rightSideBar .cohortMenu li:contains('Jimmy') .removeAccount")
   //.acceptAlert()
   //.end()
  }
};
