    import React, { useState } from "react";
    import {data} from './Data';

    function Quiz() {
        
        
        const [que,setQua] = useState(data);
        const [index,setIndex] = useState(0);
        const [score,setScore] = useState(0);
        const [showscore,setShowscore] = useState(false)

        const next = ()=>{
            if(index < que.length-1){
                setIndex(index+1)
            }
            else{
                setShowscore(true);
            }
        
        }
        const handleInput = (e)=>{
            let chooseVal = e.target.value;
            console.log(chooseVal)
            if(chooseVal === data[index].ans){
                setScore(score+1)
            }
        }
        

        console.log(score)
        

    return (
        <>
        <div className="w-90 md:w-1/2  bg-white p-4 rounded-xl">
            <h1 className="text-2xl text-center mb-8">Quiz app</h1>
            <div>
                <div className={`app m-2 ${showscore ? "hidden" : "block"}`}>
            <h1 className="text-2xl m-4 font-bold">{index+1}. {que[index].q}</h1>
            <div className="flex gap-4 text-xl my-4 mx-6 items-center ">
                <input className="w-5 h-5" onChange={handleInput} value={que[index].a}  type="radio" name="select" id="" />
                <p>{data[index].a}</p>  
            </div>
            <div className="flex gap-4 text-xl my-4 mx-6 items-center">
                <input className="clackedVal w-5 h-5" onChange={handleInput} value={que[index].b}  type="radio" name="select" id="" />
                <p>{data[index].b}</p>
            </div>
            <div className=" flex gap-4 text-xl my-4 mx-6 items-center">
                <input className="clackedVal w-5 h-5" onChange={handleInput} value={que[index].c} type="radio" name="select" id="" />
                <p>{data[index].c}</p>
            </div>
            <div className="flex gap-4 text-xl my-4 mx-6 items-center">
                <input className="clackedVal w-5 h-5" onChange={handleInput} value={que[index].d} type="radio" name="select" id="" />
                <p>{data[index].d}</p>
            </div>
            
            </div>
            <div>
                <p className={`text-center text-2xl font-bold  ${showscore ? "block" : "hidden"}`}>🎉 Your Score is {score} out of {data.length}</p>
                
            </div>
            </div>
            <div className="flex items-center justify-center">
                <button onClick={next} className="px-6 py-3 bg-blue-500 rounded text-xl">Next</button>
            </div>
        </div>
        </>
    );
    }

    export default Quiz;
