const { expect, chaiSubset, chai, } = require('../lib/mocha-libs').mochaLibs;

chai.use(chaiSubset);

function deepEqualInAnyOrder(actualList, expectedList) {
    expect(actualList).to.deep.equalInAnyOrder(expectedList);
}

function deepEqual(actualList, expectedList, messageOnFailure) {
    expect(actualList, messageOnFailure).to.deep.equal(expectedList);
}


function verifyContainSubset(actualObject, expectedObject, messageOnFailure) {
    expect(actualObject).to.containSubset(expectedObject, messageOnFailure);
}


function verifyEquals(actualValue, expectedValue, messageOnFailure) {
    expect(actualValue).to.equal(expectedValue, messageOnFailure);
}

function verifyObjectPropertyByKeyAndValue(array, key, value) {
    array.forEach((element) => {
        expect(element).to.have.property(key).to.equal(value);
    })
}

function stringify(responseData) {
    return JSON.stringify(responseData)
}

// To use in latitude / longitude
function getRandomInRange(from, to, fixed) {
    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
}


function verifyJsonContainsKey(json, keysArray) {
    json.should.includes.all.keys(keysArray);
}

async function removePropFromJSON(jsonObject, propsToBeRemoved) {
    const json = jsonObject;
    for (let i = 0; i < propsToBeRemoved.length; i += 1) {
        delete json[propsToBeRemoved[i]];
    }
    return json;
}

module.exports.mochaUtils = {
    verifyCountFromDB,
    verifyContainSubset,
    deepEqualInAnyOrder,
    deepEqual,
    verifyEquals,
    verifyObjectPropertyByKeyAndValue,
    removePropFromJSON,
    stringify,
    getRandomInRange,
    verifyJsonContainsKey
};
