/**
 * Created by 15224 on 2016/3/17.
 */

function init_list(){
    $.ajax({
        url:'/getArticleVListByIds',
        data:'info_ids='+info_ids,
        type:'post',
        dataType:'json',
        success:function(data){
            var product_list=data.data;
            var product_content="";
            for(var i=0;i<product_list.length;i++){
                var list_data_content="";
                var type_id=product_list[i].type_id;

                product_content+=  "<li>"+
                                   "   <img src='"+product_list[i].thumbnail+"' alt='' class='list_con' />"+
                                   " <div class='list_con list_type'>"+
                                   "     <span>产品标题：</span>"+
                                   " <h5>"+product_list[i].title+"</h5>"+
                                   " </div>"+
                    " <div class='list_con list_type'>"+
                    "     <span>产品概述：</span>"+
                    " <h5>"+product_list[i].introduction+"</h5>"+
                    " </div>"+
                    " <div class='list_con list_type'>"+
                    "     <span>详情页面链接：</span>"+
                    " <h5>"+"<a href='/member/article/detail?info_id="+ product_list[i].info_id+"'>详情页</a>" +"</h5>"+
                    " </div>"+
                                   "</li>";
            }

            //$('#detail_list ul').append(product_content);

        },
        error:function(){
            alert("异步调用失败！");
        }
    });
}

$(document).ready(function(){
    init_list();
});