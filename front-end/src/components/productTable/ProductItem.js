import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Styles from './Styles';

function ProductItem(props) {
  const { classes, product, selectProduct } = props;
  return (
    <Grid item>
      <Paper className={classes.paper} component="div" onClick={selectProduct}>
        <img
          src={`data:image/png;base64,${product.image}`}
          alt={product.title}
          className={classes.image}
        />
        <Divider />
        <b>
          {product.title}
          <span className={classes.price}>{product.price}€</span>
        </b>
      </Paper>
    </Grid>
  );
}

ProductItem.propTypes = {
  classes: PropTypes.shape().isRequired,
  product: PropTypes.shape().isRequired,
  selectProduct: PropTypes.func.isRequired
};

export default withStyles(Styles)(ProductItem);
