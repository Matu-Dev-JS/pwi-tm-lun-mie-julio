import { LiaJsSquare } from "react-icons/lia"
import { FaCss3Alt, FaHtml5, FaFolder  } from "react-icons/fa";
import { BsFiletypeJsx } from "react-icons/bs";
import { SiGitignoredotio } from "react-icons/si";



const FILE_ICONS_NAMES = {
    'JS': 'JS',
    'CSS': 'CSS',
    'JSX': 'JSX',
    'HTML': 'HTML',
    'FOLDER': 'FOLDER',
    'GITIGNORE': 'GITIGNORE',
    'PNG': 'PNG'
}

//Mapa de iconos componetizados
const FILE_ICONS = {
    [FILE_ICONS_NAMES.JS]: LiaJsSquare,
    [FILE_ICONS_NAMES.CSS]: FaCss3Alt,
    [FILE_ICONS_NAMES.JSX]: BsFiletypeJsx,
    [FILE_ICONS_NAMES.HTML]: FaHtml5,
    [FILE_ICONS_NAMES.FOLDER]: FaFolder,
    [FILE_ICONS_NAMES.GITIGNORE]: SiGitignoredotio,
    [FILE_ICONS_NAMES.PNG]: FaFolder
}

export {FILE_ICONS, FILE_ICONS_NAMES}