import React, { useEffect, useState } from 'react'
import axios from 'axios'


function Chartcontainer ()  {

const [posts, setPosts] = useState([]);

const fetchPosts = async() => {

    const reponsePosts =await axios.get('https://fakestoreapi.com/users');
    setPosts(reponsePosts.data);

   // fetch('https://jsonplaceholder.typicode.com/users').then(reponse => reponse.json()).then((json) => setPosts(json));
}

useEffect(() => {
    fetchPosts();
}, [])

 

  return (
    <>
    <div class="shadow-lg  overflow-hidden mx-4 md:mx-10">
    <table class="w-full table-fixed">
        <thead>
            <tr class="bg-[#262626]">
                <th class="w-1/4 py-4 px-6 text-left text-white font-bold uppercase">Name</th>
                <th class="w-1/4 py-4 px-6 text-left text-white font-bold uppercase">Email </th>
                <th class="w-1/4 py-4 px-6 text-left text-white font-bold uppercase">Comment</th>
            </tr>
        </thead>
        <tbody class="bg-white">
            <tr>
                <td class="py-4 px-6 border-b border-gray-200">{
                 posts.map((post, index) => 
                 <div key={index}>
                    {post.username}
                 </div>)
                }</td>
                <td class="py-4 px-6 border-b border-gray-200">{
                 posts.map((post, index) => 
                 <div key={index}>
                    {post.email}
                 </div>)
                }</td>
                <td class="py-4 px-6 border-b  border-gray-200 ">{
                 posts.map((post, index) => 
                 <div key={index}>
                    {post.name.firstname}
                 </div>)
                }</td>
                
            </tr>
        </tbody>
    </table>

    
</div>
    </>
  )
}
export default Chartcontainer