music_one="";
music_two="";

scoreLeftWrist=0;
scoreRightWrist=0;
leftWristX=0;
rightWristX=0;
leftWristY=0;
rightWristY=0;

intialize=ml5.poseNet(webcam, modelLoaded);

intialize.on("pose", gotPoses);

function modelLoaded(){
    console.log("The model has offically loaded!!");
}

function preload(){
music_one=loadSound("music.mp3");
music_two=loadSound("music2.mp3");
}

function setup(){
canvas=createCanvas(600,500);
canvas.center();
webcam=createCapture(VIDEO);
webcam.hide();
}

function draw(){
    image(webcam,0,0,600,500);

    fill("#B2AC88");
    stroke("#B2AC88");


    if(scoreLeftWrist > 0.2)
{
    circle(left_x,left_y,20);
    music_two.stop();
    if(music_one == false){
        music_one.play();
    }
    else{
        document.getElementById("song_id").innerHTML = "Song Playing : Peter Pan";


    }
}

if(scoreRightWrist > 0.2)
{
    circle(right_x,right_y,20);
    music_one.stop();
    if(music_two == false){
        music_two.play();
    }
    else{
        document.getElementById("song_id").innerHTML = "Song Playing : Harry Potter";
    }
}
}
function gotPoses(results){
    if (results.length>0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;

        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;

        results[0].pose.keypoints[9].score;
        results[0].pose.keypoints[10].score;

        
        
        


    }
}
