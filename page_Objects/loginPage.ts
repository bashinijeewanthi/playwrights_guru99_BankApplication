import { Locator, Page, expect } from "@playwright/test";


export class loginPage{

        readonly page: Page
        readonly bankLink : Locator
        readonly uID: Locator
        readonly uPw: Locator
        readonly btLogin : Locator
        readonly btreset: Locator
        readonly mandatoryField: Locator
        readonly uIdvalidationmsg: Locator
        readonly pwvalidationmsg: Locator

        constructor(page: Page){
            this.page = page
            this.bankLink = page.getByText('Bank Project')
            this.uID = page.locator('[name="uid"]')
            this.uPw = page.locator('[name="password"]')
            this.btLogin = page.locator('[name="btnLogin"]')
            this.btreset = page.locator('[name="btnReset"]')
            this.mandatoryField = page.getByText('* mandatory field')
            this.uIdvalidationmsg = page.getByText('User-ID must not be blank')
            this.pwvalidationmsg = page.getByText('Password must not be blank')
        }

        
        async resetFields(username: string, password: string){
            //Bank Project Navigation
        
            await this.bankLink.first().click()

            //Reset all Fields
            await this.uID.fill(username)
            await this.uPw.fill(password)
            await this.btreset.click()
            const mandatoryField = this.mandatoryField

            // Verify Mandatory field validation message 
           await expect(mandatoryField).toBeVisible()
        }

        async loginGtplBank(username1: string, password1: string){

            await this.bankLink.first().click()

            // Verify Mandatory field validation message 
            await this.uPw.click()
            //await expect(this.uIdvalidationmsg).toBeVisible()

            // Verify Mandatory field validation message 
            await this.uID.click()
           // await expect(this.pwvalidationmsg).toBeVisible()

            //Login to Bank Project
            await this.uID.fill(username1)
            await this.uPw.fill(password1)
            await this.btLogin.click()
            const uIdMsg = this.uIdvalidationmsg
            const pwMsg = this.pwvalidationmsg


        }
}