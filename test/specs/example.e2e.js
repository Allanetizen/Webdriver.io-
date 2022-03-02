const LoginPage = require("../pageobjects/login.page");
const SecurePage = require("../pageobjects/secure.page");

describe("My Login application", () => {
  it("should login with valid credentials", () => {
    LoginPage.open();

    LoginPage.login("tomsmith", "SuperSecretPassword!");
    expect(SecurePage.flashAlert).toBeExisting();
    expect(SecurePage.flashAlert).toHaveTextContaining(
      "You logged into a secure area!"
    );
  });
  it("display links ", () => {
    const linkList = $("#content");

    expect(linkList).toBeDisplayed();
  });
  
  it("click check boxes", () => {
    const checkBox = $("#checkboxes");
    checkBox.click();
  });

  
});
