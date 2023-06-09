import { ReactElement } from "react";


export interface IColorModeContext {
  toggleColorMode(): any;
}

export interface IMenuItemProps {
  title: string;
  to: string;
  icon: ReactElement;
  selected: string;
  setSelected(selected: string): any;
}

export type ListItem = {
  title: string;
  to: string;
  icon: ReactElement;
  headText?: string;
}

export interface IHeaderProps {
  title: string;
  subTitle: string;
}

export interface IFormProps {
  firstName: string;
  lastName: string;
  email: string;
  contact: string;
  address1: string;
  address2: string;
}

export interface IChartProps {
  isDashboard: boolean;
}

export interface IProgressCircleProps {
  progress: number;
  size?: number;
}

export interface IStatBoxProps {
  title: string;
  subtitle: string;
  icon: ReactElement;
  progress: number;
  increase: string;
}