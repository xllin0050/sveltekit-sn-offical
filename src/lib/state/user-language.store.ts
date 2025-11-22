import { writable } from 'svelte/store';

export type UserLanguage = 'zh' | 'en';

export const createUserLanguageStore = (initial: UserLanguage = 'zh') => {
	return writable<UserLanguage>(initial);
};

export const userLanguageStore = createUserLanguageStore();
