const root = ReactDOM.createRoot(document.getElementById("root"));

const SayHelo = ({ name, kelas }) => {
  return (
    <>
      <h1>hello world, nama saya {name ? name : "dayat"}</h1>
      <p>i am a programmer</p>
      <p>saya kelas {kelas ? kelas : "5 sd"}</p>
    </>
  );
};

const Latihan = () => {};

const HomePage = () => {
  const students = ["alber", "farhin", "furqon"];

  const [likes, setLikes] = React.useState(0);
  const [dislikes, setDislikes] = React.useState(0);

  function handelClick() {
    setLikes(likes + 1);
  }

  function handelDislikes() {
    setDislikes(dislikes + 1);
  }

  return (
    <>
      <SayHelo />
      <SayHelo name="toni" kelas="XII" />
      <ul>
        {students.map((e) => (
          <li key={e}>{e}</li>
        ))}
      </ul>

      <button className="btn-likes" onClick={handelClick}>
        like 👍🏼 {likes}
      </button>
      <button className="btn-dislikes" onClick={handelDislikes}>
        dislike 👎🏼 ({dislikes})
      </button>

      <Latihan />
    </>
  );
};
root.render(<HomePage />);
