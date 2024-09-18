import React, { useState } from 'react'
import './FileList.css'
import { FILE_ICONS } from '../../utils/constants'

const FileList = (props) => {
   
    const files = props.files
    const [openList, setOpenList] = useState(false)

    const handleToggleList = () => {
        setOpenList(!openList)
    }
    
    const filesListJSX = files.map((item) => {
        //Icon es un componente
        const Icon = FILE_ICONS[item.icon]

        return (
            <div key={item.id} className='file-list'>
                {
                    item.tipo === 'folder' 
                    ?<button  onClick={handleToggleList}> <Icon/> {item.title}</button>
                    :<span> <Icon/> {item.title}</span>
                }
                
                {
                    (item.tipo === 'folder' && openList) && 
                    <FileList files={item.archives}/>
                }
            </div>
        )
    }) 
    

    return (
        <div>
            {
                filesListJSX
            }
        </div>
    )
}


 /* <div className='file-list'>
                        {
                            item.archives.map(
                                (item) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title}
                                        </div>
                                    )
                                }
                            )
                        }
                    </div> */
export default FileList