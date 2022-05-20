import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { Container, Button, Box, InputLabel, TextField, Typography } from '@mui/material';

function BrandDetails() {
    const dispatch = useDispatch();
    const history = useHistory();

    const brandObj = {
        profile_image_link: '',
        calendar_link: '',
        payment_link: '',
        fileshare_link: '',
        brand_assets_link: ''
    }

    const [brand, setBrand] = useState(brandObj);

    const updateBrand = (event) => {
        event.preventDefault();
        console.log('brand:', brand);

        // TO-DO decide on appropriate dispatch type based on what's used in brand assessment 
        // dispatch({ type: 
        // })

        setBrand(brandObj);
    }

    //revisit once brand assessment is
    return (
        <Container>
            <Typography variant="h3">
                Tell us about your brand
            </Typography>
            <form onSubmit={updateBrand}>
                <Box>
                    <InputLabel htmlFor="profile image link" variant="standard" color="primary">Profile image link</InputLabel>
                    <TextField
                        type="text"
                        name="profile image link"
                        value={brand.profile_image_link}
                        color="info"
                        required
                        fullWidth
                        sx={{ backgroundColor: '#FFFFFF' }}
                        onChange={(event) => setBrand({ ...brand, profile_image_link: event.target.value })}
                    />
                </Box>
                <Box>
                <InputLabel htmlFor="calendar link" variant="standard" color="primary">Calendar link</InputLabel>
                    <TextField
                        type="text"
                        name="calendar link"
                        value={brand.calendar_link}
                        color="info"
                        required
                        fullWidth
                        sx={{ backgroundColor: '#FFFFFF' }}
                        onChange={(event) => setBrand({ ...brand, calendar_link: event.target.value })}
                    />
                </Box>
                <Box>
                <InputLabel htmlFor="file share link" variant="standard" color="primary">File share link</InputLabel>
                    <TextField
                        type="text"
                        name="file share link"
                        value={brand.fileshare_link}
                        color="info"
                        required
                        fullWidth
                        sx={{ backgroundColor: '#FFFFFF' }}
                        onChange={(event) => setBrand({ ...brand, fileshare_link: event.target.value })}
                    />
                </Box>
                <Box>
                <InputLabel htmlFor="file share link" variant="standard" color="primary">Brand assets link</InputLabel>
                    <TextField
                        type="text"
                        name="file share link"
                        value={brand.brand_assets_link}
                        color="info"
                        required
                        fullWidth
                        sx={{ backgroundColor: '#FFFFFF' }}
                        onChange={(event) => setBrand({ ...brand, brand_assets_link: event.target.value })}
                    />
                </Box>
                <Button
                    type="submit"
                    variant="text"
                    disableElevation
                    color="info"
                    size="large"
                    fullWidth={true}
                    sx={{ textTransform: 'none', fontSize: '1.6em' }}
                >
                    Submit
                </Button>
            </form>
        </Container>
    )
}

export default BrandDetails;