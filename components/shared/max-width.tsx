import { cn } from '@/lib/utils';

export default function MaxWidth({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'mx-auto max-w-7xl px-4 max-sm:px-6 sm:px-28 lg:px-8',
        className
      )}
    >
      {children}
    </div>
  );
}
