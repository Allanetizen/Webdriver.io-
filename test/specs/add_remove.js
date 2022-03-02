
describe('Add and delete elements', function () {
    it('should add elements', function () {
       //go to link 
       browser.url('/add_remove_elements/')
       //button for adding element
       const btnAdd=  $('button=Add Element')
       //click add button
       btnAdd.click();
    });
    it('should delete elements', function () {
        //go to link 
        browser.url('/add_remove_elements')
        //button for deleting an element
        const btnDelete=  $('button=Delete')
        //click delete button
        btnDelete.click();
     });
});