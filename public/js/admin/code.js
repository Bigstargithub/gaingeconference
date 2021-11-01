'use strict'

const searchBtn = document.querySelector('.search_btn')
searchBtn.addEventListener('click', () => {
    const searchText = document.querySelector('#code_search').value
    location.href="/admin/main?code="+searchText
})

const pageBtns = document.querySelectorAll('.page_number')
const codeSearch = document.querySelector('.code_search').value
console.log(codeSearch)
pageBtns.forEach(page => {
    page.addEventListener('click', () => {
        if(codeSearch !== '')
        {
            return location.href="/admin/main?page="+page.dataset.page+"&code="+codeSearch
        }
        location.href="/admin/main?page="+page.dataset.page
    })
})

const prevBtn = document.querySelector('.prev')
let nowPage = document.querySelector('.now-page').value
const lastPage = document.querySelector('.last-page').value
const countValue = document.querySelector('.count').value
prevBtn.addEventListener('click', () => {
    let page = 1;
    if(((nowPage -1 ) / 5) !== 0)
    {
        page = (nowPage-5) - ((nowPage - 1) % 5)
    }
    if(codeSearch !== '')
    {
        return location.href="/admin/main?page="+page+"&code="+codeSearch
    }
    return location.href="/admin/main?page="+page
})

const nextBtn = document.querySelector('.next')
nextBtn.addEventListener('click',() => {
    if(countValue - nowPage < 5)
    {
        if(codeSearch !== '')
        {
         return location.href="/admin/main?page="+lastPage+"&code="+codeSearch
        }
        return location.href="/admin/main?page="+lastPage
    }
    else if(lastPage === countValue)
    {
        if(codeSearch !== '')
        {
            return location.href="/admin/main?page="+countValue+"&code="+codeSearch
        }
        return location.href="/admin/main?page="+countValue
    }
    else
    {
        nowPage = Number(lastPage) + 1
        if(codeSearch !== '')
        {
            return location.href="/admin/main?page="+nowPage+"&code="+codeSearch
        }
        return location.href="/admin/main?page="+nowPage
    }
})