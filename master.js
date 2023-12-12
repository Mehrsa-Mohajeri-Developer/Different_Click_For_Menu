let _ul = document.getElementsByTagName("ul")[0]
        let _icon = document.getElementsByClassName("_icon")
        let _btn = document.getElementsByClassName("btn")[0]
        let _li = document.querySelectorAll("ul>li")
        let i = 1
        function button() {
            if (i % 2) {
                _icon[0].style.transform = "rotate(45deg)"
                _icon[1].style.transform = "scaleX(0)"
                _icon[2].style.transform = "rotate(-45deg)"
                _ul.style.height = ((_li.length) * 40) + "px"
                _btn.style.transform = "translateX(0)"
            }
            else {
                _icon[0].style.transform = "rotate(0deg)"
                _icon[1].style.transform = "scaleX(1)"
                _icon[2].style.transform = "rotate(0deg)"
                _ul.style.height = "0"
                _btn.style.transform = "translateX(100%)"
            }
            i++
        }