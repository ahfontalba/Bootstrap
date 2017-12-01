var app = angular.module('feedbackForm', ['ui.bootstrap', 'ngSanitize']);

app.controller('FeedbackFormController', function ($scope) {
    $scope.oneAtATime = true;

    $scope.strapline = "GLOBAL NETWORK would gratefully welcome your feedback";

    $scope.rating = {
        header: "What is your opinion of this site?",
        feedbackHeaders: [
            "Can you tell us what we've done to upset you?",
            "Is there anything we can do to improve our customer user experience?",
            "Please tell us about your experience.",
            "Can you suggest an idea to enhace our user experience?",
            "Glad you like our site. Please tell us about your experience.",
        ],
    };

    $scope.groupHeader = $scope.rating.feedbackHeaders[2];

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

    $scope.email = {
        header: "If you wish us to get in touch, please provide us with an email address where we can reach you.",
        placeholder: "Enter e-mail address here (optional)"
    };

    $scope.disclaimer = 'By providing your e-mail address, we may use it to respond to your feedback. ' + 
        'For information about how we protect your privacy, please read our '+ 
        '<a href="https://www.americanexpress.com/us/content/legal-disclosures/online-privacy-statement.html" target="_blank">Privacy Statement</a>.'

    $scope.ratingSelected = function(ratingNum) {
        console.log("selected rating: " + ratingNum);
        
        var open = false;
        for(x in $scope.groups) {
            if($scope.groups[x].open == true) {
                open = true;
            }
        }

        if(!open) {
            $scope.groups[0].open = true;
        }

        $scope.groupHeader = $scope.rating.feedbackHeaders[ratingNum];
    };

});

