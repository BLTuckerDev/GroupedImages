(function () {
    var app = angular.module("GroupedImages", ["ngRoute"]);

    app.config([ "$routeProvider", function ($routeProvider) {

        $routeProvider.when("/", {
            templateUrl: "./Main.html"
        }).otherwise({
            redirectTo: "/"
        });
    }
    ]);

    app.controller("ImageGroupController", ["$scope", ImageGroupController]);
    app.controller("MainController", MainController);

    app.directive("imageGroup", function () {
        return {
            scope: {
                "images" : "=",
                "selectedImages": "=",
                "imagePool": "=",
                "groupTitle": "="
            },
            restrict: "E",
            templateUrl: "./imagegroup.html",
            controller: "ImageGroupController",
            controllerAs: "controller"
        };
    });

    app.directive("detailedImageBox", function(){
        return {
            scope: {
                "image" : "="
            },
            restrict: "E",
            templateUrl: "./detailedimagebox.html"
        };
    });

    app.directive("multifileuploader", function () {
        return {
            scope: {
                "delegate": "&"
            },
            restrict: "E",
            templateUrl: "./imageuploader.html",
            link: function (scope, element) {
                element.find("input").bind("change", function (changeEvent) {

                    for (var i = 0; i < changeEvent.target.files.length; i++) {
                        var urlReader = new FileReader();
                        var dataUrl;

                        urlReader.onload = function () {
                            dataUrl = this.result;

                            scope.$apply(function () {
                                scope.delegate({
                                    url: dataUrl
                                });
                                element.find("input").val("");
                            });
                        };

                        if (typeof (changeEvent.target.files[i]) === "object") {
                            urlReader.readAsDataURL(changeEvent.target.files[i]);
                        }
                    }
                });
            }
        };
    });
})();