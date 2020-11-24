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
                  buildHookId: '5fbd906d766ca4008de55512',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-gasfyeae',
                  apiId: '417f8bd6-d2c3-4df3-8752-56ef204c9166'
                },
                {
                  buildHookId: '5fbd906df882470125f5fc70',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-ekn93357',
                  apiId: '68ab7c2f-78b5-4cf5-a7c3-89d15c81acfa'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/frankluongo/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-ekn93357.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
