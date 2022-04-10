import React, {useEffect,useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';

export default function CharacterWidget() {
    const [characters, setCharacters] = useState([]);
    const [currentIndex, setCurrentIndex] =useState(0);
    const [currentCharacter, setCurrentCharater] = useState(undefined);

    useEffect(()=>{
        axios.get("http://localhost:8080/characters")
        .then(response => {
            const data = response.data;
            setCharacters(data);
            setCurrentCharater(data[0]);
        });
    },[]);

    const gotoNext = ()=> {
        const newIndex = currentIndex + 1;
        console.log(newIndex);
        if(newIndex > 19){
            setCurrentIndex(0);
            setCurrentCharater(characters[0]);
        }else{
            setCurrentIndex(newIndex);
            setCurrentCharater(characters[newIndex]);
        }
    }

    return (
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            component="img"
            height="300"
            image={currentCharacter?.image}
            alt="green iguana"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {currentCharacter?.name} 
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Gender: {currentCharacter?.gender} <br/>
            Location: {currentCharacter?.location.name}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small" onClick={gotoNext}>Next</Button>

        </CardActions>
        </Card>
    );
}
