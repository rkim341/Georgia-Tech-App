// Each screen is a function returning an HTML string. Use data-go="screenName" to navigate.
Screens.home = () => `
  <h1 class="nav-title">Georgia Tech</h1>
  <div class="list">
    <div class="row" data-go="detail"><span>Campus Map</span><small>›</small></div>
    <div class="row" data-go="detail"><span>Schedule</span><small>›</small></div>
    <div class="row" data-go="detail"><span>Dining</span><small>›</small></div>
  </div>
  <button class="btn" data-go="detail">Get started</button>`;
