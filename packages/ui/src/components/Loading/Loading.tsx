import loadingIndicatorAnimation from '../../assets/animations/loading.json';
import { Player } from '@lottiefiles/react-lottie-player';

export const Loading = () => (
  <Player
    src={loadingIndicatorAnimation}
    autoplay
    loop
    className="w-28"
    data-testid="main-loading-indicator"
  />
);
