import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import PublicIcon from '@mui/icons-material/Public';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { Search, SearchIconWrapper, StyledInputBase } from '../mui-styles/NavbarStyles';

class Navbar extends React.Component {
  render() {
    return (
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="fixed">
                    <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                    <Link to='/'> <PublicIcon /> </Link>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        MyWebsite
                    </Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                        <Button color="inherit">
                            <Link to='/register'> Register </Link>
                        </Button>
                        <Button color="inherit">
                            <Link to='/posts'> Posts </Link>
                        </Button>
                    </Toolbar>
                </AppBar>
            </Box>
        )
    }
}

export default Navbar