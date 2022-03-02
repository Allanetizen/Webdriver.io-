import $ from "webdriverio/build/commands/browser/$";
const Page = require('./page');
class ContextMenu extends Page{

get boxClick(){return $('#hot-spot')}


}
 export default new ContextMenu