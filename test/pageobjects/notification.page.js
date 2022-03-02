const Page = require('./page');
class NotificationPage extends Page{

get msgLink (){ return $('a[href="/notification_message"]')}
get notifyMsg (){return $("#flash")}
}
module.exports= new NotificationPage()
