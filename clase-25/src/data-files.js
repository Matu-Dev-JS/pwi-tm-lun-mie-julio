import { LiaJsSquare } from "react-icons/lia"
import { FILE_ICONS_NAMES } from "./utils/constants"

export const files = [

    {
        tipo: 'folder',
        title: 'src',
        archives: [
            {
                tipo: 'file',
                title: 'App.jsx',
                icon: FILE_ICONS_NAMES.JSX,
                id: 2 
            },
            {
                tipo: 'file',
                title: 'data-example.js',
                icon: FILE_ICONS_NAMES.JS,
                id: 3
            },
            {
                title: 'components',
                tipo: 'folder',
                icon: FILE_ICONS_NAMES.FOLDER,
                id: 6,
                archives: [
                    {
                        tipo: 'file',
                        title: 'Button.jsx',
                        icon: FILE_ICONS_NAMES.JSX,
                        id: 2 
                    },
                    {
                        tipo: 'file',
                        title: 'style.css',
                        icon: FILE_ICONS_NAMES.CSS,
                        id: 3
                    },
                ]
            }
        ],
        icon: 'FOLDER',
        id: 1
    },
    {
        tipo: 'file',
        title: 'index.html',
        icon: FILE_ICONS_NAMES.HTML,
        id: 4
    },
    {
        tipo: 'file',
        title: '.gitignore',
        icon: FILE_ICONS_NAMES.GITIGNORE,
        id: 5
    }
]