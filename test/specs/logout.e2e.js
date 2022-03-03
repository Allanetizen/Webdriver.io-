const LoginPage = require("../pageobjects/login.page");
const SecurePage = require("../pageobjects/secure.page");

describe("Logout from login", () => {
    it("should log out and verify alert message", () => {

        const btnLogout = $('a[href="/logout"]');

        const flashAlert = $("#flash");

        //click button logout
        btnLogout.click();
        
        //ASSERTION
        expect(flashAlert).toHaveTextContaining(
          "You logged out of the secure area!"
        );
      });
});