import { storage } from '@utils/storage';
import { themeDark } from './theme-dark';
import { themeLight } from './theme-light';

export enum ThemeName {
  DARK = 'dark',
  LIGHT = 'light',
}

class Theme {
  theme: string;
  constructor() {
    this.theme = storage.local.get('theme') || 'dark';
    storage.local.set('theme', this.theme);
  }
  /**
   * 主题切换
   */
  setTheme = (themeName: 'dark' | 'light'): void => {
    this.theme = themeName;
    storage.local.set('theme', themeName);
    switch (themeName) {
      case ThemeName.DARK:
        for (const key in themeDark) {
          document.body.style.setProperty(key, themeDark[key]);
        }
        break;
      case ThemeName.LIGHT:
        for (const key in themeLight) {
          document.body.style.setProperty(key, themeLight[key]);
        }
        break;
    }
  };

  getTheme = () => {
    return this.theme || storage.local.get('theme') || 'dark';
  };

  // 根据传入暗黑模式下的颜色值 自动在不同的环境下切换对应的颜色值
  findColor = (val: string): string => {
    if (this.theme === 'dark') {
      return val;
    }
    for (const key in themeDark) {
      if (themeDark[key] === val) {
        return themeLight[key];
      }
    }
    return '';
  };
}

export const theme = new Theme();
