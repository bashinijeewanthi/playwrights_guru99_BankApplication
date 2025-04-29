import { Locator, Page, expect } from "@playwright/test";

export class addNewCustomerPage{

    readonly page: Page
    readonly newcusomerheader: Locator
    readonly cusName: Locator
    readonly cusGender: Locator
    readonly cusDOB:Locator
    readonly cusAddress: Locator
    readonly cusCity: Locator
    readonly cusState: Locator
    readonly cusPIN: Locator
    readonly pinMsg: Locator
    readonly cusTNumber: Locator
    readonly cusEmail: Locator
    readonly cusResetBtn: Locator
    readonly cusSubmitBtn: Locator

    constructor(page: Page){
        this.page = page
        this.newcusomerheader = page.getByRole('heading', { name: 'Add New Customer' })
        this.cusName = page.locator('[name="name"]')
        this.cusGender = page.getByRole('radio').nth(1)
        this.cusDOB = page.locator('input[name = "dob"]')
        this.cusAddress = page.locator('[name="addr"]')
        this.cusCity = page.locator('[name="city"]')
        this.cusState = page.locator('[name="state"]')
        this.cusPIN = page.locator('[name="pinno"]')
        this.pinMsg = page.locator('#message6')
        this.cusTNumber = page.locator('[name="telephoneno"]')
        this.cusEmail = page.locator('[name="emailid"]')
        this.cusResetBtn = page.locator('[name="res"]')
        this.cusSubmitBtn = page.locator('[name="sub"]')

    }

    async Reset_Add_New_customer_Form(cusname: string, cusadd: string, cusPin:string){
        const newcusomerheader = this.newcusomerheader

        // Verify Header of the page 
       // await expect(newcusomerheader).toBeVisible()

        // Verify reset function of page
        await this.cusName.fill(cusname)
        await this.cusAddress.fill(cusadd)
        await this.cusPIN.fill(cusPin)

        //Verify PIN Code validation message
        await expect (this.pinMsg).toHaveAccessibleErrorMessage("PIN Code must have 6 Digits")
        
        await this.cusResetBtn.click()
    }

    async Add_New_customer_Form(cusname: string, cusadd: string, city: string, state:string, pin:string, tno:string,email:string){
        const newcusomerheader = this.newcusomerheader

        await this.cusName.fill(cusname)
        await this.cusGender.check({force:true})
        await this.cusDOB.fill('02/02/2025')
        await this.cusAddress.fill(cusadd)
        await this.cusCity.fill(city)
        await this.cusState.fill(state)
        await this.cusPIN.fill(pin)
        await this.cusTNumber.fill(tno)
        await this.cusEmail.fill(email)

        await this.cusSubmitBtn.click()


    }

}