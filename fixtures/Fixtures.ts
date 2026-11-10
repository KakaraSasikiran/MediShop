import { test as Base } from "@playwright/test";
import { Central } from "../pages/Central";

type myFixtures = {

    central:Central
}


export const test = Base.extend<myFixtures>({

    central:async({page},use)=>{
        await use(new Central(page))
    }

})

export {expect} from '@playwright/test'