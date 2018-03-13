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
    var allCities = ['埃及|20|aj','埃塞俄比亚|251|aseby','奥兰群岛|358|alqd','奥地利|43|adl','安哥拉|444|agl','安圭拉|1|agl','安提瓜和巴布达|1|atg','安道尔|376|ade','澳大利亚|61|adly','澳门|853|am','爱尔兰|353|ael','爱沙尼亚|372|asny','阿塞拜疆|994|asbj','阿富汗|93|afh','阿尔及利亚|213|arjly','阿尔巴尼亚|355|aebny','阿拉伯联合酋长国|971|alb','阿曼|968|am','阿根廷|54|agt','阿森松岛|247|assd','阿鲁巴|294|alb','不丹|975|bd','伯利兹|501|blz','保加利亚|359|bjly','冰岛|354|bd','北马里亚纳群岛|1|bm','博兹瓦纳|267|bzwn','巴勒斯坦|92|bl','巴巴多斯|1|bb','巴哈马|1|bhm','巴布亚新几内亚|675|bby','巴拉圭|595|blg','巴拿马|507|bnm','巴林|973|bl','巴西|55|bx','布基纳法索|226|bj','布隆迪|257|bld','比利时|32|bd','波兰|48|bl','波多黎各|1|bd','波斯尼亚和黑塞哥维那|387|bs','玻利维亚|591|blwy','白俄罗斯|375|bels','百慕大|1|bmd','贝宁|229|bn','朝鲜|850|cx','赤道几内亚|240|cdjny','东帝汶|670|ddw','丹麦|45|dm','东哥|228|dg','多米尼克|1|dmnk','多米尼加共和国|1|dm','德国|49|dg','俄罗斯|7|els','厄多瓜尔|593|edge','厄立特里亚|291|elt','佛得角|238|fdj','斐济|679|fj','梵蒂冈|379|fdg','法国|33|fg','法属圣马丁|590|fssmd','法属圭亚那|594|fs','法属波利尼西亚|689|fs','法罗群岛|298|fl','福克兰群岛|500|fkl','芬兰|358|fl','菲律宾|63|flb','关岛|1|gd','冈比亚|220|gby','刚果|243|gg','古巴|53|gb','哥伦比亚|57|glby','哥斯达黎加|506|gs','圭亚那|592|gyn','根西岛|44|gxd','格林纳达|1|gynd','格林兰|299|gll','格鲁吉亚|995|gljy','瓜德罗普岛|590|gdlpd','哈萨克斯坦|7|hs','洪都拉斯|504|hdls','海地|509|hd','荷兰|31|hl','荷兰加勒比|599|hljlb','荷属圣马丁|1|hs','韩国|82|hg','黑山共和国|382|hs','几内亚|224|jny','几内亚比绍|245|jny','加拿大|1|jnd','加纳|233|jn','加蓬|241|jp','吉尔吉斯斯坦|996|jej','吉布提|253|jbt','基里巴斯|686|jlbs','捷克共和国|420|jk','柬埔寨|855|jpz','津巴布韦|263|jbbw','克罗地亚|385|kldy','卡塔尔|974|kte','喀麦隆|237|lml','库克群岛|682|kkqd','库拉索|599|kls','开曼群岛|1|kmqd','科威特|965|kwt','科摩罗|269|kml','科特迪瓦|225|ktdw','科科斯群岛|61|kk','肯尼亚|254|kny','列支敦士登|423|lz','利比亚|218|lby','利比里亚|231|lbly','卢旺达|250|lwd','卢森堡|352|lsb','拉脱维亚|371|ltwy','留尼汪|262|lnw','立陶宛|370|ltw','罗马尼亚|40|lmny','老挝|856|lw','莱索托|266|lst','黎巴嫩|961|lbn','墨西哥|52|mxg','孟加拉国|880|mj','密克罗尼西亚联邦|691|mkl','摩尔多瓦|373|me','摩洛哥|212|mlg','摩纳哥|377|mlg','曼岛|44|md','毛利塔利亚|222|ml','毛里求斯|230|mlqs','秘鲁|51|ml','缅甸|95|md','美国|1|mg','奥地利|43|adl','美属维京群岛|1|ms','美属萨摩亚|1|ms','莫桑比克|258|msbk','蒙古|976|mg','蒙塞拉特|1|mslt','马其顿|389|mqd','马尔代夫|960|medf','马拉维|265|mlw','马提尼克|596|mtnk','马来西亚|60|mlxy','马约特|262|myt','马绍尔群岛|692|mse','马其他|356|mqt','马达加斯加|261|mdsjs','马里|223|ml','南苏丹|211|nsd','南非|27|nf','尼加拉瓜|505|njlg','尼日利亚|234|nrly','尼日尔|227|nnr','尼泊尔|977|nbe','挪威|47|nw','瑙鲁|674|nl','纳米比亚|264|nm','纽埃|683|na','诺福克岛|672|nfkd','帕劳|680|pl','葡萄牙|351|pty','日本|81|rb','瑞典|46|rd','瑞士|41|rs','圣卢西亚|1|slxy','圣基茨和尼维斯|1|sj','圣多美和普林西比|239|sdm','圣巴泰勒米|590|sbtl','圣文森特和格林纳丁斯|1|sest','圣皮埃尔和密克隆群岛|508|spae','圣诞岛|61|sd','圣赫勒拿|290|shnl','圣马力诺|378|smlr','塞内加尔|221|snje','塞尔维亚|381|sewy','塞拉利昂|232|slla','塞浦路斯|357|sbls','塞舌尔|248|sse','所罗马群岛|677|slmqd','斯威士兰|268|swsl','斯洛伐克|421|slfk','斯洛文尼亚|386|slwny','塞浦路斯|357|sbls','斯瓦尔巴特和扬马延|47|swe','斯里兰卡|94|sllk','沙特阿拉伯|966|stalb','索马里|252|sml','苏丹|249|sd','苏里南|597|sln','萨尔瓦多|503|sewd','萨摩亚|685|smy','台湾|886|tw','图瓦卢|688|twl','土库曼斯坦|993|tkmst','土耳其|90|teq','坦桑尼亚|255|tsny','塔吉克斯坦|992|tjkst','托克劳|690|tkl','汤加|676|tj','泰国|66|tg','特克斯和凯科斯群岛|1|tks','特立尼达和多巴哥|1|tln','特里斯坦达库尼亚群岛|290|tls','突尼斯|216|tns','乌克兰|380|wkl','乌兹别克斯坦|998|wz','乌干达|256|wgd','乌拉圭|598|wz','危地马拉|502|wdml','委内瑞拉|58|wnrl','文莱|673|wl','瓦利斯和富图纳|681|lsz','瓦努阿图|678|wnat','匈牙利|36|xyl','叙利亚|963|xly','希腊|30|xl','新加坡|65|xjp','新喀里多尼亚|687|xgl','新西兰|64|xxl','西撒哈拉|212|xshl','西班牙|34|xby','香港|852|xg','也门|967|ym','亚美尼亚|374|yamny','以色列|972|ysl','伊拉克|964|ylk','伊朗|98|yl','印度|91|yd','印度尼西亚|62|xdnxy','意大利|39|ydl','牙买加|1|ymj','约旦|962|yd','英国|44|yg','英属印度洋领地|246|ys','英属维京群岛|1|ys','越南|84|yn','中国|86|zg','中非共和国|236|zf','乍得|235|zd','智利|56|zl','泽西岛|44|zxd','直布罗陀|350|zblt','赞比亚|260|zby'
    ];
    var regEx = /^([\u4E00-\u9FA5\uf900-\ufa2d]+)\|(\w+)\|(\w)\w*$/i, // 匹配汉字，拼音
        // regExChiese = /([\u4E00-\u9FA5\uf900-\ufa2d]+)/, // 只匹配拼音
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
                num = part[2],
                en = part[1]+num, //中文名
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
            if (i < 16) {
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
            this.stopPropagation();
        },
        //创建市列表
        creatItem: function() {
            if(this.isContainerExit) return;
            var template = '<div class="kucity" style="width:600px;"><div class="citybox"><ul class="kucity_nav"><li class="active">HOT</li><li>A</li><li>B</li><li>C</li><li>D</li><li>E</li><li>F</li><li>G</li><li>H</li><li>J</li><li>K</li><li>L</li><li>M</li><li>N</li><li>P</li><li>R</li><li>S</li><li>T</li><li>W</li><li>X</li><li>Y</li><li>Z</li></ul><div class="kucity_body"></div></div><ul class="result"></ul></div>';
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
                        dt = '<dt style="width:0px;"></dt>',
                        dd = $('<dd>'),
                        str = '';

                    for (var j = 0, jLen = city[group][itemKey[i]].length; j < jLen; j++) {
                        var Num =city[group][itemKey[i]][j].replace(/[^0-9]/ig,"")
                        var Text =city[group][itemKey[i]][j].replace(/[^\u4e00-\u9fa5]/gi,"")
                 
                        str += '<span  title="'+ city[group][itemKey[i]][j]+'">'
                               + Text +'<em class="region">+'+ Num +'</em>'
                            +'</span>'
                           
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
            $('.kucity_item dd').on('click', 'span', function(e) {
                self.target.text(($(this).find(".region").text()));
                self.container.hide();
            })
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
        target.on('mousedown', function(e) {
            var top = $(this).offset().top + $(this).outerHeight(),
                left = $(this).offset().left;
            kucity = kucity ? kucity : new KuCity(target);
            kucity.target = $(e.target);
            kucity.init();
            kucity.container.show().offset({
                'top': top + 7,
                'left': left
            });
            kucity.triggleShow(true);
            kucity.resultct.on('click', 'li', function() {
                kucity.target.text($(this).find('.name').text());
                kucity.triggleShow('all');
            })
        })
        return this;
    };
})(jQuery)
