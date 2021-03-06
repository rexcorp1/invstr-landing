$.getJSON("lottie/upcoming.json", function(dataUpcoming) {
  
  let temp = [];
  const now = Date.now();
  
  dataUpcoming.upcoming.forEach(val => {
    let key = Object.keys(val);
    let listing_at = new Date(val[key].listing_at).getTime();
    
    if(listing_at > now){
      temp.push(val[key]);
    }
  });

  if(temp.length > 0){
    temp.sort((a, b) =>{
      let time_a = new Date(a.listing_at).getTime();
      let time_b = new Date(b.listing_at).getTime();
      return time_a > time_b ? -1 : 1
    });

    setTimeout(function(){
      let root = document.getElementById("card-base-upcoming");
      let limit = temp.length > 4 ? (temp.length - 4) : 0;
      
      for(let i = temp.length - 1; i >= limit; i--){
        let expiredAt = new Date(temp[i].listing_at).getTime(); //convert date and time to unix time
        let distance = expiredAt - now;
        let cardUpcoming = `
        <div class="col-auto mx-auto mb-5" onClick="location.href ='${temp[i].link}'">
          <div class="card custom">
            <img class="thumnail" src="https://landx.id/lp/${temp[i].images[0]}">
            <img class="label-soon" src="/img/soon-listing.png">
            <h5 class="title-thumnail">${temp[i].title}</h5>
            <div class="canv">
              <span class="count-down-thumnail text-count-down-thumnail">${Math.floor(distance / (1000 * 60 * 60 * 24))} Hari : ${Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))} Jam</span>
            </div>
            <p class="detial-thumnail">PELAJARI LEBIH LANJUT</p>
          </div>
        </div>`;
        root.insertAdjacentHTML('afterend', cardUpcoming);
      }
    }, 2500); 
  }
});



