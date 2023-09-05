const MONTHSNAMES = [
  {title: `January`, value: `January`},
  {title: `February`, value: `February`},
  {title: `March`, value: `March`},
  {title: `April`, value: `April`},
  {title: `May`, value: `May`},
  {title: `June`, value: `June`},
  {title: `July`, value: `July`},
  {title: `August`, value: `August`},
  {title: `September`, value: `September`},
  {title: `October`, value: `October`},
  {title: `November`, value: `November`},
  {title: `December`, value: `December`},
]

const EVENTSNAMES = [
  {title: `Anna's House`, value: `Anna's House`},
  {title: `Meeting`, value: `Meeting`},
  {title: `Seniors send-off`, value: `Seniors send-off`},
  {title: `Others`, value: `Others`},
]

export default {
  title: 'Schedule',
  name: 'schedule',
  type: 'document',
  fields: [
    // 1. Month
    // 2. Event Type: Anna's house, Meeting, Seniors send-off,
    // Fundraising, Clothing Drives, Helping Faculty, Others
    // 3. Event Name
    // 4. Event Date / Time
    {
      title: 'Month',
      name: 'month',
      type: 'string',
      options: {
        list: MONTHSNAMES.map(({title, value}) => ({title, value})),
        layout: 'radio',
      },
    },
    {
      title: 'Year',
      name: 'year',
      type: 'string',
    },
    {
      title: 'Events',
      name: 'events',
      type: 'array',
      of: [
        {
          title: 'Event',
          name: 'event',
          type: 'document',
          fields: [
            {
              title: 'Event Type',
              name: 'eventType',
              type: 'string',
              options: {
                list: EVENTSNAMES.map(({title, value}) => ({title, value})),
                layout: 'radio',
              },
            },
            {
              title: 'Event Name',
              name: 'eventName',
              type: 'string',
            },
            {
              title: 'Event Date/Time',
              name: 'eventDateTime',
              type: 'datetime',
              options: {
                dateFormat: 'YYYY-MM-DD',
                timeFormat: 'HH:mm',
                timeStep: 5,
                calendarTodayLabel: 'Today',
              },
            },
          ],
        },
      ],
    },
  ],
}
