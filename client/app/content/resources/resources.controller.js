'use strict';

angular.module('kidsCountApp')
  .controller('ResourcesCtrl', ['$scope', function($scope){
    $scope.resources = [{
    	name: "Alachua County Library District",
    	imgUrl: "../assets/Images/Resources/AlachuaCountyLibrary.jpg",
    	url: "https://www.aclib.us/"
    },
    {
    	name: "Ask a Librarian",
    	imgUrl: "../assets/Images/Resources/AskALibrarian.jpg",
    	url: "http://www.askalibrarian.org/"
    },
    {
    	name: "Audio Book Cloud",
    	imgUrl: "../assets/Images/Resources/AudioBookCloud.jpg",
    	url: "http://www.audiobookcloud.com/"
    },
    {
    	name: "Big Ideas Learning",
    	imgUrl: "../assets/Images/Resources/BigIdeasLearning.jpg",
    	url: "http://www.bigideasmath.com/"
    },
    {
    	name: "Brain Fuse",
    	imgUrl: "../assets/Images/Resources/BrainFuse.jpg",
    	url: "http://www.brainfuse.com/"
    },
    {
    	name: "Brain Pop",
    	imgUrl: "../assets/Images/Resources/BrainPop.jpg",
    	url: "http://www.brainpop.com/"
    },
    {
    	name: "Brain Pop Espanol",
    	imgUrl: "../assets/Images/Resources/BrainPopEspanol.jpg",
    	url: "https://esl.brainpop.com/"
    },
    {
    	name: "Brain Pop Jr",
    	imgUrl: "../assets/Images/Resources/BrainPopJr.jpg",
    	url: "https://jr.brainpop.com/"
    },
    {
    	name: "Classzone",
    	imgUrl: "../assets/Images/Resources/Classzone.jpg",
    	url: "http://www.classzone.com/"
    },
    {
    	name: "Discovery Education",
    	imgUrl: "../assets/Images/Resources/DiscoveryEducation.jpg",
    	url: "http://www.discoveryeducation.com/"
    },
    {
    	name: "Earobics",
    	imgUrl: "../assets/Images/Resources/Earobics.jpg",
    	url: ""
    },
    {
    	name: "Edmodo",
    	imgUrl: "../assets/Images/Resources/Edmodo.jpg",
    	url: "http://sbac.edmodo.com/"
    },
    {
    	name: "EduTone",
    	imgUrl: "../assets/Images/Resources/Edutone.jpg",
    	url: "https://acps.edutone.net/"
    },
    {
    	name: "Enchanted Learning",
    	imgUrl: "../assets/Images/Resources/EnchantedLearning.jpg",
    	url: "http://www.enchantedlearning.com/Home.html"
    },
    {
    	name: "PMRN FAIR Test",
    	imgUrl: "../assets/Images/Resources/FAIRTest.png",
    	url: "https://wam.fldoe.org/login/signin.aspx"
    },
    {
    	name: "FCAT Explorer",
    	imgUrl: "../assets/Images/Resources/FCATExplorer.jpg",
    	url: "http://www.fcatexplorer.com/"
    },
    {
    	name: "Gmail",
    	imgUrl: "../assets/Images/Resources/Gmail.png",
    	url: "http://mail.google.com/"
    },
    {
    	name: "GO Math Florida",
    	imgUrl: "../assets/Images/Resources/GOMath.jpg",
    	url: ""
    },
    {
    	name: "Infinite Campus",
    	imgUrl: "../assets/Images/Resources/InfiniteCampus.png",
    	url: "http://campus.sbac.edu/campus/portal/alachua.jsp"
    },
    {
    	name: "Info Trac",
    	imgUrl: "../assets/Images/Resources/InfoTrac.jpg",
    	url: "http://infotrac.galegroup.com/itweb/alachuasb"
    },
    {
    	name: "Jamestown Reading Navigator",
    	imgUrl: "../assets/Images/Resources/Jamestown.jpg",
    	url: "http://www.readingnavigator.com/lms/LoadLogin.do"
    },
    {
    	name: "K12maps",
    	imgUrl: "../assets/Images/Resources/K12Maps.gif",
    	url: "http://www.k12maps.com/"
    },
    {
    	name: "Khan Academy",
    	imgUrl: "../assets/Images/Resources/KhanAcademy.png",
    	url: "http://www.khanacademy.org/"
    },
    {
    	name: "Media Resources",
    	imgUrl: "../assets/Images/Resources/MediaResources.png",
    	url: "http://www.sbac.edu/pages/ACPS/Departments_Programs/Departments__G-L_/Textbook_Services____Instructi/Horizon_Card_Catalog_Links"
    },
    {
    	name: "McGraw Hill Connect",
    	imgUrl: "../assets/Images/Resources/MGHConnect.jpg",
    	url: "http://connected.mcgraw-hill.com/connected/login.do"
    },
    {
    	name: "My NG Connect",
    	imgUrl: "../assets/Images/Resources/MyNGConnect.jpg",
    	url: "http://www.myngconnect.com/"
    },
    {
    	name: "Pearson Success Net",
    	imgUrl: "../assets/Images/Resources/PearsonSuccessNet.jpg",
    	url: "http://www.pearsonsuccessnet.com/snpapp/login/login.jsp"
    },
    {
    	name: "Read 180",
    	imgUrl: "../assets/Images/Resources/Read180.jpg",
    	url: "http://read180.sbac.edu:55880/slms/studentaccess"
    },
    {
    	name: "Reflex Math",
    	imgUrl: "../assets/Images/Resources/ReflexMath.jpg",
    	url: "http://www.reflexmath.com/go"
    },
    {
    	name: "Renaissance Learning",
    	imgUrl: "../assets/Images/Resources/RenaissanceLearning.jpg",
    	url: "http://hosted13.renlearn.com/707383/"
    },
    {
    	name: "Studies Weekly",
    	imgUrl: "../assets/Images/Resources/StudiesWeekly.gif",
    	url: "http://www.estudiesweekly.com/"
    },
    {
    	name: "Sylvan Math Prep",
    	imgUrl: "../assets/Images/Resources/SylvanMathPrep.jpg",
    	url: "http://www.sylvanmathprep.com/"
    },
    {
    	name: "TeachingBooks",
    	imgUrl: "../assets/Images/Resources/TeachingBooks.jpg",
    	url: "http://www.teachingbooks.net/"
    },
    {
    	name: "Ticket To Read",
    	imgUrl: "../assets/Images/Resources/TicketToRead.jpg",
    	url: "http://www.tickettoread.com/"
    },
    {
    	name: "Tumble Book Cloud",
    	imgUrl: "../assets/Images/Resources/TumbleBookCloud.jpg",
    	url: "http://www.tumblebookcloud.com/Default.aspx?ReturnUrl=%2f"
    },
    {
    	name: "Cookie",
    	imgUrl: "../assets/Images/Resources/Cookie.jpg",
    	url: "http://www.cookie.com/"
    },
    {
    	name: "Spelling City",
    	imgUrl: "../assets/Images/Resources/SpellingCity.jpg",
    	url: "http://www.spellingcity.com/"
    },
    {
    	name: "Uncle Fred",
    	imgUrl: "../assets/Images/Resources/UncleFred.jpg",
    	url: "http://www.unclefred.com/"
    },
    {
    	name: "Illuminations",
    	imgUrl: "../assets/Images/Resources/Illuminations.jpg",
    	url: "http://illuminations.nctm.org/"
    },
    {
    	name: "Roy The Zebra",
    	imgUrl: "../assets/Images/Resources/RoyTheZebra.jpg",
    	url: "http://roythezebra.com/"
    },
    {
    	name: "Dance Mat Typing",
    	imgUrl: "../assets/Images/Resources/DanceMatTyping.jpg",
    	url: "http://www.bbc.co.uk/schools/typing/"
    },
    {
    	name: "National Geographic Kids",
    	imgUrl: "../assets/Images/Resources/NationalGeographicKids.jpg",
    	url: "http://kids.nationalgeographic.com/kids/"
    },
    {
    	name: "Discovery Kids",
    	imgUrl: "../assets/Images/Resources/DiscoveryKids.jpg",
    	url: "http://kids.discovery.com/"
    },
    {
    	name: "Nick Jr",
    	imgUrl: "../assets/Images/Resources/nickjr.jpg",
    	url: "http://www.nickjr.com/"
    },
    {
    	name: "Build a Bear",
    	imgUrl: "../assets/Images/Resources/BuildABear.png",
    	url: "http://www.buildabear.com/"
    },
    {
    	name: "McWorld",
    	imgUrl: "../assets/Images/Resources/McWorld.jpg",
    	url: "http://www.mcworld.com/"
    },
    {
    	name: "TumbleBooksLibrary",
    	imgUrl: "../assets/Images/Resources/TumbleBooksLibrary.jpg",
    	url: "http://www.tumblebooklibrary.com/Default.aspx?ReturnUrl=%2f"
    },
    {
    	name: "FCAT ePATS",
    	imgUrl: "../assets/Images/Resources/FCATePATS.png",
    	url: "https://www.pearsonaccess.com/cs/Satellite?c=Page&childpagename=Florida%2FflPALPLayout&cid=1205461226846&pagename=flPALPWrapper"
    },
    {
    	name: "World Book Student",
    	imgUrl: "../assets/Images/Resources/WorldBook.jpg",
    	url: "http://worldbookonline.com/wb/Login?ed=wb&tu=http%3A%2F%2Fworldbookonline.com%2Fstudent%2Fhome"
    },
    {
    	name: "World Book Kids",
    	imgUrl: "../assets/Images/Resources/WorldBookKids.jpg",
    	url: "http://www.worldbookonline.com/wb/Login?ed=wb&tu=http%3A%2F%2Fwww.worldbookonline.com%2Fkids%2Fhome"
    },
    {
    	name: "VMath Live",
    	imgUrl: "../assets/Images/Resources/VMathLive.jpg",
    	url: "https://www.vmathlive.com/login"
    }];

    
  }]);
