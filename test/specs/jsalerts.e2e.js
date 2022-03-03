describe("Javascript alerts", () => {
  it("should test alert", () => {
    browser.url("/javascript_alerts");
    const btnAlert = $("button=Click for JS Alert");
    //result
    const resultText = $("#result");

    //click button
    btnAlert.click();
    //start alert
    browser.execute('window.alert()');
    //get alert
    expect(browser.getAlertText()).toHaveTextContaining('I am a JS Confirm');

    //Assertion
    expect(btnAlert).toBeClickable();
    expect(resultText).toHaveTextContaining(
      "You successfully clicked an alert"
    );

    expect()





  });
  it("should test confirm", () => {
    browser.url("/javascript_alerts");
    const btnConfirm = $("button=Click for JS Confirm");
    //result
    const resultText = $("#result");

    //click button
    btnConfirm.click();
    //start alert
    browser.execute('window.alert()');
    //get alert
    browser.getAlertText();
    //Assertion
    expect(btnConfirm).toBeClickable();
    expect(resultText).toHaveTextContaining("You clicked: Ok");
  });
  it("should test prompt", () => {
    browser.url("/javascript_alerts");
    const btnPrompt = $("button=Click for JS Prompt");
    //result
    const resultText = $("#result");

    //click button
    btnPrompt.click();
    //start alert
    browser.execute('window.alert()');
    //get alert text
    browser.getAlertText();
    //Assertion
    expect(btnPrompt).toBeClickable();
    expect(resultText).toHaveAttr('id')
    


  });
});
