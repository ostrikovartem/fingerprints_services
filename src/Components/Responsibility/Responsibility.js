import React from 'react'
//import classes from './Responsibility.module.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Container from '@mui/material/Container';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {makeStyles} from '@mui/styles';

const useStyles = makeStyles({
    root: {
        flexGrow: 1
    },
    cardGrid: {
        marginTop: 20
    },
    cardContainer: {

    },
    gridItem: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    card: {

    }
});


const Responsibility = () => {

    const classes = useStyles();

    return(
        <Container className={classes.cardGrid} maxWidth="lg">
            <Grid container className={classes.cardContainer} spacing={10}>
                <Grid className={classes.gridItem} item xs={12} sm={8} md={4} lg={4}>
                    <Card className={classes.card} >
                        <CardContent className={classes.cardContent}>
                            <Typography variant="h5" gutterBottom>
                                Extend your team
                            </Typography>
                            <Typography variant="h6" gutterBottom>
                                Boost your development team with Fpsc dedicated specialists
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant="outlined" href="#">
                                Help me grow
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={8} md={4}>
                    <Card className={classes.card} >
                        <CardContent className={classes.cardContent}>
                            <Typography variant="h5" gutterBottom>
                                Build Your Idea from Scratch
                            </Typography>
                            <Typography variant="h6" gutterBottom>
                                Support your operations with a custom-built application
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant="outlined" href="#">
                                Build my product
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={8} md={4}>
                    <Card className={classes.card} >
                        <CardContent className={classes.cardContent}>
                            <Typography variant="h5" gutterBottom>
                                Manage your service
                            </Typography>
                            <Typography variant="h6" gutterBottom>
                                Free up your team’s time with our Managed Support and Security Services
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant="outlined" href="#">
                                Scale my business
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Container>

)}

export default Responsibility