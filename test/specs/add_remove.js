
const LoginPage = require("../pageobjects/login.page");
const SecurePage = require("../pageobjects/secure.page");
describe('Add and delete elements', function () {
    it('should add elements', function () {
       //go to link 
       browser.url('./add_remove_elements')
       //button for adding element
       const btnAdd=  $('#elements')
       //click add button
       btnAdd.click();
    });
    it('should delete elements', function () {
        //go to link 
        browser.url('./add_remove_elements')
        //button for deleting an element
        const btnDelete=  $('.added-manually')
        //click delete button
        btnDelete.click();
     });
});