import React, { useState } from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export default function TabsComponent() {
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const style ={
        color: "var(--white)",
        fontSize:"1.2rem",
        fontWeight: "bold",
        textTransform: "capitalize",
    };

    return (
        <TabContext value={value}>
            <TabList onChange={handleChange} variant='fullWidth'>
                <Tab label="Grid" value="1" sx={style}/>
                <Tab label="List" value="2" sx={style}/>
            </TabList>
            <TabPanel value="grid">Item One</TabPanel>
            <TabPanel value="list">Item Two</TabPanel>
        </TabContext>
    );
}