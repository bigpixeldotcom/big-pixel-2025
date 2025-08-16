import clsx from 'clsx'

type ContainerProps<T extends React.ElementType> = {
  as?: T
  className?: string
  children: React.ReactNode
}

export function Container<T extends React.ElementType = 'div'>({
  as,
  className,
  children,
}: Omit<React.ComponentPropsWithoutRef<T>, keyof ContainerProps<T>> & ContainerProps<T>) {
  let Component = as ?? 'div'

  return (
    <Component className={clsx('mx-auto w-full md:max-w-7xl md:px-6 lg:px-8', className)}>
      <div className="mx-4 max-w-2xl md:mx-auto lg:max-w-7xl">{children}</div>
    </Component>
  )
}
