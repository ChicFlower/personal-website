// <!--
// Source - https://stackoverflow.com/a/78474223
// Posted by Agota Kristof
// Retrieved 2026-09-27, License - CC BY-SA 4.0
// -->

let body=document.getElementById("photos");
const images=[
    "../../assets/imgs/photography/2026/PHOTOGRAPHY/1000121191.jpg",
    "../../assets/imgs/photography/2026/PHOTOGRAPHY/DSCF0380.JPG",
    "../../assets/imgs/photography/2026/PHOTOGRAPHY/DSCF0383.JPG",
    "../../assets/imgs/photography/2026/PHOTOGRAPHY/DSCF0384.JPG",
    "../../assets/imgs/photography/2026/PHOTOGRAPHY/DSCF0389.JPG",
    "../../assets/imgs/photography/2026/PHOTOGRAPHY/DSCF0395.JPG",
    "../../assets/imgs/photography/2026/PHOTOGRAPHY/DSCF0396.JPG",
    "../../assets/imgs/photography/2026/PHOTOGRAPHY/DSCF0397.JPG",
    "../../assets/imgs/photography/2026/PHOTOGRAPHY/IMG_20260101_093724953_HDR.jpg",
    "../../assets/imgs/photography/2026/PHOTOGRAPHY/IMG_20260103_202538696_HDR.jpg",
    "../../assets/imgs/photography/2026/PHOTOGRAPHY/IMG_20260105_082305867_HDR.jpg",
    "../../assets/imgs/photography/2026/PHOTOGRAPHY/IMG_20260105_084717826_HDR.jpg",
    "../../assets/imgs/photography/2026/PHOTOGRAPHY/IMG_20260106_083119941_HDR.jpg",
    "../../assets/imgs/photography/2026/PHOTOGRAPHY/IMG_20260614_083235163_HDR.jpg",
    "../../assets/imgs/photography/2026/PHOTOGRAPHY/IMG_20260614_083556124_HDR.jpg",
    "../../assets/imgs/photography/2026/PHOTOGRAPHY/IMG_20260617_083324417_HDR.jpg",
    "../../assets/imgs/photography/2026/PHOTOGRAPHY/IMG_20260617_083551873_HDR.jpg",
    "../../assets/imgs/photography/2026/PHOTOGRAPHY/IMG_20260712_084231456_HDR.jpg",
    "../../assets/imgs/photography/2026/PHOTOGRAPHY/IMG_20260712_084539510_HDR.jpg",
    "../../assets/imgs/photography/2026/PHOTOGRAPHY/IMG_20260712_084900710_HDR.jpg",
    "../../assets/imgs/photography/2026/PHOTOGRAPHY/IMG_20260712_085249840_HDR.jpg",
    "../../assets/imgs/photography/2026/PHOTOGRAPHY/PXL_20260224_081041255.MV.jpg",
    "../../assets/imgs/photography/2026/PHOTOGRAPHY/PXL_20260224_081205574.MV.jpg",
    "../../assets/imgs/photography/2026/PHOTOGRAPHY/PXL_20260224_081551648.jpg",
    "../../assets/imgs/photography/2026/PHOTOGRAPHY/PXL_20260318_080317259.MV.jpg",
    "../../assets/imgs/photography/2026/PHOTOGRAPHY/PXL_20260907_113830628.MV.jpg",
    "../../assets/imgs/photography/2026/PHOTOGRAPHY/PXL_20260907_113926219.jpg",
    "../../assets/imgs/photography/2026/PHOTOGRAPHY/PXL_20260907_114017690.MV.jpg",
    "../../assets/imgs/photography/2026/PHOTOGRAPHY/PXL_20260907_114051175.MV.jpg",
    "../../assets/imgs/photography/2026/PHOTOGRAPHY/PXL_20260907_115051814.MV.jpg",
    "../../assets/imgs/photography/2026/PHOTOGRAPHY/PXL_20260907_115424425.MV.jpg",
    "../../assets/imgs/photography/2026/PHOTOGRAPHY/PXL_20260907_115443157.MV.jpg",
    "../../assets/imgs/photography/2026/PHOTOGRAPHY/PXL_20260907_115452548.jpg",
    "../../assets/imgs/photography/2026/PHOTOGRAPHY/PXL_20260907_115858591.jpg",
    "../../assets/imgs/photography/2026/PHOTOGRAPHY/PXL_20260926_103659003.jpg",
    "../../assets/imgs/photography/2026/PHOTOGRAPHY/PXL_20260926_103725696.jpg",
    "../../assets/imgs/photography/2026/PHOTOGRAPHY/PXL_20260926_105804247.jpg",
    "../../assets/imgs/photography/2026/PHOTOGRAPHY/PXL_20260926_105834384.jpg",
    "../../assets/imgs/photography/2026/PHOTOGRAPHY/PXL_20260926_105839089.jpg"
];
let img;
for(i=0;i<images.length;i++)
    {
        img=document.createElement("img");
        img.src=images[i];
        body.appendChild(img);
        body.appendChild(loading="lazy")
    }


document.querySelectorAll('.photos img').forEach(img => {
  img.addEventListener('load', () => {
    if (img.naturalWidth > img.naturalHeight) {
        img.classList.add('landscape');
    } else {
        img.classList.add('portrait');
    }
  });
});
