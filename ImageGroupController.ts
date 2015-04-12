/// <reference path="./Image.ts" />

class ImageGroupController{


    private images : DetailedImage[];

    private selectedImages: DetailedImage[];

    private ungroupedImagePool: DetailedImage[];

    private groupTitle;


    constructor($scope){
        this.images = $scope.images;
        this.selectedImages = $scope.selectedImages;
        this.ungroupedImagePool = $scope.imagePool;
        this.groupTitle = "Group " + $scope.groupTitle;

    }


    public OnAddToGroupClick(){

        this.selectedImages.forEach((ungroupedImage)=>{

            this.images.push(ungroupedImage);
            var indexForRemoval = this.ungroupedImagePool.indexOf(ungroupedImage);
            this.ungroupedImagePool.splice(indexForRemoval, 1);
        });

        this.selectedImages.length =0;
    }

}
