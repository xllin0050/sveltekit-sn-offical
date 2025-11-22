export interface RuntimeEnv {
	pocketbaseUrl: string;
}

const pocketbaseUrl = import.meta.env.VITE_POCKETBASE as string | undefined;

if (!pocketbaseUrl) {
	throw new Error('VITE_POCKETBASE is required but was not provided.');
}

export const runtimeEnv: RuntimeEnv = {
	pocketbaseUrl
};
