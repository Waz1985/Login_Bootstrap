const Header = (props) => {
  return (
    <>
      <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-white">
          <div class="container-fluid">
           
            <div class="collapse navbar-collapse" id="navbarExample01"></div>
          </div>
        </nav>
        <div
          class="p-5 text-center bg-image"
          style={{
            backgroundImage:
              "url(https://mdbcdn.b-cdn.net/img/new/slides/041.jpg)",
            height: "400px",
          }}
        >
          <div class="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
            <div class="d-flex justify-content-center align-items-center h-100">
              <div class="text-white">
                <h1 class="mb-3" style={{color:'white'}}>Login Empresarial</h1>
                <h4 class="mb-3" style={{color:'white'}}>Autentiquese</h4>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
