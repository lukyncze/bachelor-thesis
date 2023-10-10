function Header() {
  return (
    <header className='relative w-full h-screen overflow-hidden bg-blue-900'>
      <div className='absolute top-1/2 w-full'>
        <div className='w-1/2 mx-auto my-0 text-white'>
          <h1 className='text-5xl'>Lukas Sukenik</h1>
          <h3 className='text-lg pt-5'>Front-end Developer</h3>

          <button className="btn-primary">Hello</button>
        </div>
      </div>
    </header>
  );
}

export default Header;

