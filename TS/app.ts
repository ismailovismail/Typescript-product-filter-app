var infoArr: Array<number> = [3, 4, 5, 6]
// console.log(infoArr)


var dataArr = (newData: number[]) => {
      return newData
}

var info = (dataOne: number[], dataTwo?: string): void => {
      let comingData = dataOne
      dataArr(comingData)
      console.log(dataArr)

};
info([1, 2, 3, 4]);

// var dataArray:string[]=['home','about','services','blog']

// dataArray.map((fd:string)=>{
//       let li=document.createElement('li')
//       li.innerHTML+=fd
//       let ul:any=document.querySelector<HTMLHtmlElement>('ul')
//       ul.innerHTML+=fd


// })
var inform: any
var row:any=document.querySelector('.cards .container-fluid .row')
var btns:any=document.querySelectorAll('header .container button')
fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
       
  
      function displayCards(item:any){
        let cards=item.map(function(fd){
            return `<div class="card col-12 col-sm-12 col-md-3 ">
  <img src=${fd.image}  class="card-img-top"  alt="">
  <div class="card-body">
      <h1 class="card-title">${fd.title}</h1>
      <p class="card-text">Category : ${fd.category}</p>
      <h2 class="card-title">$ ${fd.price}</h2>
      <div class="rating d-flex justify-content-between ">
          <div class="rate">Rating : ${fd.rating.rate}</div>
          <div class="count">Count : ${fd.rating.count}</div>
      </div>
  </div>
  </div>`
  
})
cards=cards.join("")
row.innerHTML=cards
}
displayCards(data)
     btns.forEach((btn:any) => {
        btn.onclick=(e:any)=>{
            let activebtn:any=document.querySelector('header .container button.active')
             activebtn.classList.remove('active')
             btn.classList.add('active')
         const category=e.currentTarget.dataset.id
         const cardCategory=data.filter((fd:any)=>{
              if (fd.category === category) {
                  return fd
              }
         })
          if (category === 'all') {
               displayCards(data)
          }else{
            displayCards(cardCategory)
          }
        }
     });
        
   
      })

  
