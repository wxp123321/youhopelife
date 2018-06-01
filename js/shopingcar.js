$(function () {
    $('.rec').on('click', function () {
        if($(this).next().html() > 1) {
            $(this).next().html(parseFloat($(this).next().html()) - 1);
            $($(this).parent().next().children()[1]).html(parseFloat($(this).next().attr('data-price'))*parseFloat($(this).next().html())+'.00');
            if($($($(this).parent().parent().parent().children()[0]).children()[0]).is(':checked')) {
                $('.price-span2').html(parseFloat($('.price-span2').html()) - parseFloat($(this).next().attr('data-price'))+'.00');
            }
        }
    });

    $('.add').on('click', function () {
        $(this).prev().html(parseFloat($(this).prev().html()) + 1);
        $($(this).parent().next().children()[1]).html(parseFloat($(this).prev().attr('data-price'))*parseFloat($(this).prev().html())+'.00');
        if($($($(this).parent().parent().parent().children()[0]).children()[0]).is(':checked')) {
            $('.price-span2').html(parseFloat($('.price-span2').html()) + parseFloat($(this).prev().attr('data-price'))+'.00');
        }
    });

    $('.all-check').on('change',function () {
        if($('.all-check').is(':checked')) {
            $('.have-product-check').trigger('click');
            var total = 0;
            for(var i = 0;i < $('.all-span').length;i++) {
                total += parseFloat($($('.all-span')[i]).html());
            }
            $('.price-span2').html(total+'.00');
        }else {
            $('.have-product-check').removeAttr('checked');
            $('.price-span2').html(0);
        }
    });

    $('.rec').on('selectstart',function () {
       return false;
    });

    $('.add').on('selectstart',function () {
        return false;
    });

    $('.have-product-check').on('change',function () {
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
    
    $('.delete-detail').on('click',function () {
       $(this).parent().parent().parent().remove();
       if($('.delete-detail').length <= 0) {
           $('.have-product').css('display','none');
           $('.total-price').css('display','none');
           $('.empty-view').css('display','block');
       }
    });
});