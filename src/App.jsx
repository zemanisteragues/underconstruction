import Construction from './assets/WhatsApp Image 2024-07-05 at 11.36.44 PM.jpeg';

const App = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 p-4">
      <div className="text-center max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <img src={Construction} alt="Under Construction" className="w-full h-64" />
        <div className="p-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">GoodBuild</h1>
          <p className="text-lg text-gray-600 mb-8">Our site is currently under upgradation. We'll be with you shortly.</p>
          {/* <div className="mt-4">
            <input type="email" className="w-full p-2 border border-gray-300 rounded-lg" placeholder="Enter your email" />
            <button className="w-full mt-2 p-2 bg-blue-600 text-white rounded-lg">Notify Me</button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default App;
