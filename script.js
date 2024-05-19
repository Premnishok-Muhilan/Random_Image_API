async function get_photo() {
  try {
    let promise_data = await fetch(
      "https://api.unsplash.com/photos/?client_id=u6-FEf1Kd83icRTG055cg2MgyOhlNxZy7X-q9hdVCj4"
    );

    let json_data = await promise_data.json();
    console.log(json_data);

    for (let i = 0; i < json_data.length; i++) {
      const cardContainer = document.getElementById("cardContainer");

      const cardHtml = `
    <div class="card mb-3" style="max-width:540px;margin:10px">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img src="${json_data[i].urls.small}" class="card-img" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
  </div>
      `;
      // Create a temporary div to hold the card HTML
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = cardHtml.trim();
      // Append the first child (the card) to the card container
      cardContainer.appendChild(tempDiv.firstChild);
    }
  } catch {
    console.log("Inside catch block");
  }
}
