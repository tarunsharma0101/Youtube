import React from 'react'
import { HiUserCircle } from "react-icons/hi2";


const commentData = [
    {
        name: "Tarun Sharma",
        text: "I am a Comment",
        replies: [
            {
                name: "Tarun Sharma",
                text: "I am a Comment",
                replies: [
        
                ]
            },

        ]
    },
    {
        name: "Tarun Sharma",
        text: "I am a Comment",
        replies: [

        ]
    },
    {
        name: "Tarun Sharma",
        text: "I am a Comment",
        replies: [

        ]
    },
    {
        name: "Tarun Sharma",
        text: "I am a Comment",
        replies: [

        ]
    },
    {
        name: "Tarun Sharma",
        text: "I am a Comment",
        replies: [

        ]
    },
];

const Comment = ({data}) => {
    const { name, text, replies} = data
    return (
        <div className='text-white flex mt-2 bg-zinc-700 p-2 rounded-lg'>
           <div><HiUserCircle className='text-5xl'/></div> 
           <div className='px-3'>
                <p className='font-bold'>{name}</p>
                <p className='italic'>{text}</p>
           </div>
        </div>
    )
}

const CommentsList = ({comments}) => {
    return comments.map((comment, index) => <Comment data={comment}/>)
}

const CommentsContainer = () => {
  return (
    <div className='mx-6 py-4'>
        <h1 className='text-2xl font-bold'>Comments</h1>
        <CommentsList comments={commentData}/>
    </div>
  )
}

export default CommentsContainer