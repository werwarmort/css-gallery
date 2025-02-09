import { IconName, ComponentProps } from '../types.ts';

import cn from 'classnames';

import './index.scss';

interface IconProps extends ComponentProps {
  name?: IconName;
}

export const Icon = ({ name, className }: IconProps) => (
  <span className={cn('icon', `icon-${name}`, className)}></span>
);
