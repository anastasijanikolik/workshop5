import { Box } from "@mui/material"
import CustomMenu from "./CustomMenu"

const Sidebar = (props) => {
    return(
        <Box flex="0 0 20" p={2} sx={{ display: {xs: "none", md: "flex"}}}>
            <Box position="fixed" display="flex" flexDirection="column" justifyContent="space-between">
                <CustomMenu logout={props.logout}/>
            </Box>
        </Box>
    )
}
export default Sidebar