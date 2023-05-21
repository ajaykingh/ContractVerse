import { useFormik } from 'formik'
import React from 'react'
import { MDBFile } from 'mdb-react-ui-kit';
import MDEditor from '@uiw/react-md-editor';
import Swal from 'sweetalert2';

const AddContent = () => {
  const [value, setValue] = React.useState();

  const Content = useFormik({
    initialValues: {
        name : '',
       category : '',
         content: '',
        file : ''
    },
    onSubmit: async (values) => { 
      console.log(values);

      // making a request to the backend
      // 1. url
      // 2. request method
      // 3. data
      // 4. data format
      values.content = value;

      const res = await fetch('http://localhost:5000/content/add', {
        method: 'POST',
        body : JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log(res.status);

      if(res.status === 200){
        Swal.fire({
          title : 'Well Done',
          icon : "success",
          text : "You have successfully registered"
        })
      }
    }
});

  

  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: "#2779e2" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-9">
              <h1 className="text-white mb-4">Add content</h1>
              <div className="card" style={{ borderRadius: 15 }}>
              
                <div className="card-body">
                <form onSubmit={Content.handleSubmit}>
                  <div className="row align-items-center pt-4 pb-3">
                    <div className="col-md-3 ps-5">
                      <h6 className="mb-0">Name</h6>
                    </div>
                    <div className="col-md-9 pe-5">
                      <input type="text" className="form-control form-control-lg"
                      id="name"
                      value={Content.values.name}
                      onChange={Content.handleChange} />
                    </div>
                  </div>
                  {/* <hr className="mx-n3" /> */}
                  <div className="row align-items-center py-3">
                    <div className="col-md-3 ps-5">
                      <h6 className="mb-0">Detail</h6>
                    </div>
                    <div className="col-md-9 pe-5">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="example@example.com"
                        id="category"
                      value={Content.values.category}
                      onChange={Content.handleChange}
                      />
                    </div>
                  </div>
                  {/* <hr className="mx-n3" /> */}
                  <div className="row align-items-center py-3">
                    <div className="col-md-3 ps-5">
                      <h6 className="mb-0">Content</h6>
                    </div>
                    <div className="col-md-9 pe-5">
                      
                      <div data-color-mode="light">
                        <MDEditor
                          value={value}
                          onChange={setValue}
                        />
                      </div>
                    </div>
                  </div>

                  {/* <hr className="mx-n3" /> */}
                  {/* <div className="row align-items-center py-3">
              <div className="col-md-3 ps-5">
                <h6 className="mb-0">Upload Image or Vedio </h6>
              </div>
              <div className="col-md-9 pe-5">
                <input
                  className="form-control form-control-lg"
                  id="formFileLg"
                  type="image"
                />
                <div className="small text-muted mt-2">
                  upload your File Here !
                </div>
              </div>
            </div>
           */}
                  <div>
                    <MDBFile disabled label='Disabled file input example' id='formFileDisabled' />
                  </div>

                  <hr className="mx-n3" />
                  <div className="px-5 py-4">
                    <button type="submit" className="btn btn-primary btn-lg">
                      Submit
                    </button>
                  </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}


export default AddContent