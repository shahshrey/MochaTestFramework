const { chaiSubset, chai, moment } = require('../lib/mocha-libs').mochaLibs;

chai.use(chaiSubset);

function generateUniqueKey(projectName) {
    // format name as key and strip out invalid chars
    const generatedKey = projectName.toLowerCase().replace(/[^a-z0-9-_]/g, '');
    return `${generatedKey}_${Math.random().toString(20).substr(2, 8)}`;
}

async function getTodayDateFormatted() {
    let today = new Date().toISOString()
    today = today.substring(0, 10);
    return today
}

function getTodayDate() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    return `${mm}/${dd}/${yyyy}`;

}

function getNextDateForDay(dayName) {

    // The current day
    const date = new Date();
    const now = date.getDay();

    // Days of the week
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

    // The index for the day you want
    const day = days.indexOf(dayName.toLowerCase());

    // Find the difference between the current day and the one you want
    // If it's the same day as today (or a negative number), jump to the next week
    let diff = day - now;
    diff = diff < 1 ? 7 + diff : diff;

    // Get the timestamp for the desired day
    const nextDayTimestamp = date.getTime() + (1000 * 60 * 60 * 24 * diff);

    // Get the next day
    return new Date(nextDayTimestamp);

}

function getFutureDate(daysInFuture) {
    return new Date(new Date().getTime() + daysInFuture * 86400000);
}

function getPastDate(daysInPast) {
    return new Date(new Date().getTime() - daysInPast * 86400000);
}

function getTodayDateISO() {
    return `${moment().format('YYYY-MM-DD')}T00:00:00.000Z`;
}

module.exports.dateUtils = {
    getTodayDateFormatted,
    generateUniqueKey,
    getTodayDate,
    getNextDateForDay,
    getFutureDate,
    getPastDate,
    getTodayDateISO
};
