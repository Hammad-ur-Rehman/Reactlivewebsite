import React, { useState } from "react";

const Contact = () => {

const [data , setdata] = useState({

     fullname:"",
     phone:"",
     email:"",
     msg:"",

});

   const InputEvent = (event) => {
        const {name , value } = event.target;             
         
        setdata((preval) => {
          
          return{
                
              ... preval,
              [name] : value,

          };
        

        });

   };

  const formSubmit = (e) => {
        e.preventDefault();
        alert (`My name is ${data.fullname}.My mobile number is ${data.phone}.My email is ${data.email}.Message is ${data.msg}`);
  };


  return (

    <>

      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>

        <div className="container contact_div">
          <div className="row">
            <div className="col-md-6 col-10 mx-auto">
              <form onSubmit={formSubmit}>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                  <input type="fullname" class="form-control" id="exampleFormControlInput1" placeholder="FullName" name="fullname" value={data.fullname} onChange={InputEvent}/>
                </div>

                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Email address</label>
                  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email" name="email" value={data.email} onChange={InputEvent} autoComplete="off"/>
                </div>

                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Phone</label>
                  <input type="phone" class="form-control" id="exampleFormControlInput1" placeholder="Phone" name="phone" value={data.phone} onChange={InputEvent}/>
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="msg" value={data.msg} onChange={InputEvent}></textarea>
                </div>
                <div class="col-auto">
                  <button type="submit" class="btn btn-outline-primary mb-3">submit</button>
                </div>

              </form>

            </div>

          </div>

        </div>

      </div>

    </>


  )

}


export default Contact;
