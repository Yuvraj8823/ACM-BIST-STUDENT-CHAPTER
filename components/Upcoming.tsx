import upcoming from '../pages/api/upcoming'
import Cards from './Cards'

export default function Upcoming(){
    return(<>
    <div className="py-10 flex justify-center flex-wrap">
        {
            upcoming.map(value=> <Cards img={value.img} name={value.name} date={value.date}/>
            )
            
        }
    </div>
    </>)
}