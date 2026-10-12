import type * as React from 'react'

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'md-filled-button': React.HTMLAttributes<HTMLElement> & { href?: string }
      'md-outlined-button': React.HTMLAttributes<HTMLElement> & { href?: string }
      'md-icon': React.HTMLAttributes<HTMLElement>
      'md-icon-button': React.HTMLAttributes<HTMLElement>
      'md-chip': React.HTMLAttributes<HTMLElement> & { label?: string }
    }
  }
}

export {}
