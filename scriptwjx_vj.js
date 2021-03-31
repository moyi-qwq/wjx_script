javascript: void ((function () 
{
    var name1 = "董一如";
    var id1 = "20201869";
    var qq1 = "3358506770";
    var xueyuan1 = "理学院";
    var zhuanye1 = "信息与计算科学";
    var phonenum1 = "13436626119";

    var hash = {};
    var a = document.evaluate('//input[(@type="radio") and not(@value="0")]//@name', document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
    if (a.snapshotLength) {
        for (var i = 0; i < a.snapshotLength; i++) {
            if (!(a.snapshotItem(i).value in hash)) hash[a.snapshotItem(i).value] = 0;
            hash[a.snapshotItem(i).value]++;
        }
        for (i in hash) {
            document.evaluate('//input[(@type="radio") and not(@value="0") and @name="' + i + '"]', document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null).snapshotItem(Math.floor(Math.random() * hash[i])).click();
        }
    }
    
    var array = new Array();
    var as = document.getElementsByTagName("a");
    var preName = "";
    var change = false;
    
    for (var i = 0; i < as.length; i++)
	{
        if (as[i].getAttribute("rel") != null && as[i].nextSibling.getAttribute("type") == "checkbox") {
            var name = as[i].nextSibling.getAttribute("name");
            var check = as[i].nextSibling.getAttribute("checked");
            if (check == "checked") {
                as[i].click();
            }
            
            if (preName == "" || preName == name) {
                if (Math.random() * 10 > 5) {
                    as[i].click();
                    change = true;
                }
            }
            
            var next = as[i + 1];
            if (next.getAttribute("rel") != null && next.nextSibling.getAttribute("type") == "checked" && next.getAttribute("name") != name) {
                if (!change) {
                    as[i].click();
                }
                change = false;
            }
            
            if (i == as.length - 1 && !change) {
                as[i].click();
            }
            preName = name;
        }
    }
    
    var temobj = document.getElementById("divTitle1").innerHTML;

    var objs = document.getElementsByTagName("textarea");
    
    for (var i = 0; i < objs.length; i++) {
        objs[i].focus();
        var text = objs[i].getAttribute("name");
        var divT = "divTitle";
        var findit = divT.concat(text[1])
        var input = document.getElementById(findit).innerHTML;
        var output = "";
        if(input.indexOf("姓名") != -1) output = name1;
        if(input.indexOf("学号") != -1) output = id1;
        if(input.indexOf("QQ") != -1 || input.indexOf("qq") != -1) output = qq1;
        if(input.indexOf("学院") != -1) output = xueyuan1;
        if(input.indexOf("专业") != -1) output = zhuanye1;
        if(input.indexOf("手机") != -1 || input.indexOf("电话") != -1 ||input.indexOf("号码") != -1) output = phonenum1;

        objs[i].value = output;
        objs[i].blur();
    }

    var choose = document.getElementsByTagName("select");
    for (var i = 0; i < choose.length; i++) {
        choose[i].focus();
        choose[i].value = "1";
        choose[i].blur();
    }


})());

function validate() {
    output = true;
}
