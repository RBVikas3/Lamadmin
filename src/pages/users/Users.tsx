import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import DataTable from '../../components/dataTable/DataTable';
import './Users.scss';
import { userRows } from '../../data';
import { useState } from 'react';
import Add from '../../components/add/Add';



const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'img', headerName: 'Avatar', width: 100,
        renderCell: (params) => {
            return <img src={params.row.img || '/noavatar.png'} alt="" />
        }
    },
    {
        field: 'actions', headerName: 'Actions', width: 100,
        renderCell: (params) => {
            return <div className="acton">
                <div className="view">View</div>
                <div className="delete">Delete</div>
            </div>
        }
    },
    {
        field: 'status', headerName: 'status', width: 100, type: 'boolean'
    },
    {
        field: 'firstName',
        headerName: 'First name',
        width: 100,
        editable: true,
    },
    {
        field: 'lastName',
        headerName: 'Last name',
        width: 100,
        editable: true,
    },
    {
        field: 'email',
        headerName: 'email',
        type: 'string',
        width: 150,
        editable: true,
    },
    {
        field: 'verified',
        headerName: 'verified',
        type: 'boolean',
        width: 90,
        editable: true,
    },
    {
        field: 'createdAt',
        headerName: 'Created At',
        type: 'number',
        width: 150,
        editable: true,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 100,
        valueGetter: (params: GridValueGetterParams) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
];

// const rows = [
//     { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14, status: true },
//     { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
//     { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
//     { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
//     { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//     { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//     { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//     { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

const Users = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='users'>
            <div className="info">
                <h1>Users</h1>
                <button onClick={() => setOpen(true)}>Add New User</button>
            </div>
            <DataTable slug='users' columns={columns} rows={userRows} />
            {open && <Add slug='user' columns={columns} setOpen={setOpen} />}
        </div>
    )
}

export default Users