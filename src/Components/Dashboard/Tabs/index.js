import React, { useState } from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { ThemeProvider, createTheme } from '@mui/material';
import Grid from '../Grid';
import "./styles.css"

export default function TabsComponent({ coins }) {
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
   
    const theme = createTheme({
        palette: {
            primary:{
                main: "#3a80e9",
            },
        },
    });

    const style = {
        color: "var(--white)",
        fontSize: "1.2rem",
        fontWeight: "bold",
        textTransform: "capitalize",
    };

    return (
        <ThemeProvider theme={theme}>
            <TabContext value={value}>
                <TabList onChange={handleChange} variant='fullWidth'>
                    <Tab label="Grid" value="1" sx={style} />
                    <Tab label="List" value="2" sx={style} />
                </TabList>
                <TabPanel value="grid">
                    <div className='grid-flex'>
                        {coins.map((item, i) => {
                            return (
                               <Grid coin={item} key={i} />
                            );
                        })}
                    </div>
                </TabPanel>
                <TabPanel value="list">
                    <div>
                        {coins.map((item, i) => {
                            return (
                                <p key={i}>
                                    {i + 1} {item.id}
                                </p>
                            );
                        })}
                    </div>
                </TabPanel>
            </TabContext>
        </ThemeProvider>
    );
}