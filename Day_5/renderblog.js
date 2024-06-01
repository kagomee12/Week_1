let dataproject =[];

function inputblog(event) {
event.preventDefault();

let projectname = document.getElementById("projectname").value;
let startdate = new Date(document.getElementById("startdate").value);
let enddate = new Date(document.getElementById("enddate").value);
let description = document.getElementById("description").value;
let nodejs = document.getElementById("nodejs").value;
let reactjs = document.getElementById("reactjs").value;
let nextjs = document.getElementById("nextjs").value;
let typescript = document.getElementById("typescript").value;
let uploadimage =document.getElementById("uploadimage").files;


if (projectname == "") {
    alert("nama project tidak boleh kosong")
} else if (startdate =""){
    alert("start date harus diisi")
} else if (enddate ==""){
        alert("end date tidak boleh kosong")
} else if (description == ""){
    alert("description tidak boleh kosong")
} else if (nodejs == "" && reactjs == "" && nextjs == "" && typescript == ""){ 
    alert("silahkan pilih salah satu technologies")
} else {
    alert("selamat project anda telah diposting")
}

inputimage = URL.createObjectURL(uploadimage[0]);

const renderblog = {
    title: projectname,
    body: description,
    nodejs: nodejs,
    reactjs: reactjs,
    image: inputimage,
    typescript: typescript,
    postAt: new Date(),
};
dataproject.push(renderblog);
console.log("dataArray:", dataproject);
renderProject();
}

function timeinfo (time) {
    const thistime = new Date().getTime();
    const timeposted= time
  
    const distance = thistime - timeposted;
  
    const distanceSeconds = Math.floor(distance / 1000);
    const distanceMinutes = Math.floor(distance / 1000 / 60); 
    const distanceHours = Math.floor(distance / 1000 / 60 / 60);
    const distanceDay = Math.floor(distance / 1000 / 60 / 60 / 24);
    const distanceMounth = Math.floor(distance / 1000 / 60 / 60 / 24 / 30);
  
    console.log(distanceSeconds);
    console.log(distanceMinutes);
    console.log(distanceHours);
    console.log(distanceDay);
    console.log(distanceMounth);
  
    if (distanceMounth>0) {
      return `${distanceMounth} Mounth Ago`;
      }else if (distanceDay > 0) {
        return `${distanceDay} Day Ago`;
      } else if (distanceHours > 0) {
        return `${distanceHours} Hours Ago`;
      } else if (distanceMinutes > 0) {
        return `${distanceMinutes} Minutes Ago`;
      } else if (distanceSeconds > 0) {
        return `${distanceSeconds} Seconds Ago`;
      }
  }

  function Duration(postAt, startdate, enddate) {
    let distanceDuration = new Date(enddate) - new Date(startdate);
  
    let yearMonth = 12;
    let monthWeek = 4;
    let weekDay = 7;
    let dayHour = 24;
    let hourMinute = 60;
    let minuteSecond = 60;
    let secondMilisecond = 1000;
  
    let oneYear = yearMonth * monthWeek * weekDay * dayHour * hourMinute * minuteSecond * secondMilisecond;
    let oneMonth = monthWeek * weekDay * dayHour * hourMinute * minuteSecond * secondMilisecond;
    let oneWeek = weekDay * dayHour * hourMinute * minuteSecond * secondMilisecond;
    let oneDay = dayHour * hourMinute * minuteSecond * secondMilisecond;
  
    let durationYear = Math.floor(distanceDuration / oneYear);
    let durationMonth = Math.floor(distanceDuration / oneMonth);
    let durationWeek = Math.floor(distanceDuration / oneWeek);
    let durationDay = Math.floor(distanceDuration / oneDay);

    console.log(durationYear);
    console.log(durationMonth);
    console.log(durationWeek);
    console.log(durationDay);
  
    if (durationYear > 0) {
      return `${durationYear} year`;
    } else if (durationMonth > 0) {
      return `${durationMonth} month`;
    } else if (durationWeek > 0) {
      return `${durationWeek} week`;
    } else if (durationDay > 0) {
      return `${durationDay} day`;
    }
  }
  

function renderProject() {
    document.getElementById("content").innerHTML = "";
    for (let index = 0; index < dataproject.length; index++) {
        let stringtimes = Duration(dataproject[index].distanceDuration, dataproject[index].startdate, dataproject[index].enddate)
      document.getElementById("content").innerHTML += `
              <div class="borderpost">
                  <div class="blog-image">
                      <img src="${dataproject[index].image}" alt="image upload" class ="jack" />
                  </div>
                  <div class="blog-content">
                          <a href="blog-detail.html" target="_black" class="gambarblog">${
                            dataproject[index].title
                          }</a>
                          <div class="infopost">
                      <div class = "indeksblog">
                            <p>
                                Durasi: ${Duration(dataproject[index].enddate)}
                            </p>
                      </div>
                      <div class = "infotime">
                            <p>
                                Dipost : ${timeinfo(dataproject[index].postAt)}
                            </p>
                      </div>
                          <div>
                      <div class ="isi">
                      <p>
                          ${dataproject[index].body}
                      </p>
                      </div>
                      <div class="detail-blog">
                      ${dataproject[index].nodejs ? '<i class="fa-brands fa-google-play" style= "font-size: 1.2em;"></i>': ""}
                      ${dataproject[index].reactjs ? '<i class="fa-brands fa-android" style= "font-size: 1.2em;"></i>' : ""}
                      ${dataproject[index].nextjs ?   '<i class="fa-brands fa-js" style= "font-size: 1.2em;"></i>' : ""}
                      ${dataproject[index].typescript ?  '<i class="fa-brands fa-apple" style= "font-size: 1.2em;"></i>' : ""}
                      </div>
                      <div class="btn-group">
                          <button class="btnedit"> Edit Blog </button>
                          <button class="btnpost"> Post Blog </button>
                      </div>
                  </div>
              </div>
          `;
    }
  }
  setInterval(function () {
    renderProject();
  }, 1000);


