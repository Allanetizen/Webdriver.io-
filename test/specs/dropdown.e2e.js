
describe('show the drop down items', function () {
    it("show the dropdown list text", () => {
        
        //dropDown.
        const selectBox = $('#dropdown');
        console.log(selectBox.getText()); // returns "someValue0"
        selectBox.selectByIndex(0);
        console.log(selectBox.getText())
        expect(selectBox).toHaveTextContaining("Dropdown List");
      });
    
})