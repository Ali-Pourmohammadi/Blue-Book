import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Book } from '../_lib/Types';
import Link from 'next/link';
import { log } from 'console';
type BookCardProp= {
book: Book
}
export  function BookCard({book}:BookCardProp) {
  const {id , name ,  description , image , genre } = book
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        sx={{ height: 300 }}
        image={image}
        title="green iguana"
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
        <Link href={`book/${id}`}>More details</Link>
                  </Button>
      </CardActions>
    </Card>
  );
}
