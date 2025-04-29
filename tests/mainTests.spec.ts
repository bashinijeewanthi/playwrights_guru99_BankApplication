import {test,expect} from '@playwright/test'
import { registrationPage } from '../page_Objects/registerPage'
import { loginPage } from '../page_Objects/loginPage'
import { homePage } from '../page_Objects/homePage'
import { addNewCustomerPage } from '../page_Objects/addNewCustomerPage'
import { editCustomerPage } from '../page_Objects/editCustomerPage'
import { deleteCustomerPage } from '../page_Objects/deleteCustomerPage'
import { addNewAccountPage } from '../page_Objects/addNewAccountPage'

test.beforeEach(async ({page}) =>{
    const userRegistrationObj = new registrationPage(page)
    await userRegistrationObj.openApplication()

    const loginPageObj = new loginPage(page)
    await loginPageObj.loginGtplBank("mngr620358","hymUmyb")

})

test('Verify Home page', async({page}) =>{
    const homePageObj = new homePage(page)

    await homePageObj.verifyHomePageLabels()

})

test('Verify reset New Customer', async({page}) =>{
    const homePage_newCustomerObj = new homePage(page)
    await homePage_newCustomerObj.newCustomer.click()

    const addNewCustomerPageObj = new addNewCustomerPage(page)
    await addNewCustomerPageObj.Reset_Add_New_customer_Form("Bashini","Piliyandala", "123")    
        
})

test ('Verify Add New customer', async({page}) =>{
    const homePage_newCustomerObj = new homePage(page)
    await homePage_newCustomerObj.newCustomer.click()

    const addNewCustomerPageObj = new addNewCustomerPage(page)
    await addNewCustomerPageObj.Add_New_customer_Form("Bashini","Piliyandala","Colombo","Western","123","07123456789","bashini@test.com")   
})

test('Verify edit customer Reset function', async({page}) =>{
    const homePage_newCustomerObj = new homePage(page)
    await homePage_newCustomerObj.editCustomer.click()

    const editCustomerPageObj = new editCustomerPage(page)
    await editCustomerPageObj.resetEditCustomer("001")
})

test('Verify edit customer function', async({page}) =>{
    const homePage_newCustomerObj = new homePage(page)
    await homePage_newCustomerObj.editCustomer.click()

    const editCustomerPageObj = new editCustomerPage(page)
    await editCustomerPageObj.submitEditCustomer("001")
})

test('Verify Delete customer Reset function', async({page}) =>{
    const homePage_newCustomerObj = new homePage(page)
    await homePage_newCustomerObj.deleteCustomer.click()

    const delCustomerPageObj = new deleteCustomerPage(page)
    await delCustomerPageObj.resetDelCustomer("002")
})

test('Verify delete customer function', async({page}) =>{
    const homePage_newCustomerObj = new homePage(page)
    await homePage_newCustomerObj.deleteCustomer.click()

    const delCustomerPageObj = new deleteCustomerPage(page)
    await delCustomerPageObj.submitDelCustomer("002")
})

test('Verify Reset of Add New Account function',async({page}) => {
    const homePage_newCustomerObj = new homePage(page)
    await homePage_newCustomerObj.newAccount.click()

    const addNewAccountPageObj = new addNewAccountPage(page)
    await addNewAccountPageObj.resetAddNewAccountForm("003","current","1000")
})

test('Verify Add New Account function', async({page}) =>{
    const homePage_newCustomerObj = new homePage(page)
    await homePage_newCustomerObj.newAccount.click()

    const addNewAccountPageObj = new addNewAccountPage(page)
    await addNewAccountPageObj.cerateAddNewAccountForm("003","current","1000")
})