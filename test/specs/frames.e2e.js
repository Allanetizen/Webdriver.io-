

describe("frames page", function(){
    it("link to nested frame", function(){

        //link to frames page
        browser.getUrl("/frames")

        //link to frames 
        const frmLink =$("a=Nested Frames")

        //click link
        frmLink.click()
        
        //assertion
        expect(frmLink).toHaveUrlContaining('Frames')


    })
})