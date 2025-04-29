import { Locator, Page } from "@playwright/test";

export class registrationPage{

    readonly page: Page
    readonly useremailTxtBox: Locator
    readonly emailSubmitBtn: Locator

    constructor(page: Page){
        this.page = page
        this.useremailTxtBox = page.locator('[name="emailid"]')
        this.emailSubmitBtn = page.locator('[name = "btnLogin"]')
    }

    async openApplication(){
        await this.page.goto('https://demo.guru99.com/')
            //this.test.setTimeout(50000)
    }
    async userRegistration(userEmail: string){
        await this.useremailTxtBox.fill(userEmail)
        await this.emailSubmitBtn.click()
    }
}