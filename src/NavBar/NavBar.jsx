import { Box, Grid2, List, ListItem } from "@mui/material";

const NavBar = () => {

    return (
        <Grid2 container justifyContent={"center"}>
            <Grid2 container flexGrow={1} border={1} justifyContent={"space-between"} alignItems={"center"} spacing={2} maxWidth={"900px"} >
                <Box pl={4}>
                    <h1>Logo</h1>
                </Box>
                <Box component="nav">
                    <List sx={{ display: 'flex' }}>
                        <ListItem sx={{ border: 1, padding: 1 }} ><a href="/home">Home</a></ListItem>
                        <ListItem><a href="/about">About</a></ListItem>
                        <ListItem><a href="/contact">Contact</a></ListItem>
                    </List>
                </Box>
            </Grid2>
        </Grid2>
    )
}

export default NavBar;