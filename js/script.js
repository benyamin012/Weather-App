let imgsrc =[
  'img/1.jpg',
  'img/2.jpg',
  'img/3.jpg',
  'img/4.jpg',
  'img/5.jpg',
  'img/6.jpg',
  'img/7.jpg',
  'img/8.jpg',
  'img/9.jpg',
  'img/10.jpg',
];
let imgresolt

let $ = document;

    imgresolt = Math.floor(Math.random() * imgsrc.length)
    $.body.style.backgroundImage ='url(' +imgsrc[imgresolt]+')';




    let apidata = {
      url:'https://api.openweathermap.org/data/2.5/weather?q=',
      key:'3ea2f5a4856551cbf65922000101b1b1'
    } 



  function fetchdata(){
    let inp = pressEnter.value;

    fetch(`${apidata.url}${inp}&&appid=${apidata.key}`)
    .then(res =>res.json())
    .then(data =>{
      console.log(data)
      showdata(data)
    })
     
  }


  function showdata(data){
    let cityelement = $.querySelector('.city')
    let tempelem = $.querySelector('.temp')
    let descriptioninf = $.querySelector('.description')
    cityelement.innerHTML=`${data.name},${data.sys.country}`
    tempelem.innerHTML= `${ Math.floor(data.main.temp - 270.15 )}°C `
    descriptioninf.innerHTML=`${data.weather[0].description}`
  }




  let pressEnter = $.querySelector('input')
  let srearchbtn = $.getElementById("search")
  srearchbtn.addEventListener('click',() =>{
    fetchdata()
  })
  pressEnter.addEventListener('keypress',(event) =>{
    if (event.keyCode === 13 ) {
        fetchdata()
    }
  })