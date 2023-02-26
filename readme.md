# note:
this is still in pre mvp phase. 

# definition

this is an sdk for the backend of choice (currently laravel). goal is to deal with your backend in the same way you interact with firebase or pocketbase.

## goals

- [ ] connect with backend of choice
- [ ] basic crud operations
- [ ] joins
- [ ] authentaction
- [ ] realtime
- [ ] create a gui that creates backend compatable routes and generates ts types
- [ ] make sdk easy to extend

## notes

- we need to create a gui that will be like a dashboard to add permissions and create new models and modify.
- one of the goals of this gui is that it will let you choose your backend and create resource like routes to be compatable with the sdk
- user should be able to modify the sdk
  - change baseurl
  - modify default error messagess and success

## base workflow of the sdk

1. init the sdk using an instance of the sdk class
2. call the instance start by calling (model) method
3. chain operations

## current goals

- [ ] check if the collection is init before chaining
- [ ] do all crud operations
- [ ] check permission before crud
- [ ] create abstract classes and interfaces
