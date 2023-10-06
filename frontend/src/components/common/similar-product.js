import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const SimilarCard = ({ product,height }) => {
  return (
    <Card className='product-wrapper'>
        <div className='product-card'>
      <div className='image'>
      <CardMedia
        component="img"
        alt={product.name}
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
    </Card>
  );
};

export default SimilarCard;
