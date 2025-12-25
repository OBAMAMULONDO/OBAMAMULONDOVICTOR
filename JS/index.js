function download_CV(){
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=1uuofUbD44uTXz_czdfNZ12JFufE1nvWy';
    link.download = 'Victor_Mulondo_CV.pdf';// Set the desired file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}