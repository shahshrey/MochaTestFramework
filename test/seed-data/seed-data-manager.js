/** ================================================================================================
 * ?                                SEED DATA MANAGER TO FEED DATA INTO TESTS
 * @author         :  Shrey
 * @email          :  shrey shah@gmail.com
 * @repo           :  APITestFramework
 * @createdOn      :  02/22/2021
 * @description    :  Seed data manager file to manage all functions in before / before each blocks
 *================================================================================================* */

const { axios, log } = require('../lib/mocha-libs').mochaLibs;

/**
      *  @param {*} API : URI to send request to the server
      *  @param {*} requestBody: Body to be sent in the post request
      *  @return {*} : Returns the response.
 */
async function postRequest(API, requestBody) {

    //  const headers = { headers: { Cookie: cookie } };

    try {
        return await axios.post(API, requestBody);
    } catch (e) {
        log.info(e.response.data)
        return e.response;
    }
}

/**
      *  @param {*} API : URI to send request to the server
      *  @param {*} requestBody: Body to be sent in the post request
      *  @return {*} : Returns the response.
 */
async function getRequest(API) {

    //  const headers = { headers: { Cookie: cookie } };
    try {
        return await axios.get(API);
    } catch (e) {
        log.info(e.response.data)
        return e.response;
    }
}


/**
      ** This functions authenticates the user before running any tests. 
      **This is run in before all block.
 */
async function login() {

}


module.exports.seedData = {

    login,
    postRequest,
    getRequest

};
