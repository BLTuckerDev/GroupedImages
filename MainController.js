///<reference path="Image.ts"/>
///<reference path="ImageGroup.ts"/>
var MainController = (function () {
    function MainController() {
        this.ungroupedImages = [];
        this.imageGroups = [];
        this.selectedImages = [];
        console.log("Creating main controller");
    }
    MainController.prototype.onCreateImageGroup = function () {
        var _this = this;
        var newGroup = new ImageGroup();
        this.selectedImages.forEach(function (detailedImage) {
            newGroup.images.push(detailedImage);
            var indexForRemoval = _this.ungroupedImages.indexOf(detailedImage);
            _this.ungroupedImages.splice(indexForRemoval, 1);
        });
        this.selectedImages.length = 0;
        this.imageGroups.push(newGroup);
    };
    MainController.prototype.onImageSelect = function (detailedImage) {
        console.log("SelectedImages:", this.selectedImages);
        console.log("Image selected");
        var indexOf = this.selectedImages.indexOf(detailedImage);
        if (indexOf == -1) {
            this.selectedImages.push(detailedImage);
            return true;
        }
        else {
            this.selectedImages.splice(indexOf, 1);
            return false;
        }
    };
    MainController.prototype.onImageAdded = function (url) {
        var detailedImage = new DetailedImage(url, "title", "description");
        this.ungroupedImages.push(detailedImage);
    };
    return MainController;
})();
//# sourceMappingURL=MainController.js.map