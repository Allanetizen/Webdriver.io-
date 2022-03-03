

describe('input  page', ()=> {
    it('test input field',()=>{
        browser.url('/inputs')
        const inputField = $('input')
        //set input value
         //Assertion
       expect(inputField).toBeExisting()
       
        inputField.setValue('123');
        //output the value in log
       
       
       expect(inputField).toHaveValueContaining('123')
      //log the value in the console
       console.log(inputField.getValue())




    })
})