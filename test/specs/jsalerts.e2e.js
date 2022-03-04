

describe("Javascript alerts", () => {
  it("should test alert", () => {
    browser.url("/javascript_alerts");
    const btnAlert = $("button=Click for JS Alert");
    //result
    const resultText = $("#result");
    const alertText = browser.getAlertText();
    //click button
    btnAlert.click();
    //start alert
    browser.execute("window.alert()");


    //get alert
    expect(alertText).toHaveTextContaining("I am a JS Alert");
    //click ok
    //Press the OK button
    browser.acceptAlert();
    //Assertion
    expect(btnAlert).toBeClickable();
    expect(resultText).toHaveTextContaining(
      "You successfully clicked an alert"
    );
  });
  it("should test confirm ok", () => {
    browser.url("/javascript_alerts");
    const btnConfirm = $("button=Click for JS Confirm");
    //result
    const resultText = $("#result");
    //Alert text
    const alertText = browser.getAlertText();
    //assert
    expect(btnConfirm).toBeClickable();
    //click button
    btnConfirm.click();
    //start alert
    expect(alertText).toHaveTextContaining("I am a JS Confirm");
    //accept alert
    browser.acceptAlert();
    //Assertion

    expect(resultText).toHaveTextContaining("You clicked: Ok");
  });
  it("should test confirm cancel", () => {
    browser.url("/javascript_alerts");
    const btnConfirm = $("button=Click for JS Confirm");
    //result
    const resultText = $("#result");
    //Alert text
    const alertText = browser.getAlertText();
    //assert
    expect(btnConfirm).toBeClickable();
    //click button
    btnConfirm.click();
    //start alert
    expect(alertText).toHaveTextContaining("I am a JS Confirm");
    //click cancel
    browser.dismissAlert();

    //Assertion

    expect(resultText).toHaveTextContaining("You clicked: Cancel");
  });
  it("should test prompt", () => {
    browser.url("/javascript_alerts");
    const btnPrompt = $("button=Click for JS Prompt");
    
    //Alert text
    const alertText = browser.getAlertText();
    //click button
    btnPrompt.click();

    //assert
    expect(alertText).toHaveTextContaining("I am a JS prompt");
    
      //result
    const resultText = $("#result");
    //start alert
    browser.execute("window.alert()");

    //enter text Yes
    browser.sendAlertText("Yes");
    //Press the OK button
    
    //accept alert
    browser.acceptAlert();

    //Assertion
    expect(btnPrompt).toBeClickable();
    expect(resultText).toHaveTextContaining('Yes')
    
  });
});
