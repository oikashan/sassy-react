import { ArgType } from '@storybook/api';

export const defaultArgTypes: Record<string, ArgType> = {
  as: {
    description: 'A valid HTML element, web component, or a React component',
    type: {
      name: 'string',
      required: false,
    },
    table: {
      defaultValue: {
        summary: 'button',
      },
    },
    control: {
      type: 'null',
    },
  },
  cssModule: {
    description: 'Optional CSS Module',
    type: {
      name: 'object',
      required: false,
    },
    table: {
      defaultValue: {
        summary: 'undefined',
      },
    },
    control: {
      type: 'null',
    },
  },
};

export const defaultArgTypesWithChildren: Record<string, ArgType> = {
  ...defaultArgTypes,
  children: {
    table: {
      defaultValue: {
        summary: 'undefined',
      },
    },
  },
};

export function getOptionalStringArgType(description: string): ArgType {
  return {
    description,
    type: {
      name: 'string',
      required: false,
    },
    table: {
      defaultValue: {
        summary: 'undefined',
      },
    },
    control: {
      type: 'text',
    },
  };
}
