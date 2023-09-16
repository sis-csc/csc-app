const ROLES = [
  {title: 'President', value: '01 President'},
  {title: 'Vice President', value: '02 Vice President'},
  {title: "Anna's House Leader", value: "03 Anna's House Leader"},
  {title: 'Public Relations', value: '04 Public Relations'},
  {title: 'Project Manager', value: '05 Project Manager'},
  {title: 'Senior Mentor', value: '06 Senior Mentor'},
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
  orderings: [
    {
      title: 'Role - Custom Order',
      name: 'customRoleOrder',
      by: [
        {field: 'role', direction: 'asc'}
      ]
    }
  ]
}
