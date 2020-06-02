1. What problem does the context API help solve?

Context API allows children to pass state up to their parents and avoids the need of prop drilling. Data can be stored on a context object and retrieve the components from the context api instead of props. 

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are typically interactions that will occur usually through a user interaction.They are needed to update or create new state through the reducer. Actions tell our reducers how to update state. The reducer is the place where state is actually udpated. Reducers are the glue that binds our actions and store. The store is where immutable state is stored for the entire project. It is the source of truth since that is where the state will remain throughout the application. 

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is immutable. When the application state changes we clone the state object modify the clone and replace the original state with the new copy. The original is never mutaed. Componnet state allows you to change and mutate state from any component. Although this has advantages with smaller applications/code it does create some difficulties keeping track of state through various forms/components as well as the side effects. 

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk allows us to change the reducers from synchronous by default to asynchronous action creaters. It changes the action creators by allowing them to make asynchronous api calls from within. I assume this makes api calls and recalling its data much quicker

1. What is your favorite state management system you've learned and this sprint? Please explain why!

I think redux-thunk and middleware were really cool because being able to so clearly see the timeline of how state was changed allowed me to really understand what was happening under the hood. 
