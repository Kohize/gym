const videoPreview = document.querySelector('.intro__video');
const videoPicture = document.querySelector('.intro__picture');
const videoButton = document.querySelector('.intro__play');

const createIframe = () => {
  const iFrame = document.createElement('iframe');
  iFrame.setAttribute('allow', 'autoplay');
  iFrame.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1');
  iFrame.setAttribute('width', '364');
  iFrame.setAttribute('height', '228');
  return iFrame;
};

if (videoPreview && videoPicture && videoButton) {
  videoButton.addEventListener('click', function () {
    videoPicture.remove();
    videoButton.remove();
    videoPreview.append(createIframe());
  });
}

if (videoPreview && videoPicture && videoButton) {
  videoPicture.addEventListener('click', function () {
    videoPicture.remove();
    videoButton.remove();
    videoPreview.append(createIframe());
  });
}
