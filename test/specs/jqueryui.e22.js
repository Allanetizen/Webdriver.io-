

describe("JQuery Ui page",function(){
    it("should click on disabled link", function(){
        //disabled link
        const disabledLink =$('a=Disabled')
        //click
        disabledLink.click()
        //assertion
        expect(disabledLink).not.toBeClickable()

    })
    it("should click on enabled link", function(){
        //enabled link
        const enabledLink =$('a=Enabled')
        //click
        enabledLink.click()
        //assertions
        expect(enabledLink).toBeClickable()
        expect(enabledLink).toHaveTextContaining(
            "Enabled");

    })
})