# linkchheck
// 

//https://www.valentinog.com/blog/http-requests-node-js-async-await/

//good way

//https://alligator.io/react/axios-react/

// username check

// https://www.quora.com/How-can-I-check-if-a-username-existed-with-Node-js#

// js implicit/explicit

//https://stackoverflow.com/questions/33313854/how-can-i-access-the-browsers-window-object-from-a-nodejs-application


// es6way 

// https://stackoverflow.com/questions/171251/how-can-i-merge-properties-of-two-javascript-objects-dynamically?rq=1

// fuck Jquery 24*7
// https://medium.com/@trombino.marco/you-might-not-need-jquery-a-2018-performance-case-study-aa6531d0b0c3

// from official git repo 
let hasChanged = false
    const nextState = {}
    for (let i = 0; i < finalReducerKeys.length; i++) {
      const key = finalReducerKeys[i]
      const reducer = finalReducers[key]
      const previousStateForKey = state[key]
      const nextStateForKey = reducer(previousStateForKey, action)
      if (typeof nextStateForKey === 'undefined') {
        const errorMessage = getUndefinedStateErrorMessage(key, action)
        throw new Error(errorMessage)
      }
      nextState[key] = nextStateForKey
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey
    }
    return hasChanged ? nextState : state
  }
}

// this the reason we should not mutate the state object ,bcz our mutation wil render only old things 
// i.e no change


// touch fetch to remove glitch 

https://alligator.io/js/fetch-api/

// rest/spread in place of push method  
// way  to operate on array/object
// awesome book to analyse any kind of behaviour to conclude fact
//,so that you can have wow fact in life (i.e this book shows true analysis of behaviour) 
// https://www.amazon.com/Applied-Behavior-Analysis-Principles-Modification/dp/0470571527

// I will take psychology degree after 9 years ,to free many innocent 
// lives from sufferingss
// worth reading 
// https://www.miteshkhatri.com/book-on-law-of-attraction/
// render then didmount
// https://github.com/facebook/react/issues/5828


// thousand times I have heard the frequency mapstate ,reducer what is the order 
// of their execution ,it is confusing ,if you only 
// do ctrl c and ctrl v with npm install and tons of 
// useless tech talk with the wrapper of tech inventor ,
//but infact they are not even tech sweeper 
// just remember one thing ,when code gets executed after npm install
// reducer run with default action type 
// this is the reason you will see some initialization in state property 
// to avoid undefined condition just to avoid error 
