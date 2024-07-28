import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button, IconButton, Modal, Typography, TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function UserTable() {
    const [open, setOpen] = React.useState(false);
    const [editOpen, setEditOpen] = React.useState(false);
    const [rows, setRows] = React.useState([
        { id: 1, book: 'Little Krishna', author: 'Vilas Shubha', price: 199 },
        { id: 2, book: 'Agbar and Birbal', author: 'Yamini Rachna Bhola', price: 399.99 },
        { id: 3, book: 'The Rich Man and the Monkey', author: 'Idries Shah', price: 200 },
        { id: 4, book: '108 Panchatantra Stories Book', author: 'Om Books Editorial Team', price: 399.99 },
        { id: 5, book: 'The Magic of the Lost Story', author: 'Sudha Murty', price: 522 },
        { id: 6, book: 'Stories of Tenali Raman', author: 'Meena Arora', price: 399.99 },
        { id: 7, book: 'Being Frank', author: 'Donna W. Earnhardt', price: 788 }
    ]);
    const [selectedRow, setSelectedRow] = React.useState(null);

    const handleClose = () => setOpen(false);
    const handleEditClose = () => setEditOpen(false);

    const handleDeleteClick = (row) => {
        setSelectedRow(row);
        setOpen(true);
    };

    const handleEditClick = (row) => {
        setSelectedRow(row);
        setEditOpen(true);
    };

    const handleDeleteConfirm = () => {
        setRows(rows.filter((row) => row.id !== selectedRow.id));
        setOpen(false);
    };

    const handleEditSave = () => {
        setRows(rows.map((row) => (row.id === selectedRow.id ? selectedRow : row)));
        setEditOpen(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSelectedRow({ ...selectedRow, [name]: value });
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'book', headerName: 'Book Name', width: 130 },
        { field: 'author', headerName: 'Author Name', width: 130 },
        { field: 'price', headerName: 'Price', type: 'number', width: 90 },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 150,
            renderCell: (params) => (
                <Box>
                    {/* <IconButton color="primary" onClick={() => handleEditClick(params.row)}>
                        <EditIcon />
                    </IconButton> */}
                    <IconButton color="primary" onClick={() => handleDeleteClick(params.row)}>
                        <DeleteIcon />
                    </IconButton>
                </Box>
            )
        }
    ];

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4
    };

    return (
        <>
            <div style={{ height: 400, width: '100%', backgroundColor: 'lightblue' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 }
                        }
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                />
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Are you sure you want to delete this data?
                    </Typography>
                    <Button onClick={handleDeleteConfirm}>Delete</Button>
                </Box>
            </Modal>
            {/* <Modal
                open={editOpen}
                onClose={handleEditClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Edit Row
                    </Typography>
                    <TextField
                        label="Book Name"
                        name="book"
                        value={selectedRow?.book || ''}
                        onChange={handleInputChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Author Name"
                        name="author"
                        value={selectedRow?.author || ''}
                        onChange={handleInputChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Price"
                        name="price"
                        type="number"
                        value={selectedRow?.price || ''}
                        onChange={handleInputChange}
                        fullWidth
                        margin="normal"
                    />
                    <Button onClick={handleEditSave}>Save</Button>
                </Box>
            </Modal> */}
        </>
    );
}

export default UserTable;
