const videoPreview = document.querySelector('.intro__video');
const videoPicture = document.querySelector('.intro__picture');
const videoIframe = document.querySelector('.intro__iframe');
const videoButton = document.querySelector('.intro__play');

if (videoPreview && videoPicture && videoIframe && videoButton) {
  videoButton.addEventListener('click', function () {
    videoPicture.remove();
    videoButton.remove();
    videoIframe.style.display = 'block';
  });
}

if (videoPreview && videoPicture && videoIframe && videoButton) {
  videoPicture.addEventListener('click', function () {
    videoPicture.remove();
    videoButton.remove();
    videoIframe.style.display = 'block';
  });
}

