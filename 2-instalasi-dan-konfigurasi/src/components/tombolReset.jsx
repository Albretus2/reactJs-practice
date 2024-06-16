export default function TombolReset({ set, result }) {
  function btnReset() {
    set((result = 0));
  }

  if (result == "done") {
    return <button onClick={btnReset}>Reset</button>;
  } else {
    return (
      <button onClick={btnReset} disabled>
        Reset
      </button>
    );
  }
}
