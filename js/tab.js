//��һ�������������˼·
//ѡ�˼·��
//��껬��ĳһ��li���棬�������е�li��div��û��select��ʽ��Ȼ�����õ�ǰ�������select��ʽ

//�ڶ�����Ҫ����˭���Ȼ�ȡ˭

/*var oTab=document.getElementById("tab");
var oLis=oTab.getElementsByTagName("li");
var oDivs=oTab.getElementsByTagName("div");


//���������ƶ�һ�����ܷ�����ʵ�����ǵ�����
//nIndex�����Ƕ�����βΣ�����ǰ��ѡ��Ԫ�ص�����
function tabChange(nIndex){
    for(var i=0;i<oLis.length;i++){
        oLis[i].className="";
        oDivs[i].className="";
    }
    oLis[nIndex].className="select";
    oDivs[nIndex].className="select";
}

//���Ĳ��������ǵ�li���������ȥ���¼�
for(var i=0;i<oLis.length;i++){
    oLis[i].zhufeng=i;//��ÿһ��ѭ����ʱ�򣬰�ÿһ��li�������������Լ����Զ�������zhufeng
    oLis[i].onmouseover=function(){
        tabChange(this.zhufeng);
    }
}
*/

var oTab=document.getElementById("tab");
var oLis=oTab.getElementsByTagName("li");
var oDivs=oTab.getElementsByTagName("div");
for(var i=0;i<oLis.length;i++){
    var oLi=oLis[i];
    oLi.zhufeng=i;
    oLi.onmouseover=function(){
        for(var j=0;j<oLis.length;j++){
            oLis[j].className="";
            oDivs[j].className="";
        }
        this.className="select";
        oDivs[this.zhufeng].className="select";
    }
}