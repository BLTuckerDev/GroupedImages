/// <reference path="./Image.ts" />

class ImageGroupController{


    public images : DetailedImage[];

    public selectedImages: DetailedImage[];

    public ungroupedImagePool: DetailedImage[];

    private directiveScope;

    constructor($scope){

        this.images = $scope.images;
        this.selectedImages = $scope.selectedImages;
        this.directiveScope = $scope;
        this.ungroupedImagePool = $scope.imagePool;


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
