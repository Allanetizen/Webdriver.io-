describe("Javascript alerts", () => {
  it("should test alert", () => {
    browser.url("/javascript_alerts");
    const btnAlert = $("button=Click for JS Alert");
    //result
    const resultText = $("#result");

    //click button
    btnAlert.click();
    //get alert
    browser.getAlertText();

    //Assertion
    expect(btnAlert).toBeClickable();
    expect(resultText).toHaveTextContaining(
      "You successfully clicked an alert"
    );
  });
  it("should test confirm", () => {
    browser.url("/javascript_alerts");
    const btnConfirm = $("button=Click for JS Confirm");
    //result
    const resultText = $("#result");

    //click button
    btnConfirm.click();
    //get alert
    browser.getAlertText();
    //Assertion
    expect(btnConfirm).toBeClickable();
    expect(resultText).toHaveTextContaining("You clicked: Ok");
  });
  it("should test prompt", () => {
    browser.url("/javascript_alerts");
    const btnPrompt = $("button=Click for JS Prompt");

    //click button
    btnPrompt.click();
    //get alert
    browser.getAlertText();
    //Assertion
    expect(btnPrompt).toBeClickable();
  });
});
