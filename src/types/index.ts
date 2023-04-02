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
