import { browser, element, by} from 'protractor';

export class AdminDashboardPageObject {

    navigateTo() {
        return browser.get('/admin-dashboard');
    }

    getAdminPageTitle() {
        return element(by.css('#admin-dashboard-title')).getText();
    }

    //Clicks add event button
    clickAddAnEvent() {
        var create_event_btn = element(by.css('#create-event-btn'));
        create_event_btn.click();
    }

    //Clicks edit event button
    clickEditAnEvent(){
        var edit_event_btn = element(by.css('#edit-event-btn'));
        edit_event_btn.click();
    }

    //Clicks send push notification button
    clickSendPushNotifications(){
        var send_push_notifications_btn = element(by.css('#send-push-notifications-btn'));
        send_push_notifications_btn.click();
    }

    //Clicks log out button
    clickLogOut(){
        var log_out_btn = element(by.css('#log-out-btn'));
        log_out_btn.click();
    }
}