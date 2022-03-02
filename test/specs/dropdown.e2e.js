
describe('show the drop down items', function () {
    it("show the dropdown list text", () => {
        const dropDown = $("#dropdown");
        //dropDown.
        expect(dropDown).toHaveTextContaining("Dropdown List");
      });
    
})