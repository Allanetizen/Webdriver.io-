describe("Javascript alerts", () => {
    it("should test alert", () => {
        browser.url('/javascript_alerts')
        const btnAlert = $('button=Click for JS Alert');
        
        //click button 
        btnAlert.click();
        
      });
      it("should test confirm", () => {
        browser.url('/javascript_alerts')
        const btnConfirm = $('button=Click for JS Confirm');
        
        //click button 
        btnConfirm.click();
        
      });
      it("should test prompt", () => {
        browser.url('/javascript_alerts')
        const btnPrompt = $('button=Click for JS Prompt');
        
        //click button 
        btnPrompt.click();
        
      });
});