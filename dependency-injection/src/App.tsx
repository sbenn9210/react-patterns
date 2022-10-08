import "./App.css";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { amountAdded } from "redux/slices/counter.slice";

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  function handleClick() {
    dispatch(amountAdded(1));
  }
  return (
    <div>
      <button
        className="border-2 border-red-500 border-solid rounded-md"
        onClick={handleClick}
      >
        count is {count}
      </button>
    </div>
  );
}

export default App;
