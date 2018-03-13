/*
 * 城市选择jquer插件
 *
 * Licensed under the MIT license:
 * https://github.com/callmeJozo/kuCity
 *
 * Author: Naraku(http://segmentfault.com/u/naraku_)
 *
 * Version:  1.0
 *
 */

(function($) {
     var allCities = ['北京|beijing|bj', '上海|shanghai|sh','武汉|wuhan|wh', '重庆|chongqing|cq', '深圳|shenzhen|sz', '广州|guangzhou|gz','厦门|xiamen|xm','郑州|zhengzhou|zz', '杭州|hangzhou|hz',
        '南京|nanjing|nj', '苏州|shuzhou|sz', '天津|tianjin|tj', '成都|chengdu|cd', '南昌|nanchang|nc', '三亚|sanya|sy','沈阳|shenyang|sy', '青岛|qingdao|qd','黔江县|qiangjiangx|qjx','黔西南|qiangxinan|qxn','且末县|qiemoxian|qmx','琼海市|qiionghaishi|qhs',
         '西安|xian|xa', '长沙|changsha|cs', '合肥|hefei|hf', '西藏|xizang|xz', '内蒙古|neimenggu|nmg', '安庆|anqing|aq','安顺|anshun|as','安阳|anyang|ay', '阿尔善右旗|aershanyouqi|aesyq','阿尔善左旗|aershanzuoqi|aeszq','澳门|aomen|am','阿尔山|aes|aers','阿里|ali|al','阿勒泰|aletai|alt', '安康|ankang|ak',
        '阿克苏|akesu|aks', '包头|baotou|bt', '博鳌镇|boaozhen|baz', '布尔津|buerjin|bej', '北海|beihai|bh', '百色|baise|bs','白山|baishan|bs','蚌埠|brngbu|bb', '巴彦淖尔|bayannaoer|bydne','保山|baoshan|bs', '长治|changzhi|cz', '长春|changchun|cc', '常州|changzhou|cz', '昌都|changdu|cd',
        '朝阳|chaoyang|cy', '常德|changde|cd', '长白山|changbaishan|cbs', '赤峰|chifeng|cf', '大同|datong|dt', '大连|dalian|dl', '达县|daxian|dx', '东营|dongying|dy', '大庆|daqing|dq', '丹东|dandong|dd',
        '大理|dali|dl', '敦煌|dunhuang|dh', '鄂尔多斯|eerduosi|eeds', '恩施|enshi|es', '福州|fuzhou|fz', '阜阳|fuyang|fy', '贵阳|guiyang|gy',
        '桂林|guilin|gl', '广元|guangyuan|gy', '格尔木|geermu|gem', '呼和浩特|huhehaote|hhht', '哈密|hami|hm',
        '黑河|heihe|hh', '海拉尔|hailaer|hle', '哈尔滨|haerbin|heb', '海口|haikou|hk', '黄山|huangshan|hs', '邯郸|handan|hd',
        '汉中|hanzhong|hz', '和田|hetian|ht', '晋江|jinjiang|jj', '锦州|jinzhou|jz', '景德镇|jingdezhen|jdz',
        '嘉峪关|jiayuguan|jyg', '井冈山|jinggangshan|jgs', '济宁|jining|jn', '九江|jiujiang|jj', '佳木斯|jiamusi|jms', '济南|jinan|jn',
        '喀什|kashi|ks', '昆明|kunming|km', '康定|kangding|kd', '克拉玛依|kelamayi|klmy', '库尔勒|kuerle|kel', '库车|kuche|kc', '兰州|lanzhou|lz',
        '洛阳|luoyang|ly', '丽江|lijiang|lj', '林芝|linzhi|lz', '柳州|liuzhou|lz', '泸州|luzhou|lz', '连云港|lianyungang|lyg', '黎平|liping|lp',
        '连成|liancheng|lc', '拉萨|lasa|ls', '临沧|lincang|lc', '临沂|linyi|ly', '芒市|mangshi|ms', '牡丹江|mudanjiang|mdj', '满洲里|manzhouli|mzl', '绵阳|mianyang|my',
        '梅县|meixian|mx', '漠河|mohe|mh', '南充|nanchong|nc', '南宁|nanning|nn', '南阳|nanyang|ny', '南通|nantong|nt', '那拉提|nalati|nlt',
        '宁波|ningbo|nb', '攀枝花|panzhihua|pzh','普洱|puer|pe', '衢州|quzhou|qz', '秦皇岛|qinhuangdao|qhd', '庆阳|qingyang|qy', '齐齐哈尔|qiqihaer|qqhe',
        '石家庄|shijiazhuang|sjz',  '思茅|simao|sm', '铜仁|tongren|tr', '塔城|tacheng|tc', '腾冲|tengchong|tc', '台州|taizhou|tz',
        '通辽|tongliao|tl', '太原|taiyuan|ty', '威海|weihai|wh', '梧州|wuzhou|wz', '文山|wenshan|ws', '无锡|wuxi|wx', '潍坊|weifang|wf', '武夷山|wuyishan|wys', '乌兰浩特|wulanhaote|wlht',
        '温州|wenzhou|wz', '乌鲁木齐|wulumuqi|wlmq','芜湖|wuhu|wh','乌兰察布|wulangchabu|wlcb', '万州|wanzhou|wz', '乌海|wuhai|wh','五大连池市|wudalianchishi|wdlcs', '兴义|xingyi|xy', '西昌|xichang|xc', '襄樊|xiangfan|xf',
        '西宁|xining|xn', '锡林浩特|xilinhaote|xlht', '西双版纳|xishuangbanna|xsbn', '徐州|xuzhou|xz','邢台|xingtai|xt','营口|yingkou|yk','襄阳|xiangyang|xy','忻州|xinzhou|xz','夏河县|xiahexian|xhx','咸阳|xianyang|xy','义乌|yiwu|yw', '永州|yongzhou|yz', '榆林|yulin|yl', '延安|yanan|ya', '运城|yuncheng|yc',
        '烟台|yantai|yt', '银川|yinchuan|yc', '宜昌|yichang|yc', '宜宾|yibin|yb', '盐城|yancheng|yc', '延吉|yanji|yj', '玉树|yushu|ys', '伊宁|yining|yn', '珠海|zhuhai|zh', '昭通|zhaotong|zt',
        '张家界|zhangjiajie|zjj', '舟山|zhoushan|zs',  '中卫|zhongwei|zw', '芷江|zhijiang|zj','遵义|zunyi|zy','张家口|zhangjiakou|zjk','张掖|zhangye|zy', '湛江|zhanjiang|zj','扎尔屯市|zhaertunshi|zrts'
    ];
    var interCity = [
    ]
    var regEx = /^([\u4E00-\u9FA5\uf900-\ufa2d]+)\|(\w+)\|(\w)\w*$/i, // 匹配汉字，拼音
        regExChiese = /([\u4E00-\u9FA5\uf900-\ufa2d]+)/, // 只匹配拼音
        regNum = /^[0-9]*[1-9][0-9]*$/　,
        reg_a = /^[a]$/i, // 匹配首字母为 a-h
        reg_b = /^[b]/i, // 匹配首字母为 i-p
        reg_c = /^[c]/i, // 匹配首字母为 q-z
        reg_d = /^[d]/i,
        reg_e = /^[e]/i,
        reg_f = /^[f]/i,
        reg_g = /^[g]/i,
        reg_h = /^[h]/i,
        reg_j = /^[j]/i,
        reg_k = /^[k]/i,
        reg_l = /^[l]/i,
        reg_m = /^[m]/i,
        reg_n = /^[n]/i,
        reg_p = /^[p]/i,
        reg_r = /^[r]/i,
        reg_s = /^[s]/i,
        reg_t = /^[t]/i,
        reg_w = /^[w]/i,
        reg_x = /^[x]/i,
        reg_y = /^[y]/i,
        reg_z = /^[z]/i

    //构建城市分类字面量
    var city = {
        hot: {},
        A: {},
        B: {},
        C: {},
        D: {},
        E: {},
        F: {},
        G: {},
        H: {},
        J: {},
        K: {},
        L: {},
        M: {},
        N: {},
        P: {},
        R: {},
        S: {},
        T: {},
        W: {},
        X: {},
        Y: {},
        Z: {}
    };
    //城市按首字母分类，填充到分类字面量
    (function() {
        for (var i = 0, len = allCities.length; i < len; i++) {
            var part = regEx.exec(allCities[i]),
   
                en = part[1], //中文名
                // letter = part[2], //数字
                spletter = part[3], //拼音简写
                first = spletter[0].toUpperCase(), //拼音首字母
                ltPart; //当前字母下的城市


            if (reg_a.test(first)) {
                ltPart = 'A';
            } else if (reg_b.test(first)) {
                ltPart = 'B';
            } else if (reg_c.test(first)) {
                ltPart = 'C';
            } else if (reg_d.test(first)) {
                ltPart = 'D';
            } else if (reg_e.test(first)) {
                ltPart = 'E';
            } else if (reg_f.test(first)) {
                ltPart = 'F';
            } else if (reg_g.test(first)) {
                ltPart = 'G';
            } else if (reg_h.test(first)) {
                ltPart = 'H';
            } else if (reg_j.test(first)) {
                ltPart = 'J';
            } else if (reg_k.test(first)) {
                ltPart = 'K';
            } else if (reg_l.test(first)) {
                ltPart = 'L';
            } else if (reg_m.test(first)) {
                ltPart = 'M';
            } else if (reg_n.test(first)) {
                ltPart = 'N';
            } else if (reg_p.test(first)) {
                ltPart = 'P';
            }else if (reg_r.test(first)) {
                ltPart = 'R';
            } else if (reg_s.test(first)) {
                ltPart = 'S';
            } else if (reg_t.test(first)) {
                ltPart = 'T';
            } else if (reg_w.test(first)) {
                ltPart = 'W';
            } else if (reg_x.test(first)) {
                ltPart = 'X';
            } else if (reg_y.test(first)) {
                ltPart = 'Y';
            }else if (reg_z.test(first)) {
                ltPart = 'Z';
            }

            city[ltPart][first] ? city[ltPart][first].push(en) : (city[ltPart][first] = [], city[ltPart][first].push(en));
            //设置前16个城市为热门城市
            if (i < 6) {
                city.hot['hot'] ? city.hot['hot'].push(en) : (city.hot['hot'] = [], city.hot['hot'].push(en));
            }
        }
    })();

    var KuCity = function(target) {
        this.target = target; // 输入框
        this.container = null; //插件容器
        this.resultct = null; //搜索结果容器
        this.isKeyslect = false; //是否在用上下键选择
        this.isContainerExit = false; // 插件容器是否已存在
    };

    KuCity.prototype = {
        constructor: KuCity,
        //初始化
        init: function() {
            this.creatItem();
            this.tabChange();
            this.citySelect();
            this.btnClose();
            this.inputSearch();
            this.keySelect();
            this.bodySelect();
            this.stopPropagation();
        },
        //创建市列表
        creatItem: function() {
            if(this.isContainerExit) return;
             var template = '<div class="kucity"><div class="topside topsearch"><div class="toback">取消</div><div class="searchBar"><input type="text" placeholder="北京/bj/beijing/pek/中国" id="search-input"/></div></div><ul class="city_bar"><li class="active">国内</li><li>国际/地区</li></ul><div class="citybox"><ul class="kucity_nav" style="padding-top:0px;"><li class="active"><a href="#hot">HOT</a></li><li><a href="#A">A</a></li><li><a href="#B">B</a></li><li><a href="#C">C</a></li><li><a href="#D">D</a></li><li><a href="#E">E</a></li><li><a href="#F">F</a></li><li><a href="#G">G</a></li><li><a href="#H">H</a></li><li><a href="#J">J</li><li><a href="#K">K</a></li><li><a href="#L">L</a></li><li><a href="#M">M</a></li><li><a href="#N">N</a></li><li><a href="#P">P</a></li><li><a href="#R">R</a></li><li><a href="#B">S</a></li><li><a href="#T">T</a></li><li><a href="#W">W</a></li><li><a href="#X">X</a></li><li><a href="#Y">Y</a></li><li><a href="#Z">Z</a></li></ul><div class="kucity_body city_wrap"></div></div><ul class="result"></ul></div>';
            $('body').append(template);

            this.container = $('.kucity');
            this.resultct = $('.result');

            for (var group in city) {
                var itemKey = [];

                for (var item in city[group]) {
                    itemKey.push(item);
                }
                itemKey.sort();
                var itembox = $('<div class="kucity_item">');
                itembox.addClass(group);

                for (var i = 0, iLen = itemKey.length; i < iLen; i++) {

                    var dl = $('<dl>'),
                        dt = '<dt id='+ itemKey[i] +'>' + (itemKey[i] == 'hot' ? '热门' : itemKey[i]) + '</dt>',
                        dd = $('<dd>'),
                        str = '';

                    for (var j = 0, jLen = city[group][itemKey[i]].length; j < jLen; j++) {
                        var Text =city[group][itemKey[i]][j].replace(/[^\u4e00-\u9fa5]/gi,"")
                        str += '<div>'
                            +'<span>'+ Text + '</span>'
                            +'</div>'
                    }

                    dd.append(str);
                    dl.append(dt).append(dd);
                    itembox.append(dl);
                }
                $('.kucity_body').append(itembox);
                this.container.find('.hot').addClass('active');
            }
            this.isContainerExit = true;
        },
        //创建搜索结果列表
        creatResult: function(re, value) {
            var result = re.result,
                len = result.length,
                str = '';
            if (!!len) {
                for (var i = 0; i < len; i++) {
                    str += '<li><span class="name">' + result[i].cityName + '</span><span class="letter">' + result[i].py + '</span></li>'
                }
                this.container.find('.result').html('').html(str).find('li').eq(0).addClass('active');
            } else {
                this.container.find('.result').html('<li>没有找到<span class="noresult">' + value + '</span>相关信息</li>');
            }
        },
        //列表切换
        tabChange: function() {
            $('.kucity_nav').on('click', 'li', function(e) {
                var current = $(e.target),
                    index = current.index();

                current.addClass('active').siblings().removeClass('active');
                $('.kucity_item').eq(index).addClass('active').siblings().removeClass('active');
                $(' .kucity_body').scrollTop(0);

            })
        },
        //城市选择
        citySelect: function() {
            var self = this;
            $('.kucity_item dd').on('click', function(e) {
                self.target.val($(e.target).text());
                self.container.hide();
            })
        },
        bodySelect:function(){
             var self = this;
             $(".city_bar").on("click","li",function(e){
                var ostatus = $(this).text();
                $(this).addClass("active").siblings("li").removeClass("active");
                switch (ostatus) {
                  case "国内":
                        
                      break;
                  case "国际/地区":
                 
                      break;
                }
             })
        },
        // 取消
        btnClose:function(){
             var self = this;
            $('.toback').on('click', function(e) {
                self.container.hide();
            })
        },
        //上下键选择搜索结果
        keySelect: function() {
            var self = this;
            this.target.on('keydown', function(e){
                var current = self.resultct.find('.active').index();
                if(current !== -1){
                    switch(e.keyCode){
                        //上
                        case 38: 
                            keyActive(false);
                            break;
                        //下
                        case 40:
                            keyActive(true);
                            break;
                        //确定
                        case 13: 
                            self.isKeyslect = false;
                            self.target.val(self.resultct.find('.active .name').text());
                            self.triggleShow('all');
                            self.target.blur();
                            break;
                        default: 
                            self.isKeyslect = false;
                            break;
                    }

                    function keyActive(isInorder) {
                        var max = self.resultct.find('li').length - 1;
                        if(isInorder){
                            current = current == max ? 0 : current + 1;
                        }else{
                            current = current == 0 ? max : current - 1;
                        }
                        self.resultct.find('li').eq(current).addClass('active').siblings().removeClass('active');
                        self.isKeyslect = true;
                    }
                }
            })
        },
        //搜索
        inputSearch: function() {
            var self = this;
            $("#search-input").on('keyup', function(e) {
                if(!self.isKeyslect){
                    self.throttle(search, this);
                }
            })
            // 输入框搜索
            function search(e) {
                var container = self.container;
                self.triggleShow(false);
                var value = $(this).val();
                if (value) {
                    var url = 'https://sjipiao.alitrip.com/city_search.do?_ksTS=1439362066383_11337&lines=10&_input_charset=utf-8&needProvince=true&q=' + value;
                    $.ajax({
                        url: url,
                        type: 'get',
                        dataType: 'jsonp'
                    }).done(function(re) {
                        self.creatResult(re, value);
                    })
                } else {
                    self.triggleShow(true);
                }
            }
        },
        //列表，结果，整体 显示切换
        triggleShow: function(open) {
            var container = this.container;
            if (open === 'all') {
                container.hide()
            } else if (open) {
                container.find('.citybox').show().end().find('.result').hide();
            } else {
                container.find('.citybox').hide().end().find('.result').show();
            }
        },
        //函数节流
        throttle: function(fn, context) {
            clearTimeout(fn.tId);
            fn.tId = setTimeout(function(){
                fn.call(context);
            }, 100)
        },
        //阻止事件冒泡
        stopPropagation: function() {
            var self = this;
            //阻止事件冒泡
            this.container.on('click', stopPropagation);
            this.target.on('click', stopPropagation);
            //页面点击 隐藏
            $(document).on('click', function() {
                self.container.hide();
            })
            function stopPropagation(e) {
                e.stopPropagation();
            }
        }
    };

    var kucity = null;
    $.fn.kuCity = function(options) {
        var target = $(this);
        target.on('focus', function(e) {
            var top = $(this).offset().top + $(this).outerHeight(),
                left = $(this).offset().left;
            kucity = kucity ? kucity : new KuCity(target);
            kucity.target = $(e.target);
            kucity.init();
            kucity.container.show()
            kucity.triggleShow(true);
            kucity.resultct.on('click', 'li', function() {
                kucity.target.val($(this).find('.name').text());
                kucity.triggleShow('all');
            })
        })
        return this;
    };
})(jQuery)
