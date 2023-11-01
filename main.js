window.onscroll = function () {
    makeNavbarSticky();
};

var navbar = document.querySelector('.navbar');
var navbarOffset = navbar.offsetTop;

function makeNavbarSticky() {
    if (window.scrollY >= navbarOffset) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
}

// JavaScript code to dynamically populate organization names based on the selected organization level
; document.addEventListener('DOMContentLoaded', function () {
    var orgLevelSelect = document.getElementById('org-level');
    var orgNameSelect = document.getElementById('org-name');

    var orgNames = {
        ministry: ['Ministry of Interior and Coordination of National Government', 'Ministry of Devolution and Planning', 'Ministry of Finance & National Treasury', 'Ministry of Defence', 'Ministry of Foreign Affairs & International Trade', 'Ministry of Education', 'Ministry of Health', 'Ministry of Transport and Infrastructure', 'Ministry of Information, Communication and Technology', 'Ministry of Environment, and Natural Resource', 'Ministry of Land, Housing and Urban Development', 'Ministry of Sports, Culture and the Arts', 'Ministry of Labour & East Africa Affairs', 'Ministry of Energy and Petroleum', 'Ministry of Agriculture, Livestock and Fisheries', 'Ministry of Industrialization and Enterprise Development', 'Ministry of Public Service, Youth & Gender Affairs', 'Ministry of Tourism', 'Ministry of Mining', 'Ministry of Water & Irrigation'],
        county: ['Mombasa County', 'Kwale County', 'Kilifi County', 'Tana River County', 'Lamu County', 'Taita-Taveta County', 'Garissa County', 'Wajir County', 'Mandera County', 'Marsabit County', 'Isiolo County', 'Meru County', 'Tharaka-Nithi County', 'Embu County', 'Kitui County', 'Machakos County', 'Makueni County', 'Nyandarua County', 'Nyeri County', 'Kirinyaga County', "Murang'a County", 'Kiambu County', 'Turkana County', 'West Pokot County', 'Samburu County', 'Trans Nzoia County', 'Uasin Gishu County', 'Elgeyo-Marakwet County', 'Nandi County', 'Baringo County', 'Laikipia County', 'Nakuru County', 'Narok County', 'Kajiado County', 'Kericho County', 'Bomet County', 'Kakamega County', 'Vihiga County', 'Bungoma County', 'Busia County', 'Siaya County', 'Kisumu County', 'Homa Bay County', 'Migori County', 'Kisii County', 'Nyamira County', 'Nairobi County'],
        department: [],
        agency: [],
        university: ['University Of Nairobi', 'Moi University', 'Kenyatta University', 'Jomo Kenyatta University Of Agriculture & Technology', 'Egerton University', 'Maseno University', 'Masinde Muliro University of Science and Technology', 'Dedan Kimathi University of Technology', 'Technical University of Kenya', 'Pwani University', 'Technical University of Mombasa', 'Chuka University', 'Kisii University', 'Maasai Mara University', 'Meru University of Science and Technology', 'University of Kabianga', 'Jaramogi Oginga Odinga University of Science and Technology', 'South Eastern Kenya University', 'Multimedia University of Kenya', 'Laikipia University', 'Karatina University', 'University of Eldoret', 'Taita Taveta University College', "Murang'a University College", 'Kirinyaga University College', 'Cooperative University College of Kenya', 'Kibabii University', 'Garissa University College of Kenya', 'Rongo University College of Kenya', 'Embu University College of Kenya', 'Machakos University College of Kenya'],
        tvet: ['Ahmed Shahame Mwidani Technical Training Institute', 'Aldai Technical Training Institute', 'Bahati Institute of Business and Administration Studies', 'Baringo Technical College', 'Bondo Technical Training Institute', 'Bumbe Technical Training Institute', 'Bunyala Technical and Vocational College', 'Bureti Technical Training Institute', 'Bushiangala Technical Training Institute', 'Butere Technical and Vocational College', 'Chuka Technical and Vocational College', 'David M. Wambuli Technical and Vocational College', 'Ekerubo Gietai Technical Training Institute', 'Emining Technical Training Institute', 'Emsos Technical and Vocational College', 'Endebess Technical Training Institute', 'Gatanga Technical and Vocational College', 'Gitwebe Technical Training Institute', 'Godoma Technical Training Institute', 'Jeremiah Nyaga Technical Training Institute', 'Kaiboi Technical Training Institute', 'Kasarani Technical and Vocational College', 'Katine Technical Training Institute', 'Keroka Technical Training Institute', 'Kiirua Technical Training Institute', 'Kipkabus Technical and Vocational College', 'Konoin Technical Training Institute', 'Kajiado West Technical and Vocational College', 'Kapcherop Technical and Vocational College', 'Karen Technical Training Institute for the Deaf', 'Karumo Technical Training Institute', 'Koshin Technical Training Institute', 'Laikipia East Technical and Vocational College', 'Laikipia North Technical and Vocational College', 'Laisamis Technical and Vocational College', 'Maasai Mara Technical and Vocational College', 'Machakos Technical Training Institute for the Blind', 'Mathenge Technical Training Institute', 'Mathioya Technical and Vocational College', 'Mathira Technical and Vocational College', 'Matili Technical Training Institute', 'Maasai Technical Training Institute', 'Masinga Technical and Vocational College', 'Kipipiri Technical and Vocational College', 'Kipsinende Technical and Vocational College', 'Kisiwa Technical Training Institute', 'Mawego Technical Training Institute', 'Michuki Technical Training Institute', 'Mitunguu Technical Training Institute', 'Moiben Technical and Vocational College', 'Mukiria Technical Training Institute', 'Mukurwe-ini Technical Training Institute', 'Mumias West Technical and Vocational College', 'Muraga Technical Training Institute', 'Musakasa Technical Training Institute', 'Nachu Technical and Vocational College', 'Nairobi Technical Training Institute', 'Naivasaha Technical and Vocational College', 'Narok West Technical Training Institute', 'Ndia Technical and Vocational College', 'Nkabune Technical Training Institute', 'Nuu Technical and Vocational College', 'Okame Technical and Vocational College', 'Runyenjes Technical and Vocational College', 'Sabatia Technical and Vocational College', "Ol'lessos Technical Training Institute", 'PC Kinyanjui Technical Training Institute', 'Rift Valley Technical Training Institute', 'Shamberere Technical Training Institute', 'Siala Technical Training Institute', 'Sot Technical Training Institute', 'Sotik Technical Training Institute', 'St. Josephs Technical Institute for the Deaf-Nyangoma', 'Taveta Technical and Vocational College', 'Tharaka Technical and Vocational College', 'Thika Technical Training Institute', 'Tseikuru Technical Training Institute', 'Ugenya Technical and Vocational College', 'Weru Technical and Vocational College', 'Wote Technical Training Institute', 'Ziwa Technical Training Institute', 'Coast Institue of Technology Voi', 'Nyandarua Institute of Science and Technology', 'Ramogi Institute of Advanced Technology', 'Rift Valley Institute of Science and Technology', 'Friends College Kaimosi', 'Kiambu Institute of Science and Technology', "Sang'alo Institute of Science and Technology", 'Siaya Institute of Technology', 'Eldoret National Polytechnic', 'Kabete National Polytechnic', 'Kenya Coast National Polytechnic', 'Kisii National Polytechnic', 'Kisumu National Polytechnic', 'Kitale National Polytechnic', 'Meru National Polytechnic', 'North Eastern Province National Polytechnic (NEP)', 'Nyeri National Polytechnic', 'Sigalagala National Polytechnic']
    };

    orgLevelSelect.addEventListener('change', function () {
        var selectedOrgLevel = orgLevelSelect.value;
        var orgNamesArray = orgNames[selectedOrgLevel] || [];

        orgNameSelect.innerHTML = '<option value="">Select an organization name</option>';

        orgNamesArray.forEach(function (org) {
            var option = document.createElement('option');
            option.value = org;
            option.textContent = org;
            orgNameSelect.appendChild(option);
        });
    });
});
