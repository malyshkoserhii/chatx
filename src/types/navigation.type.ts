import { CharacterInfroParams } from './screen-params.type';

export enum NAVIGATION_KEYS {
	LOGIN = 'LOGIN',
	HOME = 'HOME',
	CHARACTER_INFO = 'CHARACTER_INFO',
}

export type RootStackParamList = {
	[NAVIGATION_KEYS.LOGIN]: undefined;
	[NAVIGATION_KEYS.HOME]: undefined;
	[NAVIGATION_KEYS.CHARACTER_INFO]: CharacterInfroParams;
};
