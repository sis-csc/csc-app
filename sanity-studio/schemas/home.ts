export default {
  title: 'Home',
  name: 'home',
  type: 'document',
  fields: [
    {
      title: 'Carousel Images',
      name: 'carouselImages',
      type: 'array',
      of: [
        {
          type: 'image',
        },
      ],
    },
    {
      title: 'Register Link',
      name: 'registerLink',
      type: 'url',
    },
    {
      title: 'Club Description',
      name: 'clubDescription',
      type: 'text',
    },
    {
      title: 'Achievements',
      name: 'achievements',
      type: 'array',
      of: [
        {
          title: 'Achievement',
          name: 'achievement',
          type: 'document',
          fields: [
            {
              title: 'Title',
              name: 'title',
              type: 'string',
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
        },
      ],
    },
  ],
}
