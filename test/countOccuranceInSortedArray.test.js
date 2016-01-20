import { countOccurance } from '../src/countOccuranceInSortedArray';
import {assert} from 'chai';

describe('countOccurance', function () {
    it('n in the middle', function () {
        var arr = [1,1,2,2,2,2,3,3];
        var result = countOccurance(arr, 2, 0, arr.length-1);
        assert.equal(result, 4);
    });

    it('n on the left', function () {
        var arr = [1,1,2,2,2,2,3,3];
        var result = countOccurance(arr, 1, 0, arr.length-1);
        assert.equal(result, 2);
    });

    it('n on the right', function () {
        var arr = [1,1,2,2,2,2,3,3,3];
        var result = countOccurance(arr, 3, 0, arr.length-1);
        assert.equal(result, 3);
    });

    it('too big not found', function () {
        var arr = [1,1,2,2,2,2,3,3,3];
        var result = countOccurance(arr, 4, 0, arr.length-1);
        assert.equal(result, 0);
    });

    it('too big not found', function () {
        var arr = [1,1,2,2,2,2,3,3,3];
        var result = countOccurance(arr, 0, 0, arr.length-1);
        assert.equal(result, 0);
    });

    it('in the middle not found', function () {
        var arr = [1,1,2,2,2,2,4,4,4];
        var result = countOccurance(arr, 3, 0, arr.length-1);
        assert.equal(result, 0);
    });

    it('key all array', function () {
        var arr = [2,2,2,2,2,2,2,2,2];
        var result = countOccurance(arr, 2, 0, arr.length-1);
        assert.equal(result, 9);
    });

});