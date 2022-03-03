
describe("forgot password page",function(){
    it("should retrieve password", function(){
        
       browser.getUrl('/forgot_password')

       //header
       const header = $('h1=Internal Server Error')

        //retrieve button
       const btnRetrieve =$("#form_submit")
       
       //setValue
       btnRetrieve.setValue('email@gmail.com')

       //assertion
       expect(header).toHaveTextContaining('Internal Server Error')


    })

});