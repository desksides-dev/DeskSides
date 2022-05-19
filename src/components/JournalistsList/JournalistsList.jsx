import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import JournalistItem from './JournalistItem';
import { Box, Card, Typography, Stack } from '@mui/material';

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
            <Typography variant="h2" color="primary">
                {user.first_name} {user.last_name}
            </Typography>
            <Typography>
                Let's take this to the next level.
            </Typography>
            <Box
                component="img"
                sx={{ height: "5em", width: "11em", }}
                alt="down arrow"
                src="/images/down-arrow.svg"
            />
            <Stack spacing={3}>
            {journalists.map(journalist => (
                <Card key={journalist.id}>
                    <JournalistItem
                        journalist={journalist}
                    />
                </Card>
            ))}
            </Stack>
        </Box>
    )
}

export default JournalistsList;