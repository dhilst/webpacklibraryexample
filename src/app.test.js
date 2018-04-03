// @flow
import {reverse, fst, snd, lst} from './app';

it("Should reverse", () => {
    expect(reverse([1,2,3])).toEqual([3,2,1]);
});

it("Should return 1", () => {
    expect(fst([1,2,3])).toBe(1);
});

it("Should return 2", () =>  {
    expect(snd([1,2,3])).toBe(2);
});

it("Should return 3", () => {
    expect(lst([1,2,3])).toBe(3);
})

it("Should be undefined", () => {
    expect(snd([1])).toBeUndefined();
})

it("Should be undefined", () => {
    expect(lst([])).toBeUndefined();
})
