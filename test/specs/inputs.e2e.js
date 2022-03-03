

describe('input  page', ()=> {
    it('test input field',()=>{
        browser.url('/inputs')
        const inputField = $('input')
        //set input value
        inputField.setValue('123');
        //output the value in log
       
        //Assertion
       expect(inputField).toBeExisting()
       expect(inputField).toHaveValueContaining('123')
      //log the value in the console
       console.log(inputField.getValue())




    })
})