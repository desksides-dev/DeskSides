import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import JournalistItem from './JournalistItem';
import { Box, Card, Container, Typography, Stack } from '@mui/material';

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
        <Container maxWidth="lg">
            <Typography variant="h2" color="primary">
                {user.first_name} {user.last_name}
            </Typography>
            <Typography>
                Let's take this to the next level.
            </Typography>
            <Box
                component="img"
                sx={{ width: "7em", }}
                alt="down arrow"
                src="/images/down-arrow.svg"
            />
            <Stack spacing={3}>
            {journalists.map(journalist => (
                <Card key={journalist.id} sx={{padding:3}}>
                    <JournalistItem
                        journalist={journalist}
                    />
                </Card>
            ))}
            </Stack>
        </Container>
    )
}

export default JournalistsList;