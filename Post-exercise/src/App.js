import { Component } from "react";
import Posts from "./components/post_components/Posts";
import { Box, Typography } from "@mui/material";

class App extends Component {
  render() {
    return (
      <Box>
        <Typography variant="h3" sx={{textAlign: 'center'}}>Post Page</Typography>
        <Posts />
      </Box>
    )
  }
}

export default App