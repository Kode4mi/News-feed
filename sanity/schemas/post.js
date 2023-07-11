export default {
    name: 'post',
    type: 'document',
    title: 'Post',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'content',
            type: 'array',
            title: 'Content',
            of: [{type: 'block'}]
        },
        {
            name: 'project',
            type: 'reference',
            title: 'Project',
            to: [{type: 'project'}]
        }
    ]
}