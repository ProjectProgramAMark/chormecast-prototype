function onClick(e) {
	var winVideo = Titanium.UI.createWindow({
	    title:'Video Player',
	    backButtonTitle: 'Videos',
	    barColor: '#000',
	    backgroundColor:'#000',
	    orientationModes:[Ti.UI.LANDSCAPE_LEFT, Ti.UI.LANDSCAPE_RIGHT]
	});
	
	
	var videoPlayer = Titanium.Media.createVideoPlayer({
	    url: '/assets/OST.mp4',
	    backgroundColor: '#000',
	    fullscreen:true,
	    scalingMode: Titanium.Media.VIDEO_SCALING_ASPECT_FIT,
	    mediaControlMode: Titanium.Media.VIDEO_CONTROL_NONE     
	});
	 
	winVideo.add(videoPlayer);
	
	winVideo.open();
	 
	videoPlayer.addEventListener('complete', function(e){
	    if (e.reason == 0) {
	        winVideo.close();
	    };
	});
	 
	videoPlayer.addEventListener('fullscreen', function(e){
	    if (e.entering == 0) {
	        winVideo.close();
	    };
	});
}