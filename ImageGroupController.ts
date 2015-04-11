/// <reference path="./Image.ts" />

class ImageGroupController{


    public images : DetailedImage[];

    constructor($scope){

        console.log("Scope:", $scope);

        this.images = $scope.images;

    }

}
