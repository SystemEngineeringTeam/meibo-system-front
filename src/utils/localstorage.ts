export const LOCAL_STORAGE_KEY = 'meibo-system';
export const LOCAL_STORAGE_VERSION = 1;

const localstorageKeys = ['count'] as const;
type LocalstorageKeys = (typeof localstorageKeys)[number];

export function getLocalStorageKey(key: LocalstorageKeys): string {
  return `${LOCAL_STORAGE_KEY}.v${LOCAL_STORAGE_VERSION}.${key}`;
}
