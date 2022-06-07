import './App.css';
import {
  GoogleReCaptchaProvider,
} from 'react-google-recaptcha-v3';
import Demo from './demo';

function App() {

  return (
    <div className="App">
      <GoogleReCaptchaProvider reCaptchaKey="6LePCE0gAAAAAApfvKJVZ-WMJMAjIWbjUKVXIb0N">
        <Demo />
      </GoogleReCaptchaProvider>,
    </div>
  );
}

export default App;

