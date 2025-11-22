import PocketBase from 'pocketbase';
import { runtimeEnv } from '../config/env';

export type PocketBaseClient = PocketBase;

export const createPocketBaseClient = () => {
	return new PocketBase(runtimeEnv.pocketbaseUrl);
};
