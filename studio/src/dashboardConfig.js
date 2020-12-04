export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5fca3cab2ac4e700d4796760',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-7r153s24',
                  apiId: '7cd70d9d-cfcd-4e5d-b31c-8cd69bb8b221'
                },
                {
                  buildHookId: '5fca3cabc8a7b601228c301d',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-7p4q75du',
                  apiId: '984dd2b5-c9cb-4267-80ed-acbe41dfe547'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/strickdj/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-7p4q75du.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
