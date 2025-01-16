1. Create resetValues function to reset the state, the function takes boolean arguments of all the states available and default value assigned to false, inside the function we check for the flag and rest the state to initialize.
2. We can make use of React Context at root level to perform many tasks such as API calling and use Effects , Almost similar to what we do in a react component and a custom hook.
3. Custom hooks are very helpfull, if you see any logic that is there with multple useEffects and multiple states we can move it to custom hook.
4. We can make use of routing history and url search params, maily url search params can be used as global state in the application by making changes at the url.
5. Maintain flags such as DEV_MODE to perform tasks which are only to dev mode
