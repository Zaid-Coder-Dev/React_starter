import UseAxios from './UseAxios';

export default function TestAxios(){
    const[data]=UseAxios("https://jsonplaceholder.typicode.com/users")
return(

    <div>
        {data && data.map(item =>
             <p key={item.id}>{item.email}</p>
        )}
    </div>
)
}

