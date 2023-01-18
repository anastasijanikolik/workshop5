import { Stack } from "@mui/system"
import AppHeader from "./AppHeader"
import Feed from "./Feed"
import Sidebar from "./Sidebar"

const MainContent = (props) => {
    return(
        <>
        <AppHeader/>
        <Stack direction="row" sx={{ spacing: {xs: 2, md: 30}}} justifyContent="flex-start" height="100%" margin={0} bgcolor="background.default"> 
            <Sidebar logout={props.logout}/>
            <Feed/>
        </Stack>
        </>
    )
}
export default MainContent