import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import JournalistItem from './JournalistItem';
import { Box, Card, Grid, Container, Typography, Stack, Avatar } from '@mui/material';

function JournalistsList() {
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: 'GET_BRAND_JOURNALISTS' })
    }, []);

    const user = useSelector(store => store.user);
    const journalists = useSelector(store => store.brandJournalists);
    console.log('journalists:', journalists);

    return (
        <Box>
            <Stack alignItems="center">
            <Avatar sx={{bgcolor:'#FFAA45', 
                         color:'#DC4634', 
                         width: 70, 
                         height: 70, 
                         fontSize:32,
                         border: 1, 
                         borderColor: '#DC4634', 
                         padding: 3,
                         textTransform: 'uppercase',
                         marginTop:12}}>
                {user.first_name[0]}{user.last_name[0]}
            </Avatar>
                <Typography variant="h1" color="primary" sx={{mt:1}}>
                    {user.first_name} {user.last_name}
                </Typography>
                <Typography sx={{mt:2, fontSize:22}}>
                    Let's take this to the next level.
                </Typography>
                <Box
                    component="img"
                    sx={{ width: "5em", mt:10 }}
                    alt="down arrow"
                    src="/images/down-arrow.svg"
                />
            </Stack>
            <Box sx={{ backgroundColor: '#FFFBF8', paddingTop: 10, paddingBottom: 10, borderTop: "1px #546D1D solid", mt:10 }}>
                <Container>
                    <Stack spacing={3}>
                        {journalists.map(journalist => (
                            <Card
                                variant="outlined"
                                key={journalist.id}
                                sx={{ border: 1.4, borderColor: '#352558', pl:4, pt:3, pb:3, pr:0, backgroundColor: '#FFFBF8' }}
                            >
                                <JournalistItem
                                    journalist={journalist}
                                />
                            </Card>
                        ))}
                    </Stack>
                </Container>
            </Box>
        </Box>
    )
}

export default JournalistsList;