import { atomWithStorage } from 'jotai/utils';
import { getLocalStorageKey } from '@/utils/localstorage';

export const countAtom = atomWithStorage(getLocalStorageKey('count'), 0);
