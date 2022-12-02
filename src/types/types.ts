import * as React from 'react';

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type CssModule = Record<string, string>;

/**
 * A polymorphic reference's type.
 */
export type SassyRef<T extends React.ElementType> =
  React.ComponentPropsWithRef<T>['ref'];

/**
 * Core types for the sassy components.
 */
export type SassyTypes<T extends React.ElementType> = React.PropsWithChildren<
  {
    as?: T;

    /**
     * Optional CSS Module.
     */
    cssModule?: CssModule;
  } & React.ComponentPropsWithoutRef<T>
>;
