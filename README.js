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
// then in react component map statetoprops is called ,passing required data
// thats it from react component ,you can produce n no of action
// creator n no of times ,reducer will catch will or will not modify state
// thus calling mapstatetoprops again ,which will pass modified 
// state to react component class with new rendering 
// button I am clicking 100000 timesss 
// i.e action creator will get passed 10000 times to all reducer 
// in your app,reducer
//which is responsible for handling particulasr response will
// act then pass it to the react domain via mapstatetoprops

// what tis tech talk ?

// ohh yeahh slidesss ,ohh nooo,examplesss,without knowing the real depth 
//,real base these guys are motherfuckerss I can say this with no doubt in my mind

// okay I will give you metaphor for this
// taking some child to fucktalk(fuck talk is been provided by parents only),so that in future 
// he can become expert in 69 position 
// how baby will understand ,the fuck
// baby dont know to walk through the depth
// baby dont know the abc of lang 
// so how he will understand the word fuck 
// first teach him ,abc...z,then teach him tons 
// of bascic common sense then that baby 
/// will come to know about mathemtics of sex 69

// similary in this tech field 
// there are tons of babies ,join 
// tech talk to become tech expert which is impossible
// move your as in chair learn fundamental first 
// then practise ,then go to motherfucking tech talk 


// many assholes are becoming author now 
// thanks to packt /// tackettt// lot of scammers 


// now they are changing the meaning of book ,it totally a curse for bunch of bucks

// data science is new ,there is no comparison ,so they emit anything ..I think this is the reason ..model is dull or tall
// who cares kisi ko real samajh hi nahi hai..
// probability 0 to solve basic integration 
// probability -7 to understand probability
// but they are data scientist
// it is really shocking facts 
// i have explore many examples so just i am sharing 


// by mistake i was reading one packt publication book
// now i will never purchase packt publication or any curse type 
// publication book

// will publish node/mongo in one logo that will log all essentials+advance project (next year plan)
// this will be a video version
// I guarrante ,this will become trending in asian countries atleast 

// 5mod3===2 i.e finding what we get as output remainder 

// link spread object 

//https://reactjs.org/docs/jsx-in-depth.html#spread-attributes

var props = {firstName: {k:'Bun', lastName: 'Hector'},j:"hghg"};
props:
{firstName: {…}, j: "hghg"}
or {...props} same above output(based on situation ,use differnt notation)
{...props.firstName}
{k: "Bun", lastName: "Hector"}
so pulling out firstname all key pairs on flyy 

// back to coin 
// var months = {

 jan:31,
 feb:29,
 mar:31

}

function getDetails({mar}){
      console.log(`In March do the march ${mar} \'times\'`);
}

getDetails(months);
 In March do the march 31 'times'

// 
var c ={j:"afsgdhf"}
var d={...c,y:"ghvv"}
d;
{j: "afsgdhf", y: "ghvv"}
c;
{j: "afsgdhf"}
