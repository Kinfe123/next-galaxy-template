import { Tab as TabBase } from '@headlessui/react';
import type { ReactNode } from 'react';

import { cn } from '@/utils/classnames';

export interface TabProps {
  label?: string;
  disabled?: boolean;
  children: ReactNode;
}

function Tab(props: TabProps) {
  let { label, children, disabled, ...rest } = props;

  return (
    <TabBase
      disabled={disabled}
      className={({ selected }) =>
        cn(
          'px-2 py-1.5 [&>p]:m-0',
          'text-sm tracking-tight font-mono transition-colors duration-150',
          'rounded-md select-none',
          'focus:outline-none',
          selected
            ? 'text-slate-900 bg-gray-200'
            : 'text-slate-400 hover:text-slate-900',
          disabled && 'text-slate-300 pointer-events-none'
        )
      }
      {...rest}
    >
      {children ?? label}
    </TabBase>
  );
}

export default Tab;
