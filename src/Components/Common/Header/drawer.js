import * as React from 'react';
import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { IconButton } from '@mui/material';

export default function TemporaryDrawer() {
    
    const [open, setOpen] = useState(false);
    return (
        <div>
            <IconButton onClick={()=> setOpen(true)}><MenuRoundedIcon/></IconButton>
            <Drawer anchor={"right"} open={setOpen(true)}
                onClose={()=> setOpen(false)}
            >
            </Drawer>
        <div className='drawer-div'>
        <a href='./'>
          <p className='link'>Home</p>
          </a>
          <a href='./'>
          <p className='link'>Compare</p>
          </a>
          <a href='./'>c
          <p className='link'>Watchlist</p>
          </a>
          <a href='./'>
          <p className='link'>Dashboard</p>
          </a>

      </div>
            <h1>Hii</h1>
            
       </div>
    );
}