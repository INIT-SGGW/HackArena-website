import React, { useEffect } from 'react'
import './Agenda.css'
import { AgendaType } from '../../utils/mockData'
import { PageSection } from '@repo/ui'

type Props = {
    data: AgendaType
}

function Agenda({ data }: Props) {
    return (
        <PageSection>
            <div className='page-width flex flex-col gap-10'>
                <h1 className="text-5xl text-primary russo-one font-bold">Plan wydarzenia</h1>
                <div className="flex items-start flex-wrap gap-12 m-auto">
                    {data.days.map((day, index) => (
                        <div key={index} className="agenda__day gap-2 w-full min-w-[350px] max-w-[450px]">
                            <h3 className='text-xl font-bold text-primary'>{day.title}</h3>
                            <ul>
                                <div>
                                    <div className='agenda__marker'>
                                        <div className='marker__circle' />
                                        <div className='marker__line' />
                                        <div className='marker__circle' />
                                    </div>
                                    {day.events.slice(0, -1).map((event, index) => (
                                        <ListItem key={index} itemText={event} />
                                    ))}
                                </div>
                                <ListItem itemText={day.events[day.events.length - 1]!} />
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </PageSection>
    )
}

const ListItem = ({ itemText: { time, text } }: { itemText: { time: string, text: string | string[] } }) => (
    <li>
        <span>{time}</span>
        {
            Array.isArray(text) ?
                <div className='listitem__group'>
                    {
                        text.map((item, index) => (
                            <span key={index}>{item}</span>
                        ))
                    }
                </div>
                :
                <span>{text}</span>
        }
    </li>
)


export default Agenda