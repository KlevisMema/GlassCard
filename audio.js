document.getElementById('bgvid').pause();

var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: '#fff',
    progressColor: 'purple',
    barWidth: 1,
    height: 70,
    responsive: true,
    hideScrollbar: true,
    hideCursor: true,
    interact: true,
    progressColor: '#000'
});

wavesurfer.load('slap house.mp3');

$(document).ready(function(){

    $('.fa-pause').css('display' , 'none');
    $('.fa-volume-xmark').css('display' , 'none');

    $('.fa-play').click(function() {
        wavesurfer.play();
        document.getElementById('bgvid').play();
        $(this).hide();
        $('.fa-pause').show();
        
    });

    $('.fa-pause').click(function(){
        wavesurfer.pause();
        document.getElementById('bgvid').pause();
        $(this).hide();
        $('.fa-play').show();

    });
    
    $('.fa-circle-stop').click(function(){
        wavesurfer.stop();
        document.getElementById('bgvid').pause();
        $('.fa-pause').css('display' , 'none');
        $('.fa-play').css('display' , 'inline-block');
    });

    $('.fa-volume-high').click(function() {
        $(this).css('display' , 'none');
        $('.fa-volume-xmark').css('display' , 'inline-block');
        wavesurfer.toggleMute();
    });

    $('.fa-volume-xmark').click(function(){
        $('.fa-volume-xmark').css('display' , 'none');
        $('.fa-volume-high').css('display' , 'inline-block');
        wavesurfer.toggleMute();
    });

    wavesurfer.on('finish', function () {
        wavesurfer.stop();
        $('.fa-pause').css('display' , 'none');
        $('.fa-play').css('display' , 'inline-block');
        document.getElementById('bgvid').pause();
        
    });

    document.addEventListener('keyup' , event => {
        
        if(event.code == 'Space'){
            wavesurfer.playPause();
        }
    });

    $('.color-1').click(function(){
        $('.card').css('background' , 'rgba(255, 0, 0, 0.2)');
    });

    $('.color-2').click(function(){
        $('.card').css('background' , 'rgba(255, 189, 68, 0.56)');
    });

    $('.color-3').click(function(){
        $('.card').css('background' , 'rgba(0, 202, 78, 0.5)');
    });

    $('.color-4').click(function(){
        $('.card').css('background' , 'rgba(255, 255, 255, 0.2)');
    });

    $('.color-5').click(function(){
        $('.card').css('background' , 'rgba(0, 0, 0, 0.5)');
        $('.gather-img-socials').css('border' , '1px solid #00CA4E');
        $('.fa-brands').css('border' , '1px solid #00CA4E');
        $('.controls').css('border' , '1px solid #00CA4E');
         
        wavesurfer.setProgressColor('#00CA4E');
        wavesurfer.setCursorColor('#00CA4E')
    });

});


