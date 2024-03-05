import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import "./InfoBox.css";

export default function InfoBox({info}) {
    const Init_url="https://images.unsplash.com/photo-1542923910-f391dea9f674?q=80&w=2728&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const Hot_url ="https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const Cold_url ="https://images.unsplash.com/photo-1611659179711-b679d3f7e394?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const Rain_url="https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?q=80&w=2448&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return(
        <div className="InfoBox">
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 500 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity > 80 ? Rain_url : info.temp > 15 ? Hot_url : Cold_url}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city} {
                                info.humidity > 80 ? <ThunderstormIcon /> :
                                    info.temp > 15 ? <WbSunnyIcon /> : <AcUnitIcon />
                            }
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component={"span"}>
                            <p>Temperature={info.temp}&deg;C</p>
                            <p>Min_temperature={info.tempMin}&deg;C</p>
                            <p>Max_temperature={info.tempMax}&deg;C</p>
                            <p>Humidity={info.humidity}</p>
                            <p>Pressure={info.pressure}</p>
                            <p>Weather={info.weather}</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
