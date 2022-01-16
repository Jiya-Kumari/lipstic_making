function preload(){

}
function setup(){
canvas=createCanvas(350,350);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        console.log("lipsticx="+results[0].pose.lipstic.x);
        console.log("lipsticy="+results[0].pose.lipstic.y);
    }
}
function draw(){
image(video,25,25,300,300);
}
function take_snapshot(){
    save('yoursnapshot.png');
}
function modelLoaded(){
    console.log("poseNetModelLoaded");
}
