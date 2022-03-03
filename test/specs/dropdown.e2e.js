
describe('show the drop down items', function () {
    it("show the dropdown list text", () => {
        
        //dropDown.
        const selectBox = $('#dropdown');
        //list of options
        const list = $('select')
        //click dropdown

        selectBox.click()
        
        expect(selectBox).toHaveTextContaining("Dropdown List");
        //select to  have 3 options
        expect(list).toHaveChildren(3)
      });
    
})

