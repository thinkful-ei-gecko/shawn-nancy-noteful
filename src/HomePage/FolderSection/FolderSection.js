import React from 'react';
import { Link } from 'react-router-dom'
import Store from '../../Store/Store'



export default class FolderSection extends React.Component {

    render(){
       console.log(Store)
        return(
            <ul className="folderList">
                {Store.folders.map((folder) =>
        
                <li key={folder.id}>
                    
                    <Link to={`/${folder.id}`}>{folder.name}</Link> 
                   
                </li>
                )}
               
            </ul>
        )
    }

}