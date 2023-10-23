import type {
  CSSProperties,
  HTMLInputTypeAttribute,
  ReactElement,
  ReactNode,
} from 'react';
import type { PaginationOptions } from 'swiper/types';

export interface SwiperProps<T> {
  item: Array<T>;
  children: ReactElement<{ item: T; key: number }>;
  slidesPerView?: number;
  spaceBetween?: number;
  navigation?: boolean;
  pagination?: PaginationOptions | undefined | boolean;
  swiperSlideClass?: string;
  swiperContainerClass?: string;
}

export type RadioButtonProps = {
  label?: string;
  name: string;
  labelStyle?: string;
  values?: string;
  children?: ReactNode;
  height?: string;
  // type?: HTMLInputTypeAttribute;
};

export interface IconSvg {
  // eslint-disable-next-line react/no-unused-prop-types
  style?: CSSProperties;
  // eslint-disable-next-line react/no-unused-prop-types
  size?: string;
  // eslint-disable-next-line react/no-unused-prop-types
  color?: string;
}

export type PasswordProps = {
  label?: string;
  name: string;
  placeholder?: string;
};

export interface SearchFieldProps {
  placeholder: string;
}

export interface Option {
  value: string;
  label: string;
}

export interface Props {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
}

export type InputProps = {
  label?: string;
  name: string;
  placeholder?: string;
  labelStyle?: string;
  type?: HTMLInputTypeAttribute;
  icon?: ReactNode;
};

export type TextProps = {
  label?: string;
  name: string;
  placeholder?: string;
};

export type TypeProps = {
  label?: string;
  name: string;
  placeholder?: string;
  labelStyle?: string;
  type?: HTMLInputTypeAttribute;
};

export interface AvatarOptionsProps {
  avatarImageSize: string;
  rightSideChildren: ReactNode;
  AvatarContent: ReactNode;
}

export type StyleClassesTypes =
  | 'primary'
  | 'secondary'
  | 'large_primary'
  | 'tertiary'
  | 'tertiary_Icon'
  | 'noti_tab_active'
  | 'noti_tab_inctive'
  | 'accept_invite'
  | 'reject_invite'
  | 'filter_tab_active'
  | 'filter_tab_inctive'
  | 'promoted'
  | 'promotedGrid'
  | 'pending'
  | 'active'
  | 'Suspend'
  | 'createReel'
  | 'remove'
  | 'seeMore'
  | 'delete'
  | 'large_secondary';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  flexDirection?: 'row' | 'column';
  bgColor?: string;
}

export interface ImageWrapperProps {
  className?: string;
  layout?: 'fixed' | 'intrinsic' | 'responsive' | 'fill';
  alt: string;
  src: string;
  lazy?: boolean;
  priority?: boolean;
}

export type LabelProps = {
  label?: string;
  htmlFor: string;
  labelStyle?: string;
};

export type BtnProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  type?: 'submit' | 'reset' | 'button';
  btnStyle: StyleClassesTypes;
  disable?: boolean;
  handleClick?: () => void;
};

export type ShimmerProps = {
  size: string;
  height?: string;
  bgColor?: string;
};
