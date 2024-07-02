/**
 * the key used to store the settings in local storage
 */
const SETTINGS_KEY = 'site-settings';

export function useLocalStorage() {
  const initializeSettings = () => {
    const settings = localStorage.getItem(SETTINGS_KEY);
    return settings === null || settings === undefined
      ? { theme: 'dark' }
      : JSON.parse(settings as any);
  };

  const saveSettings = (settings: {}) => {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  };

  return {
    initializeSettings,
    saveSettings,
  };
}
