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
