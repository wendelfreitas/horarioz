import { useAuthSignInWithPopup } from '@react-query-firebase/auth';
import { auth } from '../../services/firebase';

export const useSignInWithGithub = () => {
  return useAuthSignInWithPopup(auth);
};
