import { browser, element, by} from 'protractor';

// Basic page object class, however, its not utilized currently
// Will be utilized for future behavioral test
export class AdminLoginPageObject {
    navigateTo() {
        return browser.get('/admin-login');
    }
    
    getAdminPageTitle() {
        return element(by.css('#admin-title')).getText();
    }

    loginSuccessAdminPage() {
        let username = "jgeneacree@gmail.com";
        let password = "123456";
        var username_input = element(by.css('ion-input[formControlName="email"] input'));
        var password_input = element(by.css('ion-input[formControlName="password"] input'));
        var button = element(by.css('.submit-btn'));
        username_input.sendKeys(username);
        password_input.sendKeys(password);
        button.click();
        return;
    }

    loginUnsuccessfulAdminPage() {
        let username = "jgacree@gmail.com";
        let password = "123456";
        var username_input = element(by.css('ion-input[formControlName="email"] input'));
        var password_input = element(by.css('ion-input[formControlName="password"] input'));
        return element(by.css(".error-message")).isDisplayed();
    }
}