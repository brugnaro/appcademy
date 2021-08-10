import mainReducer from './main/reducers';

export default ({main}, action) => ({
  main: mainReducer(main, action),
});
