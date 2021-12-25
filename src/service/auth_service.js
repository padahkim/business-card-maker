import { getAuth, GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { firebaseApp } from "./firebase";//이게 있어야 firebase를 여기에서 실행함

class AuthService {
  constructor(){
    this.firebaseAuth = getAuth();
    this.googleProvider = new GoogleAuthProvider();
    this.githubProvider = new GithubAuthProvider();
  }

  //login(providerName)으로 google이 들어오면 구글, 깃헙이면 깃헙
  login(providerName) {
    const authProvider = this.getProvider(providerName)
    
    return signInWithPopup(this.firebaseAuth, authProvider)
  }

  getProvider(providerName) {
    switch(providerName) {
      case 'Google':
        return this.googleProvider;
      case 'Github':
        return this.githubProvider;
      default:
        throw new Error(`not supported provider: ${providerName}`);
    }
  }
}
export default AuthService;

