import PropTypes from "prop-types"; // prop-types 설정
import { Link } from "react-router-dom"; // Link설정

function Movie({ mediumCoverImage, title, summary, genres, movieId }) { // props들은 Home.js에서 받아오는것들
  return (
    <div>
      <img src={mediumCoverImage} alt={title} />
      <h2>
        <Link to={`/movie/${movieId}`}>{title}</Link>{/* 제목을 클릭하면 /movie페이지로 이동, 왜쓰냐면 전체페이지를 로딩하지 않음(새로고침안하고 넘어감) */}
      </h2>
      <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
      {/* summary의 글자가 235글자보다 크면 slice하고, 작으면 그대로 출력 */}
      {/* .slice(시작숫자,끝숫자) */}
      <ul>
        {genres ? genres.map((movieGenre) => <li key={movieGenre}>{movieGenre}</li>) : <li>no genre</li>}
      </ul>
    </div>
  );
}

// prop-types 설정
Movie.propTypes = {
  mediumCoverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired, // 배열검사 arrayOf()
  movieId: PropTypes.number.isRequired
}

export default Movie;