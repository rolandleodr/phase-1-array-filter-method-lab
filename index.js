// Code your solution here
function findMatching(array, names) {
    const value = array.filter(function(array) {
        if (array === names) {
            let match = array = names;
            return match
        } else {
            return array.toUpperCase() === names.toUpperCase()
        }
    })
    return value
}
function fuzzyMatch(array, names) {
    const value = array.filter((drivName) => {
        if (names.charAt(0,2) === drivName.charAt(0,2)) {
            return true
        }
    })
    return value
}
function matchName(drivers,names) {
    const value = drivers.filter(function(drivers) {
        if (drivers.name === names) {
            let drivValue = drivers.name === names
            return drivValue
        }
    })
    return value
}