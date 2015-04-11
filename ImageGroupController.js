/// <reference path="./Image.ts" />
var ImageGroupController = (function () {
    function ImageGroupController($scope) {
        console.log("Scope:", $scope);
        this.images = $scope.images;
    }
    return ImageGroupController;
})();
//# sourceMappingURL=ImageGroupController.js.map