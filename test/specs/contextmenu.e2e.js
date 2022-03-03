
describe('show the context menu alert', function () {
    it("show alert", () => {

        browser.url('/context_menu')

        const showContext = $("#hot-spot");
        
        //dropDown.
        expect(showContext).toBeExisting();
      });
    
})