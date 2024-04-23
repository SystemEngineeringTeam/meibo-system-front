/* eslint-disable import/prefer-default-export */
import { atomWithStorage } from 'jotai/utils';
import { getLocalStorageKey } from '../localstorage';

export const $count = atomWithStorage(getLocalStorageKey('count'), 0);
