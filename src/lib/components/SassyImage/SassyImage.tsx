import * as React from 'react';

export type SassyImageProps = {
  /**
   * Source to be used as fallback.
   */
  fallbackImgSrc?: string;
} & JSX.IntrinsicElements['img'];

/**
 * An image that has sass. In other words, it has a fallback image.
 * Not to mention that the fallback works even if the provided source fails to
 * load.
 *
 * @returns {JSX.Element}
 *
 * @author kashan-ahmad
 * @version 0.0.1
 */
export default function SassyImage({
  src,
  fallbackImgSrc,
  ...props
}: SassyImageProps): JSX.Element {
  return (
    <img
      {...props}
      src={src || fallbackImgSrc}
      onError={({ target }) => {
        (target as HTMLImageElement)['onerror'] = null;
        (target as HTMLImageElement)['src'] = fallbackImgSrc || '';
      }}
    />
  );
}
