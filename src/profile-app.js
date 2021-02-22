import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/iron-form/iron-form.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
import './global-styles.js';
import './shared-styles.js'

class ProfileApp extends PolymerElement {

  static get properties() {
    return {
      fileInfo : {
        type: String,
        value: null
      },
      user: {
        type: Object,
        value: function () {
          // Get array data from Local Storage
          var profile = JSON.parse(window.localStorage.getItem("editProfile"));
          if (profile == null || undefined) {
            var obj = {
              "name": "Satish",
              "location": "Hyderabad / Secundrabad",
              "experience": {
                  "years" : 4,
                  "months": 2
              },
              "salary":{
                  "lakhs":5,
                  "thousand":50
              },
              "mobile":9177267370,
              "mail":"andra.satish@gmail.com",
              "aboutme": "Hello! I’m Joyce Harrison. I am passionate about UI/UX design and Web Design. I am a skilled Front-end Developer and master of Graphic Design tools such as Photoshop and Sketch.",
              "professionalskills":[
                {
                  "lang":"HTML",
                  "rating":90
                },
                {
                  "lang":"CSS",
                  "rating":80
                },
                {
                  "lang":"JavaScript",
                  "rating":86
                },
                {
                  "lang":"POLYMER",
                  "rating":80
                },
                {
                  "lang":"ANGULAR",
                  "rating":70
                },
                {
                  "lang":"REACT",
                  "rating":90
                }
              ],
              "workexperience":"Hello! I’m Joyce Harrison. I am passionate about UI/UX design and Web Design. I am a skilled Front-end Developer and master of Graphic Design tools such as Photoshop and Sketch.",
              "education":[
                  {
                      "education":10,
                      "yearofpassing":2006,
                      "board":"SSC",
                      "medium":"Telugu",
                      "percentage":80
                  },
                  {
                      "education":"Inter",
                      "yearofpassing":2008,
                      "board":"Board of Intermediate",
                      "medium":"English",
                      "percentage":70
                  },
                  {
                      "education":"B.Tech",
                      "yearofpassing":2012,
                      "board":"Andhra University",
                      "medium":"English",
                      "percentage":72
                  }
              ]
            };
            return obj;               
          }else{
            return profile;
          }
        },
      }
    };
 }

    static get template() {
      return html `
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" 
                integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" 
                crossorigin="anonymous"/>
      <link rel="stylesheet" href="/node_modules/material-design-lite/material.min.css">
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
      <script src="/node_modules/material-design-lite/material.min.js"></script>
      <script type="module" src="@fluidnext-polymer/paper-input-file/paper-input-file.js"></script>
      <script type="module" src="@fluidnext-polymer/paper-input-file/icons/paper-input-file-icons.js"></script>
        <style include="shared-styles">
          .col-md-2{
            width:20%;
          }
          .col-md-3{
            width:25%;
          }
          .col-md-4{
            width:33%;
          }
          .col-md-5{
            width:41%;
          }
          .col-md-6{
            width:50%;
          }
          .col-md-10{
            width:80%;
          }
          .float-left{
            float: left;
          }
          .float-right{
            float: right;
          }
          .row{
            width:98%;
            box-sizing: border-box;
          }
          .clear-float{
            clear: both;
          }
          .img-rounded{
            border-radius:50%;
          }
          .container-bg{
            background:#eaffff;
            overflow:hidden;
            padding:10px 40px 10px 10px;
            margin:10px 40px 10px 10px;
            border-radius:5px;
          }
          .mx-10{
            margin:0 10px;
          }
          .my-10{
            margin:10 0;
          }
          .mx-5{
            margin:0 5px;
          }
          .my-5{
            margin:5 0;
          }
          .ml-5{
            margin-left:5px;
          }
          .mr-5{
            margin-right:5px;
          }
          .mt-5{
            margin-top:5px;
          }
          .mb-5{
            margin-bottom:5px;
          }
          .mb-10{
            margin-bottom:10px;
          }
          .ml-10{
            margin-left:10px;
          }
          .mr-10{
            margin-right:10px;
          }
          .mt-10{
            margin-top:10px;
          }
          .mb-10{
            margin-bottom:10px;
          }
          .pl-5{
            padding:5px;
            box-sizing: border-box;
          }
          p{
            margin:0;
            margin-bottom:10px; 
          }
          .profile-title{
            font-size:30px;
            margin-bottom:15px;
            color:#6781d3;
          }
          .filled-btn{
            margin: 0 auto;
            display: block;
            background: royalblue;
            color: white;
            padding: 10px 15px;
            border-radius: 5px;
            outline: none;
            border: none;
          }
          .edit-btn{
            background: #b17e64;
            float: right;
          }
          .icon-color{
            color:#6781d3
          } 
          .upload-title{
            font-size:20px;
            text-align:center;
          }
          .progress {
            display: flex;
            height: 1rem;
            overflow: hidden;
            font-size: .75rem;
            background-color: #e9ecef;
            border-radius: .25rem;
        }
          .progress-bar {
            display: flex;
            flex-direction: column;
            justify-content: center;
            overflow: hidden;
            color: #fff;
            text-align: center;
            white-space: nowrap;
            background-color: #4a89dc;
            transition: width .6s ease;
        }
        .bg-primary{
          background: royalblue;
        }
        .bg-success{
          background: #25db6e;
        }
          @media only screen and (max-width: 1000px) {
            .col-sm-12{
              width:100%;
            }
            .float-left{
              float:none;
              display:block;
            }
            .container{
              padding:50px;
              border:1px solid royalblue;
              border-radius:5px;
              width:100%;
            }
            .row{
              width:97%;
            }
            .file-upload-button {
              background-color: #ff5252;
              border-radius: 5px;
              height: 3rem;
              overflow: hidden;
              position: relative;
              width: 10rem;  
            }
            .file-info {
                color: #999;
                font-family: Lato;
                margin-left: 0.5rem;
            }
            input[type="file"] {
              font-size: 100px;
              left: 0;
              opacity: 0;
              position: absolute;
              top: 0;
            }          
          }
        </style>
        <section id="profile-wrapper">
        
        <!-- Action Button -->
        <div class="row container-bg">
          <div class="col-md-12">
            <p>{{data.profile.name}}</p>
            <button type="submit" value="Edit Profile" on-click="editDetails()" class="filled-btn edit-btn">
              <iron-icon icon="create"></iron-icon>  Edit Profile
            </button>
          </div>
        </div>

          <!-- Profile -->
          <div class="row container-bg clear-float">
            <div class="col-md-2 col-sm-12 float-left">
              <img src="../images/avatar.jpg" style="width:100%" class="img-rounded"/>
            </div>
            <div class="col-md-10 float-left pl-5">
              <div class="row">
                <div class="col-md-4 col-sm-12 float-left">
                    <p class="profile-title"> {{user.name}}</p>
                    <p><iron-icon icon="room" class="icon-color"></iron-icon> {{user.location}}</p>
                    <p><iron-icon icon="work" class="icon-color"></iron-icon> {{user.experience.years}} Year(s) {{user.experience.months}} Month(s) </p>
                    <p><iron-icon icon="folder" class="icon-color"></iron-icon> INR {{user.salary.lakhs}} Lakh(s) {{user.salary.thousand}} Thousand</p>    
                </div>
                <div class="col-md-4 col-sm-12 float-left">
                    <p><iron-icon icon="perm-phone-msg" class="icon-color"></iron-icon> {{user.mobile}}</p>
                    <p><iron-icon icon="mail" class="icon-color"></iron-icon> {{user.mail}}</p>
                </div>
                <div class="col-md-4 col-sm-12 float-left">
                  <div class="container">
                    <p class="profile-title upload-title">Upload your resume</p>
                    <button class="file-upload-button">
                      <input type="file" fileInput on-click="uploadFile" data-item$="[[fileInput]]/> Upload Resume
                    </button>
                    <p class="file-info">{{ fileInfo }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- About Profile -->
          <div class="row container-bg">
            <div class="col-md-12">
              <p class="profile-title">About Me</p>   
              <p>{{user.aboutme}}</p>
            </div>
          </div>

          <!-- Professional Skills -->
          <div class="row container-bg clear-float">
            <p class="profile-title">Professional Skills</p>   
            <template is="dom-repeat" items="{{user.professionalskills}}" id="skills" > 
              <div class="item">
                <div class="col-md-6 col-sm-12 float-left">
                  <p>{{item.lang}}</p>
                  <div class="progress mb-10 col-md-10"> 
                    <div class="progress-bar bg-primary aos-init" role="progressbar" data-aos="zoom-in-right" data-aos-delay="100" data-aos-anchor=".skills-section" style="width: [[item.rating]]%" aria-valuenow="10" aria-valuemin="10" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
            </template>
          </div>

          <!-- Work Experience -->
          <div class="row container-bg">
            <div class="col-md-12">
              <p class="profile-title">Work Experience</p>   
              <p>{{user.workexperience}}</p>
            </div>
          </div>

          <!-- Education -->
          <div class="row container-bg">
            <div class="col-md-12">
              <p class="profile-title">Education</p>
              <div class="mdl-grid">
                <div class="table-responsive">
                <table class="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
                  <thead>
                    <tr>
                      <th scope="col" class="mdl-data-table__cell--non-numeric">Eduacation</th>
                      <th scope="col" class="mdl-data-table__cell--non-numeric">Board</th>
                      <th scope="col" class="mdl-data-table__cell--non-numeric">Meduium</th>
                      <th scope="col" class="mdl-data-table__cell--non-numeric">Year of Passing</th>
                    </tr>
                  </thead>
                  <!--- Dom Repeat started -->
                  <template is="dom-repeat" items="{{user.education}}" id="education" > 
                    <tbody>
                      <tr class="item">
                        <td class="mdl-data-table__cell--non-numeric">{{item.education}}</td>
                        <td class="mdl-data-table__cell--non-numeric">{{item.board}}</td>
                        <td class="mdl-data-table__cell--non-numeric">{{item.medium}}</td>
                        <td class="mdl-data-table__cell--non-numeric">{{item.yearofpassing}}</td>
                      </tr>
                    </tbody>
                  </template>
                </table>
              </div>
              </div>   
            </div>
          </div>
        </section>
    `;
    }

    uploadFile(){
      window.alert('Resume has been uploaded successfully in jobseeker');
    }

    editDetails(){
      window.localStorage.setItem('profileDetails',JSON.stringify(this.user));
      window.localStorage.setItem('professionalskills',JSON.stringify(this.user.professionalskills));
      window.location.href = "/edit-profile";
    }
}


window.customElements.define('profile-app', ProfileApp);