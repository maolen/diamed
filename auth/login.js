import { auth } from "../src/index.js";
 
const auth = auth;
auth.languageCode = 'ru';

window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
    'size': 'invisible',
    'callback': (response) => {
      console.log(response, 'response')
      onSignInSubmit();
    }
  }, auth);