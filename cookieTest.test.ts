import { cookieClicker } from "./cookiePage";
const page = new cookieClicker(); 

test('can click the cookie', async () => {
    await page.navigate(); 
    await page.click(page.engBtn); 
    await page.driver.sleep(1000); 
    await page.click(page.cookieBtn); 
    await page.repeat(100, page.cookieBtn); 
    await page.click(page.xBtn)
    await page.tabSwitch(); 
    await page.repeat(100, page.cookieBtn); 
    await page.click(page.legacy); 
    await page.click(page.ascend); 
    await page.click(page.reIN); 
    await page.click(page.yesBtn); 
    await page.driver.sleep(1000); 
    await page.driver.quit()
})