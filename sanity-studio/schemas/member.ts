const ROLES = [
  {title: 'President', value: 'President'},
  {title: 'Vice President', value: 'Vice President'},
  {title: "Anna's House Leader", value: "Anna's House Leader"},
  {title: 'Project Manager', value: 'Project Manager'},
  {title: 'Senior Mentor', value: 'Senior Mentor'},
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
