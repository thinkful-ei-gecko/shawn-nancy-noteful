import React from 'react';
import { Link } from 'react-router-dom'
import Store from '../../Store/Store'
import 'normalize.css'



export default class FolderSection extends React.Component {

    render(){
       console.log(Store)
        return(
            <ul className="folderList">
                {Store.folders.map((folder) =>
        
                <li key={folder.id}>
                    
                    <Link to={`/folder/${folder.id}`}>{folder.name}</Link> 
                   
                </li>
                )}
               <button className="addFolder">Add folder</button>
            </ul>
        )
    }

}