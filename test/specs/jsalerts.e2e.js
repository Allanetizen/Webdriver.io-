

describe("Javascript alerts", () => {
  it("should test alert", () => {
    browser.url("/javascript_alerts");
    const btnAlert = $("button=Click for JS Alert");
    //result
    const resultText = $("#result");

    //click button
    btnAlert.click();
    
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
    //Assertion
    expect(btnConfirm).toBeClickable();
  });
  it("should test prompt", () => {
    browser.url("/javascript_alerts");
    const btnPrompt = $("button=Click for JS Prompt");
    //result
    const resultText = $("#result");

    //click button
    btnPrompt.click();
    //Assertion
    expect(btnPrompt).toBeClickable();
  });
});
