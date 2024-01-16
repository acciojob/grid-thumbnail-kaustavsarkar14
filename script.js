//your JS code here. If required.
document.querySelectorAll('.thumbnail').forEach(item => {
    item.addEventListener('click', event => {
        let fullSizeContainer = document.getElementById('fullsizeContainer');
        let fullSizeImage = document.getElementById('fullsize');
        fullSizeImage.src = item.src;
        fullSizeContainer.style.display = 'flex';
    });
});

document.getElementById('fullsizeContainer').addEventListener('click', () => {
    document.getElementById('fullsizeContainer').style.display = 'none';
});