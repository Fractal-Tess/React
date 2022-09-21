import Footer from '$components/core/Footer';
import Header from '$components/core/Header';
import Main from '$components/core/Main';
import Theme from '$components/theme/Theme';

function App() {
  return (
    <Theme>
      <div className="min-h-screen flex flex-col justify-between">
        <Header />
        <Main />
        <Footer />
      </div>
    </Theme>
  );
}

export default App;
