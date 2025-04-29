import { Locator, Page } from "@playwright/test";

export class deleteCustomerPage{

    readonly page: Page
    readonly cusId2: Locator
    readonly cusDelReset2Btn: Locator
    readonly cusDelSubmitBtn: Locator

    constructor (page: Page){

        this.page = page
        this.cusId2 = page.locator('[name="cusid"]')
        this.cusDelReset2Btn = page.locator('[name="AccSubmit"]')
        this.cusDelReset2Btn = page.locator('[name = "res"]')
    }
    async resetDelCustomer(cusId2: string){
        await this.cusId2.fill(cusId2)
        await this.cusDelReset2Btn.click()

    }

    async submitDelCustomer(cusId2:string){
        await this.cusId2.fill(cusId2)
        await this.cusDelSubmitBtn.click()
    }
}