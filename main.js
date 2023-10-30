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
        county: ['001: Mombasa County', '002: Kwale County', '003: Kilifi County', '004: Tana River County', '005: Lamu County', '006: Taita-Taveta County', '007: Garissa County', '008: Wajir County', '009: Mandera County', '010: Marsabit County', '011: Isiolo County', '012: Meru County', '013: Tharaka-Nithi County', '014: Embu County', '015: Kitui County', '016: Machakos County', '017: Makueni County', '018: Nyandarua County', '019: Nyeri County', '020: Kirinyaga County', "021: Murang'a County", '022: Kiambu County', '023: Turkana County', '024: West Pokot County', '025: Samburu County', '026: Trans Nzoia County', '027: Uasin Gishu County', '028: Elgeyo-Marakwet County', '029: Nandi County', '030: Baringo County', '031: Laikipia County', '032: Nakuru County', '033: Narok County', '034: Kajiado County', '035: Kericho County', '036: Bomet County', '037: Kakamega County', '038: Vihiga County', '039: Bungoma County', '040: Busia County', '041: Siaya County', '042: Kisumu County', '043: Homa Bay County', '044: Migori County', '045: Kisii County', '046: Nyamira County', '047: Nairobi County'],
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
