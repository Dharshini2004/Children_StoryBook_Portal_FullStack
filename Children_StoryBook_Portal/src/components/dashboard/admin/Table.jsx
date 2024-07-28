import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button, IconButton, Modal, Typography, TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function Table() {
    const [open, setOpen] = React.useState(false);
    const [editOpen, setEditOpen] = React.useState(false);
    const [rows, setRows] = React.useState([
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
        { id: 10, lastName: 'ma', firstName: 'gayu', age: 20 },
    ]);
    const [selectedRow, setSelectedRow] = React.useState(null);

    const handleClose = () => setOpen(false);
    const handleEditClose = () => setEditOpen(false);

    const handleDeleteClick = (row) => {
        setSelectedRow(row);
        setOpen(true);
    }

    const handleEditClick = (row) => {
        setSelectedRow(row);
        setEditOpen(true);
    }

    const handleDeleteConfirm = () => {
        setRows(rows.filter((row) => row.id !== selectedRow.id));
        setOpen(false);
    }

    const handleEditSave = () => {
        setRows(rows.map((row) => (row.id === selectedRow.id ? selectedRow : row)));
        setEditOpen(false);
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSelectedRow({ ...selectedRow, [name]: value });
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            width: 90,
        },
        {
            field: 'fullName',
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            // valueGetter: (params) => `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 150,
            renderCell: (params) => (
                <Box>
                    <IconButton
                        color="primary"
                        onClick={() => handleEditClick(params.row)}
                    >
                        <EditIcon />
                    </IconButton>
                    <IconButton
                        color="primary"
                        onClick={() => handleDeleteClick(params.row)}
                    >
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
        p: 4,
    };

    return (
        <>
            <div style={{ height: 400, width: '100%', backgroundColor: "lightblue" }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
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
            <Modal
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
                        label="First Name"
                        name="firstName"
                        value={selectedRow?.firstName || ''}
                        onChange={handleInputChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Last Name"
                        name="lastName"
                        value={selectedRow?.lastName || ''}
                        onChange={handleInputChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Age"
                        name="age"
                        type="number"
                        value={selectedRow?.age || ''}
                        onChange={handleInputChange}
                        fullWidth
                        margin="normal"
                    />
                    <Button onClick={handleEditSave}>Save</Button>
                </Box>
            </Modal>
        </>
    );
}

export default Table;


// import * as React from 'react';
// import { DataGrid } from '@mui/x-data-grid';
// import { Box, Button, IconButton, Modal, Typography } from '@mui/material';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';




// function Table() {
//     const [open, setOpen] = React.useState(false);
//     const handleClose = () => setOpen(false);
//     const handleDeleteClick=(row)=>
//     {
//         setOpen(true)
//     }
//     const columns = [
//         { field: 'id', headerName: 'ID', width: 70 },
//         { field: 'firstName', headerName: 'First name', width: 130 },
//         { field: 'lastName', headerName: 'Last name', width: 130 },
//         {
//           field: 'age',
//           headerName: 'Age',
//           type: 'number',
//           width: 90,
//         },
//         {
//           field: 'fullName',
//           headerName: 'Full name',
//           description: 'This column has a value getter and is not sortable.',
//           sortable: false,
//           width: 160,
//           valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
//         },
//         {
//           field:'actions',
//           headerName:'Actions',
//           width:150,
//           renderCell:(params)=>(
//               <Box>
//                   <IconButton
//                   color="primary"
//                   onClick={()=>handleEditClick(params.row)}
//                   >
//                       <EditIcon/>
//                   </IconButton>
//                   <IconButton
//                   color="primary"
//                   onClick={()=>handleDeleteClick(params.row)}
//                   >
//                       <DeleteIcon />
//                   </IconButton>
//               </Box>
//           )
//         }
//       ];
//       const rows = [
//         { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//         { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//         { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//         { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//         { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//         { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//         { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//         { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//         { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
//         { id: 10, lastName: 'ma', firstName: 'gayu', age: 20 },
//       ];
//       const style = {
//         position: 'absolute',
//         top: '50%',
//         left: '50%',
//         transform: 'translate(-50%, -50%)',
//         width: 400,
//         bgcolor: 'background.paper',
//         border: '2px solid #000',
//         boxShadow: 24,
//         p: 4,
//       };
      
//   return (
    
//     <>
//     <div style={{ height: 400, width: '100%',backgroundColor:"lightblue"}}>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         initialState={{
//           pagination: {
//             paginationModel: { page: 0, pageSize: 5 },
//           },
//         }}
//         pageSizeOptions={[5, 10]}
//         checkboxSelection
        
//       />
//     </div>
//     <Modal
//   open={open}
//   onClose={handleClose}
//   aria-labelledby="modal-modal-title"
//   aria-describedby="modal-modal-description"
// >
//   <Box sx={style}>
//     <Typography id="modal-modal-title" variant="h6" component="h2">
//       Are you want to delete this data?
//     </Typography>
//     {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//       Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//     </Typography> */}
//     <Button>Delete</Button>
//   </Box>
// </Modal>
//     </>
//   );
// }

// export default Table
