import "./summary.css";

const Summary = ({ nextStep, prevStep }) => {
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
            <section class="summary">
              <h2>Finishing up</h2>
              <p>Double-check everything looks OK before confirming.</p>
              <div class="summary__details summary__addons">
                <div class="summary__detail main">
                  <div class="title">
                    <h3>arcade (Monthly)</h3>
                    <button>Change</button>
                  </div>
                  <p class="price">$9/mo</p>
                </div>
                <div class="summary__detail">
                  <p>Online service</p>
                  <p class="price">+$1/mo</p>
                </div>
              </div>
              <div class="summary__total">
                <p>Total (per month)</p>
                <p class="price">$10/mo</p>
              </div>
            </section>
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

export default Summary;
