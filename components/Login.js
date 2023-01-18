import React from 'react'
import {Box, Stack, FormControl, TextField} from '@mui/material'
import { CustomButton } from './custom/CustomButton'
const Login = (props) => {
    return(
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" height="100vh" bgcolor="primary.light">
            <Box width={400} bgcolor="white" borderRadius={5} p={10}>
            <form>
                <Stack rowGap={3}>
                    <FormControl>
                        <TextField label="E-mail"/>
                    </FormControl>
                    <FormControl>
                        <TextField label="Password" type="password"/>
                    </FormControl>
                    <FormControl>
                        <CustomButton varinat="contained" onClick={props.login}>Login</CustomButton>
                    </FormControl>
                </Stack>
            </form>
            </Box>
        </Box>
    )

}
export default Login;