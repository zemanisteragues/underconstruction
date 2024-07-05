
const App = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 p-4">
      <div className="text-center max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <img src={'https://images.unsplash.com/photo-1552879890-3a06dd3a06c2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVuZGVyJTIwY29uc3RydWN0aW9ufGVufDB8fDB8fHww'} alt="Under Construction" className="w-full h-64 object-cover" />
        <div className="p-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">GoodBuild</h1>
          <p className="text-lg text-gray-600 mb-8">Our site is currently under construction. We’ll be here soon with our new awesome site, subscribe to be notified.</p>
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
