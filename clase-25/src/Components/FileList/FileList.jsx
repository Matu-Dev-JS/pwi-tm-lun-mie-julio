import React, { useState } from 'react'
import './FileList.css'

const FileList = (props) => {
   
    const files = props.files
    const [openList, setOpenList] = useState(false)

    const handleToggleList = () => {
        setOpenList(!openList)
    }
    
    const filesListJSX = files.map((item) => {
        return (
            <div key={item.id} className='file-list'>
                {
                    item.tipo === 'folder' 
                    ?<button onClick={handleToggleList}>{item.title}</button>
                    :<span>{item.title}</span>
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