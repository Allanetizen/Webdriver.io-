describe("main page", function(){
    it("display links ", () => {
        browser.url('/')
        const linkList = $("#content");
        //assertion
        expect(linkList).toBeDisplayed();
      });  
})