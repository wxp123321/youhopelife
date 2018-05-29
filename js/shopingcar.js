$(function () {
    $('.rec').on('click', function () {
        if($('.number').html() >= 1) {
            $(this).next().html(parseFloat($(this).next().html()) - 1);
            $($(this).parent().next().children()[1]).html(parseFloat($(this).next().attr('data-price'))*parseFloat($(this).next().html())+'.00');
            if($(this).attr('data-lo')) {
                console.log($(this).next().attr('data-price'));
                $('.price-span2').html(parseFloat($('.price-span2').html()) - parseFloat($(this).next().attr('data-price'))+'.00');
            }
        }
    });

    $('.add').on('click', function () {
        $(this).prev().html(parseFloat($(this).prev().html()) + 1);
        $($(this).parent().next().children()[1]).html(parseFloat($(this).prev().attr('data-price'))*parseFloat($(this).prev().html())+'.00');
        if($(this).attr('data-lo')) {
            console.log($(this).next().attr('data-price'));
            $('.price-span2').html(parseFloat($('.price-span2').html()) + parseFloat($(this).prev().attr('data-price'))+'.00');
        }
    });

    $('.rec').on('selectstart',function () {
       return false;
    });

    $('.add').on('selectstart',function () {
        return false;
    });

    $('.have-product-check').on('change',function () {
        console.log($(this).is(':checked'));
        if($(this).is(':checked')) {
            $($($(this).parent().next().children()[4]).children()[0]).attr('data-lo',true);
            $($($(this).parent().next().children()[4]).children()[2]).attr('data-lo',true);
            $('.price-span2').html(parseFloat($('.price-span2').html()) + parseFloat($($($(this).parent().next().children()[5]).children()[1]).html())+'.00');
        }else {
            $($($(this).parent().next().children()[4]).children()[0]).attr('data-lo',false);
            $($($(this).parent().next().children()[4]).children()[2]).attr('data-lo',false);
            $('.price-span2').html(parseFloat($('.price-span2').html()) - parseFloat($($($(this).parent().next().children()[5]).children()[1]).html())+'.00');
        }
    });
});