const Success = () => (
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
          <h1>Thank You</h1>
        </div>
      </div>
    </div>
  </div>
);

export default Success;
