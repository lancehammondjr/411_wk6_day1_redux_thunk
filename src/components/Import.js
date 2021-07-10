import React from 'react'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem'
import IconButton from '@material-ui/core/IconButton'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Container, Button, Table, TableHead, TableBody, TableRow, TableCell } from "@material-ui/core";


const Import = (props) => {
    // fill out this component

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const ITEM_HEIGHT = 48;

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Container>
            <p>Import Component</p>
            <Button variant='contained' color='primary' onClick={props.fetchMakes}>Import</Button>
            <h2>COUNT: {props.makes.length}</h2>
            <Table>
                <TableHead>
                    <TableRow>
                        
                        <TableCell>Id</TableCell>
                        <TableCell>Make</TableCell>
                        <TableCell>Actions</TableCell>
                        
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.makes.map((make, index) => {
                        return (
                            <TableRow key={index}>
                                <TableCell>{make.MakeId}</TableCell>
                                <TableCell>{make.MakeName}</TableCell>
                                <TableCell>
                                <IconButton
                                    onClick={handleClick}
                                    aria-label="more"
                                    aria-controls="long-menu"
                                    aria-haspopup="true"
                                    >
                                        <MoreVertIcon />
                                    </IconButton>
                                    <Menu
                                        id="long-menu"
                                        anchorEl={anchorEl}
                                        keepMounted
                                        open={open}
                                        onClose={handleClose}
                                        PaperProps={{
                                            style: {
                                              maxHeight: ITEM_HEIGHT * 4.5,
                                              width: '10ch',
                                            },
                                          }}
                                    >
                                        <MenuItem onClick={props.deleteMake}>
                                            Delete
                                        </MenuItem>
                                    </Menu>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </Container>
    )
}

export default Import