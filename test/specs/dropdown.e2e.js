describe('show the drop down items', function () {
    it("show the dropdown option 2", () => {

      browser.url('/dropdown')
        
        //dropDown.
        const drp = $('#dropdown');

        drp.click()

        //select using value att
                
        // const optOne = drp.selectByAttribute('value', '1');

        const optTwo = drp.selectByAttribute('value', '1');

        

        //click option 2
        optTwo.click()


        //get value for option2

        const value = optTwo.getValue()

        //assert option 2
        expect(value).toHaveValueContaining('Option 2')

        

      

      });
    
})

