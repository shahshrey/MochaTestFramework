/** ================================================================================================
 * ?                                   get Holidays API TESTS
 * @author         :  Shrey shah
 * @email          :  shrey@gmail.com
 * @repo           :  APITestFramework
 * @description    :  get holidays api test cases.
 *================================================================================================* */

const { assert, deepEqual } = require('../../lib/mocha-libs').mochaLibs;
const { getRequest, } = require('../../seed-data/seed-data-manager').seedData;
const { GetHolidayAPI, } = require('../../utils/constants').constants;
const { getHolidays, } = require('./test-data/test-data-holidays').testData;

var countries = ["AT", "CA", 'BR', 'CH'];

describe(' get Holidays tests', async () => {

    /**
        ** This block executes before all and logs the user in.
        ** and creates project,
    */
    before('', async () => {

    })

    countries.forEach(function (country) {

        i = countries.indexOf(country) + 1

        it(`${i}. Verify get Holidays for ${country}`, async () => {

            // Send the api request and remove system props
            response = await getRequest(GetHolidayAPI(2017, country));

            console.log(response.data[0])

            // Verify if the test was successful.
            assert(response.status === 200, ` Request to get Holidays is failing`);
            deepEqual(response.data, getHolidays.response.argentinaHolidays, 'Failed');

        })

    });


    /**
         ** This block executes after each to delete created data 
         ** in before each block during tests.
    */
    afterEach('Delete Project, Clause & equipment', async () => {

    });

    /**
     ** This block executes after all to delete created data
     ** in before all block during tests.
    */
    after('', async () => {

    });

});
