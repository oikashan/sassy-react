import './SassyAvatar.css';
import * as React from 'react';

import { CssModule, Size } from '../../../types/types';
import SampleAvatar from '../SampleAvatar';
import SassyImage, { SassyImageProps } from '../SassyImage/SassyImage';

export type SassyAvatarProps = {
  /**
   * Default = #ff339e; The color to be used by the default avatar.
   * Note that the color won't be applied on anything other than the default
   * avatar.
   */
  color?: string;

  /**
   * Default=undefined; The size of the avatar. Provide nothing and no sizing
   * will happen, just as you'd intend.
   */
  size?: Size;
} & CssModule &
  Omit<SassyImageProps, 'color'>;

/**
 * A user avatar with sass. Packs a pinch of glamourous pink if you fail to pass
 * a valid source. In other words, don't pass a `src` if you wanna show a cool
 * default avatar.
 *
 * @returns {JSX.Element}
 *
 * @author kashan-ahmad
 *
 * @version 0.0.1
 */
export default function SassyAvatar({
  src,
  size,
  alt = '',
  color = '#ff339e',
  className = '',
  fallbackImgSrc,
  ...props
}: SassyAvatarProps): JSX.Element {
  // 👇 Collective classnames.
  let finalClassName = `sassy-avatar ${className}`;

  // 👇 Size is added only if specified.
  if (size) finalClassName += `sassy-avatar-${size}`;

  if (!src && !fallbackImgSrc)
    return <SampleAvatar {...{ color }} className={finalClassName} />;

  return (
    <SassyImage
      {...props}
      className={finalClassName}
      {...{ src, alt, fallbackImgSrc }}
    />
  );
}
