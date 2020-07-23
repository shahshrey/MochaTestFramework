const chai = require('chai');
const { assert } = require('chai');
const should = require('chai').should();
const { expect } = require('chai');
const chaiSubset = require('chai-subset');
const axios = require('axios');
const moment = require('moment');
const fs = require('fs');
const deepEqualInAnyOrder = require('deep-equal-in-any-order');
const deepEqual = require('deep-equal');
const chaiExclude = require('chai-exclude');
const formData = require('form-data');
const log = require('console-log-level')({ prefix() { return new Date().toISOString() }, level: 'info' })
chai.use(chaiExclude);
chai.use(chaiSubset);
chai.use(deepEqualInAnyOrder);
chai.use(deepEqual);

module.exports.mochaLibs = {
   assert,
   should,
   expect,
   axios,
   log,
   chai,
   chaiSubset,
   moment,
   fs,
   deepEqual,
   chaiExclude,
   formData,

};
