import React, { useState, useEffect } from "react";
import { Grid, Button, Typography, IconButton } from "@material-ui/core";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { Link } from "react-router-dom";

const pages = {
    JOIN: "page.join",
    CREATE: "pages.create",
}

//functional component
export default function Info(props) {
    const [page, setPage] = useState(pages.JOIN);

    function joinInfo() {
        return "Get a room code, access with it and then pause or skip the music the host is listening to. Only if he gave the control...";
    }

    function createInfo() {
        return "Create a room with a code that then you can share with friends. Decide if they can change the music you are listening to. Set a minimum number of votes needed to do that.";
    }

    // useEffect(() => {
    //     console.log("ran")
    //     return () => console.log("cleanup");
    // });

    return (
        <Grid container spacing={1}>
            <Grid item xs={12} align="center">
                <Typography component="h4" variant="h4">
                    What is Spotify Room Control?
                </Typography>
            </Grid>
            <Grid item xs={12} align="center">
                <Typography variant="body1">
                    { page === pages.JOIN ? joinInfo() : createInfo()}
                </Typography>
            </Grid>
            <Grid item xs={12} align="center">
                <IconButton onClick={() => {page === pages.CREATE ? setPage(pages.JOIN) : setPage(pages.CREATE)}}>
                    {page === pages.CREATE ? <NavigateBeforeIcon /> : <NavigateNextIcon /> }
                </IconButton>
            </Grid>
            <Grid item xs={12} align="center">
                <Button color="secondary" variant="contained" to="/" component={Link}>
                    Back
                </Button>
            </Grid>
        </Grid>
    );
}
