window.onload = function () {
    var js_slider = document.getElementById('js_slider');
    var slider_main_block = document.getElementById('slider_main_block');
    var imgs = slider_main_block.children;
    var slider_ctrl = document.getElementById('slider_ctrl');
    //生成小span
    for(var i = 0; i < imgs.length;i++)
    {
        var span = document.createElement("span");
        span.className = "slider-ctrl-con";
        span.index = imgs.length - i;
        slider_ctrl.insertBefore(span,slider_ctrl.children[1]);
    }
    slider_ctrl.style.marginLeft = (document.body.clientWidth/2-(15*imgs.length+10*imgs.length)/2)+'px';
    var spans = slider_ctrl.children;
    spans[1].setAttribute("class","slider-ctrl-con current");

    var scrollWidth = js_slider.clientWidth;  //大盒子的宽度
    for(var i = 1;i < imgs.length;i++)
    {
        imgs[i].style.left = scrollWidth + "px";
    }
    var iNow = 0;
    for(var k in spans)
    {
        spans[k].onclick = function()
        {
            if(this.className == "slider-ctrl-prev")  //左侧按钮
            {
                animate(imgs[iNow],{left: scrollWidth});
                --iNow < 0 ? iNow = imgs.length - 1 : iNow;
                imgs[iNow].style.left = -scrollWidth + "px";
                animate(imgs[iNow],{left: 0});
                setSquare();
            }
            else if(this.className == "slider-ctrl-next")
            {
                autoplay();
            }
            else
            {
                var that = this.index - 1;
                if(that > iNow)
                {
                    animate(imgs[iNow],{left: -scrollWidth});
                    imgs[that].style.left = scrollWidth + "px";
                }
                else if(that < iNow)
                {
                    animate(imgs[iNow],{left: scrollWidth});
                    imgs[that].style.left = -scrollWidth + "px";
                }
                iNow = that;   //给当前索引号
                animate(imgs[iNow],{left: -scrollWidth});
                animate(imgs[iNow],{left: 0});
                setSquare();
            }
        }
    }
    function setSquare()
    {
        for(var i = 1; i < spans.length - 1;i++)
        {
            spans[i].className = "slider-ctrl-con";
        }
        spans[iNow+1].className = "slider-ctrl-con current";
    }
    var timer = null;
    timer = setInterval(autoplay,2000);
    function autoplay()
    {
        animate(imgs[iNow],{left: -scrollWidth});
        ++iNow > imgs.length - 1 ? iNow = 0 : iNow;
        imgs[iNow].style.left = scrollWidth + "px";
        animate(imgs[iNow],{left: 0});
        setSquare();
    }
    js_slider.onmouseover = function()
    {
        clearInterval(timer);
    }
    js_slider.onmouseout = function()
    {
        clearInterval(timer);
        timer = setInterval(autoplay,2000);
    }

    window.onresize = function () {
        var slider_ctrl = document.getElementById('slider_ctrl');
        var lastLi = document.getElementsByClassName('lastLi');
        for(var i = 0;i<lastLi.length;i++){
            lastLi[i].style.left = '40px';
        }
        slider_ctrl.style.marginLeft = (document.body.clientWidth/2-(15*imgs.length+10*imgs.length)/2)+'px';
    }

}