import { useState } from 'react';
import './Products.scss';
import DataTable from '../../components/dataTable/DataTable';
import Add from '../../components/add/Add';
import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

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


const Products = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='products'>
            <div className="info">
                <h1>Users</h1>
                <button onClick={() => setOpen(true)}>Add New Products</button>
            </div>
            <DataTable slug='products' columns={columns} rows={userRows} />
            {open && <Add slug='product' columns={columns} setOpen={setOpen} />}
        </div>
    )
}

export default Products