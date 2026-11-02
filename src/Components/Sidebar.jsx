import {NavLink } from 'react-router-dom';
import './Sidebar.css';

export default function Sidebar(){

    return(
        <aside>
            <NavLink to='/'>Dashboard</NavLink>
            <NavLink to='/Utilisateurs'>Utilisateurs</NavLink>
            <NavLink to='/Posts'>Posts</NavLink>
            <NavLink to='/Commentaires'>Commentaires</NavLink>
            <NavLink to='/Taches'>Taches</NavLink>
        </aside>
    )


}