import { type ThemeConfig } from 'antd';
import colors from './color';

export const theme: ThemeConfig = {
  components: {
    Layout: {
      headerBg: colors.tertiary,
      headerColor: colors.white,
      headerPadding: '0 20px',
    },
  },
  token: {
    colorPrimary: colors.primary,
    colorText: colors.text,
    fontFamily: '"Noto Sans JP Variable", sans-serif;',
  },
};
