module.exports = {
    'Go To google': (browser) => {
        browser
            .init()
            .waitForElementVisible('body')
            .setValue('input[type=text]', browser.globals.searchTerm)
            .waitForElementVisible('button[name=btnG]')
            .click('button[name=btnG]')
            .pause(1000)
    },

    'Check movie name': (browser) => {
        browser
            .assert.containsText('#main', browser.globals.movieName)
    },

    after: (browser) => {
        browser.end();
    }
};
