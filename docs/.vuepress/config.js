module.exports = {
    title: 'fed doc',
    base: 'feddoc',
    head: [
        ['meta', {'http-equiv': 'cache-control', content: 'no-cache, no-store, must-revalidate'}],
        ['meta', {'http-equiv': 'pragma', content: 'no-cache'}],
        ['meta', {'http-equiv': 'expires', content: '0'}],
        ['link', {rel: 'icon', href: '/favicon.ico'}],
    ],
    theme: 'antdocs',
    themeConfig: {
        sidebar: [
            {
                key: 'team-standard',
                title: '团队规范📖',
                collapsable: true,
                children: [
                    'team-standard/standard-summary.md',
                    'team-standard/standard-js.md',
                    'team-standard/standard-css.md',
                    'team-standard/standard-react.md',
                    'team-standard/standard-git.md',
                    'team-standard/recommend-web-project-structure.md',
                    'team-standard/http.md',
                    'team-standard/logs.md',
                ]
            }, {
                key: 'tools',
                title: '工具🔧',
                collapsable: true,
                children: [
                    'tools/ht-cli.md',
                    'tools/ht-layout.md',
                ]
            }, {
                key: 'ui',
                title: '组件库🏠',
                collapsable: true,
                children: [
                    'ui/console-base',
                    'ui/mini-base',
                    'ui/app-base',
                ]
            }
        ]
    }
}
