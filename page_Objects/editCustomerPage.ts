import { Locator, Page } from "@playwright/test";

export class editCustomerPage{

    readonly page: Page
    readonly cusId: Locator
    readonly cusEditReset2Btn: Locator
    readonly cusEditSubmitBtn: Locator

    constructor (page: Page){
        this.page = page
        this.cusId = page.locator('[name="cusid"]')
        this.cusEditReset2Btn = page.locator('[name = "AccSubmit"]')
        this.cusEditSubmitBtn = page.locator('[name = "res"]')
    }

    async resetEditCustomer(cusId: string){
        await this.cusId.fill(cusId)
        await this.cusEditReset2Btn.click()

    }

    async submitEditCustomer(cusid:string){
        await this.cusId.fill(cusid)
        await this.cusEditSubmitBtn.click()
    }
}