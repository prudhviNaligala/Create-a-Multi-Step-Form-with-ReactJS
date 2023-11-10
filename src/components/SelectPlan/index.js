import "./selectplan.css";

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
            <h1>Select your Plan</h1>
            <p>you have the options of monthly or yearlly billing</p>
            <form>
              <div className="plans">
                <div className="plan">
                  <label className="label" htmlFor="arcade" tabIndex="0">
                    <img
                      src="https://adramelech-multi-step-form.netlify.app/assets/icon-arcade.e118291f.svg"
                      alt="arcade"
                    />
                    <div className="details">
                      <h4>arcade</h4>
                      <p>$9/mo</p>
                    </div>
                  </label>
                  <input type="radio" id="arcade" name="plan" checked="" />
                </div>
                <div className="plan">
                  <input type="radio" id="advanced" name="plan" />
                  <label className="label" htmlFor="advanced" tabIndex="0">
                    <img
                      src="https://adramelech-multi-step-form.netlify.app/assets/icon-advanced.66ce2237.svg"
                      alt="advanced"
                    />
                    <div className="details">
                      <h4>advanced</h4>
                      <p>$12/mo</p>
                    </div>
                  </label>
                </div>
                <div className="plan">
                  <input type="radio" id="pro" name="plan" />
                  <label className="label" htmlFor="pro" tabIndex="0">
                    <img
                      src="https://adramelech-multi-step-form.netlify.app/assets/icon-pro.8d9f4718.svg"
                      alt="pro"
                    />
                    <div className="details">
                      <h4>pro</h4>
                      <p>$15/mo</p>
                    </div>
                  </label>
                </div>
              </div>
              <div class="billing">
                <div class="toggle">
                  <h5 class="active">Monthly</h5>
                  <input type="checkbox" id="billing" />
                  <label className="label" for="billing" tabindex="0"></label>
                  <h5 class="active">Yearly</h5>
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
