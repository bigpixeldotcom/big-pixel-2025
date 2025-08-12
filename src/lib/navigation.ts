import {
  faFaceSmile,
  faGearCode,
  faNewspaper,
  faPaintbrushPencil,
  faSquareCode,
} from '@awesome.me/kit-89a9106b13/icons/sharp/regular'
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
    icon: faSquareCode,
    background: 'bg-green-50',
    hover: 'hover:bg-green-75',
    text: 'text-white',
    name: 'Web Design',
    value: '/web',
    description:
      "Whatever you're doing — selling, creating, building, or collaborating — it's almost certain you'll need a website to go with it.",
  },
  {
    id: 1,
    icon: faGearCode,
    background: 'bg-blue-50',
    hover: 'hover:bg-blue-75',
    text: 'text-white',
    name: 'Digital Development',
    value: '/digital',
    description:
      'We design and develop secure, scalable back-end systems that keep your data safe, and your site performing at its best.',
  },
  {
    id: 2,
    icon: faPaintbrushPencil,
    background: 'bg-purple-50',
    hover: 'hover:bg-purple-75',
    text: 'text-white',
    name: 'Graphic Design',
    value: '/design',
    description:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.',
  },
  {
    id: 3,
    icon: faFaceSmile,
    background: 'bg-yellow-50',
    hover: 'hover:bg-yellow-75',
    text: 'text-black',
    name: 'About',
    value: '/about',
    description:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.',
  },
  {
    id: 4,
    icon: faNewspaper,
    background: 'bg-red-50',
    hover: 'hover:bg-red-75',
    text: 'text-white',
    name: 'News',
    value: '/news',
    description:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.',
  },
]
