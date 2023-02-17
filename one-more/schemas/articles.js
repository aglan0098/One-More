export default {
    name: 'articles',
    title: 'Articles',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{type: 'image'}],
            options: {
                hotspot: true,
            }
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'content',
            title: 'Content',
            type: 'string',
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string',
        }
    ]
}