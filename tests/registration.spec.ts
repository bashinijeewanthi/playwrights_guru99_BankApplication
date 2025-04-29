import {test,expect} from '@playwright/test'
import { registrationPage } from '../page_Objects/registerPage'
import { loginPage } from '../page_Objects/loginPage'


test('User Registration', async ({page}) =>{

    const userRegistrationObj = new registrationPage(page)
    await userRegistrationObj.openApplication()
    await userRegistrationObj.userRegistration("gejono3392@cxnlab.com")
    
})

test('User Reset Login page textBoxes', async ({page}) => {
    const userRegistrationObj = new registrationPage(page)
    await userRegistrationObj.openApplication()
    
    const loginPageObj = new loginPage(page)
    await loginPageObj.resetFields("mngr620358","hymUmyb")

})

test('User Login', async ({page}) => {
    const userRegistrationObj = new registrationPage(page)
    await userRegistrationObj.openApplication()
    
    const loginPageObj2 = new loginPage(page)
    await loginPageObj2.loginGtplBank("mngr620358","hymUmyb")
})