import * as React from 'react';

import SampleAvatar from '../SampleAvatar';
import SassyImage, { SassyImageProps } from '../SassyImage/SassyImage';

export type SassyAvatarProps = {
  /**
   * The color to be used by the default avatar.
   * Note that the color won't be applied on anything other than the default
   * avatar.
   */
  color?: string;
} & Omit<SassyImageProps, 'color'>;

/**
 * A generic user avatar that uses a default avatar in case the provided one is
 * erred.
 *
 * @returns {JSX.Element}
 *
 * @author kashan-ahmad
 * @version 0.0.1
 */
export default function Avatar({
  src,
  color = 'green',
  className = '',
  fallbackImgSrc,
  ...props
}: SassyAvatarProps): JSX.Element {
  if (!src && !fallbackImgSrc) return <SampleAvatar {...{ color }} />;

  return (
    <SassyImage
      {...props}
      src={src || fallbackImgSrc}
      fallbackImgSrc={fallbackImgSrc}
      className={`border-1 rounded-circle object-cover ${className}`}
    />
  );
}
