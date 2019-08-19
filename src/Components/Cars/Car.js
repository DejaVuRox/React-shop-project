import React from 'react'
// import './cars.css'
import {CardImg} from 'reactstrap';
import AddOrRemove from '../Button/AddOrRemove'

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
}


const Carlist = (props) => {
    const car = props.car;
      const classes = useStyles

    return (
        (car).map(cars => {
            return (
              <div className="Cars">
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                      >
                        {cars.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        Description: {cars.description}
                        <br />
                        Price: {cars.price}
                        <br />
                      </Typography>
                    </CardContent>
                    <CardImg
                      src={cars.img}
                      width="255px"
                      height="140px"
                    />
                    <AddOrRemove
                      removed={() => props.removeCar(cars.name)}
                      added={() => props.addCar(cars.name)}
                    />
                  </CardActionArea>
                </Card>
              </div>
            );
        })
    )
}
export default Carlist
