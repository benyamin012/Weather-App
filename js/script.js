let imgsrc =[
  '1.png',
  '2.jpg',
  '3.jpg',
  '4.jpg',
  '5.jpg',
  '6.jpg',
  '7.jpg',
  '8.jpg',
  '9.jpg',
  '10.jpg',
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
  
  pressEnter.addEventListener('keypress',(event) =>{
    if (event.keyCode === 13) {
        fetchdata()
    }
  })