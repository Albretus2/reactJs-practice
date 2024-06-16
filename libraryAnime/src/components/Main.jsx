import { useState } from "react";

export default function Main({ animes }) {
  const [selectedAnime, setSelectedAnime] = useState(animes[0]);

  function handleSelectedAnime(id) {
    const newAnime = animes.filter((anime) => anime.mal_id === id);
    setSelectedAnime(newAnime[0]);
  }

  return (
    <main className="main">
      <Box>
        <ListAnimes animes={animes} onSelectedAnime={handleSelectedAnime} />
      </Box>
      <Box>
        <DetailsAnimes selectedAnime={selectedAnime} />
      </Box>
    </main>
  );
}

const Box = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && children}
    </div>
  );
};

const ListAnimes = ({ animes, onSelectedAnime }) => {
  return (
    <ul className="list list-anime">
      {animes?.map((anime) => (
        <li key={anime.mal_id} onClick={() => onSelectedAnime(anime.mal_id)}>
          <img src={anime.image} alt={`${anime.title} cover`} />
          <h3>{anime.title}</h3>
          <div>
            <p>
              <span>{anime.year}</span>
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};

const DetailsAnimes = ({ selectedAnime }) => {
  return (
    <div className="details">
      <header>
        <img src={selectedAnime.image} alt={`${selectedAnime.title} cover`} />
        <div className="details-overview">
          <h2>{selectedAnime.title}</h2>
          <p>
            {selectedAnime.year} &bull; {selectedAnime.score}
          </p>
        </div>
      </header>
      <section>
        <p>
          <em>{selectedAnime.synopsis}</em>
        </p>
      </section>
    </div>
  );
};
