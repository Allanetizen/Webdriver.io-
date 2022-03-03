
describe("Geolocation", () => {
    it("should locate me", () => {
        browser.url('/geolocation')
        const btnLocate = $('button');

         //click button 
        btnLocate.click();

        //location
        const location =$('#demo');

        //latitude value
        const latitude =$('#lat-value')

        //longitude value
        const longitude =$('#long-value')

        //map link
        const mapLink =$('a=See it on Google')
      
        //Assertion
       expect(btnLocate).toBeClickable()

         //click button 
       btnLocate.click();

        //assertion for map link 
       expect(mapLink).toBeClickable()

       //click map link
       mapLink.click()
       
       //assertion for location
       expect(btnLocate).toHaveValueContaining(location)
       
       expect(btnLocate).toHaveValueContaining("Google")
        //display both coordinates
       expect(latitude).toBeDisplayed()
       expect(longitude).toBeDisplayed()
        
      });
});