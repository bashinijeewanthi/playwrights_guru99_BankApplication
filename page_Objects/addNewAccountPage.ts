import { Locator, Page } from "@playwright/test";

export class addNewAccountPage{

    readonly page: Page
    readonly acccusId: Locator
    readonly accType: Locator
    readonly initDeposit: Locator
    readonly newaccSubmitBtn : Locator
    readonly newaccResetBtn : Locator

    constructor (page: Page){

        this.page = page
        this.acccusId = page.locator('[name="cusid"]')
        this.accType = page.locator('[name="selaccount"]')
        this.initDeposit = page.locator('[name="inideposit"]')
        this.newaccResetBtn = page.locator('[name="reset"]')
        this.newaccSubmitBtn = page.locator('[name="button2"]')

    }

    async resetAddNewAccountForm(acccusId: string, accType:string,initDeposit:string){
        await this.acccusId.fill(acccusId)
        await this.acccusId.selectOption(accType)
        await this.acccusId.fill(initDeposit)
        await this.newaccResetBtn.click()

    }
    async cerateAddNewAccountForm(acccusId: string, accType:string,initDeposit:string){
        await this.acccusId.fill(acccusId)
        await this.acccusId.selectOption(accType)
        await this.acccusId.fill(initDeposit)
        await this.newaccSubmitBtn.click()

    }
}