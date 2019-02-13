import * as React from 'react';

declare module 'json2mq';

declare module 'react' {
  interface HTMLAttributes<T> {
    width?: string | number;
    align?: string;
  }
}
