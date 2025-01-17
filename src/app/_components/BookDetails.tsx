"use client"
import { useReservation } from './ReservationContext'; 
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import { Book } from '../_lib/Types';

type BookDetailsProps = {
    book: Book;
  };
function BookDetails({book}:BookDetailsProps){

    const { id, name, description, image, genre, publisher, final_copies, author, price_reservation } = book;
  
    return (
        <div className='flex bg-white shadow-lg items-center rounded-lg p-4 gap-5'>
        <Card sx={{ width: 350, boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image={image || '/static/images/default-book.jpg'}
              alt="Book Image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                Genre: {genre}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                Author: {author}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                Publisher: {publisher}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                Final Copies: {final_copies}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                Price: {price_reservation}$
              </Typography>
            </CardContent>
          </CardActionArea>
  
   
            
        </Card>
        </div>

    )

}
export default BookDetails;
