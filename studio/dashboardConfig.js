export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5d406e35a74b7c21255e43ee',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-iy78kxrq',
                  apiId: 'a1f42617-e53a-4f3c-b526-d20813de6400'
                },
                {
                  buildHookId: '5d406e35db653c18f71a80b6',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-s1e5rtyc',
                  apiId: '45596fc3-1152-4125-8d28-11f5baa1f79c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/testingmorestuff123/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-s1e5rtyc.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
