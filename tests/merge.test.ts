import { merge } from "../src/merge";

describe('merge function', () => {
    test('should merge and sort arrays correctly', () => {
        const collection_1 = [1, 3, 5];
        const collection_2 = [2, 4, 6];
        const collection_3 = [9, 7, 5];

        const result = merge(collection_1, collection_2, collection_3);
        expect(result).toEqual([1, 2, 3, 4, 5, 5, 6, 7, 9]);
    });

    test('should handle empty arrays', () => {
        const collection_1: number[] = [];
        const collection_2: number[] = [];
        const collection_3: number[] = [];

        const result = merge(collection_1, collection_2, collection_3);
        expect(result).toEqual([]);
    });

    test('should handle arrays with negative numbers', () => {
        const collection_1 = [-5, -3, -1];
        const collection_2 = [-6, -4, -2];
        const collection_3 = [-7, -9, -11];

        const result = merge(collection_1, collection_2, collection_3);
        expect(result).toEqual([-11, -9, -7, -6, -5, -4, -3, -2, -1]);
    });
});