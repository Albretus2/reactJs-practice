const Tombol = ({ type, set, result }) => {
  function btnMin() {
    result > 0 ? set(result - 1) : set((result = "done"));
  }
  function btnPlus() {
    result < 10 ? set(result + 1) : set((result = "done"));
  }

  function kondisi() {
    if (result != "done") {
      return (
        <button onClick={type == "-" ? btnMin : btnPlus}>
          {" "}
          {type ? type : ""}{" "}
        </button>
      );
    } else {
      return (
        <button disabled onClick={type == "-" ? btnMin : btnPlus}>
          {" "}
          {type ? type : ""}{" "}
        </button>
      );
      // if (type == 'reset') return btn = (<button onClick={btnReset} > reset </button>)
    }
  }

  return <>{kondisi()}</>;
};

export default Tombol;
