
import './list.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function List(props) {
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('all');
    const [tri, setTri] = useState('asc');

    function reset() {
        setSearch('');
        setFilter('all');
        setTri('asc');
    }

    const users = props.users
        .filter(user =>
            filter === 'all' ||
            (filter === 'withCompany' && user.company.name) ||
            (filter === 'withoutCompany' && !user.company.name)
        )
        .filter(user =>
            user.email.toLowerCase().includes(search.toLowerCase()) ||
            user.phone.toLowerCase().includes(search.toLowerCase())
        )
        .sort((a, b) => tri === 'asc' ? a.id - b.id : b.id - a.id);

    return (
        <div className="users-table-container">
            <table className="users-table">
                <thead>
                    <tr>
                        <th colSpan={3}>
                            <div className="table-toolbar">
                                <input
                                    type="text"
                                    placeholder="Search email or phone..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />

                                <select
                                    value={filter}
                                    onChange={(e) => setFilter(e.target.value)}
                                >
                                    <option value="all">All companies</option>
                                    <option value="withCompany">With company</option>
                                    <option value="withoutCompany">Without company</option>
                                </select>

                                <select
                                    value={tri}
                                    onChange={(e) => setTri(e.target.value)}
                                >
                                    <option value="asc">ID ascending</option>
                                    <option value="desc">ID descending</option>
                                </select>

                                <button onClick={reset} className="reset-btn">
                                    Reset
                                </button>
                            </div>
                        </th>
                    </tr>

                    <tr>
                        <th>E-MAIL</th>
                        <th>TÉLÉPHONE</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>
                                <div className="table-actions">
                                    <Link
                                        to={`/utilisateurs/${user.id}/Form`}
                                        className="edit-btn"
                                        title="Edit"
                                    >
                                        ✎
                                    </Link>

                                    <button
                                        className="delete-btn"
                                        title="Delete"
                                        onClick={() => props.supprimer(user.id)}
                                    >
                                        ×
                                    </button>

                                    <Link
                                        to={`/utilisateurs/${user.id}/Details`}
                                        className="view-btn"
                                        title="View details"
                                    >
                                        ⌕
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    ))}

                    {users.length === 0 && (
                        <tr>
                            <td colSpan={3} className="empty-result">
                                No users found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
