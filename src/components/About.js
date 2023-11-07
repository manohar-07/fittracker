import React,{useState} from "react";

export default function About() {
    
  return (
    <div className="container"  >
        <h1>About us</h1>
      <div className="accordion my-2" id="accordionExample" >
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
               
            >
              <strong>Manohar R</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
             
          >
            <div className="accordion-body"  >
              <p>SRN:PES2UG22CS301<br />
                manohar.1503manu@gamil.com
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item" >
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
               
            >
              <strong>Kommaraju Jayanth</strong> 
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"  
          >
            <div className="accordion-body"  >
              <p>SRN: PES2UG22CS268<br />
              xyz@gamil.com</p>
            </div>
          </div>
        </div>
        <div className="accordion-item"  >
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"  
            >
              <strong>Karthik B</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"  
          >
            <div className="accordion-body"  >
            <p>SRN: PES2UG22CS257<br />
              xyz@gamil.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-3">
     

      </div>
    </div>
  );
}
