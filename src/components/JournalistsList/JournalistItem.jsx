import { Typography, IconButton, CardActions, Grid, Divider, Stack, Box, Avatar } from '@mui/material';
import { CalendarToday, FolderOpen, ChatBubbleOutline } from '@mui/icons-material';

function JournalistItem({ journalist }) {
    return (
        <Grid container direction="row" spacing={2} columns={{ xs: 100 }}>
            <Grid item xs={10} display="flex" alignItems="center">
                <Avatar sx={{
                    bgcolor: '#DACCFF',
                    color: '#352558',
                    width: 90,
                    height: 90,
                    fontSize: 38,
                    border: 1,
                    borderColor: '#352558',
                    padding: 3,
                    textTransform: 'uppercase',
                }}>
                    {journalist.first_name[0]}{journalist.last_name[0]}
                </Avatar>
            </Grid>
            <Grid item xs={22} display="flex" alignItems="center" sx={{ ml: 1 }}>
                <Box>
                    <Typography variant="h5" color='secondary' sx={{ fontSize: 28, mb: 0.6 }}>
                        {journalist.first_name} {journalist.last_name}
                    </Typography >

                    <Typography color='secondary' sx={{ fontSize: 19, mb: 0.6 }}>
                        {journalist.years_of_exp} Years Experience
                    </Typography>
                    <Typography color='secondary' sx={{ fontSize: 19, mb: 0.6 }}>
                        Based in {journalist.city}, {journalist.state}
                    </Typography>
                </Box>
            </Grid>
            <Divider orientation="vertical" variant="middle" flexItem sx={{ margin: 1, bgcolor: "secondary.light" }} />
            <Grid item xs={54}>
                <Typography color='secondary' variant="body1" sx={{ fontSize: 19, mt:2 }}>
                    {journalist.description}
                </Typography>
            </Grid>
            <Divider orientation="vertical" variant="middle" flexItem sx={{ marginLeft: 1, bgcolor: "secondary.light"}} />
            <Grid item>
                <CardActions>
                    <Stack justifyContent="space-around" >
                        <IconButton sx={{padding:2}}>
                            <Box
                                component="img"
                                sx={{ width: "1.7em" }}
                                alt="calendar icon"
                                src="/images/calendar-icon.svg"
                            />
                        </IconButton>
                        <IconButton sx={{padding:2}}>
                        <Box
                                component="img"
                                sx={{ width: "1.7em" }}
                                alt="message icon"
                                src="/images/message-icon.svg"
                            />
                        </IconButton>
                        <IconButton sx={{padding:2}}>
                        <Box
                                component="img"
                                sx={{ width: "1.7em" }}
                                alt="folder icon"
                                src="/images/folder-icon.svg"
                            />
                        </IconButton>
                    </Stack>
                </CardActions>
            </Grid>
        </Grid>
    )
}

export default JournalistItem;