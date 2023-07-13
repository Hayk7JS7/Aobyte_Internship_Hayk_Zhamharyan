import { Component } from "react";
import { posts } from "../../data/data";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Ratingmodal from "./Ratingmodal";
import MyPool from './my_pool/MyPool'
import { Card, CardContent, CardMedia } from "@mui/material";

class Posts extends Component {
    handleAvgRating = (posts) => {
        return posts.map(post => {
            const totalRating = post.comments.reduce((total, comment) => total + comment.rating, 0);
            return { ...post, avgRating: totalRating / post.comments.length };
        });
    }
    
    handleRatingChange = (ratingId, newValue) => {
        const newPosts = this.state.posts.map((post) => {
            const newRatings = post.comments.map((comment) => {
                if (comment.id === ratingId) {
                    return {
                        ...comment,
                        rating: newValue
                    };
                }
                return comment;
            });
    
            return {
                ...post,
                comments: newRatings
            };
        });
    
        this.setState({ posts: this.handleAvgRating(newPosts) });
    }
    
    state = { posts: posts }
    render() {
        return (
            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', gap: '4rem'}}>
                {this.state.posts.map((post, i) => {
                    return (
                        <Card key={post.id}>
                            <CardMedia component="img" height="200" image={post.imgUrl} alt="Image" />
                            <CardContent>
                                <Typography variant="h6" style={{ color: '#3f51b5', margin: '20px 0', fontWeight: 'bold' }}>
                                    {post.title}
                                </Typography>
                                <Typography component="legend">Comments:</Typography>
                                <Ratingmodal ratings={post.comments} onRatingChange={this.handleRatingChange} />
                            </CardContent>
                        </Card>
                    )
                })}
                <Box>
                    <MyPool />
                </Box>
            </Box>
        )
    }
}

export default Posts