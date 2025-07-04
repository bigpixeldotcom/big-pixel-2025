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
  border: string
  text: string
  name: string
  value: string
  description: string
}

export const navigation: NavProps[] = [
  {
    id: 0,
    icon: faRectangleCode,
    border: 'border-green',
    text: 'text-green',
    name: 'Web Design',
    value: '/web',
    description:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.',
  },
  {
    id: 1,
    icon: faGearCode,
    border: 'border-blue',
    text: 'text-blue',
    name: 'Digital Development',
    value: '/digital',
    description:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.',
  },
  {
    id: 2,
    icon: faPaintbrushPencil,
    border: 'border-purple',
    text: 'text-purple',
    name: 'Graphic Design',
    value: '/design',
    description:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.',
  },
  {
    id: 3,
    icon: faFaceSmile,
    border: 'border-yellow',
    text: 'text-yellow',
    name: 'About',
    value: '/about',
    description:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.',
  },
  {
    id: 4,
    icon: faNewspaper,
    border: 'border-red',
    text: 'text-red',
    name: 'News',
    value: '/news',
    description:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.',
  },
]
