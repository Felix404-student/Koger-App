import { browser, element, by, ExpectedConditions } from 'protractor';

//Behavioral Test that clicks through each tab and verifies that it is properly named
describe('tabs', () => {

  // Begins on home page
  beforeEach(() => {
    browser.get("/");
  });

  //Begins on Tab 0 and checks title
  it('Tab 0 should be named Home', () => {
    expect(element(by.css(".tab-selected ion-label")).getText()).toContain("Home"); 
  });

  //Begins from Tab 0 clicks tab 1 and checks title
  it('User can navigate to Tab 1 and it should be named Find Seats', async () => {
    await element(by.css("[tab=tab1]")).click();

    browser.driver.sleep(500);
    expect(element(by.css(".tab-selected ion-label")).getText()).toContain("Find Seats");
  });

  //Begins from Tab 0 clicks tab 2 and checks title
  it('User can navigate to Tab 2 and it should be named Maps', async () => {
    await element(by.css("[tab=tab2]")).click();

    browser.driver.sleep(500);
    expect(element(by.css(".tab-selected ion-label")).getText()).toContain("Maps");
  })

  //Begins from Tab 0 clicks tab 3 and checks title
  it('User can navigate to Tab 3 and it should be name Info', async () => {
    await element(by.css("[tab=tab3]")).click();

    browser.driver.sleep(500);
    expect(element(by.css(".tab-selected ion-label")).getText()).toContain("Info");
  })
});
