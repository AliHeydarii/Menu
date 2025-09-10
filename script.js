    const li = document.querySelectorAll('ul>li')
    const div = document.querySelectorAll('section>div')
    li.forEach((val) => {
        val.addEventListener('click', (e) => {
            let temp = e.target.dataset.targetId;
            li.forEach(item => item.classList.remove('active'))
            val.classList.add('active')
            // resest///
            div.forEach(val => val.classList.remove('show'))
            // resest///
            document.getElementById(temp).classList.add('show')

        })
    })
