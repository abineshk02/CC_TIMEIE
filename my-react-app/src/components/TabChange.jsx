import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState } from 'react';

export const TabChange = ({ handleChange }) => {
    const [value, setValue] = useState('OFFICE');
    const inTime = getCurrentTimeIn12HourFormat();

    function handleTabChange(event, newValue) {
        setValue(newValue);
    }

    const handleInTimeSubmit = () => {
        // Handle submission of in-time value
        console.log("In time submitted:", inTime);
    };
    function getCurrentTimeIn12HourFormat() {
        const date = new Date();
        let hours = date.getHours();
        const minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12; // Convert hours to 12-hour format
        return `${hours}:${minutes.toLocaleString('en-US', {minimumIntegerDigits: 2})} ${ampm}`;
    }
    return (
        <Box sx={{ width: '100%' }}>
            <Tabs
                value={value}
                onChange={handleTabChange}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
            >
                <Tab value="WFH" label="WFH" />
                <Tab value="OFFICE" label="OFFICE" />
                <Tab value="LEAVE" label="LEAVE" />
                <Tab value="Project Holiday" label="Project Holiday" />
            </Tabs>
            { 
                <Box sx={{ p: 2, bgcolor: 'background.paper' }}>
                    {value === 'OFFICE' && 
                        <div> 
                            <form onSubmit={handleInTimeSubmit}>
                                <label>
                                    In Time:
                                    <input 
                                        type="text" 
                                        value={inTime} 
                                     readOnly
                                    />
                                </label>
                                <button type="checkbox" onClick={handleInTimeSubmit}>Submit In Time</button>
            
                            </form>
                            <form>
                                <label>
                                    Out Time:
                                    <input 
                                        type="text" 
                                        value={inTime} 
                                     readOnly
                                    />
                                </label>
            
                            </form>
                            
                        </div>
                    }
                </Box>
            }
        </Box>
    );
};
