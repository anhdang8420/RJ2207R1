
import axios from 'axios';
export async function getStaticProps() {
    const MY_API_KEY = 'ee6de521fda3d6518c1c40e36c8ccb7a';
    const res = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=hanoi&appid=' + MY_API_KEY);
    return {
        props: {
            weatherInfo: res.data
        }
    }
}

export default function Weather({ weatherInfo }) {
    console.log(weatherInfo);
    return (
        <div className='container '>
            {/* C = 5/9 *(F-32) */}
            <p>Địa điểm: {weatherInfo.name} - {weatherInfo.sys.country}</p>
            <p>Nhiet do: { (weatherInfo.main.temp-273)} </p> 
        </div>
    )
}