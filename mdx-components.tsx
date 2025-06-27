import type { MDXComponents } from 'mdx/types'
import Image, { ImageProps } from 'next/image'

export function useMDXComponents(components: MDXComponents) {
  return {
    ...components,
    img: (props: ImageProps) => <Image fill sizes="(max-width: 1024px) 100vw, 768px" {...props} />,
  }
}
