import { Typography, Grid, Divider, Stack, Box, Avatar } from '@mui/material';
import { CalendarToday, FolderOpen, ChatBubbleOutline } from '@mui/icons-material';

function JournalistItem({ journalist }) {
    return (
        <Grid container direction="row" spacing={2}>
            <Box sx={{ width: '30%' }}>
            <Avatar sx={{bgcolor:'#DACCFF', color:'#352558', width: 70, height: 70}}>
                {journalist.first_name[0]} {journalist.last_name[0]}
            </Avatar>
            </Box>
            <Box sx={{ width: '80%' }}>
                <Typography variant="h5" color='secondary'>
                    {journalist.first_name} {journalist.last_name}
                </Typography >
                {journalist.years_of_exp} Years Experience
                <Typography color='secondary'>
                    Based in {journalist.city}, {journalist.state}
                </Typography>
            </Box>
            <Divider orientation="vertical" variant="middle" flexItem sx={{ color: '#352558' }} />
            <Typography color='secondary' variant="body1" sx={{fontSize:18}}>
                {journalist.description}
            </Typography>
            <Divider orientation="vertical" flexItem />
            <Stack justifyContent="space-around" spacing={2}>
                <CalendarToday sx={{ fontSize: 40, color: '#352558' }} />
                <ChatBubbleOutline sx={{ fontSize: 40, color: '#352558' }} />
                <FolderOpen sx={{ fontSize: 40, color: '#352558' }} />
            </Stack>
        </Grid>
    )
}

export default JournalistItem;