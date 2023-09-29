import {SVGProps} from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface BugButtonProps {
  id?: number,
  size?: "sm" | "md" | "lg" ;
  label?: string ;
  destination: string,
  clickHandler: () => void,
  isIconOnly?: boolean,
  iconStart?: React.ReactElement<IconSvgProps>,
  iconEnd?: React.ReactElement<IconSvgProps>,
  isDisabled?: boolean,
  isLoading?: boolean,
  fullWidth?: boolean,
  children?: React.ReactNode;
}
