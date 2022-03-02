describe("Geolocation", () => {
    it("should locate me", () => {
        browser.url('/geolocation')
        const btnLocate = $('button');
        
        //click button 
        btnLocate.click();
        
      });
});