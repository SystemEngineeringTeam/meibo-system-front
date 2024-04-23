import { blue, gray } from '@ant-design/colors';

const colors = {
  white: blue[0],
  primary: blue[5],
  secondary: '', // TODO: Secondary Color を決める (必要？)
  tertiary: blue[9],
  text: gray[10],
} as const satisfies Record<string, string>;

export default colors;
