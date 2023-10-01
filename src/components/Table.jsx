import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


const Tables = () => {

    // const rows = [
    //     {
    //         id: 1,
    //         name: 'Name of the Company',
    //         industry: 'software and appliances',
    //         pic: '/location.svg',
    //         location: 'VIC',
    //         search: " ",
    //         contact: ['/link.svg', 'linkedin.svg', 'files.svg']
    //     },
    //     {
    //         id: 2,
    //         name: 'Name of the Company',
    //         industry: 'software and appliances',
    //         pic: '/location.svg',
    //         location: 'VIC',
    //         search: " ",
    //         contact: ['/link.svg', 'linkedin.svg', 'files.svg']
    //     },
    //     {
    //         id: 3,
    //         name: 'Name of the Company',
    //         industry: 'software and appliances',
    //         pic: '/location.svg',
    //         location: 'VIC',
    //         search: " ",
    //         contact: ['/link.svg', 'linkedin.svg', 'files.svg']
    //     },
    //     {
    //         id: 4,
    //         name: 'Name of the Company',
    //         industry: 'software and appliances',
    //         pic: '/location.svg',
    //         location: 'VIC',
    //         search: " ",
    //         contact: ['/link.svg', 'linkedin.svg', 'files.svg']
    //     },
    //     {
    //         id: 5,
    //         name: 'Name of the Company',
    //         industry: 'software and appliances',
    //         pic: '/location.svg',
    //         location: 'VIC',
    //         search: " ",
    //         contact: ['/link.svg', 'linkedin.svg', 'files.svg']
    //     },
    //     {
    //         id: 6,
    //         name: 'Name of the Company',
    //         industry: 'software and appliances',
    //         pic: '/location.svg',
    //         location: 'VIC',
    //         search: " ",
    //         contact: ['/link.svg', 'linkedin.svg', 'files.svg']
    //     },
    //     {
    //         id: 7,
    //         name: 'Name of the Company',
    //         industry: 'software and appliances',
    //         pic: '/location.svg',
    //         location: 'VIC',
    //         search: " ",
    //         contact: ['/link.svg', 'linkedin.svg', 'files.svg']
    //     },
    //     {
    //         id: 8,
    //         name: 'Name of the Company',
    //         industry: 'software and appliances',
    //         pic: '/location.svg',
    //         location: 'VIC',
    //         search: " ",
    //         contact: ['/link.svg', 'linkedin.svg', 'files.svg']
    //     },
    //     {
    //         id: 9,
    //         name: 'Name of the Company',
    //         industry: 'software and appliances',
    //         pic: '/location.svg',
    //         location: 'VIC',
    //         search: " ",
    //         contact: ['/link.svg', 'linkedin.svg', 'files.svg']
    //     },

    // ]

    // const [selectAll, setSelectAll] = React.useState(false);
    // const [selectedRows, setSelectedRows] = React.useState([]);

    // const toggleSelectAll = () => {
    //     setSelectAll(!selectAll);
    //     if (!selectAll) {
    //         setSelectedRows(rows.map((row) => row.id));
    //     } else {
    //         setSelectedRows([]);
    //     }
    // };

    // const toggleRow = (id) => {
    //     const updatedSelectedRows = [...selectedRows];
    //     if (updatedSelectedRows.includes(id)) {
    //         updatedSelectedRows.splice(updatedSelectedRows.indexOf(id), 1);
    //     } else {
    //         updatedSelectedRows.push(id);
    //     }
    //     setSelectedRows(updatedSelectedRows);
    // };
    // return (
    //     <TableContainer className='table'>
    //         <Table sx={{ minWidth: 650 }} aria-label="simple table">
    //             <TableHead>
    //                 <TableRow className='table-head'>
    //                     <TableCell><input type="checkbox" name="" id="" checked={selectAll}
    //                         onChange={toggleSelectAll} /></TableCell>
    //                     <TableCell align="left">
    //                         <div className='table-head flex-bt'>
    //                             <div className='flex-sm'>
    //                                 <p>Name</p>
    //                                 <img src="/sort.svg" alt="" />
    //                             </div>
    //                             <img src="/find.svg" alt="" />
    //                         </div>
    //                     </TableCell>
    //                     <TableCell align="left">
    //                         <div className='flex-bt'>
    //                             <div className='flex-sm'>
    //                                 <p>Industry</p>
    //                                 <img src="/sort.svg" alt="" />
    //                             </div>
    //                             <img src="/find.svg" alt="" />
    //                         </div>
    //                     </TableCell>
    //                     <TableCell align="left">
    //                         <div className='flex-bt'>
    //                             <div className='flex-sm'>
    //                                 <p>Location</p>
    //                                 <img src="/sort.svg" alt="" />
    //                             </div>
    //                             <img src="/find.svg" alt="" />
    //                         </div>
    //                     </TableCell>
    //                     <TableCell align="center">
    //                         <p>Contact</p>
    //                     </TableCell>
    //                 </TableRow>
    //             </TableHead>
    //             <TableBody className='table-body'>
    //                 {rows.map((row) => (
    //                     <TableRow
    //                         key={row.name}
    //                         sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    //                     >
    //                         <TableCell align="left"><input type="checkbox" checked={selectedRows.includes(row.id)}
    //                             onChange={() => toggleRow(row.id)} name="" id="" /></TableCell>
    //                         <TableCell component="th" scope="row">
    //                             {row.name}
    //                         </TableCell>
    //                         <TableCell align="left">{row.industry}</TableCell>
    //                         <TableCell align="left"><img src={row.pic} alt="" /><p>{row.location}</p></TableCell>
    //                         <TableCell className='' align="center"><div className='flex'><img src={row.contact[0]} alt="" /><img src={row.contact[1]} alt="" /><img src={row.contact[2]} alt="" /></div></TableCell>
    //                     </TableRow>
    //                 ))}
    //             </TableBody>
    //         </Table>
    //     </TableContainer >
    // );

    const columns = [
        {
            field: 'name', headerName: (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span>Name</span>
                    <img src='/find.svg' alt='contact' style={{ marginLeft: '150px' }} />
                </div>
            ), width: 240, headerClassName: 'custom-header-class',
        },
        {
            field: 'industry', headerName: (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span>Industry</span>
                    <img src='/find.svg' alt='industry' style={{ marginLeft: '150px' }} />
                </div>
            ), width: 240, headerClassName: 'custom-header-class',
        },
        {
            field: 'location', headerName: (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span>Location</span>
                    <img src='/find.svg' alt='contact' style={{ marginLeft: '150px' }} />
                </div>
            ), width: 266, headerClassName: 'custom-header-class',
        },
        {
            field: 'contact', headerName: 'Contact', renderCell: (params) => (
                <div>
                    {params.value.map((src, index) => (
                        <img key={index} src={src} alt={`Contact${index}`} style={{ width: '24px', marginLeft: '8px', cursor: 'pointer' }} />
                    ))}
                </div>
            ),
            headerClassName: 'custom-header-class',
            // sortIcon: (
            //     <div style={{ display: 'flex', flexDirection: 'column' }}>
            //         <img src="/sort.svg" alt="Ascending Sort" style={{ width: '12px', }} />
            //         <img src="/sort.svg" alt="Descending Sort" style={{ width: '12px' }} />
            //     </div>
            // ),
        }
    ]

    const rows = [
        {
            id: 1,
            name: 'Name of the Company',
            industry: 'software and appliances',
            pic: '/location.svg',
            location: 'VIC',
            search: " ",
            contact: ['/link.svg', 'linkedin.svg', 'files.svg']
        },
        {
            id: 2,
            name: 'Name of the Company',
            industry: 'software and appliances',
            pic: '/location.svg',
            location: 'VIC',
            search: " ",
            contact: ['/link.svg', 'linkedin.svg', 'files.svg']
        },
        {
            id: 3,
            name: 'Name of the Company',
            industry: 'software and appliances',
            pic: '/location.svg',
            location: 'VIC',
            search: " ",
            contact: ['/link.svg', 'linkedin.svg', 'files.svg']
        },
        {
            id: 4,
            name: 'Name of the Company',
            industry: 'software and appliances',
            pic: '/location.svg',
            location: 'VIC',
            search: " ",
            contact: ['/link.svg', 'linkedin.svg', 'files.svg']
        },
        {
            id: 5,
            name: 'Name of the Company',
            industry: 'software and appliances',
            pic: '/location.svg',
            location: 'VIC',
            search: " ",
            contact: ['/link.svg', 'linkedin.svg', 'files.svg']
        },
        {
            id: 6,
            name: 'Name of the Company',
            industry: 'software and appliances',
            pic: '/location.svg',
            location: 'VIC',
            search: " ",
            contact: ['/link.svg', 'linkedin.svg', 'files.svg']
        },
        {
            id: 7,
            name: 'Name of the Company',
            industry: 'software and appliances',
            pic: '/location.svg',
            location: 'VIC',
            search: " ",
            contact: ['/link.svg', 'linkedin.svg', 'files.svg']
        },
        {
            id: 8,
            name: 'Name of the Company',
            industry: 'software and appliances',
            pic: '/location.svg',
            location: 'VIC',
            search: " ",
            contact: ['/link.svg', 'linkedin.svg', 'files.svg']
        },
        {
            id: 9,
            name: 'Name of the Company',
            industry: 'software and appliances',
            pic: '/location.svg',
            location: 'VIC',
            search: " ",
            contact: ['/link.svg', 'linkedin.svg', 'files.svg']
        },

    ]
    return (
        <div className='table'>

            <div style={{ height: 400, width: '100%' }}>
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
        </div>
    );
}

export default Tables
