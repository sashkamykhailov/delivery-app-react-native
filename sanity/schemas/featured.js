import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'feautured',
  title: 'Featured Categories menu',
  type: 'document',
  fields: [
    {
      name: "name",
      type: "string",
      title: "Featured Category name",
      validation: (Rule) => Rule.required(),
    },

    {
      name: "short_description",
      type: "string",
      title: "Short description",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "restaurants",
      type: "array",
      title: "Restaurants",
      of: [{type: "reference", to:[{ type: 'restaurant' }] }]
    },
    {
      name: "image",
      type: "image",
      title: "Image of the dish",
    },
  ]
})
