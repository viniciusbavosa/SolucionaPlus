export class Storage {
	private constructor() {}

	public static getLocal(key: string) {
		return localStorage.getItem(key);
	}

	public static setLocal(key: string, value: string) {
		try {
			localStorage.setItem(key, value);
		} catch (err) {
			console.log(err);
		}
	}

	public static getSession(key: string) {
		return sessionStorage.getItem(key);
	}

	public static setSession(key: string, value: string) {
		try {
			sessionStorage.setItem(key, value);
		} catch (err) {
			console.log(err);
		}
	}
}
