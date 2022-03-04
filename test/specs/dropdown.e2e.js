


describe('show the drop down items', function () {
    it("show the dropdown option 2", () => {

      browser.url('/dropdown')
        
        //dropDown.
        const drp = $('#dropdown');
        const value = drp.getValue()

        //click the dropdown
        const list = $$("select option");
       list.forEach((element) => {
           element.click();
       });

        //select using index
                
        optOne=drp.selectByIndex(1)

        optTwo=drp.selectByIndex(2)

        drp.click()

        expect(value).toHaveValue('Option 2')


        
      //assertions
        
        expect(optOne).toHaveValueContaining(1)
        expect(optTwo).toHaveValueContaining(2)

        expect(optOne).toHaveTextContaining("Option 1")
        expect(optTwo).toHaveTextContaining("Option 2")
       

      });
    
})

