import "./addo.css";

const SelectPlan = ({ nextStep, prevStep }) => {
  const Continue = () => {
    nextStep();
  };

  const Previous = () => {
    prevStep();
  };

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
            <form class="form">
              <h2>Pick add-ons</h2>
              <p>Add-ons help to enhance your gaming experience.</p>
              <div class="addons">
                <div class="addon">
                  <input type="checkbox" />
                  <div>
                    <h4>Online service</h4>
                    <p>Access to multiplayer games</p>
                  </div>
                  <p class="price">+$1/mo</p>
                </div>
                <div class="addon">
                  <input type="checkbox" />
                  <div>
                    <h4>Larger storage</h4>
                    <p>Extra 1TB cloud save</p>
                  </div>
                  <p class="price">+$2/mo</p>
                </div>
                <div class="addon">
                  <input type="checkbox" />
                  <div>
                    <h4>Customizable profile</h4>
                    <p>Custom theme on your profile</p>
                  </div>
                  <p class="price">+$2/mo</p>
                </div>
              </div>
            </form>

            <div className="btns">
              <button type="button" onClick={Previous}>
                Go back
              </button>
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

export default SelectPlan;
