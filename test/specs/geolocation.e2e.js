
describe("Geolocation", () => {
    it("should locate me", () => {
        browser.url('/geolocation')
        const btnLocate = $('button');
        //location
        const location =$('#demo');

        
        //click button 
        btnLocate.click();
        //Assertion
    //    expect(btnLocate).toBeClickable()
       //assertion for location
       expect(btnLocate).toHaveValueContaining(location)
        
      });
});