/// <reference path="./Image.ts" />
var ImageGroupController = (function () {
    function ImageGroupController($scope) {
        this.images = $scope.images;
        this.selectedImages = $scope.selectedImages;
        this.ungroupedImagePool = $scope.imagePool;
        this.groupTitle = "Group " + $scope.groupTitle;
    }
    ImageGroupController.prototype.OnAddToGroupClick = function () {
        var _this = this;
        this.selectedImages.forEach(function (ungroupedImage) {
            _this.images.push(ungroupedImage);
            var indexForRemoval = _this.ungroupedImagePool.indexOf(ungroupedImage);
            _this.ungroupedImagePool.splice(indexForRemoval, 1);
        });
        this.selectedImages.length = 0;
    };
    return ImageGroupController;
})();
//# sourceMappingURL=ImageGroupController.js.map