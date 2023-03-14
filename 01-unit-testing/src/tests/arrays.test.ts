import { it, expect, describe, beforeAll } from "vitest";
import { clone } from "../utils/arrays";

describe('clones an array', () => {
	const a = ['i', 'like', 'unit', 'tests']
	let b: Array<any> = []

	beforeAll(() => {
		b = clone(a)
	})

	// Test that cloned array contains the same numbers of elements
	it('containes the same number of items', () => {
		expect(a.length === b.length).toBe(true)
	})

	// Test that cloned array contains the same items
	it('containes the same items', () => {
		expect(b).toEqual(a)
	})

	// Test that clones array isn *NOT* the same
	it('is not the same array', () => {
		expect(b).not.toBe(a)
	})
})
