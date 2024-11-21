Handling APIS and Promises.

1. Parent component can able to handle the promise and set the state and it will send state variable and promise function trigger to the child component.
2. Parent component can just call the promise and send the promise to the child, child wil handle the promise and states.
3. Child is only responsible for calling the promise and handling the promise.
4. 1 & 2 will be of more use when child data is needed in parent or parent has the more data required to make api in child,
5. With SRC principle child doesnt need to know what it is doing for an api call. it just works for invokation for the promise.

Handling polling:

1. Polling can be used for api's which takes lot of time, for example a POST request which takes huge amount of time has the tendency to fail. instead POST api will be divided into POST and GET,
 Where POST provides only jobID, and GET provides the data,
2. We have one more api job status, where we need to call for certain interval, to get the status of the job, once it is completed, we will call the GET api mentioned above. multiple use effects and setintervals will be used.

SRC prinicple for APIS:

1. All apis should be in service file, there function takes input params or payload and return the promise. components will call the function.
2. Basic functions like putData, postData, deleteData, and fetchData are defined in some utility file. axios file. 

Desiging a utility function:

1. Initialize params with default values, for example api headers, provide defailt headers and put param for extra headers and initialize them empty and add them.


Rendering JSX :

1. Create small functions for rendering jsx with related data, and call functions in return block of actual component.
2. It is a good practice when we have conditionali rendering or a use of switch statement.

Custom hooks :

1. Grouping useStates and useEffects for a specific functionality, perform a task inside useEffect in a custom hook, because in case of any prop change, that function runs again.
