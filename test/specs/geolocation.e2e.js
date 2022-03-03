
describe("Geolocation", () => {
    it("should locate me", () => {
        browser.url('/geolocation')
        const btnLocate = $('button');
        //location
        const location =$('#demo');
        //latitude value
        const latitude =$('#lat-value')
        //longitude value
        const longitude =$('#long-value')
        //map link
        const mapLink =$('a=See it on Google')
        //click map link
        mapLink.click()

        
        //click button 
        btnLocate.click();
        //Assertion
       expect(btnLocate).toBeClickable()

       expect(mapLink).toBeClickable()
       //assertion for location
       expect(btnLocate).toHaveValueContaining(location)
       //assertion for map link 
       expect(btnLocate).toHaveValueContaining("Google")
        //display both coordinates
       expect(latitude).toBeDisplayed()
       expect(longitude).toBeDisplayed()
        
      });
});