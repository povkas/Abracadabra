import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Button, Modal, Divider, Typography, Grid } from '@material-ui/core';
import Star from '@material-ui/icons/Star';
import ColorSelect from './ColorSelect';

function getModalStyle() {
  const top = 42;
  const left = 45;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: '30vw',
    minHeight: '50vh',
    maxHeight: '82vh',
    margin: '2vh',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none'
  },
  // added image styles
  image: {
    height: '24vmin',
    width: '24vmin'
  },
  star: {
    width: '2.4vmin',
    height: '2.4vmin',
    fill: '#000000'
  },
  divider: {
    margin: `${theme.spacing.unit * 2}px 0`
  }
});

class ProductModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      color: ''
    };
  }

  getColor = childColor => {
    // eslint-disable-next-line react/no-unused-state
    this.setState({ color: childColor });
  };

  render() {
    const { classes, openModal, handleClose, product } = this.props;

    return (
      <div>
        <Modal open={openModal} onClose={handleClose}>
          <div style={getModalStyle()} className={classes.paper}>
            <Grid container direction="row" justify="space-evenly" alignItems="center">
              <img
                src={`data:image/png;base64,${product.image}`}
                alt={product.title}
                className={classes.image}
              />
            </Grid>
            <Divider className={classes.divider} />
            <Grid container direction="row" alignItems="center" justify="space-around">
              <Grid item xs={4}>
                <Typography variant="h5">Cost: {product.price}€</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="h5">Rating:</Typography>
              </Grid>
              <Grid item xs={3}>
                <Button disableRipple>
                  <Star className={classes.star} />
                  <Star className={classes.star} />
                  <Star className={classes.star} />
                  <Star className={classes.star} />
                  <Star className={classes.star} />
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" onClick={this.handleToCart}>
                  <Typography variant="h6">Add to cart</Typography>
                </Button>
              </Grid>
            </Grid>
            <Divider className={classes.divider} />
            <Typography variant="h4">{product.title}</Typography>
            <Typography variant="h6">Description</Typography>
            <Typography align="justify">{product.description}</Typography>
            <Grid container direction="row" alignItems="center" justify="space-between">
              <ColorSelect getColor={this.getColor} />
              <Typography variant="h5">Amount: {product.quantity}</Typography>
            </Grid>
          </div>
        </Modal>
      </div>
    );
  }
}

ProductModal.propTypes = {
  classes: PropTypes.shape().isRequired
};

export default withStyles(styles)(ProductModal);
