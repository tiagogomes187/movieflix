import ContentLoader from 'react-content-loader'

const CardLoader = () => (
    <div className="card-loader-container">
  <ContentLoader viewBox="0 0 320 460" height={460} width={320} backgroundColor="#ecebeb" foregroundColor='#d6d2d2'>
    <rect x="0" y="0" rx="0" ry="0" width="295" height="300" />
    <circle cx="35" cy="248" r="20" />
    <rect x="0" y="0" rx="2" ry="2" width="275" height="15" />
    <rect x="0" y="0" rx="2" ry="2" width="140" height="15" />
    
  </ContentLoader>
  </div>
);

CardLoader.metadata = {
  name: 'Tiago Gomes',
  github: 'tiagogomes187', 
  description: 'MovieFlix fresh',
  filename: 'MovieFlixFresh', 
}

export default CardLoader;