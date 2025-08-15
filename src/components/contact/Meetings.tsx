import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import clsx from 'clsx'
import { Clock2, MessageCircleQuestionMark, Search, Telescope } from 'lucide-react'
import Link from 'next/link'

const meetings = [
  {
    id: '15-minutes',
    icon: <MessageCircleQuestionMark className="h-16 w-16" />,
    colour: 'bg-green-50',
    hover: 'bg-green-100',
    title: 'Discussion',
    description:
      'If you just want to have a discussion on what we offer or even just a question, book a quick 15-min meeting today.',
    duration: '15 minutes',
    price: 'FREE',
    link: 'https://tidycal.com/bigpixel/15-minute-meeting',
  },
  {
    id: '30-minutes',
    icon: <Search className="h-16 w-16" />,
    colour: 'bg-blue-50',
    hover: 'bg-blue-100',
    title: 'Exploratory Meeting',
    description:
      'If you have an idea for a project and want to discuss the possibility of working with us on it, book a 30-min call to cover the basics.',
    duration: '30 minutes',
    price: 'FREE',
    link: 'https://tidycal.com/bigpixel/30-minute-meeting',
  },
  {
    id: '60-minutes',
    icon: <Telescope className="h-16 w-16" />,
    colour: 'bg-purple-50',
    hover: 'bg-purple-10',
    title: 'Scoping Meeting',
    description:
      'For a more detailed discussion of work and to get the ball rolling on a project, book a one-hour meeting that will make sure we cover everything to start the project on the right foot.',
    duration: '60 minutes',
    price: '£30',
    link: 'https://tidycal.com/bigpixel/60-minute-meeting',
  },
]

function MeetingCard({ meeting }: { meeting: Meeting }) {
  return (
    <Link
      href={meeting.link}
      rel="noopener noreferrer"
      target="_blank"
      className={clsx(
        'flex items-center rounded-md p-6 transition-all duration-300 ease-out hover:scale-95',
        meeting.colour,
        'hover:' + meeting.hover
      )}
    >
      <div className="flex flex-col items-center gap-4 text-center text-white">
        <div className="flex-shrink-0">{meeting.icon}</div>
        <h3 className="text-2xl font-bold">{meeting.title}</h3>
        <p className="text-center text-sm">{meeting.description}</p>
        <div className="flex items-center justify-center gap-2">
          <Clock2 className="h-4 w-4" />
          <span className="text-sm">{meeting.duration}</span>
        </div>
        <p className="text-center font-bold">{meeting.price}</p>
      </div>
    </Link>
  )
}

export default function Meetings() {
  return (
    <Card className="border border-grey-200 bg-white shadow-lg">
      <CardHeader className="space-y-2">
        <CardTitle className="text-2xl font-bold">Book a Meeting</CardTitle>
        <CardDescription className="text-grey-500">
          Book a video or telephone call with us to discuss your needs:
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mx-2 grid grid-cols-1 gap-6 md:grid-cols-3">
          {meetings.map((meeting) => (
            <MeetingCard key={meeting.id} meeting={meeting} />
          ))}
        </div>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  )
}
