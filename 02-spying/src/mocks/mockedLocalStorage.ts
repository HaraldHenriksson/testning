/**
 * A (mostly correct) mock of localStorage
 */

const storage = new Map()

export default () => {

	return {
		getItem: (key: string) => {
			return storage.get(key)
		},

		setItem: (key: string, Value: string) => {
			storage.set(key, Value)
		},

		length: storage.size, // will not update but isn't used in our app either

		clear: () => {
			storage.clear()
		},

		key: () => null, // will not update but isn't used in our app either

		removeItem: (key: string) => {
			storage.delete(key)
		}
	}

}
