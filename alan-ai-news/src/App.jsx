import React, {useEffect} from "react";
import alanBtn from '@alan-ai/alan-sdk-web';

const alanKey = '3c9d4f8a973130b86654fda6ad11737a2e956eca572e1d8b807a3e2338fdd0dc/stage';



const App = () => {

    useEffect( () => {
        alanBtn({
            key: alanKey,
            onCommand: ( {command, articles}) =>{
                if(command === 'newHeadlines') {
                   console.log(articles);
                }

            }
        })
    }, [])
    return(

        <>
      <h1>Welcome to Alan AI</h1>
        </>
    )
}

export default App;