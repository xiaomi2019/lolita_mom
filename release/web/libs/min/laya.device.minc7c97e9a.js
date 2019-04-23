!function(e,t,r){r.un,r.uns;var o=r.static,s=r.class,c=r.getset,i=(r.__newvec,laya.resource.Bitmap),l=laya.utils.Browser,a=(laya.events.Event,laya.events.EventDispatcher),d=(laya.utils.Handler,laya.maths.Rectangle,laya.renders.Render),h=laya.display.Sprite,u=(laya.display.Stage,laya.resource.Texture),v=laya.utils.Utils,n=laya.webgl.WebGL,m=laya.webgl.WebGLContext,g=(function(){function i(){}s(i,"laya.device.geolocation.Geolocation"),i.getCurrentPosition=function(t,n){i.navigator.geolocation.getCurrentPosition(function(e){i.position.setPosition(e),t.runWith(i.position)},function(e){n.runWith(e)},{enableHighAccuracy:laya.device.geolocation.Geolocation.enableHighAccuracy,timeout:laya.device.geolocation.Geolocation.timeout,maximumAge:laya.device.geolocation.Geolocation.maximumAge})},i.watchPosition=function(t,n){return i.navigator.geolocation.watchPosition(function(e){i.position.setPosition(e),t.runWith(i.position)},function(e){n.runWith(e)},{enableHighAccuracy:i.enableHighAccuracy,timeout:i.timeout,maximumAge:i.maximumAge})},i.clearWatch=function(e){i.navigator.geolocation.clearWatch(e)},i.PERMISSION_DENIED=1,i.POSITION_UNAVAILABLE=2,i.TIMEOUT=3,i.enableHighAccuracy=!1,i.maximumAge=0,o(i,["navigator",function(){return this.navigator=l.window.navigator},"position",function(){return this.position=new g},"supported",function(){return this.supported=!!i.navigator.geolocation},"timeout",function(){return this.timeout=1e10}])}(),function(){function e(){this.pos=null,this.coords=null}s(e,"laya.device.geolocation.GeolocationInfo");var t=e.prototype;return t.setPosition=function(e){this.pos=e,this.coords=e.coords},c(0,t,"heading",function(){return this.coords.heading}),c(0,t,"latitude",function(){return this.coords.latitude}),c(0,t,"altitudeAccuracy",function(){return this.coords.altitudeAccuracy}),c(0,t,"longitude",function(){return this.coords.longitude}),c(0,t,"altitude",function(){return this.coords.altitude}),c(0,t,"accuracy",function(){return this.coords.accuracy}),c(0,t,"speed",function(){return this.coords.speed}),c(0,t,"timestamp",function(){return this.pos.timestamp}),e}()),f=function(){function e(){}return s(e,"laya.device.media.Media"),e.supported=function(){return!!l.window.navigator.getUserMedia},e.getMedia=function(e,t,n){l.window.navigator.getUserMedia&&l.window.navigator.getUserMedia(e,function(e){t.runWith(l.window.URL.createObjectURL(e))},function(e){n.runWith(e)})},e.__init$=function(){navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia},e}(),p=function(){function e(){this.x=NaN,this.y=NaN,this.z=NaN}return s(e,"laya.device.motion.AccelerationInfo"),e}(),y=function(){function e(){this.absolute=!1,this.alpha=NaN,this.beta=NaN,this.gamma=NaN,this.compassAccuracy=NaN}return s(e,"laya.device.motion.RotationInfo"),e}(),E=function(a){function n(e){n.__super.call(this),this.onDeviceOrientationChange=this.onDeviceOrientationChange.bind(this)}s(n,"laya.device.motion.Accelerator",a);var e=n.prototype;return e.on=function(e,t,n,i){return a.prototype.on.call(this,e,t,n,i),l.window.addEventListener("devicemotion",this.onDeviceOrientationChange),this},e.off=function(e,t,n,i){return void 0===i&&(i=!1),this.hasListener(e)||l.window.removeEventListener("devicemotion",this.onDeviceOrientationChange),a.prototype.off.call(this,e,t,n,i)},e.onDeviceOrientationChange=function(e){var t=e.interval;n.acceleration.x=e.acceleration.x,n.acceleration.y=e.acceleration.y,n.acceleration.z=e.acceleration.z,n.accelerationIncludingGravity.x=e.accelerationIncludingGravity.x,n.accelerationIncludingGravity.y=e.accelerationIncludingGravity.y,n.accelerationIncludingGravity.z=e.accelerationIncludingGravity.z,n.rotationRate.alpha=-1*e.rotationRate.gamma,n.rotationRate.beta=-1*e.rotationRate.alpha,n.rotationRate.gamma=e.rotationRate.beta,l.onAndroid?(n.onChrome&&(n.rotationRate.alpha*=180/Math.PI,n.rotationRate.beta*=180/Math.PI,n.rotationRate.gamma*=180/Math.PI),n.acceleration.x*=-1,n.accelerationIncludingGravity.x*=-1):l.onIOS&&(n.acceleration.y*=-1,n.acceleration.z*=-1,n.accelerationIncludingGravity.y*=-1,n.accelerationIncludingGravity.z*=-1,t*=1e3),this.event("change",[n.acceleration,n.accelerationIncludingGravity,n.rotationRate,t])},c(1,n,"instance",function(){return n._instance=n._instance||new n(0)},laya.events.EventDispatcher._$SET_instance),n.getTransformedAcceleration=function(e){(n.transformedAcceleration=n.transformedAcceleration||new p).z=e.z,90==l.window.orientation?(n.transformedAcceleration.x=e.y,n.transformedAcceleration.y=-e.x):-90==l.window.orientation?(n.transformedAcceleration.x=-e.y,n.transformedAcceleration.y=e.x):l.window.orientation?180==l.window.orientation&&(n.transformedAcceleration.x=-e.x,n.transformedAcceleration.y=-e.y):(n.transformedAcceleration.x=e.x,n.transformedAcceleration.y=e.y);var t=NaN;return-90==r.stage.canvasDegree?(t=n.transformedAcceleration.x,n.transformedAcceleration.x=-n.transformedAcceleration.y,n.transformedAcceleration.y=t):90==r.stage.canvasDegree&&(t=n.transformedAcceleration.x,n.transformedAcceleration.x=n.transformedAcceleration.y,n.transformedAcceleration.y=-t),n.transformedAcceleration},n._instance=null,n.transformedAcceleration=null,o(n,["acceleration",function(){return this.acceleration=new p},"accelerationIncludingGravity",function(){return this.accelerationIncludingGravity=new p},"rotationRate",function(){return this.rotationRate=new y},"onChrome",function(){return this.onChrome=-1<l.userAgent.indexOf("Chrome")}]),n}(a),L=(function(a){function t(e){t.__super.call(this),this.onDeviceOrientationChange=this.onDeviceOrientationChange.bind(this)}s(t,"laya.device.motion.Gyroscope",a);var e=t.prototype;e.on=function(e,t,n,i){return a.prototype.on.call(this,e,t,n,i),l.window.addEventListener("deviceorientation",this.onDeviceOrientationChange),this},e.off=function(e,t,n,i){return void 0===i&&(i=!1),this.hasListener(e)||l.window.removeEventListener("deviceorientation",this.onDeviceOrientationChange),a.prototype.off.call(this,e,t,n,i)},e.onDeviceOrientationChange=function(e){t.info.alpha=e.alpha,t.info.beta=e.beta,t.info.gamma=e.gamma,e.webkitCompassHeading&&(t.info.alpha=-1*e.webkitCompassHeading,t.info.compassAccuracy=e.webkitCompassAccuracy),this.event("change",[e.absolute,t.info])},c(1,t,"instance",function(){return t._instance=t._instance||new t(0)},laya.events.EventDispatcher._$SET_instance),t._instance=null,o(t,["info",function(){return this.info=new y}])}(a),function(e){function t(){this.throushold=0,this.shakeInterval=0,this.callback=null,this.lastX=NaN,this.lastY=NaN,this.lastZ=NaN,this.lastMillSecond=NaN,t.__super.call(this)}s(t,"laya.device.Shake",a);var n=t.prototype;n.start=function(e,t){this.throushold=e,this.shakeInterval=t,this.lastX=this.lastY=this.lastZ=NaN,E.instance.on("change",this,this.onShake)},n.stop=function(){E.instance.off("change",this,this.onShake)},n.onShake=function(e,t,n,i){if(isNaN(this.lastX))return this.lastX=t.x,this.lastY=t.y,this.lastZ=t.z,void(this.lastMillSecond=l.now());var a=Math.abs(this.lastX-t.x),o=Math.abs(this.lastY-t.y),r=Math.abs(this.lastZ-t.z);this.isShaked(a,o,r)&&(l.now()-this.lastMillSecond>this.shakeInterval&&(this.event("change"),this.lastMillSecond=l.now()));this.lastX=t.x,this.lastY=t.y,this.lastZ=t.z},n.isShaked=function(e,t,n){return e>this.throushold&&t>this.throushold||e>this.throushold&&n>this.throushold||t>this.throushold&&n>this.throushold},c(1,t,"instance",function(){return t._instance=t._instance||new t},laya.events.EventDispatcher._$SET_instance),t._instance=null}(),function(n){function i(e,t){this.htmlVideo=null,this.videoElement=null,this.internalTexture=null,void 0===e&&(e=320),void 0===t&&(t=240),i.__super.call(this),d.isWebGL?this.htmlVideo=new x:this.htmlVideo=new w,this.videoElement=this.htmlVideo.getVideo(),(this.videoElement.layaTarget=this).internalTexture=new u(this.htmlVideo),this.videoElement.addEventListener("abort",i.onAbort),this.videoElement.addEventListener("canplay",i.onCanplay),this.videoElement.addEventListener("canplaythrough",i.onCanplaythrough),this.videoElement.addEventListener("durationchange",i.onDurationchange),this.videoElement.addEventListener("emptied",i.onEmptied),this.videoElement.addEventListener("error",i.onError),this.videoElement.addEventListener("loadeddata",i.onLoadeddata),this.videoElement.addEventListener("loadedmetadata",i.onLoadedmetadata),this.videoElement.addEventListener("loadstart",i.onLoadstart),this.videoElement.addEventListener("pause",i.onPause),this.videoElement.addEventListener("play",i.onPlay),this.videoElement.addEventListener("playing",i.onPlaying),this.videoElement.addEventListener("progress",i.onProgress),this.videoElement.addEventListener("ratechange",i.onRatechange),this.videoElement.addEventListener("seeked",i.onSeeked),this.videoElement.addEventListener("seeking",i.onSeeking),this.videoElement.addEventListener("stalled",i.onStalled),this.videoElement.addEventListener("suspend",i.onSuspend),this.videoElement.addEventListener("timeupdate",i.onTimeupdate),this.videoElement.addEventListener("volumechange",i.onVolumechange),this.videoElement.addEventListener("waiting",i.onWaiting),this.videoElement.addEventListener("ended",this.onPlayComplete.bind(this)),this.size(e,t),l.onMobile&&(this.onDocumentClick=this.onDocumentClick.bind(this),l.document.addEventListener("touchend",this.onDocumentClick))}s(i,"laya.device.media.Video",n);var e=i.prototype;return e.onPlayComplete=function(e){r.timer.clear(this,this.renderCanvas),this.event("ended")},e.load=function(e){0==e.indexOf("blob:")?this.videoElement.src=e:this.htmlVideo.setSource(e,laya.device.media.Video.MP4)},e.play=function(){this.videoElement.play(),r.timer.frameLoop(1,this,this.renderCanvas)},e.pause=function(){this.videoElement.pause(),r.timer.clear(this,this.renderCanvas)},e.reload=function(){this.videoElement.load()},e.canPlayType=function(e){var t;switch(e){case laya.device.media.Video.MP4:t="video/mp4";break;case laya.device.media.Video.OGG:t="video/ogg";break;case laya.device.media.Video.WEBM:t="video/webm"}return this.videoElement.canPlayType(t)},e.renderCanvas=function(){0!==this.readyState&&(d.isWebGL&&this.htmlVideo.updateTexture(),this.graphics.clear(),this.graphics.drawTexture(this.internalTexture,0,0,this.width,this.height))},e.onDocumentClick=function(){this.videoElement.play(),this.videoElement.pause(),l.document.removeEventListener("touchend",this.onDocumentClick)},e.size=function(e,t){return n.prototype.size.call(this,e,t),this.videoElement.width=e/l.pixelRatio,this.paused&&this.renderCanvas(),this},e.destroy=function(e){void 0===e&&(e=!0),n.prototype.destroy.call(this,e),this.videoElement.removeEventListener("abort",i.onAbort),this.videoElement.removeEventListener("canplay",i.onCanplay),this.videoElement.removeEventListener("canplaythrough",i.onCanplaythrough),this.videoElement.removeEventListener("durationchange",i.onDurationchange),this.videoElement.removeEventListener("emptied",i.onEmptied),this.videoElement.removeEventListener("error",i.onError),this.videoElement.removeEventListener("loadeddata",i.onLoadeddata),this.videoElement.removeEventListener("loadedmetadata",i.onLoadedmetadata),this.videoElement.removeEventListener("loadstart",i.onLoadstart),this.videoElement.removeEventListener("pause",i.onPause),this.videoElement.removeEventListener("play",i.onPlay),this.videoElement.removeEventListener("playing",i.onPlaying),this.videoElement.removeEventListener("progress",i.onProgress),this.videoElement.removeEventListener("ratechange",i.onRatechange),this.videoElement.removeEventListener("seeked",i.onSeeked),this.videoElement.removeEventListener("seeking",i.onSeeking),this.videoElement.removeEventListener("stalled",i.onStalled),this.videoElement.removeEventListener("suspend",i.onSuspend),this.videoElement.removeEventListener("timeupdate",i.onTimeupdate),this.videoElement.removeEventListener("volumechange",i.onVolumechange),this.videoElement.removeEventListener("waiting",i.onWaiting),this.videoElement.removeEventListener("ended",this.onPlayComplete),this.pause(),this.videoElement=null},e.syncVideoPosition=function(){var e,t=r.stage;e=v.getGlobalPosAndScale(this);var n=t._canvasTransform.a,i=t._canvasTransform.d,a=e.x*t.clientScaleX*n+t.offset.x,o=e.y*t.clientScaleY*i+t.offset.y;this.videoElement.style.left=a+"px",this.videoElement.style.top=o+"px",this.videoElement.width=this.width/l.pixelRatio,this.videoElement.height=this.height/l.pixelRatio},c(0,e,"buffered",function(){return this.videoElement.buffered}),c(0,e,"videoWidth",function(){return this.videoElement.videoWidth}),c(0,e,"currentSrc",function(){return this.videoElement.currentSrc}),c(0,e,"currentTime",function(){return this.videoElement.currentTime},function(e){this.videoElement.currentTime=e,this.renderCanvas()}),c(0,e,"ended",function(){return this.videoElement.ended}),c(0,e,"volume",function(){return this.videoElement.volume},function(e){this.videoElement.volume=e}),c(0,e,"videoHeight",function(){return this.videoElement.videoHeight}),c(0,e,"readyState",function(){return this.videoElement.readyState}),c(0,e,"duration",function(){return this.videoElement.duration}),c(0,e,"error",function(){return this.videoElement.error}),c(0,e,"loop",function(){return this.videoElement.loop},function(e){this.videoElement.loop=e}),c(0,e,"playbackRate",function(){return this.videoElement.playbackRate},function(e){this.videoElement.playbackRate=e}),c(0,e,"muted",function(){return this.videoElement.muted},function(e){this.videoElement.muted=e}),c(0,e,"paused",function(){return this.videoElement.paused}),c(0,e,"preload",function(){return this.videoElement.preload},function(e){this.videoElement.preload=e}),c(0,e,"seekable",function(){return this.videoElement.seekable}),c(0,e,"seeking",function(){return this.videoElement.seeking}),c(0,e,"height",n.prototype._$get_height,function(e){r.superSet(h,this,"height",e),this.paused&&this.renderCanvas()}),c(0,e,"width",n.prototype._$get_width,function(e){this.videoElement.width=this.width/l.pixelRatio,r.superSet(h,this,"width",e),this.paused&&this.renderCanvas()}),i.onAbort=function(e){e.target.layaTarget.event("abort")},i.onCanplay=function(e){e.target.layaTarget.event("canplay")},i.onCanplaythrough=function(e){e.target.layaTarget.event("canplaythrough")},i.onDurationchange=function(e){e.target.layaTarget.event("durationchange")},i.onEmptied=function(e){e.target.layaTarget.event("emptied")},i.onError=function(e){e.target.layaTarget.event("error")},i.onLoadeddata=function(e){e.target.layaTarget.event("loadeddata")},i.onLoadedmetadata=function(e){e.target.layaTarget.event("loadedmetadata")},i.onLoadstart=function(e){e.target.layaTarget.event("loadstart")},i.onPause=function(e){e.target.layaTarget.event("pause")},i.onPlay=function(e){e.target.layaTarget.event("play")},i.onPlaying=function(e){e.target.layaTarget.event("playing")},i.onProgress=function(e){e.target.layaTarget.event("progress")},i.onRatechange=function(e){e.target.layaTarget.event("ratechange")},i.onSeeked=function(e){e.target.layaTarget.event("seeked")},i.onSeeking=function(e){e.target.layaTarget.event("seeking")},i.onStalled=function(e){e.target.layaTarget.event("stalled")},i.onSuspend=function(e){e.target.layaTarget.event("suspend")},i.onTimeupdate=function(e){e.target.layaTarget.event("timeupdate")},i.onVolumechange=function(e){e.target.layaTarget.event("volumechange")},i.onWaiting=function(e){e.target.layaTarget.event("waiting")},i.MP4=1,i.OGG=2,i.CAMERA=4,i.WEBM=8,i.SUPPORT_PROBABLY="probably",i.SUPPORT_MAYBY="maybe",i.SUPPORT_NO="",i}(h)),w=function(e){function t(){this.video=null,t.__super.call(this),this._w=1,this._h=1,this.createDomElement()}s(t,"laya.device.media.HtmlVideo",i);var n=t.prototype;return n.createDomElement=function(){var e=this;this._source=this.video=l.createElement("video");var t=this.video.style;t.position="absolute",t.top="0px",t.left="0px",this.video.addEventListener("loadedmetadata",function(){this._w=e.video.videoWidth,this._h=e.video.videoHeight}.bind(this))},n.setSource=function(e,t){for(;this.video.childElementCount;)this.video.firstChild.remove();t&L.MP4&&this.appendSource(e,"video/mp4"),t&L.OGG&&this.appendSource(e+".ogg","video/ogg")},n.appendSource=function(e,t){var n=l.createElement("source");n.src=e,n.type=t,this.video.appendChild(n)},n.getVideo=function(){return this.video},t.create=function(){return new t},t}(),x=function(e){function t(){this.gl=null,this.preTarget=null,this.preTexture=null,t.__super.call(this),l.onIPhone||(this.gl=n.mainContext,this._source=this.gl.createTexture(),this.preTarget=m.curBindTexTarget,this.preTexture=m.curBindTexValue,m.bindTexture(this.gl,3553,this._source),this.gl.texParameteri(3553,10242,33071),this.gl.texParameteri(3553,10243,33071),this.gl.texParameteri(3553,10240,9729),this.gl.texParameteri(3553,10241,9729),this.preTarget&&this.preTexture&&m.bindTexture(this.gl,this.preTarget,this.preTexture))}return s(t,"laya.device.media.WebGLVideo",w),t.prototype.updateTexture=function(){l.onIPhone||(m.bindTexture(this.gl,3553,this._source),this.gl.texImage2D(3553,0,6407,6407,5121,this.video))},t}();r.__init([f])}(window,document,Laya),"function"==typeof define&&define.amd&&define("laya.core",["require","exports"],function(e,t){"use strict";for(var n in Object.defineProperty(t,"__esModule",{value:!0}),Laya){var i=Laya[n];i&&i.__isclass&&(t[n]=i)}});