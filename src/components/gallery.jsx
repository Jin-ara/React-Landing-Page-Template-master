import { Image } from "./image";

export const Gallery = (props) => {
  return (
    <div id='portfolio' className='text-center'>
      <div className='container' style={{border: "solid 1px"}}>
        <div className='section-title'>
          <h2>Gallery</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
          <hr
        style={{
          border: "solid 0px",
          width: "100%",
          backgroundColor: "#D5D5D5",
          margin: "10 0 10 0",
        }}
      />
        </div>
        <div className='row'>
          <div className='portfolio-items'>
            {props.data
              ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-sm-6 col-md-4 col-lg-4'>
                  <Image title={d.title} largeImage={d.largeImage} smallImage={d.smallImage} />
                </div>

              ))
              
              : 'Loading...'}
          </div>
        </div>
      </div>
    </div>
  )
}
