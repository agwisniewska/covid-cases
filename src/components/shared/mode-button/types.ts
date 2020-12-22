import {MouseEvent} from "react";

export enum MODE {
  TABLE = 'TABLE',
  CHART = 'CHART'
}

export interface ModeButtonProps {
  title: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}
