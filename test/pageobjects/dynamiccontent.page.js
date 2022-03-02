import Page from './page'


class DynamicPage extends Page {
    //all selectors for dynamic content  page
    get image () { return $('role=img')}
    get dynamicParagraph () {return $('<p/>')}
    get link (){return $('role=link')}

    

}
export default new DynamicPage()