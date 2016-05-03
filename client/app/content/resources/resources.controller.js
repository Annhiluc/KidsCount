'use strict';

angular.module('kidsCountApp')
  .controller('ResourcesCtrl', ['$scope', function($scope){
    $scope.resources = [{
    	name: "Alachua County Library District",
    	imgUrl: "../assets/images/Resources/AlachuaCountyLibrary.jpg",
    	url: "https://www.aclib.us/"
    },
    {
    	name: "Ask a Librarian",
    	imgUrl: "../assets/images/Resources/AskALibrarian.jpg",
    	url: "http://www.askalibrarian.org/"
    },
    {
    	name: "Audio Book Cloud",
    	imgUrl: "../assets/images/Resources/AudioBookCloud.jpg",
    	url: "http://www.audiobookcloud.com/"
    },
    {
    	name: "Big Ideas Learning",
    	imgUrl: "../assets/images/Resources/BigIdeasLearning.jpg",
    	url: "http://www.bigideasmath.com/"
    },
    {
    	name: "Brain Fuse",
    	imgUrl: "../assets/images/Resources/BrainFuse.jpg",
    	url: "http://www.brainfuse.com/"
    },
    {
    	name: "Brain Pop",
    	imgUrl: "../assets/images/Resources/BrainPop.jpg",
    	url: "http://www.brainpop.com/"
    },
    {
    	name: "Brain Pop Espanol",
    	imgUrl: "../assets/images/Resources/BrainPopEspanol.jpg",
    	url: "https://esl.brainpop.com/"
    },
    {
    	name: "Brain Pop Jr",
    	imgUrl: "../assets/images/Resources/BrainPopJr.jpg",
    	url: "https://jr.brainpop.com/"
    },
    {
    	name: "Classzone",
    	imgUrl: "../assets/images/Resources/Classzone.jpg",
    	url: "http://www.classzone.com/"
    },
    {
    	name: "Discovery Education",
    	imgUrl: "../assets/images/Resources/DiscoveryEducation.jpg",
    	url: "http://www.discoveryeducation.com/"
    },
    {
    	name: "Earobics",
    	imgUrl: "../assets/images/Resources/Earobics.jpg",
    	url: ""
    },
    {
    	name: "Edmodo",
    	imgUrl: "../assets/images/Resources/Edmodo.jpg",
    	url: "http://sbac.edmodo.com/"
    },
    {
    	name: "EduTone",
    	imgUrl: "../assets/images/Resources/Edutone.jpg",
    	url: "https://acps.edutone.net/"
    },
    {
    	name: "Enchanted Learning",
    	imgUrl: "../assets/images/Resources/EnchantedLearning.jpg",
    	url: "http://www.enchantedlearning.com/Home.html"
    },
    {
    	name: "PMRN FAIR Test",
    	imgUrl: "../assets/images/Resources/FAIRTest.png",
    	url: "https://wam.fldoe.org/login/signin.aspx"
    },
    {
    	name: "FCAT Explorer",
    	imgUrl: "../assets/images/Resources/FCATExplorer.jpg",
    	url: "http://www.fcatexplorer.com/"
    },
    {
    	name: "Gmail",
    	imgUrl: "../assets/images/Resources/Gmail.png",
    	url: "http://mail.google.com/"
    },
    {
    	name: "GO Math Florida",
    	imgUrl: "../assets/images/Resources/GOMath.jpg",
    	url: ""
    },
    {
    	name: "Infinite Campus",
    	imgUrl: "../assets/images/Resources/InfiniteCampus.png",
    	url: "http://campus.sbac.edu/campus/portal/alachua.jsp"
    },
    {
    	name: "Info Trac",
    	imgUrl: "../assets/images/Resources/InfoTrac.jpg",
    	url: "http://infotrac.galegroup.com/itweb/alachuasb"
    },
    {
    	name: "Jamestown Reading Navigator",
    	imgUrl: "../assets/images/Resources/Jamestown.jpg",
    	url: "http://www.readingnavigator.com/lms/LoadLogin.do"
    },
    {
    	name: "K12maps",
    	imgUrl: "../assets/images/Resources/K12Maps.gif",
    	url: "http://www.k12maps.com/"
    },
    {
    	name: "Khan Academy",
    	imgUrl: "../assets/images/Resources/KhanAcademy.png",
    	url: "http://www.khanacademy.org/"
    },
    {
    	name: "Media Resources",
    	imgUrl: "../assets/images/Resources/MediaResources.png",
    	url: "http://www.sbac.edu/pages/ACPS/Departments_Programs/Departments__G-L_/Textbook_Services____Instructi/Horizon_Card_Catalog_Links"
    },
    {
    	name: "McGraw Hill Connect",
    	imgUrl: "../assets/images/Resources/MGHConnect.jpg",
    	url: "http://connected.mcgraw-hill.com/connected/login.do"
    },
    {
    	name: "My NG Connect",
    	imgUrl: "../assets/images/Resources/MyNGConnect.jpg",
    	url: "http://www.myngconnect.com/"
    },
    {
    	name: "Pearson Success Net",
    	imgUrl: "../assets/images/Resources/PearsonSuccessNet.jpg",
    	url: "http://www.pearsonsuccessnet.com/snpapp/login/login.jsp"
    },
    {
    	name: "Read 180",
    	imgUrl: "../assets/images/Resources/Read180.jpg",
    	url: "http://read180.sbac.edu:55880/slms/studentaccess"
    },
    {
    	name: "Reflex Math",
    	imgUrl: "../assets/images/Resources/ReflexMath.jpg",
    	url: "http://www.reflexmath.com/go"
    },
    {
    	name: "Renaissance Learning",
    	imgUrl: "../assets/images/Resources/RenaissanceLearning.jpg",
    	url: "http://hosted13.renlearn.com/707383/"
    },
    {
    	name: "Studies Weekly",
    	imgUrl: "../assets/images/Resources/StudiesWeekly.gif",
    	url: "http://www.estudiesweekly.com/"
    },
    {
    	name: "Sylvan Math Prep",
    	imgUrl: "../assets/images/Resources/SylvanMathPrep.jpg",
    	url: "http://www.sylvanmathprep.com/"
    },
    {
    	name: "TeachingBooks",
    	imgUrl: "../assets/images/Resources/TeachingBooks.jpg",
    	url: "http://www.teachingbooks.net/"
    },
    {
    	name: "Ticket To Read",
    	imgUrl: "../assets/images/Resources/TicketToRead.jpg",
    	url: "http://www.tickettoread.com/"
    },
    {
    	name: "Tumble Book Cloud",
    	imgUrl: "../assets/images/Resources/TumbleBookCloud.jpg",
    	url: "http://www.tumblebookcloud.com/Default.aspx?ReturnUrl=%2f"
    },
    {
    	name: "Cookie",
    	imgUrl: "../assets/images/Resources/Cookie.jpg",
    	url: "http://www.cookie.com/"
    },
    {
    	name: "Spelling City",
    	imgUrl: "../assets/images/Resources/SpellingCity.jpg",
    	url: "http://www.spellingcity.com/"
    },
    {
    	name: "Uncle Fred",
    	imgUrl: "../assets/images/Resources/UncleFred.jpg",
    	url: "http://www.unclefred.com/"
    },
    {
    	name: "Illuminations",
    	imgUrl: "../assets/images/Resources/Illuminations.jpg",
    	url: "http://illuminations.nctm.org/"
    },
    {
    	name: "Roy The Zebra",
    	imgUrl: "../assets/images/Resources/RoyTheZebra.jpg",
    	url: "http://roythezebra.com/"
    },
    {
    	name: "Dance Mat Typing",
    	imgUrl: "../assets/images/Resources/DanceMatTyping.jpg",
    	url: "http://www.bbc.co.uk/schools/typing/"
    },
    {
    	name: "National Geographic Kids",
    	imgUrl: "../assets/images/Resources/NationalGeographicKids.jpg",
    	url: "http://kids.nationalgeographic.com/kids/"
    },
    {
    	name: "Discovery Kids",
    	imgUrl: "../assets/images/Resources/DiscoveryKids.jpg",
    	url: "http://kids.discovery.com/"
    },
    {
    	name: "Nick Jr",
    	imgUrl: "../assets/images/Resources/nickjr.jpg",
    	url: "http://www.nickjr.com/"
    },
    {
    	name: "Build a Bear",
    	imgUrl: "../assets/images/Resources/BuildABear.png",
    	url: "http://www.buildabear.com/"
    },
    {
    	name: "McWorld",
    	imgUrl: "../assets/images/Resources/McWorld.jpg",
    	url: "http://www.mcworld.com/"
    },
    {
    	name: "TumbleBooksLibrary",
    	imgUrl: "../assets/images/Resources/TumbleBooksLibrary.jpg",
    	url: "http://www.tumblebooklibrary.com/Default.aspx?ReturnUrl=%2f"
    },
    {
    	name: "FCAT ePATS",
    	imgUrl: "../assets/images/Resources/FCATePATS.png",
    	url: "https://www.pearsonaccess.com/cs/Satellite?c=Page&childpagename=Florida%2FflPALPLayout&cid=1205461226846&pagename=flPALPWrapper"
    },
    {
    	name: "World Book Student",
    	imgUrl: "../assets/images/Resources/WorldBook.jpg",
    	url: "http://worldbookonline.com/wb/Login?ed=wb&tu=http%3A%2F%2Fworldbookonline.com%2Fstudent%2Fhome"
    },
    {
    	name: "World Book Kids",
    	imgUrl: "../assets/images/Resources/WorldBookKids.jpg",
    	url: "http://www.worldbookonline.com/wb/Login?ed=wb&tu=http%3A%2F%2Fwww.worldbookonline.com%2Fkids%2Fhome"
    },
    {
    	name: "VMath Live",
    	imgUrl: "../assets/images/Resources/VMathLive.jpg",
    	url: "https://www.vmathlive.com/login"
    }];

    
  }]);
