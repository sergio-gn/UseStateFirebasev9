# UseStateFirebasev9
Counter component using UseState Hook working with Firebase v9

Dependencies on useEffect must be empty to avoid a infinite loop that will consume all your firebase resources.
To achieve that we need to create a function fetchData and call it inside the useEffect.
To make the useState work with the firebase and have the 'realtime' effect we need to create a function called upVote that get the number of votes from firebase, adress it to the'vote' from the useState and add +1 with the setVote.
