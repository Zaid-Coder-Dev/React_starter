import UseAxios from '../UseAxios'
// import PostList from './Composants/PostList'
export default function Taches(){
const posts = UseAxios('https://jsonplaceholder.typicode.com/users')
    return(
        <div>
                {console.log(posts)}
        </div>
    )

}