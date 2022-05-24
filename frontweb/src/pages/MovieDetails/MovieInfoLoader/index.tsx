import ContentLoader from 'react-content-loader'

const MovieInfoLoader = () => (
  <ContentLoader viewBox="0 0 280 280" height={280} width={280} >
    <rect x="0" y="0" rx="10" ry="10" width="265" height="180" />
  </ContentLoader>
)

MovieInfoLoader.metadata = {
  name: 'Tiago Gomes',
  github: 'tiagogomes187',
  description: 'MovieFlix Description',
  filename: 'MovieFlix',
}

export default MovieInfoLoader;