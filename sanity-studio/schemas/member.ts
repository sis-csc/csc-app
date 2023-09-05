const ROLES = [
  {title: 'President', value: 'President'},
  {title: 'Vice President', value: 'Vice President'},
  {title: "Anna's House Leader", value: "Anna's House Leader"},
  {title: 'Senior Mentor', value: 'Senior Mentor'},
  {title: 'Public Relations', value: 'Public Relations'},
  {title: 'Project Manager', value: 'Project Manager'},
]

export default {
  title: 'Member',
  name: 'member',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Email',
      name: 'email',
      type: 'string',
    },
    {
      title: 'Photo',
      name: 'photo',
      type: 'image',
    },
    {
      title: 'Role',
      name: 'role',
      type: 'string',
      options: {
        list: ROLES.map(({title, value}) => ({title, value})),
        layout: 'radio',
      },
    },
  ],
}
