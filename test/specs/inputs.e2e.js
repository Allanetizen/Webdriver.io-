describe('input  page', ()=> {
    it('test input field',()=>{
        browser.url('/inputs')
        const inputField = $('input')
        //set input value
        inputField.setValue('123');
        //output the value in log
        console.log(inputField.getValue())




    })
})