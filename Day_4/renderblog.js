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


const oneday = 24*60*60*1000;
const diff = Math.abs(stardate-enddate);
const day = Math.round(diff/oneday);

const renderblog = {
    title: projectname,
    longproject: day,
    body: description,
    nodejs: nodejs,
    reactjs: reactjs,
    image: inputimage,
    typescript: typescript,
};
dataproject.push(renderblog);
console.log("dataArray:", dataproject);
renderProject()


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
                      <div class = "indeksblog">
                            <p>
                                durasi: ${dataproject[index].longproject}
                            </p>
                      </div>
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
                          <button class="btn-edit"> Edit Blog </button>
                          <button class="btn-post"> Post Blog </button>
                      </div>
                  </div>
              </div>
          `;
    }
  }
  setInterval(function () {
    renderProject();
  }, 1000);

