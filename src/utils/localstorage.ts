export const LOCAL_STORAGE_KEY = 'meibo-system';
export const LOCAL_STORAGE_VERSION = 1;

export function getLocalStorageKey(key: string): string {
  return `${LOCAL_STORAGE_KEY}.v${LOCAL_STORAGE_VERSION}.${key}`;
}
