
import * as React from 'react';
import Link from 'next/link';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  href?: string;
  variant?: 'solid' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
};

export default function Button({ asChild, href, variant='solid', size='md', className='', children, ...rest }: Props){
  const base = 'inline-flex items-center justify-center rounded-2xl transition active:scale-[0.98]';
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-5 py-2.5 text-base'
  } as const;
  const variants = {
    solid: 'bg-rose-600 text-white hover:bg-rose-700',
    outline: 'border border-zinc-300 bg-white hover:bg-zinc-50 text-zinc-900'
  } as const;

  const cn = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (asChild && href){
    return <Link href={href} className={cn}>{children}</Link>
  }
  return <button className={cn} {...rest}>{children}</button>;
}
