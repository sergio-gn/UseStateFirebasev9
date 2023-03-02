import React, { useState, useEffect } from 'react';
import {db} from '../firebaseconfig';
import {collection, getDocs, updateDoc, doc} from 'firebase/firestore';

function Counter(){

    const voteCollectionRef = collection(db, "vote");
    const [vote, setVote] = useState([]);
    
    const upVote = async (id) => {
        const newVote = [...vote];
        const voteIndex = vote.findIndex(p => p.id === id);
        newVote[voteIndex].vote += 1;
        setVote(newVote);
        await updateDoc(doc(db, "vote", id),{vote: newVote[voteIndex].vote});
      };
      
    const fetchData = async () => {
        const dataVote = await getDocs(voteCollectionRef);
        const initVote = dataVote.docs.map((doc) => ({...doc.data(), id: doc.id}));
        setVote(initVote);
    };
    useEffect(() => {
        console.log("useEffect")
        fetchData();
    }, []);    
    
    return(
        <div>
            {vote.map((vote, index) => {
                return( 
                    <div key={index}>
                        <button onClick={() => {upVote(vote.id, vote.vote);}}>
                        Counter Normal: {vote.vote}
                        </button>
                    </div>
                )
            })}
        </div>
    )
}
export default Counter;

