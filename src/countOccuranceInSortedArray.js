var countOccurance = function (s, key, low, high) {
    var left = leftBoundSearch (s, key, low, high);
    var right = rightBoundSearch (s, key, low, high);
    return right - left;
};

var leftBoundSearch = function (s, key, low, high) {
    var middle;
    if (low > high) return low;
    middle = Math.floor((low+high)/2);
    if(s[middle] < key) {
        return (leftBoundSearch(s, key, middle+1, high));
    } else {
        return (leftBoundSearch(s, key, low, middle-1));
    }
};

var rightBoundSearch = function (s, key, low, high) {
    var middle;
    if (low > high) return low;
    middle = Math.floor((low+high)/2);
    if(s[middle] > key) {
        return (rightBoundSearch(s, key, low, middle-1));
    } else {
        return (rightBoundSearch(s, key, middle+1, high));
    }
};

module.exports = {
    countOccurance: countOccurance
};