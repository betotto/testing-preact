import { h } from 'preact';
import { useSelector, useDispatch } from 'react-redux'
import { addCounterAction, subCounterAction } from './countModule';

type AppProps = {
  title: string,
  paragraph?: string
}

const App: (props: AppProps) => h.JSX.Element = (props: AppProps) => {
  const counter = useSelector(state => state.countModule.counter);
  const dispatch = useDispatch();

  return <div>
    <button onClick={() => dispatch(addCounterAction())}>{'+'}</button>
    <button onClick={() => dispatch(subCounterAction())}>{'-'}</button>
    <br />
    {`Hello ${props.title} ${counter}`}
  </div>;
};

export default App;
