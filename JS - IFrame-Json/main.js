
let get_video = new XMLHttpRequest();
let url = `https://pixabay.com/api/videos/?key=17057694-71101b5d61e1bcf0bfec67626&q=yellow+flowers`;
get_video.open('GET', url); 
get_video.send();
	
get_video.onload = function(){
	if(get_video.status !== 200){
		console.log(get_video.status, get_video.statusText)
	}
	else{
		let result = JSON.parse(get_video.response).hits;
		showVideo(result);
	}
}
function showVideo(obj_video){
	for(let i = obj_video.length -1; i >= 0; i--){
	let video_src = obj_video[i].videos.tiny.url;
	let iframe = document.createElement('iframe');
	iframe.setAttribute('src',video_src);
	document.body.insertAdjacentElement('afterbegin', iframe);
	}
}

















