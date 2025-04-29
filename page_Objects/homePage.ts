import { Locator, Page, expect } from "@playwright/test";

export class homePage{

    readonly page: Page
    readonly header: Locator
    readonly userRole: Locator
    readonly slidingmsg: Locator
    readonly newCustomer: Locator
    readonly editCustomer: Locator
    readonly deleteCustomer: Locator
    readonly newAccount: Locator
    readonly editAccount: Locator
    readonly deleteAccount: Locator
    readonly miniStatement: Locator
    readonly customisedStatement: Locator
    readonly logOut: Locator

    constructor(page: Page){
        this.page = page
        this.header = page.getByRole('heading', { name: 'Gtpl Bank' })
        this.userRole = page.getByRole('listitem').filter({ hasText: 'Manager' })
        this.slidingmsg = page.locator('marquee', { hasText: 'Welcome To Manager' })
        this.newCustomer = page.getByText('New Customer')
        this.editCustomer = page.getByText('Edit Customer')
        this.deleteCustomer = page.getByText('Delete Customer')
        this.newAccount = page.getByText('New Account')
        this.editAccount = page.getByText('Edit Account')
        this.deleteAccount = page.getByText('Delete Account')
        this.miniStatement =  page.getByText('Mini Statement')
        this.customisedStatement =  page.getByText('Customised Statement')
        this.logOut =  page.getByText('Log out')
    }

    async verifyHomePageLabels(){
        //verify Home Page Header Label
        const header = this.header
      await expect(header).toBeVisible()
      

        //verify Login User Role Label
        const userRole = this.userRole
      await expect(userRole).toBeVisible()

        //verify Sliding message Label
        const slidingmsg = this.slidingmsg
       await expect(slidingmsg).toBeVisible()
    }

    async newCustomerNavigaion(){
        await this.newAccount.click()
    }

    async editCustomerNavigaion(){
        await this.editAccount.click()
    }

    async deleteCustomerNavigaion(){
        await this.deleteAccount.click()
    }

    async newAccountNavigaion(){
        await this.newAccount.click()
    }

    async editAccountNavigaion(){
        await this.editAccount.click()
    }

    async deleteAccountNavigaion(){
        await this.deleteAccount.click()
    }

    async miniStatementNavigaion(){
        await this.miniStatement.click()
    }

    async customizedStatementNavigaion(){
        await this.customisedStatement.click()
    }

    async logOutProject(){
        await this.logOut.click()
    }
}
