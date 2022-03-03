describe('Dynamic content page', ()=> {
    it('test avatar',()=>{
        browser.url('/dynamic_content')

        const viewAvatar = $('role=img')
        
        //display avatar
        expect(viewAvatar).toBeDisplayed()




    })
})