# Dependency Injection :rocket:

## Using Factory functions and Tokens 

Factory functions are useful when we want to inject a service on until based on values that are only available during runtime. For example if the user is logged in or not.

Here, we have used if the program is in production mode or development mode and configured a factory function to return a logger service depending on the environment mentioned.
