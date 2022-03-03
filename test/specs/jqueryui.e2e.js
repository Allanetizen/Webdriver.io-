

describe("JQuery Ui page",function(){
    it("should click on disabled link", function(){
        browser.getUrl('/jqueryui/menu')
        //disabled link
        const disabledLink =$('a=Disabled')
        //click
        disabledLink.click()
        //assertion
        expect(disabledLink).not.toBeClickable()

    })
    it("should click on enabled link", function(){

        browser.getUrl('/jqueryui/menu')

        //enabled link
        const enabledLink =$('a=Enabled')

        //link hovered to
        const pdfLink =$('a=PDF')
        
        browser.elementHover(pdfLink)

        //click
        enabledLink.click()
        
        //assertions
        expect(enabledLink).toBeClickable()
        expect(enabledLink).toHaveTextContaining(
            "Enabled");


    })
})