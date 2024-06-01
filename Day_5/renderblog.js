function fulltime(tanggal){

    const date = tanggal.getDate();
    const month = tanggal.getMonth();
    const year = tanggal.getFullYear();
    let hours = tanggal.getHours();
    let minutes = tanggal.getMinutes();

if (hours <= 9) {
  hours = "0" + hours;
}

if (minutes <= 9) {
  minutes = "0" + minutes;
}

return `${date}/${month}/${year}||${hours}:${minutes}`;
}
let dataproject =[];
function inputblog(event) {

    event.preventDefault();

let projectname = document.getElementById("projectname").value;
let stardate = document.getElementById("startdate").value;
let enddate = document.getElementById("enddate").value;
let description = document.getElementById("description").value;
let nodejs = document.getElementById("nodejs").value;
let reactjs = document.getElementById("reactjs").value;
let nextjs = document.getElementById("nextjs").value;
let typescript = document.getElementById("typescript").value;
let uploadimage =document.getElementById("uploadimage").files;


if (projectname == "") {
    alert("nama project tidak boleh kosong")
} else if (stardate =""){
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
renderProject()


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

  function Durasi(){
    const firstday = new Date(stardate);
    const lastday = new Date(enddate);

    const time = Math.abs(lastday - firstday);
    const timeSeconds = Math.floor(time / 1000);
    const timeMinutes = Math.floor(time/ 1000 / 60); 
    const timeHours = Math.floor(time / 1000 / 60 / 60);
    const timeDay = Math.floor(time / 1000 / 60 / 60 / 24);
    const timeMounth = Math.floor(time / 1000 / 60 / 60 / 24 / 30);

    if (timeMounth>0) {
        return `${timeMounth} Mounth Ago`;
        }else if (timeDay > 0) {
          return `${timeDay} Day Ago`;
        } else if (timeHours > 0) {
          return `${timeHours} Hours Ago`;
        } else if (timeMinutes > 0) {
          return `${timeMinutes} Minutes Ago`;
        } else if (timeSeconds > 0) {
          return `${timeSeconds} Seconds Ago`;
        }
    }
  

function renderProject() {
    document.getElementById("content").innerHTML = "";
    for (let index = 0; index < dataproject.length; index++) {
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
                                Durasi: ${Durasi[index].time}
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


