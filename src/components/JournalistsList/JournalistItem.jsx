import { Typography, Stack, Box } from '@mui/material';
import { CalendarToday, FolderOpen, ChatBubbleOutline } from '@mui/icons-material';

function JournalistItem({journalist}) {
    return (
        <Stack direction="row">
        <Typography>
            {journalist.first_name} {journalist.last_name}
        </Typography>
        <Typography>
            {journalist.description}
        </Typography>
        <Stack>
            <CalendarToday/>
            <ChatBubbleOutline/>
            <FolderOpen/>
        </Stack>
        </Stack>
    )
}

export default JournalistItem;