import React from "react";
import Comment from "./Comment";

 export const commentData = [
  {
    name: "Anonimous",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting",
    reply: [
      {
        name: "Anonimous",
        text:"Lorem Ipsum is simply dummy text of the printing and typesetting",
        reply: [
            {
                name: "Anonimous",
                text:"Lorem Ipsum is simply dummy text of the printing and typesetting",
                reply: [
                    {
                        name: "Anonimous",
                        text:"Lorem Ipsum is simply dummy text of the printing and typesetting",
                        reply: [
                            {
                                name: "Anonimous",
                                text:"Lorem Ipsum is simply dummy text of the printing and typesetting",
                                reply: [],
                              },
                        ],
                      },
                ],
              },
              {
                name: "Anonimous",
                text:"Lorem Ipsum is simply dummy text of the printing and typesetting",
                reply: [],
              },
        ],
      },
      {
        name: "Anonimous",
        text:"Lorem Ipsum is simply dummy text of the printing and typesetting",
        reply: [],
      },
      {
        name: "Anonimous",
        text:"Lorem Ipsum is simply dummy text of the printing and typesetting",
        reply: [],
      },
    ],
  },
  {
    name: "Anonimous",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting",
    reply: [
        {
            name: "Anonimous",
            text:"Lorem Ipsum is simply dummy text of the printing and typesetting",
            reply: [
                {
                    name: "Anonimous",
                    text:"Lorem Ipsum is simply dummy text of the printing and typesetting",
                    reply: [
                        {
                            name: "Anonimous",
                            text:"Lorem Ipsum is simply dummy text of the printing and typesetting",
                            reply: [],
                          },
                    ],
                  },
            ],
          },{
            name: "Anonimous",
            text:"Lorem Ipsum is simply dummy text of the printing and typesetting",
            reply: [],
          },
    ],
  },
  {
    name: "Anonimous",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting",
    reply: [],
  },
  {
    name: "Anonimous",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting",
    reply: [],
  },
];

const CommentRenderList = ({comments}) => {
    return (
        comments.map((item, index)=>(
            <div key={index} >
            <Comment data={item}/>
            <div className="ml-5 border border-l-black">
                <CommentRenderList comments={item.reply}/>
            </div>
            </div>
            
        ))
    );
}

const CommentList = () => {
  return <div>
    <CommentRenderList comments={commentData}/>
  </div>;
};

export default CommentList;
