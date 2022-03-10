const CheckboxPage = require('../pageobjects/checkbox.page');

describe('checkboxes', function () {




    it('checkbox 1 should be enabled', function () {

        CheckboxPage.open()

        expect(CheckboxPage.firstCheckbox).toBeSelected()

        CheckboxPage.firstCheckbox.click()

        expect(CheckboxPage.firstCheckbox).not.toBeSelected()
    })
    it('checkbox 2 should be enabled', function () {

        CheckboxPage.open()

        expect(CheckboxPage.firstCheckbox).not.toBeSelected()
        
        expect(CheckboxPage.lastCheckbox).toBeSelected()
    })

    it('check all checkboxes', function () {

        CheckboxPage.open()

        expect(CheckboxPage.firstCheckbox).toBeSelected()

        CheckboxPage.firstCheckbox.click()

        expect(CheckboxPage.firstCheckbox).toBeSelected()
    })
    it('uncheck all checkboxes', function () {

        CheckboxPage.open()

        expect(CheckboxPage.firstCheckbox).not.toBeSelected()

        CheckboxPage.firstCheckbox.click()

        expect(CheckboxPage.firstCheckbox).not.toBeSelected()
    })
})