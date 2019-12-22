controladdin "Ball&Brick"
{
    StartupScript = './ControlAddin/BallBrick/Startup.js';
    StyleSheets = './ControlAddIn/BallBrick/Stylesheet.css';
    Scripts = './ControlAddin/BallBrick/JS.js';

    HorizontalStretch = true;
    HorizontalShrink = true;
    MinimumHeight = 500;
    MaximumHeight = 500;
    RequestedWidth = 500;
    RequestedHeight = 500;
    MinimumWidth = 500;
    MaximumWidth = 500;
    VerticalStretch = true;
    VerticalShrink = true;

    // event GameReady(Param: Text);
    procedure init();

}
