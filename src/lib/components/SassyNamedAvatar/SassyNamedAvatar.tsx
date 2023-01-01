import React from 'react';

import type { SassyRef, SassyTypes, Size } from '../../../types/types';
import SassyError from '../../SassyError';

import '../SassyAvatar/SassyAvatar.css';

export type SassyNamedAvatarProps<T extends React.ElementType> = {
  /**
   * The name to display in the avatar. Make sure the name contains at least 2
   * words for an optimal experience. Minimum and maximum letters displayed will
   * always be 1 and 2 respectively.
   */
  name: string;

  /**
   * Default=undefined; The size of the avatar. Provide nothing and no sizing
   * will happen, just as you'd intend.
   */
  size?: Size;

  /**
   * Default = #ff339e; The color to be used as the background. Provide a
   * special value named `random` to apply random colors on each creation.
   */
  backgroundColor?: string;
} & SassyTypes<T>;

const SassyNamedAvatar = React.forwardRef(
  <T extends React.ElementType = 'span'>(
    {
      as,
      name,
      size = 'md',
      backgroundColor = '#ff339e',
      className = '',
      ...props
    }: SassyNamedAvatarProps<T>,
    ref?: SassyRef<T>
  ): JSX.Element => {
    if (!name) {
      console.warn(
        `${SassyError.getPrototype()} SassyNamedAvatar requires a valid name, ${name} found`
      );

      return <></>;
    }

    const Component = as || 'span';

    const nameParts = name.split(' ');

    const finalColor =
      backgroundColor !== 'random'
        ? backgroundColor
        : '#' + ((Math.random() * 0xffffff) << 0).toString(16);

    return (
      <Component
        {...props}
        ref={ref}
        style={{ display: 'inline-block', backgroundColor: finalColor }}
        className={`sassy-avatar sassy-avatar-${size} ${className}`}
      >
        <span className="sassy-text">
          {nameParts[0].charAt(0)}
          {nameParts[1] && nameParts[1].charAt(0)}
        </span>
      </Component>
    );
  }
);

export default SassyNamedAvatar;
