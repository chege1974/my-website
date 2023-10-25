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
        tvet: []
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
