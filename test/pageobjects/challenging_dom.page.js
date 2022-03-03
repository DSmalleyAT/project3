

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DomPage extends Page {
    /**
     * define selectors using getter methods
     */
    get FullLink() {
        return $('=Elemental Selenium');
    }

    get PartialLink() {
        return $('*=Selenium');
    }

    get Apeirian0() {
        return $('//tbody/tr[1]/td[2]');
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('challenging_dom');
    }
}

module.exports = new DomPage();
