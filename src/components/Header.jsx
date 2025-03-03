import React from 'react'
import "../css/header.css"
import Dropdown from '@mui/joy/Dropdown';
import IconButton from '@mui/joy/IconButton';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import MoreVert from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom';


function Header() {


    const navigate = useNavigate();


    return (
        <div className='headerMainContainer pe-4'>
            <div>
                <ul className='links d-none d-md-flex py-4'>
                    <li onClick={() => navigate("/")}>Anasayfa</li>
                    <li onClick={() => navigate("/about-me")}>Hakkımda</li>
                    <li onClick={() => navigate("/my-projects")}>Çalışmalarım</li>
                    <li onClick={() => navigate("/contact")}>İletişim</li>
                </ul>
            </div>
            <div className='d-flex d-md-none dropDown'>
                <Dropdown>
                    <MenuButton
                        slots={{ root: IconButton }}
                        slotProps={{
                            root: {
                                sx: {
                                    color: 'white',
                                    '&:hover': { color: 'white', backgroundColor: 'transparent' }
                                }
                            }
                        }}
                    >
                        <MoreVert sx={{ fontSize: '32px' }} />
                    </MenuButton>
                    <Menu style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", backdropFilter: "blur(10px)" }}>
                        <MenuItem
                            onClick={() => navigate("/")}
                            sx={{
                                color: "white",
                                fontSize: "20px",
                                "&:hover": { color: "white" }


                            }}
                        >
                            Anasayfa
                        </MenuItem>
                        <MenuItem
                            onClick={() => navigate("/about-me")}
                            sx={{
                                color: "white",
                                fontSize: "20px",
                                "&:hover": { color: "white" }
                            }}
                        >
                            Hakkımda
                        </MenuItem>
                        <MenuItem
                            onClick={() => navigate("/my-projects")}
                            sx={{
                                color: "white",
                                fontSize: "20px",
                                "&:hover": { color: "white" }
                            }}
                        >
                            Çalışmalarım
                        </MenuItem>
                        <MenuItem
                            onClick={() => navigate("/contact")}
                            sx={{
                                color: "white",
                                fontSize: "20px",
                                "&:hover": { color: "white" }
                            }}
                        >
                            İletişim
                        </MenuItem>
                    </Menu>
                </Dropdown>

            </div>
        </div>
    )
}

export default Header