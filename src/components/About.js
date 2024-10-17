import React from 'react';

export default function About({ mode }) {
  const mystyle = {
    backgroundColor: mode === "dark" ? "black" : "white",
    color: mode === "dark" ? "white" : "black"
  };

  return (
    <div className="container" style={mystyle}>
      <h2>About us</h2>
      <div className="accordion" id="accordionExample" style={mystyle}>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={mystyle}>
              Free to use
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={mystyle}>
              Welcome to TextUtils! Our app is completely free to use. You can enjoy all the features without any cost. We hope you find it useful for your text analysis needs. Thank you for using TextUtils!
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={mystyle}>
              Capitalize and lowercase
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={mystyle}>
              Our app offers powerful features to help you manage your text efficiently. You can easily capitalize or de-capitalize letters with just a few clicks. Whether you need to transform text to uppercase, lowercase, or switch the case, TextUtils has got you covered. Enjoy using our app to streamline your text editing tasks!
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={mystyle}>
              Text to speech
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={mystyle}>
              Our app not only helps you manage your text but also offers a convenient text-to-speech feature. With TextUtils, you can easily convert your written text into spoken words. This feature is perfect for those who prefer listening to content or need auditory assistance. Enjoy a seamless text-to-speech experience with TextUtils!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
