import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Book } from '../_lib/Types';
import Link from 'next/link';
type BookCardProp= {
book: Book
}
export  function BookCard({book}:BookCardProp) {
  console.log(book);
  const {id , name ,  description , image } = book
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
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