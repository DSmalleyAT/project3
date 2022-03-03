const DomPage = require('../pageobjects/challenging_dom.page');

describe('My DOM-Challenging application', () => {
    it('should have a link to Elemental Selenium', async () => {
        await DomPage.open();

        await expect(DomPage.FullLink).toBeExisting();
        await expect(DomPage.PartialLink).toBeExisting();
    });
    it('should have an entry called Apeiriran0', async () => {
        await DomPage.open();

        await expect(DomPage.Apeirian0).toBeExisting();
        await expect(DomPage.Apeirian0).toHaveTextContaining(
            "Apeirian0");
    });
});


