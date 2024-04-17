function Home() {
  return (
    <div className="px-5 relative">
      <div className="h-screen flex flex-col justify-center">
        <h1>Rahmah Putri Azzahra</h1>
        <h4>Hacktiv8 FSJS Graduate</h4>
      </div>

      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="#FF0066"
          d="M60.9,-40.6C72.6,-33.8,71.5,-8.9,61.4,5.4C51.3,19.6,32.1,23.2,14.7,32.2C-2.7,41.2,-18.3,55.7,-29.4,53.3C-40.5,50.9,-47.3,31.6,-49.1,14C-51,-3.7,-47.9,-19.7,-38.9,-25.9C-29.9,-32,-15,-28.3,4.8,-32.1C24.6,-36,49.1,-47.4,60.9,-40.6Z"
          transform="translate(100 100)"
        />
      </svg>

      <div>
        <h3 className="text-center">Projects</h3>
        <ul>
          <li>Project 1</li>
          <li>Project 2</li>
          <li>Project 3</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
