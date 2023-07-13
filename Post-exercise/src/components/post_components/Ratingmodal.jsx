import { Avatar, Box, Rating, Typography } from "@mui/material";
import { Component } from "react";
import { deepPurple } from "@mui/material/colors";

class Ratingmodal extends Component {
    handleRatingChange = (ratingId, newValue) => {
        this.props.onRatingChange(ratingId, newValue);
    }
    render() {
        return (
            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'flex-start', gap: '1rem', marginTop: '1rem'}}>
                {this.props.ratings.map((rating, index) => {
                    return (
                        <Box sx={{'& > legend': { mt: 2 }, display: 'flex', flexDirection: 'column', gap: '1rem'}} key={rating.id}>
                            <Box sx={{display: 'flex', gap: '0.5rem'}}>
                                <Avatar sx={{ bgcolor: deepPurple[500]}}>{rating.name.substring(0, 1) + rating.name.substring(rating.name.length - 1, rating.name.length)}</Avatar>
                                <Typography sx={{boxShadow: 1, backgroundColor: 'lightgrey', borderRadius: '8px', padding: '8px'}}>{rating.postComments}</Typography>
                            </Box>
                            <Rating
                                name={`half-rating-${rating.id}`}
                                defaultValue={2.5}
                                precision={0.25}
                                value={rating.rating}
                                onChange={(event, newValue) => {
                                    this.handleRatingChange(rating.id, newValue);
                                }}
                            />
                        </Box>     
                    )
                })}
            </Box>
        )
    }
}

export default Ratingmodal