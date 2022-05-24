import ContentLoader from 'react-content-loader'

const MovieDetailsLoader = () => (
  <ContentLoader viewBox="0 0 280 280" height={280} width={280} >
    <rect x="0" y="0" rx="10" ry="10" width="265" height="180" />
    <rect x="0" y="190" rx="0" ry="0" width="258" height="20" />
    <rect x="0" y="215" rx="0" ry="0" width="239" height="20" />
    <rect x="0" y="242" rx="0" ry="0" width="254" height="20" />
  </ContentLoader>
)

MovieDetailsLoader.metadata = {
  name: 'Tiago Gomes',
  github: 'tiagogomes187',
  description: 'MovieFlix Description',
  filename: 'MovieFlix',
}

export default MovieDetailsLoader;