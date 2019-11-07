export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5dc3bd792687fb79b1a1b3e1',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-demo-studio',
                  apiId: '45d8203a-fe6b-4742-9a3b-1dae0c8e9b46'
                },
                {
                  buildHookId: '5dc3bd79481555854e10c0d6',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-demo',
                  apiId: 'b7f49f6a-0c6a-4f8b-8779-2ed2e36868b0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/reesecode/sanity-nextjs-demo',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-demo.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
