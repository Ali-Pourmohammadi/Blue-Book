import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { Book } from '../_lib/Types';

type BookCardProp = {
  book: Book
}

export function BookCard({ book }: BookCardProp) {
  const { id, name, description, image, genre } = book;
  return (
    <Card 
      sx={{
        maxWidth: 300,
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
          cursor: 'pointer'
        }
      }}
    >
      <CardMedia
        sx={{ height: 300 }}
        image={image}
        title={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {genre}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <Link href={`books/${id}`}>More details</Link>
        </Button>
      </CardActions>
    </Card>
  );
}
