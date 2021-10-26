'use strict'

const confFile = document.querySelector('.file.conf')
const magaFile = document.querySelector('.file.magazine')

confFile.addEventListener('click', () => {
    const today = moment()
    const openDate = moment("2021-12-04 00:00:00")
    // const openDate = new Date("2021-12-04 00:00:00")
    // const today = new Date();
    if((moment.duration(openDate.diff(today)).asMilliseconds()/1000) > 0)
    {
        const errorDiv = document.querySelector('.error.conf')
        errorDiv.style.display = "block"
    }
    else
    {
        let downloadFile = document.createElement('a')
        downloadFile.href = '/logo.png'
        downloadFile.setAttribute('download', 'logo.png')
        document.body.append(downloadFile)
        downloadFile.click()
    }
    return
})

magaFile.addEventListener('click', () => {
    const today = moment()
    const openDate = moment("2021-11-17 00:00:00")
    // const openDate = new Date("2021-11-17 00:00:00")
    // const today = new Date();
    if((moment.duration(openDate.diff(today)).asMilliseconds()/1000) > 0)
    {
        const errorDiv = document.querySelector(".error.magazine")
        errorDiv.style.display = 'block'
    }
    else
    {
        let downloadFile = document.createElement('a')
        downloadFile.href = '/logo.png'
        downloadFile.setAttribute('download', 'logo.png')
        document.body.append(downloadFile)
        downloadFile.click()
    }
    return
})


const closeBtns = document.querySelectorAll('.error .error__message .error__close')
closeBtns.forEach(closeBtn => {
  closeBtn.addEventListener('click',() => {
    console.log(closeBtn.parentElement.parentElement);
    closeBtn.parentElement.parentElement.parentElement.style.display = 'none'
  })
})