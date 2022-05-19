import { Typography, Divider, Stack, Box } from '@mui/material';
import { CalendarToday, FolderOpen, ChatBubbleOutline } from '@mui/icons-material';

function JournalistItem({ journalist }) {
    return (
        <Stack direction="row" spacing={2}>
            <Box sx={{ backgroundColor: 'gray', width: '80%' }}>
                <Typography variant="h5">
                    {journalist.first_name} {journalist.last_name}
                </Typography>
                    {journalist.years_of_exp} Years Experience
                <Typography>
                    Based in {journalist.city}, {journalist.state}
                </Typography>
            </Box>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Typography>
                {journalist.description}
            </Typography>
            <Divider orientation="vertical" flexItem />
            <Stack>
                <CalendarToday />
                <ChatBubbleOutline />
                <FolderOpen />
            </Stack>
        </Stack>
    )
}

export default JournalistItem;