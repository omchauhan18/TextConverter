import React, {useState} from "react";

export default function Abouts() {
  const [btnText, setBtnText] = useState("Light mode");
  const [mode, setMode] = useState({
    color: 'black',
    backgroundColor: 'white'
  });
  const [btnStyle, setBtnStyle] = useState({
    color: 'white',
    backgroundColor: 'black'
  });

  const toggleStyle = () => {
    if (mode.color === 'black') {
      setMode({ 
        color: 'white', 
        backgroundColor: 'black' 
      });
      setBtnText("Dark mode");
      setBtnStyle({
        color: 'black',
        backgroundColor: 'white'
      });
    } else {
      setMode({
        color: 'black',
        backgroundColor: 'white'
      });
      setBtnText("Light mode");
      setBtnStyle({
        color: 'white',
        backgroundColor: 'black'
      });
    }
  };
  return (
    <div className="container" style={mode}>
      <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionPanelsStayOpenExample" style={mode}>
        <div className="accordion-item" style={mode}>
          <h2 className="accordion-header" style={mode}>
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne" style={mode}>
              Accordion Item #1
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show" style={mode}
          >
            <div className="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={mode}>
          <h2 className="accordion-header" style={mode}>
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo" style={mode}
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse" style={mode}
          >
            <div className="accordion-body" style={mode}>
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={mode}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"  style={mode}
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse" 
          >
            <div className="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow. 
            </div>
          </div>
        </div>
      </div>
        <div className="container">
        <button type="button" onClick={toggleStyle} className="btn btn-light my-3" style={btnStyle}>{btnText}</button>
        </div>
    </div>
  );
}   