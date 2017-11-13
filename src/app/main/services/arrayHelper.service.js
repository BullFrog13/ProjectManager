export default class ArrayHelperService {
    reverseArray(array) {
        let left = null;
        let right = null;

        for (left = 0, right = array.length - 1; left < right; left += 1, right -= 1) {
            let temp = array[left];
            array[left] = array[right];
            array[right] = temp;
        }
    }
}