import useClock from "../hooks/MyClock";

export default function ClockDemo(){
    const [time] = useClock();
    return (
        <div className="container pt-3" >
            <h2>Đồng hồ: </h2>
            <span class="badge bg-success">{time}</span>
        </div>
    )
}