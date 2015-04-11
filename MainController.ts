///<reference path="Image.ts"/>
///<reference path="ImageGroup.ts"/>



class MainController{


    public ungroupedImages: DetailedImage[];

    public imageGroups: ImageGroup[];


    public selectedImages: DetailedImage[];


    constructor(){

        this.ungroupedImages = [];
        this.imageGroups = [];
        this.selectedImages = [];

        console.log("Creating main controller");
    }


    public onCreateImageGroup(){


        var newGroup = new ImageGroup();

        this.selectedImages.forEach((detailedImage)=>{
            newGroup.images.push(detailedImage);
            var indexForRemoval = this.ungroupedImages.indexOf(detailedImage);
            this.ungroupedImages.splice(indexForRemoval, 1);
        });

        this.selectedImages.length = 0;

        this.imageGroups.push(newGroup);

    }


    public onImageSelect(detailedImage: DetailedImage) : boolean{

        console.log("Image selected");
        var indexOf = this.selectedImages.indexOf(detailedImage);

        if(indexOf == -1){
            this.selectedImages.push(detailedImage);
            return true;
        } else {
            this.selectedImages.splice(indexOf,1);
            return false;
        }
    }

    public onImageAdded(url){
        var detailedImage = new DetailedImage(url, "title", "description");
        this.ungroupedImages.push(detailedImage);
    }

}