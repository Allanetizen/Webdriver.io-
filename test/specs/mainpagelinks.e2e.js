describe("main page", function(){
    it("check no of links ", () => {

        //list of links
        const listItems = $$('ul li')
        
        //assertion
        expect(listItems).toBeElementsArrayOfSize(44)
        
        
      });  
})