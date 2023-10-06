import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const ProductCard = ({ product,height }) => {
  return (
    <div style={{height: height}}>
      <div className='common-img'>
      <CardMedia
        component="img"
        alt={product.name}
        height="200"
        image={product.imageURL}
        title={product.name}
      />
      </div>
      <CardContent>
        <Typography variant="h6" component="div">
          {product.name}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {product.price}
        </Typography>
      </CardContent>
    </div>
  );
};

export default ProductCard;
