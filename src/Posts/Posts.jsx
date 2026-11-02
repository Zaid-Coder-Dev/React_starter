import UseAxios from '../UseAxios'
import PostList from './Composants/PostList'
import {useState} from 'react'
export default function Posts(){
const posts = UseAxios('https://jsonplaceholder.typicode.com/posts')
    return(
        <div>
                <PostList posts={posts}/>
        </div>
    )

}