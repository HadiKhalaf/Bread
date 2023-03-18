fetch('https://try-hae7.onrender.com/')
      .then(response => response.json())
      .then(json => {
         var k=3;
         var lll=0;
         var q=0;
        for(let i=0;i<json.Sheet1.length;i++){
         if(k==3){
            lll++;
         const z=
      `<div class="container">
            <h1 class="fashion_taital">Manakish</h1>
            <div class="fashion_section_2">
               <div class="row" id="row${lll}">
                  
                  
                  
               </div>
            </div>
         </div>`
      k=0;
      var opp=document.createElement('div')
      if(q==0){
         opp.className='carousel-item active'
      opp.innerHTML=z
      document.getElementById('wow').appendChild(opp)
      q=1
      }else{
         opp.className='carousel-item'
      opp.innerHTML=z
      document.getElementById('wow').appendChild(opp)
      }
      
         }
         const l=`
         <div class="box_main">
            <h4 class="shirt_text">${json.Sheet1[i].Manakish}</h4>
            <p class="price_text">Price  <span style="color: #262626;">${json.Sheet1[i].Price} ${json.Sheet1[i].Cur}</span></p>
            <div class="tshirt_img"><img src="${json.Sheet1[i].Pic}"></div>
            <div class="btn_main">
               <div class="buy_bt"><a href="#">Buy Now</a></div>
               <div class="seemore_bt"><a href="#">See More</a></div>
            </div>
         </div>`
            var op=document.createElement('div')
            op.className='col-lg-4 col-sm-4'
            op.innerHTML=l
            id='row'+lll
            document.getElementById(id).appendChild(op)
            k++;
        }
        
      })