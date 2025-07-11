import {
  faFaceSmile,
  faGearCode,
  faNewspaper,
  faPaintbrushPencil,
  faRectangleCode,
} from '@awesome.me/kit-89a9106b13/icons/classic/regular'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'

interface NavProps {
  id: number
  icon: IconDefinition
  background: string
  hover: string
  text: string
  name: string
  value: string
  description: string
}

export const navigation: NavProps[] = [
  {
    id: 0,
    icon: faRectangleCode,
    background: 'bg-green',
    hover: 'hover:bg-dark-green',
    text: 'text-grey-100',
    name: 'Web Design',
    value: '/web',
    description:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.',
  },
  {
    id: 1,
    icon: faGearCode,
    background: 'bg-blue',
    hover: 'hover:bg-dark-blue',
    text: 'text-grey-100',
    name: 'Digital Development',
    value: '/digital',
    description:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.',
  },
  {
    id: 2,
    icon: faPaintbrushPencil,
    background: 'bg-purple',
    hover: 'hover:bg-dark-purple',
    text: 'text-grey-100',
    name: 'Graphic Design',
    value: '/design',
    description:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.',
  },
  {
    id: 3,
    icon: faFaceSmile,
    background: 'bg-yellow',
    hover: 'hover:bg-dark-yellow',
    text: 'text-grey-800',
    name: 'About',
    value: '/about',
    description:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.',
  },
  {
    id: 4,
    icon: faNewspaper,
    background: 'bg-red',
    hover: 'hover:bg-dark-red',
    text: 'text-grey-100',
    name: 'News',
    value: '/news',
    description:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.',
  },
]
