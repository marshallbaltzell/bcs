import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Skeleton from '@material-ui/lab/Skeleton';
import ViewComfyIcon from '@material-ui/icons/ViewComfy';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    gridWrapper: {
        marginTop: theme.spacing(2),
    },
    icon: {
        verticalAlign: 'middle',
    },
}));

const Gallery = (props) => {
    const { height, grid } = props;
    const classes = useStyles();

    return (
        <>
            {grid !== 2 &&
                <Typography variant="button" color="secondary"><ViewComfyIcon className={classes.icon}/> Gallery</Typography>
            }
            
            <div className={classes.gridWrapper}>
                <div className="elfsight-app-8bd1689e-caec-4825-b841-35be739ddf43">
                    <GridList spacing={2} cellHeight={height} cols={grid}> 
                        {
                            [...new Array(12)].map((a, index) =>
                                <GridListTile key={index} style={{ "padding": "1px" }} cols={1} rows={1}>
                                    <Skeleton animation="wave" variant="rect" width={height - 1} height={height - 1} />
                                </GridListTile>
                            )
                        }
                    </GridList>
                </div>
            </div>
        </>
    );
}

export default Gallery;