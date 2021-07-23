const chai : any = require('chai');
const { assert } = require('chai');
const should : any = require('chai').should();
const { expect } = require('chai');
const chaiSubset : any = require('chai-subset');
const axios : any = require('axios');
const moment : any = require('moment');
const fs : any = require('fs');
const deepEqualInAnyOrder : any = require('deep-equal-in-any-order');
const deepEqual : any = require('deep-equal');
const chaiExclude : any = require('chai-exclude');
const formData : any = require('form-data');
const log : any = require('console-log-level')({ prefix() { return new Date().toISOString() }, level: 'info' })
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
