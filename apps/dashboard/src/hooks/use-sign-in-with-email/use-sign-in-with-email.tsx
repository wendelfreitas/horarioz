import { useAuthSignInWithCredential } from '@react-query-firebase/auth';
import { auth } from '../../services/firebase';

export const useSignInWithEmail = () => {
  return useAuthSignInWithCredential(auth);
};
