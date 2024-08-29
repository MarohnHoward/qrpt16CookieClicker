import { By } from "selenium-webdriver";
import { BasePage } from "./basePage";

export class cookieClicker extends BasePage {
    engBtn: By = By.id('langSelect-EN'); 
    cookieBtn: By = By.id('bigCookie'); 
    xBtn: By = By.id('topbarTwitter'); 
    legacy: By = By.xpath('//div[text()= "Legacy"]'); 
    ascend: By = By.xpath('//a[text()= "Ascend"]'); 
    reIN: By = By.xpath('//span[text()= "Reincarnate"]'); 
    yesBtn: By = By.xpath('//a[text()= "Yes"]'); 

    constructor() {
        super({url: "https://orteil.dashnet.org/cookieclicker/"}); 
    }; 

    async repeat(clickAmount: number, clickThing: By) {
        for(let i = 0; i < clickAmount; i ++){
            await this.click(clickThing); 
        }; 
    }; 
    async tabSwitch() {
        let myTabs = await this.driver.getAllWindowHandles(); 
        await this.driver.switchTo().window(myTabs[1]);
        await this.driver.sleep(1000); 
        await this.driver.close(); 
        await this.driver.switchTo().window(myTabs[0]); 
    }; 
}