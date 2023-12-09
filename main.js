window.onscroll = function () {
    makeNavbarSticky();
};

const navbar = document.querySelector('.navbar');
const navbarOffset = navbar.offsetTop;

function makeNavbarSticky() {
    if (window.scrollY >= navbarOffset) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
}

    
// JavaScript code to dynamically populate organization names and reporting criteria based on the selected level and quarter
document.addEventListener('DOMContentLoaded', function() {
    var orgLevelSelect = document.getElementById('org-level');
    var orgNameSelect = document.getElementById('org-name');
    var reportingPeriodSelect = document.getElementById('reporting-period');
    var criteriaContainer = document.getElementById('criteria-container');
  
    const orgNames = {
        ministry: ['Ministries and State Departments Office of The Prime Cabinet Secretary and Ministry of Foreign & Diaspora Affairs','Ministry of Interior and National Administration', 'The National Treasury and Economic planning', 'Ministry of Defence', 'Ministry of Public service, Performance and Delivery Management','Ministry of Roads and Transport', 'Ministry of Education', 'Ministry of Health', 'Ministry of Information, Communication and The Digital Economy', 'Ministry of Environment,Climate Change and Forestry', 'Ministry of Lands, Public Works, Housing and Urban Development', 'Ministry of Youth Affairs, Creative Economy and Sports', 'Ministry of Labour & Social Protection','Ministry of East African Community (EAC), The ASALs and Regional Development', 'Ministry of Energy and Petroleum', 'Ministry of Agriculture and Livestock Development', 'Ministry of Gender, Culture, The arts & Heritage', 'Ministry of Tourism and Wildlife', 'Ministry of Mining, Blue Economy and Maritime Affairs', 'Ministry of Water, Sanitation & Irrigation', 'Ministry of Investments,Trade and Industry','Ministry of Co-operatives and Micro,Small and Medium Enterprises (MSMEs) Development'],
        county: ['001: Mombasa County', '002: Kwale County', '003: Kilifi County', '004: Tana River County', '005: Lamu County', '006: Taita-Taveta County', '007: Garissa County', '008: Wajir County', '009: Mandera County', '010: Marsabit County', '011: Isiolo County', '012: Meru County', '013: Tharaka-Nithi County', '014: Embu County', '015: Kitui County', '016: Machakos County', '017: Makueni County', '018: Nyandarua County', '019: Nyeri County', '020: Kirinyaga County', "021: Murang'a County", '022: Kiambu County', '023: Turkana County', '024: West Pokot County', '025: Samburu County', '026: Trans Nzoia County', '027: Uasin Gishu County', '028: Elgeyo-Marakwet County', '029: Nandi County', '030: Baringo County', '031: Laikipia County', '032: Nakuru County', '033: Narok County', '034: Kajiado County', '035: Kericho County', '036: Bomet County', '037: Kakamega County', '038: Vihiga County', '039: Bungoma County', '040: Busia County', '041: Siaya County', '042: Kisumu County', '043: Homa Bay County', '044: Migori County', '045: Kisii County', '046: Nyamira County', '047: Nairobi County'],
        department: [],
        agency: [],
        university: ['University Of Nairobi', 'Moi University', 'Kenyatta University', 'Jomo Kenyatta University Of Agriculture & Technology', 'Egerton University', 'Maseno University', 'Masinde Muliro University of Science and Technology', 'Dedan Kimathi University of Technology', 'Technical University of Kenya', 'Pwani University', 'Technical University of Mombasa', 'Chuka University', 'Kisii University', 'Masai Mara University', 'Meru University of Science and Technology', 'University of Kabianga', 'Jaramogi Oginga Odinga University of Science and Technology', 'South Eastern Kenya University', 'Multimedia University of Kenya', 'Laikipia University', 'Karatina University', 'University of Eldoret', 'Taita Taveta University', "Muranga University of Technology", 'Kirinyaga University ', 'Co-operative University of Kenya', 'University of Kibabii', 'Garissa University', 'Rongo University', 'University of Embu','Tharaka University', 'Machakos University', 'Kaimosi Friends University','Alupe university','Mama ngina University college','Bomet University college','Tom mboya University','Turkana University college','Koitalel arap samoei university college'],
        tvet: ['Ahmed Shahame Mwidani Technical Training Institute', 'Aldai Technical Training Institute', 'Bahati Institute of Business and Administration Studies', 'Baringo Technical College', 'Bondo Technical Training Institute', 'Bumbe Technical Training Institute', 'Bunyala Technical and Vocational College', 'Bureti Technical Training Institute', 'Bushiangala Technical Training Institute', 'Butere Technical and Vocational College', 'Chuka Technical and Vocational College', 'David M. Wambuli Technical and Vocational College', 'Ekerubo Gietai Technical Training Institute', 'Emining Technical Training Institute', 'Emsos Technical and Vocational College', 'Endebess Technical Training Institute', 'Gatanga Technical and Vocational College', 'Gitwebe Technical Training Institute', 'Godoma Technical Training Institute', 'Jeremiah Nyaga Technical Training Institute', 'Kaiboi Technical Training Institute', 'Kasarani Technical and Vocational College', 'Katine Technical Training Institute', 'Keroka Technical Training Institute', 'Kiirua Technical Training Institute', 'Kipkabus Technical and Vocational College', 'Konoin Technical Training Institute', 'Kajiado West Technical and Vocational College', 'Kapcherop Technical and Vocational College', 'Karen Technical Training Institute for the Deaf', 'Karumo Technical Training Institute', 'Koshin Technical Training Institute', 'Laikipia East Technical and Vocational College', 'Laikipia North Technical and Vocational College', 'Laisamis Technical and Vocational College', 'Maasai Mara Technical and Vocational College', 'Machakos Technical Training Institute for the Blind', 'Mathenge Technical Training Institute', 'Mathioya Technical and Vocational College', 'Mathira Technical and Vocational College', 'Matili Technical Training Institute', 'Maasai Technical Training Institute', 'Masinga Technical and Vocational College', 'Kipipiri Technical and Vocational College', 'Kipsinende Technical and Vocational College', 'Kisiwa Technical Training Institute', 'Mawego Technical Training Institute', 'Michuki Technical Training Institute', 'Mitunguu Technical Training Institute', 'Moiben Technical and Vocational College', 'Mukiria Technical Training Institute', 'Mukurwe-ini Technical Training Institute', 'Mumias West Technical and Vocational College', 'Muraga Technical Training Institute', 'Musakasa Technical Training Institute', 'Nachu Technical and Vocational College', 'Nairobi Technical Training Institute', 'Naivasaha Technical and Vocational College', 'Narok West Technical Training Institute', 'Ndia Technical and Vocational College', 'Nkabune Technical Training Institute', 'Nuu Technical and Vocational College', 'Okame Technical and Vocational College', 'Runyenjes Technical and Vocational College', 'Sabatia Technical and Vocational College', "Ol'lessos Technical Training Institute", 'PC Kinyanjui Technical Training Institute', 'Rift Valley Technical Training Institute', 'Shamberere Technical Training Institute', 'Siala Technical Training Institute', 'Sot Technical Training Institute', 'Sotik Technical Training Institute', 'St. Josephs Technical Institute for the Deaf-Nyangoma', 'Taveta Technical and Vocational College', 'Tharaka Technical and Vocational College', 'Thika Technical Training Institute', 'Tseikuru Technical Training Institute', 'Ugenya Technical and Vocational College', 'Weru Technical and Vocational College', 'Wote Technical Training Institute', 'Ziwa Technical Training Institute', 'Coast Institue of Technology Voi', 'Nyandarua Institute of Science and Technology', 'Ramogi Institute of Advanced Technology', 'Rift Valley Institute of Science and Technology', 'Friends College Kaimosi', 'Kiambu Institute of Science and Technology', "Sang'alo Institute of Science and Technology", 'Siaya Institute of Technology', 'Eldoret National Polytechnic', 'Kabete National Polytechnic', 'Kenya Coast National Polytechnic', 'Kisii National Polytechnic', 'Kisumu National Polytechnic', 'Kitale National Polytechnic', 'Meru National Polytechnic', 'North Eastern Province National Polytechnic (NEP)', 'Nyeri National Polytechnic', 'Sigalagala National Polytechnic']
    };
  
    var criteria = {
        Q1: {
            criterion1: "Criterion 1 (Q1)",
            criterion2: "Criterion 2 (Q1)",
        },
        Q2: {
            criterion1: "Criterion 1 (Q2)",
            criterion2: "Criterion 2 (Q2)",
        },
        Q3: {
            criterion1: "Criterion 1 (Q3)",
            criterion2: "Criterion 2 (Q3)",
            },
        Q4: {
            criterion1: "Criterion 1 (Q4)",
            criterion2: "Criterion 2 (Q4)",
            }
    };
  
    // Function to populate organization names based on the selected level
    function populateOrgNames() {
      var selectedOrgLevel = orgLevelSelect.value;
      var orgNamesArray = orgNames[selectedOrgLevel] || [];
  
      orgNameSelect.innerHTML = '<option value="">Select an organization name</option>';
  
      orgNamesArray.forEach(function(org) {
        var option = document.createElement('option');
        option.value = org;
        option.textContent = org;
        orgNameSelect.appendChild(option);
      });
    }
  
    // Function to populate criteria based on the selected quarter
    function populateCriteria() {
      var selectedReportingPeriod = reportingPeriodSelect.value;
      var criteriaObject = criteria[selectedReportingPeriod] || {};
  
      criteriaContainer.innerHTML = '';
  
      for (var key in criteriaObject) {
        if (criteriaObject.hasOwnProperty(key)) {
          var label = document.createElement('label');
          label.textContent = criteriaObject[key] + ':';
  
          var yesRadio = document.createElement('input');
          yesRadio.type = 'radio';
          yesRadio.name = key;
          yesRadio.value = 'Yes';
          label.appendChild(yesRadio);
          label.appendChild(document.createTextNode('Yes'));
  
          var noRadio = document.createElement('input');
          noRadio.type = 'radio';
          noRadio.name = key;
          noRadio.value = 'No';
          label.appendChild(noRadio);
          label.appendChild(document.createTextNode('No'));
  
          criteriaContainer.appendChild(label);
        }
      }
    }
  
    // Event listeners for level and quarter selection
    orgLevelSelect.addEventListener('change', populateOrgNames);
    reportingPeriodSelect.addEventListener('change', populateCriteria);
});


          // image switching function on the index.html and media.html page

window.onload = function () {
    const mediaImg = document.getElementById("media-img");
    const caption = document.getElementById("caption");

    // remember to edit the caption for the pictures inserted
    const images = [
        { src: "./images/hero.jpg", caption: "text goes here" },
        { src: "./images/kdc.jpg", caption: "text goes here" },
        { src: "./images/npccback.jpg", caption: "text goes here" },
        { src: "./images/CMA.jpg", caption: "text goes here" },
    ];

    let currentImageIndex = 0;

    function switchImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        mediaImg.style.opacity = 0;
        setTimeout(function () {
            mediaImg.style.backgroundImage = `url(${images[currentImageIndex].src})`;
            caption.textContent = images[currentImageIndex].caption;
            mediaImg.style.opacity = 1;
        }, 500);
    }
    setInterval(switchImage, 6000);
    if (window.location.pathname.includes('/index.html')) {
        switchImage();
    }
};
