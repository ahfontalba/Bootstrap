var app = angular.module('demo.accordian.openhandler', ['ui.bootstrap']);

app.controller('DyanmicAccordionCtrl', function ($scope) {

    $scope.strapline = "GLOBAL NETWORK would gratefully welcome your feedback";

    $scope.ratingHeader = "What is your opinion of this site?";

    $scope.rating = {
        header: "What is your opinion of this site?",
        groupHeader1: "Can you tell us what we've done to upset you?",
        groupHeader2: "Is there anything we can do to improve our customer user experience?",
        groupHeader3: "Please tell us about your experience.",
        groupHeader4: "Can you suggest an idea to enhace our user experience?",
        groupHeader5: "Glad you like our site. Please tell us about your experience.",
    };

    $scope.groupHeader = "Please tell us about your experience.";

    $scope.email = {
        header: "If you wish us to get in touch, please provide us with an email address where we can reach you.",
        placeholder: "Enter e-mail address here (optional)"
    };

    $scope.privacyUrl = "https://www.americanexpress.com/us/content/legal-disclosures/online-privacy-statement.html";

    $scope.groups = [
        {
            icon: "icon ic-env",
            title: "General feedback",
            name: "feedback",
            placeholder: "e.g. Were you able to find relevant advice? Was the site easy to navigate?",
            open: false
        },
        {
            icon: "icon ic-bug",
            title: "Report a bug",
            name: "bug",
            placeholder: "e.g. What page of the experience did you notice this bug? Please provide detail.",
            open: false
        },
        {
            icon: "icon ic-bulb",
            title: "Suggest an idea",
            name: "idea",
            placeholder: "e.g. What would make this website more useful for you?",
            open: false
        }
    ];



    $scope.ratingSelected = function(ratingNum) {
        console.log("selected rating: " + ratingNum);

        if($scope.groups[0].open == false) {
            $scope.groups[0].open = true;
        }

        if(ratingNum == 1) {
            $scope.groupHeader = $scope.rating.groupHeader1;
        } else if(ratingNum == 2) {
            $scope.groupHeader = $scope.rating.groupHeader2;
        } else if(ratingNum == 3) {
            $scope.groupHeader = $scope.rating.groupHeader3;
        } else if(ratingNum == 4) {
            $scope.groupHeader = $scope.rating.groupHeader4;
        } else if(ratingNum == 5) {
            $scope.groupHeader = $scope.rating.groupHeader5;
        }
    };

});

