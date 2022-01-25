Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    image_quality: 90
});

camera=document.getElementById("camera");

Webcam.attach( '#camera' );


function take_snapshot(){

    webcam.snap(function(data_uri){

        document.getElementById("result").innerHTML = '<img id="catured_image" src="'+data_uri+'"/>';
});
}

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/t0Y5agW2H/model.jason',modelLoaded)

console.log("ml5 version", ml5.version);