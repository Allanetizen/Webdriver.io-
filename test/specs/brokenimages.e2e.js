

describe("Broken images page",function(){
    it("should test broken image", function(){
        browser.getUrl('/broken_images')
        //disabled link
        const imgOne =$('.img')
        //click
        imgOne.click()
        //assertion
        expect(imgOne).not.toBeDisplayed()

    })
    it("should test existing image", function(){

        browser.getUrl('/broken_images')

        //enabled link
        const imgTwo =$('.imgTwo')

        //click image
        imgTwo.click()

        //assert image 2 
        expect(imgTwo).toBeDisplayed()

       

    })
})