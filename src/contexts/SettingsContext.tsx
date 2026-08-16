import { createContext, useState, type ReactNode } from "react";

interface Settings {
  language: string;
}

interface SettingsContextType extends Settings {
  setLanguage: (lang: string) => void;
}

export const SettingsContext = createContext<SettingsContextType | undefined>(
  undefined,
);

const DEFAULT_SETTINGS: Settings = {
  language: "en",
};

const SETTINGS_STORAGE_KEY = "user_settings";

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<Settings>(() => {
    try {
      const stored = localStorage.getItem(SETTINGS_STORAGE_KEY);
      if (stored) {
        return { ...DEFAULT_SETTINGS, ...JSON.parse(stored) };
      }
    } catch (e) {
      console.log("Failed to parse settings", e);
    }
    return DEFAULT_SETTINGS;
  });

  const updateSettings = <K extends keyof Settings>(
    key: K,
    value: Settings[K],
  ) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);

    try {
      localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(newSettings));
    } catch (e) {
      console.log("error", e);
    }
  };

  return (
    <SettingsContext.Provider
      value={{
        ...settings,
        setLanguage: (v) => updateSettings("language", v),
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}
