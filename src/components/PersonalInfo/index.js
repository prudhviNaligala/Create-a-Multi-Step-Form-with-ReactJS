import "./personal.css";

const PersonalInfo = ({ nextStep }) => {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };
  console.log("hello");
  return (
    <div className="container">
      <div className="card">
        <aside class="steps custom__scrollbar">
          <div class="step active">
            <div class="index">1</div>
            <div class="title">
              <p>STEP 1</p>
              <h3>YOUR INFO</h3>
            </div>
          </div>
          <div class="step">
            <div class="index">2</div>
            <div class="title">
              <p>STEP 2</p>
              <h3>SELECT PLAN</h3>
            </div>
          </div>
          <div class="step">
            <div class="index">3</div>
            <div class="title">
              <p>STEP 3</p>
              <h3>ADD-ONS</h3>
            </div>
          </div>
          <div class="step">
            <div class="index">4</div>
            <div class="title">
              <p>STEP 4</p>
              <h3>SUMMARY</h3>
            </div>
          </div>
        </aside>
        <div className="details-container">
          <div className="details">
            <h1>PersonalInfo</h1>
            <p>please provide your name,emailaddress and phone numbers</p>
            <form>
              <div className="input-container">
                <label>Name</label>
                <input type="text" placeholder="e.g. stephen king" />
              </div>
              <div className="input-container">
                <label>Email Address</label>
                <input type="text" placeholder="e.g. stephenking@gmail.com" />
              </div>
              <div className="input-container">
                <label>Phone Number</label>
                <input type="text" placeholder="e.g. +1 3456789" />
              </div>
            </form>
            <div className="btns">
              <button className="button" type="button" onClick={Continue}>
                Next step
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
