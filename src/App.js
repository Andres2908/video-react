import "./App.css";

function App({ src, width, height }) {
  return (
    <div className="App">
      <div className="container-md mt-1">
        <video
          id="demo"
          controls
          className="video-js vjs-default-skin"
          loop
          width={width}
        >
          <source src="http://vjs.zencdn.net/v/oceans.mp4" type="video/mp4" />
          <source src="http://vjs.zencdn.net/v/oceans.webm" type="video/webm" />
        </video>

        <div className="contenedor">
          <div className="input-group mb-3 mt-2">
            <input
              className="form-control"
              placeholder="Escribe una pequeña nota"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
          </div>
          <div className="align-btn">
            <button type="button" className="btn btn-outline-secondary">
              Cancelar
            </button>
            <button type="button" className="btn btn-dark" id="save">
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
