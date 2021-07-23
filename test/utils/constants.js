'use strict'

/** ================================================================================================
 * ?                                           ABOUT
 * @author         :  Shrey
 * @email          :  sshah@gmail.com
 * @repo           :  APITestFramework
 * @createdOn      :  02/22/2021
 * @description    :  Constants file to manage and organize all constants.
 *================================================================================================* */

const baseURI : string = `https://date.nager.at/api/v3`

/* ============================================ Holiday APIs  ============================================ */

const GetHolidayAPI : any = (year, countryCode) => `${baseURI}/publicholidays/${year}/${countryCode}`


module.exports.constants = {

    /* =======  Holiday APIS ======= */
    GetHolidayAPI

};
