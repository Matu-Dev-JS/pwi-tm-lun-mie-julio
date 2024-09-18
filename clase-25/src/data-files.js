export const files = [

    {
        tipo: 'folder',
        title: 'src',
        archives: [
            {
                tipo: 'file',
                title: 'App.jsx',
                icon: 'direccion-icono',
                id: 2 
            },
            {
                tipo: 'file',
                title: 'data-example.js',
                icon: '',
                id: 3
            },
            {
                title: 'components',
                tipo: 'folder',
                icon: '',
                id: 6,
                archives: [
                    {
                        tipo: 'file',
                        title: 'Button.jsx',
                        icon: 'direccion-icono',
                        id: 2 
                    },
                    {
                        tipo: 'file',
                        title: 'style.css',
                        icon: '',
                        id: 3
                    },
                ]
            }
        ],
        icon: '',
        id: 1
    },
    {
        tipo: 'file',
        title: 'index.html',
        icon: '',
        id: 4
    },
    {
        tipo: 'file',
        title: '.gitignore',
        icon: '',
        id: 5
    }
]