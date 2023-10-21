import { Grid, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <div>
            <Grid className='bg-black text-white text-center mt-10'
                container sx={{ bgcolor: "black", color: "white", py: 3 }}>

                <Grid item xs={12} sm={6} md={3}>
                        <Typography>Company</Typography>
                </Grid> 
            </Grid>
        </div>
    )
}

export default Footer;