const NotificationPage = require("../pageobjects/notification.page")

describe("Notification Message page test", () => {
    it("should display notification", () => {
        browser.url('/notification_message_rendered')
    
        expect(NotificationPage.msgLink).toBeExisting();
        expect(NotificationPage.notifyMsg).toHaveTextContaining("Action successful ");




    });
});