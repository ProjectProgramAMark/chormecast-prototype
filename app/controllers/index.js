function doClick(e) {
    var secondViewController = Alloy.createController('videoPlayer');
    
    var secondWindow = secondViewController.getView();
    
    secondWindow.open();
}

$.index.open();
