const EVENTNAMES = [
  {title: `Anna's House`, value: `Anna's House`},
  {title: 'In School Activities', value: 'In School Activities'},
  {title: 'Fundraising', value: 'Fundraising'},
]

export default {
  title: 'Event',
  name: 'event',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      options: {
        list: EVENTNAMES.map(({title, value}) => ({title, value})),
        layout: 'radio',
      },
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
    },
  ],
}
