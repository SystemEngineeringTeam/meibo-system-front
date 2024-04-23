import { atomWithStorage } from 'jotai/utils';
import { getLocalStorageKey } from '../localstorage';

export const countAtom = atomWithStorage(getLocalStorageKey('count'), 0);
