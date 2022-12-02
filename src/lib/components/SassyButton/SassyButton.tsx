import * as React from 'react';

import { SassyRef, SassyTypes } from '../../../types/types';

import './SassyButton.css';

export type SassyButtonProps<T extends React.ElementType> = {
  /**
   * Optional icon to display above the text.
   */
  iconTop?: React.ReactElement;

  /**
   * Optional icon to display next to the text.
   */
  iconEnd?: React.ReactElement;

  /**
   * Optional icon to display below the text.
   */
  iconBottom?: React.ReactElement;

  /**
   * Optional icon to display before the text.
   */
  iconStart?: React.ReactElement;
} & SassyTypes<T>;

/**
 * A headless button with sass. Punches a pack of all kinds of glamour you may
 * need. Tooltips? We got microtip, a CSS-only smol utility for gorgeous
 * tooltips. Icons? We got a slot for you to insert those lil' bums in all 4
 * directions. Don't forget to import microtip's CSS; Just do an `import 'microtip/microtip.css'`
 *
 * @see https://github.com/ghosh/microtip#installation Microtip
 *
 * @returns {JSX.Element}
 *
 * @author kashan-ahmad
 *
 * @version 0.0.1
 */
const SassyButton = React.forwardRef(
  <T extends React.ElementType = 'button'>(
    {
      as,
      iconTop,
      iconEnd,
      iconBottom,
      iconStart,
      children,
      className = '',
      ...props
    }: SassyButtonProps<T>,
    ref?: SassyRef<T>
  ): JSX.Element => {
    const Component = as || 'button';

    return (
      <Component {...props} ref={ref} className={`sassy-button ${className}`}>
        {iconTop && <span className="sassy-button__row">{iconTop}</span>}
        <span className="sassy-button__row">
          {iconStart && <span>{iconStart}</span>}
          {children}
          {iconEnd && <span>{iconEnd}</span>}
        </span>
        {iconBottom && <span className="sassy-button__row">{iconBottom}</span>}
      </Component>
    );
  }
);

export default SassyButton;
