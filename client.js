window.__ModuleLoader__.load({
  id: 'dsh-poem-rain',
  factory(require) {
    const React = require('react');
    const h = React.createElement;
    const { useState, useEffect, useRef, useCallback } = React;

    // 构建开关：false = 通用版（不预设任何人的文字）；true = 作者版（内置诗库默认启用）
    const AUTHOR_MODE = false;


    /* ============================================================
       零、他自己的诗（25 首，摘出 252 行可单独成句的）
       ============================================================ */

    const LINES_RAW = `双雁南渡偶相遇，初识相谈略生疏｜雁南情
日日分享身旁事，渐渐语话繁如星｜雁南情
随后两雁又游戏，聊天甚欢喜相逢｜雁南情
待到芒种又三日，蓝雁欢喜度三月｜雁南情
秋分时节叶染黄，白雁诡计情脉脉｜雁南情
蓝雁难知心生情，终是白雁露真意｜雁南情
慎思慎行慎为先，一辩二辩再辩之｜雁南情
明了花落人家处，应答情丝绵绵意｜雁南情
双雁因故难相逢，家书亦难有回时｜雁南情
惊觉此非情深处，布衣之交代良人｜雁南情
隔阂如山压人息，似是难再续前缘｜雁南情
两雁此后竹马称，精卫难填山海平｜雁南情
露凝而白七曜归，双雁存情来时报｜雁南情
然有一日知彼事，蓝雁追询之后况｜雁南情
担君因此为事愁，悲绝良久不敢言｜雁南情
数日方觉沙落雪，非君之意难作为｜雁南情
此后每想闲聊间，亦感心石阻塞处｜雁南情
一片青色的草地上｜漫步于碧蓝湖畔
东曦（太阳）缓缓升起｜漫步于碧蓝湖畔
清风拂过水面｜漫步于碧蓝湖畔
泛起阵阵金黄的涟漪｜漫步于碧蓝湖畔
随着纤细的柳枝一起｜漫步于碧蓝湖畔
撩拨着我们的心弦｜漫步于碧蓝湖畔
奏响独属于我们的乐章｜漫步于碧蓝湖畔
丝丝光晕环绕在湖面上｜漫步于碧蓝湖畔
氤氲起薄薄的雾｜漫步于碧蓝湖畔
光与雾的交织为我们｜漫步于碧蓝湖畔
演绎的一场华丽的丁达尔效应｜漫步于碧蓝湖畔
我们彼此感受着对方｜漫步于碧蓝湖畔
指尖的温度与心跳｜漫步于碧蓝湖畔
蹁跹的彩蝶向你展开怀抱｜漫步于碧蓝湖畔
你满怀好奇地迎着蝶儿｜漫步于碧蓝湖畔
向着前方翩翩起舞｜漫步于碧蓝湖畔
微风温柔的拨动着你的｜漫步于碧蓝湖畔
欢笑的言语与风景中的你｜漫步于碧蓝湖畔
令我陶醉沉迷着｜漫步于碧蓝湖畔
我们踏过鲜花簇拥的小路｜漫步于碧蓝湖畔
来到一座小亭上｜漫步于碧蓝湖畔
坐看水波漾韶华｜漫步于碧蓝湖畔
清风拂我意｜漫步于碧蓝湖畔
此时的旭日已掠过了海平线｜漫步于碧蓝湖畔
与微熏的云霞一起｜漫步于碧蓝湖畔
静静的依靠着彼此｜漫步于碧蓝湖畔
我们漫步于平静的长河边｜漫步于长河边
月亮的余晖映照着你的脸｜漫步于长河边
萤火虫在我们四周轻声呢喃着｜漫步于长河边
蹁跹的蝴蝶揽入你温馨的怀抱｜漫步于长河边
河面氤氲起云烟｜漫步于长河边
我们乘着霞光｜漫步于长河边
透过薄薄的雾霭｜漫步于长河边
遥望着蓝宝石点缀的漫天星空｜漫步于长河边
偶尔一道道流星划过蔚蓝长空｜漫步于长河边
留下深邃的倩影｜漫步于长河边
我们彼此向着流星的方向｜漫步于长河边
彼此守护着对方｜漫步于长河边
念君思君梦君归｜相思组句
聊言甚欢脸绯红｜相思组句
不知今夕是何日｜相思组句
只见明月入我心｜相思组句
字字未提相思语｜相思组句
笔笔写尽相思苦｜相思组句
不知红豆何日生｜相思组句
愿与君来共赏之｜相思组句
未尝相思苦｜相思组句
却道相思情｜相思组句
而今音讯无｜相思组句
思人两相隔｜相思组句
不知何处言｜相思组句
秋风掠泪面｜相思组句
秋风掠尽心间落叶｜相思组句
独自凋零的夜总是安静｜相思组句
捡起心灵的碎屑｜相思组句
雨也总会下在那个夜｜相思组句
也许少年在那个夜｜相思组句
才分不清雨与泪｜相思组句
婆娑魅影曼歌舞｜望月
窈窕轻风拂万息｜望月
圆镜高悬映乾坤｜望月
星河孤影一尘埃｜望月
屹望长安万里征｜望月
风移影 更贯肠｜望月
忽引鹧鸪鸣｜望月
奈何宫阙圆缺时｜望月
三人对 酒话凉泼墨绘卷乾坤立｜望月
离愁别 又何妨｜望月
常有仙鹤伴｜望月
重归仍是少年郎｜望月
河山点 长歌荡｜望月
星簇月，光留影｜望月
寻君迹，暗生香｜望月
天做雁，地为枝｜望月
山海竭，与君同｜望月
金朝辉月蟾宫耀｜金朝辉月
红甲披身映晨晞｜金朝辉月
沆瀣一气誓言告｜金朝辉月
鱼跃龙门观礼毕｜金朝辉月
忽梦少年朦胧境｜忽梦少年
少女绯红笑在卧｜忽梦少年
春风何时香甜带｜忽梦少年
素妆更解少年心｜忽梦少年
呕哑嘲哳惊坐起｜忽梦少年
漫天辰星虚实辨｜忽梦少年
疾风欲回少年时｜忽梦少年
骤雨汪洋思绪荡｜忽梦少年
此愁不知何作解｜春愁
风吹落叶满凋零｜春愁
欲解此愁水作酒｜春愁
奈何饮尽更销魂｜春愁
错将星河化作海｜春愁
没入其间浸肝肠｜春愁
独立寒冬冒枝头｜独立寒冬
粉黛红妆飘然若｜独立寒冬
纵有十万八千风｜独立寒冬
亦笑此风不解情｜独立寒冬
凄凉莫知人间愁｜独立寒冬
却上梢头染旧叶｜独立寒冬
不知悲风凋碧树｜独立寒冬
却见高堂雪满头｜独立寒冬
昔日饮酒买自醉｜昔日饮酒
今朝欲醒却茫然｜昔日饮酒
双人并行红绿间｜昔日饮酒
不知何处是心归｜昔日饮酒
欲借明月诉愁心｜昔日饮酒
奈何阴云覆苍穹｜昔日饮酒
骤雨疾行吹断肠｜昔日饮酒
举头不知雨语泪｜昔日饮酒
朝窥秦山万里征｜朝窥秦山
暮望寰宇浩无垠｜朝窥秦山
烟火相连天地合｜朝窥秦山
金鸟探看瀚海吞｜朝窥秦山
国之本与文化银、思想。若根朽则不可雕也，安能幸存焉｜亡国论
国应以民为本，民若不信则必亡矣。民之所向应成国之所往｜亡国论
于内苟安，于外不涉。此谓闭关锁国，固步自封，久之必亡｜速亡论
三载孟夏苦与乐，三载凛冬影相随｜师者
春蚕吐丝无私情，春泥护花无话言｜师者
秋风莫知三尺台，却上梢头染旧叶｜师者
谆谆言行照莘莘，累累桃李满天下｜师者
师者，所以传道授业解惑也｜师者
怒剑斩天道，逍遥游诸界｜怒剑斩天道
高极望寰宇，只手揽九天｜怒剑斩天道
邪恶血月倒悬于天穹｜琥珀·不屈
群星相互鄙夷着彼此的存在｜琥珀·不屈
烈火焚尽意识的躯壳｜琥珀·不屈
残光堕入深海泥沙｜琥珀·不屈
一点星芒渐渐褪去｜琥珀·不屈
群星却依旧于无边天际中闪耀着｜琥珀·不屈
伴随着潮来潮去｜琥珀·不屈
那抹亮点已然暗淡｜琥珀·不屈
结成记忆中飘荡的琥珀｜琥珀·不屈
在流星划过的蔚蓝夜空｜琥珀·不屈
深海中潜藏的那枚琥珀｜琥珀·不屈
忽闪出异丽的光芒｜琥珀·不屈
一圈圈棕红的光晕轻声呢喃着｜琥珀·不屈
诉说着自己往昔岁月｜琥珀·不屈
晕圈愈发宽大｜琥珀·不屈
似铮铮傲骨燃尽自我不屈意志｜琥珀·不屈
黄沙映照着奇光｜琥珀·不屈
怒涛拍打起岩壁｜琥珀·不屈
应和着意志的不屈｜琥珀·不屈
三尺寒冰之下细微作响｜琥珀·不屈
破碎之音缓缓而升｜琥珀·不屈
无间炼狱焚烧着人类命运｜黎明之针
寂静深遂寰宇响彻着空洞回音｜黎明之针
从咽喉中发出的撕裂之声｜黎明之针
没入一片灰烬｜黎明之针
--一道黎明的破晓晨光｜黎明之针
人类似乎迎来了那可怜的渺茫曙光｜黎明之针
但人类百万年铸就的不屈｜黎明之针
向深空的虚无破开一道缝｜黎明之针
那尖锐的曙光划破历史长河｜黎明之针
穿透虚空，直指人类命运．｜黎明之针
坚毅的灵魂｜黎明之针
坚定的紧握着那破晓之刃｜黎明之针
巍峨的灵魂矗立于深空｜黎明之针
持剑斩向空洞虚无｜黎明之针
数道鎏金身披人类命运之光｜黎明之针
穿越茫茫无尽｜黎明之针
将人类命运再一次沐浴于辉光之下｜黎明之针
魂牵梦绕，辗转反侧｜魂牵梦绕
梦渡星海，繁星高照｜魂牵梦绕
鳞光入瞳，金浪相冲｜魂牵梦绕
乾坤移影，彩云乍现｜魂牵梦绕
曼妙轻姿，仙女临尘｜魂牵梦绕
清歌魅舞，纤柳扶风｜魂牵梦绕
音穿云霄，目瞪无言｜魂牵梦绕
余韵不灭，气撼山川｜魂牵梦绕
雷霆急现，起身恍惚｜魂牵梦绕
金黄涟漪微风荡｜黄金雨二首
光影鎏金沁人心｜黄金雨二首
颗颗麦粒种间作｜黄金雨二首
大明苍穹炙神州｜黄金雨二首
绿叶新装金缕衣｜黄金雨二首
满城尽待黄金雨｜黄金雨二首
金黄涟漪荡清风｜黄金雨二首
光影鎏金引人绪｜黄金雨二首
颗颗麦粒种间耕｜黄金雨二首
炎炎金乌炙黎玉｜黄金雨二首
珠水浸颊蟾宫耀｜黄金雨二首
担水耕织龙君许｜黄金雨二首
绿叶新装金缕衣｜黄金雨二首
满城尽布黄金雨｜黄金雨二首
孤声划破苍穹天｜孤声破苍穹
烽火即燃号角鸣｜孤声破苍穹
以身为引蔑阎罗｜孤声破苍穹
眸中闪耀中国色｜孤声破苍穹
万家灯火身后燃｜孤声破苍穹
千军奋起护神洲｜孤声破苍穹
而今龙吟震九天｜孤声破苍穹
鲲鹏扶摇九万里｜孤声破苍穹
晚冬揉醒朦胧的双眸｜晚冬揉醒
好奇地观望起人间的烟火｜晚冬揉醒
璀璨空明的流星划过浩浩长空｜晚冬揉醒
霜寒落满生长新嫩枝芽的梢头｜晚冬揉醒
静静的观赏着旭日东升｜晚冬揉醒
华光溢彩的灯笼｜晚冬揉醒
碧玉华珠的饰服｜晚冬揉醒
奔走相约的行人｜晚冬揉醒
一起笼罩在海晏河清的盛世潮头｜晚冬揉醒
柔烟四起戏人间｜晚冬揉醒
鳞笼旺火照穹天｜晚冬揉醒
结伴而行拜新年｜晚冬揉醒
熊熊赤心愿乐安｜晚冬揉醒
大雾迷敝了衣裳｜大雾迷敝
阴沉的雨水挤满了沉睡的心房｜大雾迷敝
疲惫的身躯堆在残羹冷饭前｜大雾迷敝
双脚零落散在虚幻之地｜大雾迷敝
霜雪覆盖在心田｜大雾迷敝
三尺寒冰冻结灵魂｜大雾迷敝
梦魇的狂欢席卷｜大雾迷敝
东风呼啸震彻｜大雾迷敝
沙漠中的清泉冻结了｜大雾迷敝
森林草原全都变成了荒芜｜大雾迷敝
枫叶失去了生机｜大雾迷敝
残花在风中凋零了｜大雾迷敝
花叶化成了沙｜大雾迷敝
荒野被充斥｜大雾迷敝
斜阳照射出纤细的身影｜打碎晨曦
微醺的晚霞映衬着脸庞｜打碎晨曦
清爽的晚风轻轻的扶起根根细发｜打碎晨曦
樱花悄然落下｜打碎晨曦
静静的躺在肩上｜打碎晨曦
霞光柔和地触及着粉红｜打碎晨曦
鸿雁掠过身前湖面｜打碎晨曦
带着青叶飘然入水｜打碎晨曦
泛起云霞阵阵涟漪｜打碎晨曦
彩幻的光晕呼吸着朦胧的气息｜打碎晨曦
春风轻抚少年意｜打碎晨曦
落花惜春佳人留｜打碎晨曦
我携秋水揽星河｜打碎晨曦
你如皎月入我怀｜打碎晨曦
烟云簇残月｜命运的终途
夏蝉伴风舞｜命运的终途`;

    const PICK_LINES = LINES_RAW.trim().split('\n').map((l) => {
      const i = l.lastIndexOf('｜');
      return i > 0 ? { t: l.slice(0, i), from: l.slice(i + 1) } : { t: l, from: '' };
    });


    /* ============================================================
       零点半、用户的文字（存本地，可导入、可清空）
       ============================================================ */

    const USER_KEY = 'poem-rain:lines:v1';
    const POS_KEY = 'poem-rain:pos:v2';

    function readPos() {
      try {
        const raw = window.localStorage.getItem(POS_KEY);
        if (!raw) return null;
        const o = JSON.parse(raw);
        if (typeof o.x !== 'number' || typeof o.y !== 'number') return null;
        // 只接受落在窗口可见区域内的位置；越界或贴着顶边的一律当作没拖过
        const w = window.innerWidth, h = window.innerHeight;
        if (o.y < 48 || o.x < 4 || o.y > h - 40 || o.x > w - 30) return null;
        return {
          x: Math.max(6, Math.min(w - 40, o.x)),
          y: Math.max(48, Math.min(h - 44, o.y))
        };
      } catch (_) { return null; }
    }

    function writePos(p) {
      try {
        if (p) window.localStorage.setItem(POS_KEY, JSON.stringify(p));
        else window.localStorage.removeItem(POS_KEY);
      } catch (_) {}
    }
    const USER_EVENT = 'poem-rain:lines-changed';

    function readUserLines() {
      try {
        const raw = window.localStorage.getItem(USER_KEY);
        if (!raw) return [];
        const arr = JSON.parse(raw);
        if (!Array.isArray(arr)) return [];
        return arr.filter((x) => x && typeof x.t === 'string' && x.t.trim().length > 0);
      } catch (_) {
        return [];
      }
    }

    function writeUserLines(list) {
      try {
        window.localStorage.setItem(USER_KEY, JSON.stringify(list.slice(0, 5000)));
        window.dispatchEvent(new CustomEvent(USER_EVENT));
        return true;
      } catch (_) {
        return false;
      }
    }

    /** 每行一句；支持 `句子｜出处` 或 `句子|出处` 标注来源；忽略空行 */
    function parseLines(text) {
      const out = [];
      const seen = new Set();
      for (const raw of String(text || '').split(/\r?\n/)) {
        const line = raw.trim();
        if (!line) continue;
        const parts = line.split(/[｜|]/);
        let t = (parts[0] || '').trim();
        t = t.replace(/^《([^》]{1,24})》$/, '$1');
        const from = (parts[1] || '').trim().replace(/^[《<]|[》>]$/g, '');
        if (t.length < 2) continue;
        if (seen.has(t)) continue;
        seen.add(t);
        out.push({ t: t.slice(0, 80), from: from.slice(0, 40) });
      }
      return out;
    }

    /* ============================================================
       一、词库
       ============================================================ */

    const TIME = [
      { from: 0, to: 4, words: ['凌晨三点', '天快亮的时候', '这个点的房间', '还没有人醒着的时候'] },
      { from: 5, to: 8, words: ['清晨', '天刚亮', '雾还没散的时候', '早上'] },
      { from: 9, to: 12, words: ['上午', '太阳升起来以后', '快到中午的时候', '上午十点'] },
      { from: 13, to: 17, words: ['下午', '下午三点', '日头偏西以后', '下午过半'] },
      { from: 18, to: 21, words: ['黄昏', '天刚黑', '灯亮起来的时候', '晚上'] },
      { from: 22, to: 23, words: ['深夜', '十一点以后', '很晚了', '夜最深的时候'] }
    ];

    const THING = ['灯', '雪', '旧信', '渡口', '钟声', '窗', '纸', '影子', '晚潮', '铁轨',
      '井', '船', '月亮', '屋檐', '灰', '风', '雨', '名字', '来路', '杯子', '门把手',
      '书架', '台阶', '烟', '一句话'];

    const ABST = ['沉默', '遗憾', '回声', '时间', '光', '雪线', '潮汐', '睡意', '口渴',
      '旧事', '余温', '倦意', '犹豫', '远方', '灰烬'];

    const VERB = ['收走', '熬成', '擦掉', '留在', '换成', '压成', '还给', '磨成', '折成',
      '藏进', '写成', '晒成', '喝掉', '接住'];

    const PLACE = ['窗台上', '桌子底下', '口袋里', '渡口边', '铁轨尽头', '旧屋的墙上',
      '雪里', '门后面', '照片背面', '水底', '墙角', '杯底', '半路上'];

    const ADJ = ['很轻', '没有名字', '褪了色', '发着凉', '只剩一半', '不太响', '有点旧',
      '比昨天更淡', '还没干'];

    const TAIL = ['像谁没说完的话', '落下来的时候没有声音', '明天也许就不记得了',
      '算是替今天收个尾', '它不是给谁的', '风把它吹到这边', '这一行可以跳过',
      '和上一句没有关系', '就当是写给这间屋子的', '没人接住也没关系',
      '说完就散了', '比沉默稍微响一点'];

    const TAILWORD = ['一部分', '另一种名字', '回声', '边角', '剩下来的地方', '旧地址'];

    const pick = (a) => a[Math.floor(Math.random() * a.length)];
    const pickOther = (a, a2) => (a === a2 ? pick(a) : a);

    function wordsFor(now) {
      const hh = now.getHours();
      const slot = TIME.find((s) => hh >= s.from && hh <= s.to) || TIME[0];
      return pick(slot.words);
    }

    const TEMPLATES = [
      (t, x, y, v, p, a, tw) => `${t}，${x}${v}了${y}`,
      (t, x, y, v, p, a, tw) => `${x}落在${p}，${v}${y}`,
      (t, x, y, v, p, a, tw) => `把${x}${v}，${y}就${a}了`,
      (t, x, y, v, p, a, tw) => `${y}在${p}${v}`,
      (t, x, y, v, p, a, tw) => `没有${x}，只有${y}还在${v}`,
      (t, x, y, v, p, a, tw) => `${x}是${y}的${tw}`,
      (t, x, y, v, p, a, tw) => `${x}${a}，${y}也是`
    ];

    function generate(now = new Date()) {
      // 只从用户自己导入的文字里抽；没导入就用现场生成器（原始版）
      const own = readUserLines();
      const pool = own.length ? own : (AUTHOR_MODE ? PICK_LINES : []);
      if (pool.length) {
        const p = pool[Math.floor(Math.random() * pool.length)];
        return { main: p.t, tail: p.from ? '《' + p.from + '》' : '', src: own.length ? 'user' : 'builtin' };
      }
      const t = wordsFor(now);
      const x = pick(THING);
      let y = pick(ABST);
      if (y === x) y = pick(ABST);
      const v = pick(VERB);
      const p = pick(PLACE);
      const a = pick(ADJ);
      const tw = pick(TAILWORD);
      const tpl = pick(TEMPLATES);
      let main = tpl(t, x, y, v, p, a, tw);
      // 太长的句子退一级，保证一行放得下
      if (main.length > 15) main = `${x}${v}了${y}`;
      const tail = pick(TAIL);
      return { main, tail };
    }

    /* ============================================================
       二、本地存储
       ============================================================ */

    const COLORS = [
      { name: '金', rgb: '232,196,122', hex: '#e8c47a' },
      { name: '青', rgb: '111,214,232', hex: '#6fd6e8' },
      { name: '紫', rgb: '154,123,255', hex: '#9a7bff' },
      { name: '粉', rgb: '255,143,168', hex: '#ff8fa8' },
      { name: '绿', rgb: '143,209,138', hex: '#8fd18a' },
      { name: '白', rgb: '230,226,216', hex: '#e6e2d8' },
    ];
    const DEFAULT_COLOR = COLORS[0];

    const KEY = 'poem-rain:v1';

    function load() {
      try {
        const raw = window.localStorage.getItem(KEY);
        if (!raw) return { kept: [], paused: false, sound: 'none', color: '232,196,122' };
        const o = JSON.parse(raw);
        const sound = ['none', 'chime', 'city'].includes(o.sound) ? o.sound : 'none';
        return {
          kept: Array.isArray(o.kept) ? o.kept.slice(0, 40) : [],
          paused: !!o.paused,
          sound,
          color: typeof o.color === 'string' ? o.color : '232,196,122'
        };
      } catch (_) {
        return { kept: [], paused: false, sound: 'none', color: '232,196,122' };
      }
    }

    function save(state) {
      try { window.localStorage.setItem(KEY, JSON.stringify(state)); } catch (_) { /* 隐私模式下静默 */ }
    }



    /* ============================================================
       二点四、诗句的旋律（移植自《名字之歌》）
       每个汉字按字码落到五声音阶，一句诗就是一小段曲子
       ============================================================ */

    const PENTA = [0, 2, 4, 7, 9];          // 宫 商 角 徵 羽
    const JIANPU = ['1', '2', '3', '5', '6'];
    const MAX_NOTES = 12;

    function melodyOf(text) {
      const notes = [];
      for (const ch of String(text || '')) {
        const c = ch.codePointAt(0);
        if (c < 0x4e00 || c > 0x9fff) continue;      // 只给汉字出声
        const idx = c % 5;
        const oct = 4 + ((c >> 3) % 2);
        notes.push({
          semi: 12 * (oct + 1) + PENTA[idx],
          dur: 0.26 + (c % 4) * 0.055,
          deg: idx,
          jp: JIANPU[idx]
        });
        if (notes.length >= MAX_NOTES) break;
      }
      // 尾音落回主音，像一句话收了尾
      if (notes.length > 1) {
        const last = notes[notes.length - 1];
        last.semi = 60;
        last.deg = 0;
        last.jp = '1';
      }
      return notes;
    }

    /* ============================================================
       二点五、雨声（WebAudio 现场合成，不加载任何音频文件）
       ============================================================ */

    let AC = null;          // 懒创建的 AudioContext，全组件共用
    let rainNodes = null;   // 持续雨幕的节点，用于淡出

    function audioCtx() {
      if (AC) return AC;
      const C = window.AudioContext || window.webkitAudioContext;
      if (!C) return null;
      try { AC = new C(); } catch (_) { return null; }
      // 共享总线 + 一点回声
      voiceBus = AC.createGain();
      voiceBus.gain.value = 0.9;
      try {
        const dly = AC.createDelay(0.5);
        dly.delayTime.value = 0.19;
        const fb = AC.createGain();
        fb.gain.value = 0.26;
        const wet = AC.createGain();
        wet.gain.value = 0.22;
        voiceBus.connect(AC.destination);
        voiceBus.connect(dly);
        dly.connect(fb);
        fb.connect(dly);
        dly.connect(wet);
        wet.connect(AC.destination);
      } catch (_) {
        voiceBus.connect(AC.destination);
      }
      return AC;
    }

    /** 木琴：基音 + 三个泛音，指数衰减；带一点延迟回声 */
    function pluckNote(ctx, at, semitone, dur, gain) {
      const f = 440 * Math.pow(2, (semitone - 69) / 12);
      const out = ctx.createGain();
      out.gain.setValueAtTime(0.0001, at);
      out.gain.exponentialRampToValueAtTime(Math.max(gain, 0.001), at + 0.012);
      out.gain.exponentialRampToValueAtTime(0.0001, at + dur * 2.1);
      out.connect(voiceBus);
      [[1, 1.0], [2.01, 0.30], [3.02, 0.12], [4.7, 0.045]].forEach(([r, a]) => {
        const o = ctx.createOscillator();
        o.type = 'sine';
        o.frequency.value = f * r;
        const g = ctx.createGain();
        g.gain.value = a;
        o.connect(g); g.connect(out);
        o.start(at); o.stop(at + dur * 2.2 + 0.05);
      });
    }

    /** 把一句诗弹出来 */
    function playChime(text) {
      const notes = melodyOf(text);
      if (!notes.length) return false;
      const ctx = audioCtx();
      if (!ctx) return false;
      if (ctx.state === 'suspended') { try { ctx.resume(); } catch (_) {} }
      let at = ctx.currentTime + 0.03;
      notes.forEach((nt, i) => {
        pluckNote(ctx, at, nt.semi, nt.dur, 0.20 - i * 0.008);
        at += nt.dur;
      });
      return true;
    }


    /* 252 座城市：不带坐标，只用名字生成旋律 */
    const CITY_NAMES = ['北京','上海','天津','重庆','广州','深圳','东莞','佛山','珠海','汕头','惠州','中山','江门','湛江','茂名','肇庆','梅州','韶关','清远','潮州','揭阳','汕尾','河源','阳江','云浮','南宁','桂林','柳州','北海','玉林','梧州','钦州','贵港','防城港','百色','河池','来宾','崇左','贺州','海口','三亚','儋州','昆明','大理','丽江','曲靖','玉溪','保山','昭通','普洱','临沧','红河','文山','楚雄','德宏','怒江','迪庆','西双版纳','贵阳','遵义','六盘水','安顺','毕节','铜仁','凯里','都匀','兴义','成都','绵阳','德阳','南充','宜宾','泸州','自贡','乐山','达州','内江','遂宁','攀枝花','广元','眉山','广安','资阳','雅安','巴中','西昌','武汉','宜昌','襄阳','荆州','黄石','十堰','荆门','孝感','黄冈','咸宁','恩施','随州','鄂州','长沙','株洲','湘潭','衡阳','岳阳','常德','邵阳','益阳','郴州','永州','怀化','娄底','张家界','吉首','郑州','洛阳','开封','南阳','新乡','安阳','商丘','许昌','平顶山','信阳','周口','驻马店','焦作','濮阳','三门峡','漯河','鹤壁','石家庄','唐山','保定','廊坊','秦皇岛','邯郸','邢台','沧州','张家口','承德','衡水','太原','大同','临汾','运城','长治','晋城','晋中','忻州','吕梁','朔州','阳泉','济南','青岛','烟台','潍坊','临沂','淄博','济宁','泰安','威海','日照','东营','德州','聊城','滨州','菏泽','枣庄','南京','苏州','无锡','常州','南通','徐州','扬州','盐城','泰州','镇江','淮安','连云港','宿迁','杭州','宁波','温州','绍兴','嘉兴','金华','台州','湖州','衢州','丽水','舟山','合肥','芜湖','蚌埠','安庆','阜阳','黄山','马鞍山','淮南','淮北','铜陵','宣城','六安','滁州','池州','亳州','宿州','福州','厦门','泉州','漳州','莆田','宁德','龙岩','三明','南平','南昌','赣州','九江','上饶','宜春','吉安','抚州','景德镇','萍乡','新余','鹰潭','呼和浩特','包头','鄂尔多斯','赤峰','通辽','呼伦贝尔','乌兰察布','巴彦淖尔','锡林郭勒','兴安盟','阿拉善','沈阳','大连','鞍山','抚顺','丹东','锦州','营口','盘锦','朝阳','本溪','葫芦岛','铁岭','辽阳','阜新','长春','吉林市','四平','通化','延吉','白山','松原','白城','辽源','哈尔滨','齐齐哈尔','大庆','牡丹江','佳木斯','绥化','鸡西','鹤岗','双鸭山','伊春','七台河','黑河','西安','咸阳','宝鸡','渭南','汉中','榆林','延安','安康','商洛','铜川','兰州','天水','白银','平凉','庆阳','陇南','武威','张掖','酒泉','定西','金昌','嘉峪关','银川','石嘴山','吴忠','固原','中卫','西宁','海东','格尔木','玉树','德令哈','乌鲁木齐','喀什','伊宁','昌吉','阿克苏','库尔勒','吐鲁番','哈密','克拉玛依','阿勒泰','塔城','和田','博乐','阿图什','拉萨','日喀则','林芝','昌都','那曲','山南','阿里','台北','高雄','台中','台南','花莲','香港','澳门','基隆'];

    function pickCity() {
      return CITY_NAMES[Math.floor(Math.random() * CITY_NAMES.length)];
    }

    const SOUND_MODES = [
      { id: 'none', label: '静 音' },
      { id: 'chime', label: '诗 音' },
      { id: 'city', label: '城 市' }
    ];

    function primeAudio() {
      const ctx = audioCtx();
      if (ctx && ctx.state === 'suspended') { try { ctx.resume(); } catch (_) {} }
    }

    /* ============================================================
       三、样式
       ============================================================ */

    const CSS = `
.pr-root{position:absolute;inset:0;pointer-events:none;z-index:30}
.pr-corner{position:absolute;right:26px;bottom:92px;width:34px;height:34px;pointer-events:none}
.pr-corner.pr-moved{position:fixed;right:auto!important;bottom:auto!important;z-index:31}
.pr-cloud{touch-action:none;cursor:grab}
.pr-cloud:active{cursor:grabbing}
.pr-drop.pr-left{right:auto!important;left:40px!important;bottom:0!important}
.pr-drop.pr-right{right:40px!important;left:auto!important;bottom:0!important}
.pr-panel.pr-left{right:auto!important;left:40px!important;bottom:0!important}
.pr-panel.pr-right{right:40px!important;left:auto!important;bottom:0!important}
.pr-cloud{pointer-events:auto;width:34px;height:34px;display:grid;place-items:center;cursor:pointer;position:relative;background:transparent!important;border:0!important;box-shadow:none!important;border-radius:0!important;
  background:none;border:0;padding:0;color:inherit;opacity:.62;transition:opacity .5s ease,transform .5s ease;
  filter:drop-shadow(0 3px 10px rgba(0,0,0,.45))}
.pr-cloud:hover{opacity:1;transform:translateY(-2px)}
.pr-cloud::after{content:"";position:absolute;inset:-8px;border-radius:50%;
  background:radial-gradient(circle,rgba(var(--pr-accent),.10),transparent 68%);pointer-events:none}
.pr-cloud.pr-breathe{animation:pr-breathe 7s ease-in-out infinite}
@keyframes pr-breathe{0%,100%{transform:translateY(0) scale(1)}50%{transform:translateY(-2px) scale(1.055)}}
.pr-cloud svg{display:block;overflow:visible}
.pr-drop{position:absolute!important;box-sizing:border-box;bottom:0;width:330px;max-width:calc(100vw - 90px);pointer-events:auto;padding:14px 16px 12px;border-radius:14px;
  background:rgba(17,18,24,.93);border:1px solid rgba(var(--pr-accent),.16);
  box-shadow:0 18px 46px -20px rgba(0,0,0,.85),0 0 30px -18px rgba(var(--pr-accent),.35);
  backdrop-filter:blur(14px);animation:pr-in .9s cubic-bezier(.16,.84,.24,1) both;position:relative;
  color:#ece4d4;font-family:ui-serif,"Noto Serif SC","Source Han Serif SC",SimSun,serif}
@keyframes pr-in{from{opacity:0;transform:translateY(10px) scale(.97)}to{opacity:1;transform:none}}
.pr-drop.out{animation:pr-out .8s ease forwards}
@keyframes pr-out{to{opacity:0;transform:translateY(-6px);filter:blur(2px)}}
.pr-main{font-size:14.5px;line-height:1.85;letter-spacing:.06em;white-space:pre-wrap}
.pr-tail{margin-top:5px;font-size:11.5px;line-height:1.7;letter-spacing:.08em;color:#8d8776}
.pr-tail::before{content:"—— "}
.pr-bar{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:9px;
  padding-top:8px;border-top:1px solid rgba(var(--pr-accent),.10)}
.pr-hint{font:400 9.5px/1 ui-monospace,Consolas,monospace;letter-spacing:.14em;color:#5d5a52}
.pr-keep{pointer-events:auto;background:none;border:0;padding:3px 0;cursor:pointer;
  font:400 10.5px/1 ui-serif,"Noto Serif SC",serif;letter-spacing:.22em;color:#b9a273;transition:color .3s}
.pr-keep:hover{color:var(--pr-accent-solid)}
.pr-keep.done{color:#5d5a52;cursor:default}
.pr-keep.done:hover{color:#5d5a52}
.pr-panel{position:absolute!important;box-sizing:border-box;bottom:0;pointer-events:auto;width:320px;max-height:min(58vh,520px);display:flex;flex-direction:column;
  border-radius:16px;background:rgba(15,16,21,.96);border:1px solid rgba(var(--pr-accent),.16);
  box-shadow:0 26px 70px -30px rgba(0,0,0,.9);backdrop-filter:blur(18px);overflow:hidden;
  animation:pr-in .7s cubic-bezier(.16,.84,.24,1) both}
.pr-head{display:flex;align-items:baseline;justify-content:space-between;padding:15px 17px 11px;
  border-bottom:1px solid rgba(var(--pr-accent),.12)}
.pr-title{font:400 13px/1 ui-serif,"Noto Serif SC",serif;letter-spacing:.3em;color:#ddd3bd}
.pr-count{font:400 9.5px/1 ui-monospace,Consolas,monospace;letter-spacing:.2em;color:#5d5a52}
.pr-list{overflow-y:auto;padding:6px 0;flex:1 1 auto;scrollbar-width:thin}
.pr-list::-webkit-scrollbar{width:5px}
.pr-list::-webkit-scrollbar-thumb{background:rgba(var(--pr-accent),.2);border-radius:4px}
.pr-item{padding:11px 17px;border-bottom:1px solid rgba(255,255,255,.03);cursor:pointer;transition:background .25s}
.pr-item:hover{background:rgba(var(--pr-accent),.05)}
.pr-i-main{font:400 13px/1.7 ui-serif,"Noto Serif SC",serif;letter-spacing:.05em;color:#e2d9c6}
.pr-i-tail{margin-top:2px;font:400 10.5px/1.6 ui-serif,"Noto Serif SC",serif;letter-spacing:.06em;color:#6f6a5f}
.pr-i-time{float:right;font:400 9px/1 ui-monospace,Consolas,monospace;color:#4a4844;letter-spacing:.1em;padding-top:4px}
.pr-empty{padding:30px 17px;text-align:center;font:400 12px/1.9 ui-serif,"Noto Serif SC",serif;color:#585349;letter-spacing:.1em}
.pr-imp{padding:12px 15px 4px}
.pr-ta{width:100%;min-height:150px;resize:vertical;padding:10px 12px;border-radius:8px;
  background:rgba(255,255,255,.03);border:1px solid rgba(var(--pr-accent),.22);
  color:#e7e0cd;font:400 11.5px/1.85 ui-monospace,Consolas,monospace;outline:none}
.pr-ta:focus{border-color:rgba(var(--pr-accent),.55)}
.pr-improw{display:flex;align-items:center;gap:12px;margin-top:10px}
.pr-impmsg{margin-right:auto;font:400 10px/1.5 ui-monospace,Consolas,monospace;color:#6f6a5f;letter-spacing:.04em}
.pr-colors{display:flex;gap:9px;align-items:center;padding:13px 17px 2px}
.pr-dot{width:14px;height:14px;border-radius:50%;border:1px solid rgba(255,255,255,.18);
  cursor:pointer;padding:0;opacity:.58;transition:.28s}
.pr-dot:hover{opacity:1;transform:scale(1.16)}
.pr-reset{margin-left:auto;background:none;border:0;padding:0 2px;cursor:pointer;
  font:400 13px/1 ui-monospace,Consolas,monospace;color:#6f6a5f;transition:.25s}
.pr-reset:hover{color:var(--pr-accent-solid)}
.pr-dot.on{opacity:1;box-shadow:0 0 0 2px rgba(255,255,255,.26),0 0 16px -3px currentColor}
.pr-foot{display:flex;align-items:center;justify-content:space-between;gap:8px;padding:11px 17px;
  border-top:1px solid rgba(var(--pr-accent),.12)}
.pr-fbtn{background:none;border:0;padding:4px 0;cursor:pointer;font:400 10.5px/1 ui-serif,"Noto Serif SC",serif;
  letter-spacing:.2em;color:#8a8272;transition:color .25s}
.pr-fbtn:hover{color:var(--pr-accent-solid)}
.pr-fbtn.danger:hover{color:#c9705f}
`;


    const SETTINGS_CSS = `
.ps-wrap{font-family:ui-serif,"Noto Serif SC",serif;color:var(--ink,#e6e0d2);max-width:720px}
.ps-h{font-size:15px;letter-spacing:.14em;margin:0 0 6px;font-weight:400}
.ps-p{font-size:12.5px;line-height:1.95;color:#8b8679;margin:0 0 16px;letter-spacing:.03em}
.ps-p b{color:#e8c47a;font-weight:400}
.ps-ta{width:100%;min-height:200px;resize:vertical;padding:12px 14px;border-radius:9px;
  background:rgba(255,255,255,.03);border:1px solid rgba(232,196,122,.22);
  color:#e6e0d2;font:400 12.5px/1.9 ui-monospace,Consolas,monospace;outline:none;letter-spacing:.02em}
.ps-ta:focus{border-color:rgba(232,196,122,.55)}
.ps-row{display:flex;flex-wrap:wrap;gap:10px;align-items:center;margin-top:14px}
.ps-b{padding:9px 20px;border-radius:7px;border:1px solid rgba(232,196,122,.3);background:none;
  color:#e8c47a;cursor:pointer;font:400 12px/1 ui-serif,"Noto Serif SC",serif;letter-spacing:.18em;transition:.25s}
.ps-b:hover{background:rgba(232,196,122,.09);border-color:rgba(232,196,122,.6)}
.ps-b.ghost{color:#8b8679;border-color:rgba(255,255,255,.12)}
.ps-b.ghost:hover{color:#c9c2b2;border-color:rgba(255,255,255,.3);background:none}
.ps-stat{margin-left:auto;font:400 11px/1 ui-monospace,Consolas,monospace;letter-spacing:.1em;color:#6f6a5f}
.ps-ok{color:#8fd18a}
.ps-warn{color:#e08c6a}
`;

    /* ============================================================
       四、组件
       ============================================================ */

    const CLOUD_SVG = h(
      'svg',
      { viewBox: '0 0 34 34', width: 30, height: 30, 'aria-hidden': true },
      h('path', {
        d: 'M9.4 22.6a4.9 4.9 0 0 1 .8-9.7 6.4 6.4 0 0 1 12-1.1 4.5 4.5 0 0 1 2.2 8.6 3.8 3.8 0 0 1-1.8.2H11a3.7 3.7 0 0 1-1.6-1z',
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: 1.7,
        strokeLinejoin: 'round'
      }),
      h('circle', { cx: 17, cy: 17.4, r: 1.15, fill: 'currentColor', opacity: 0.9 })
    );

    function PoemRain() {
      const initial = useRef(load());
      const [kept, setKept] = useState(initial.current.kept);
      const [paused, setPaused] = useState(initial.current.paused);
      const [sound, setSound] = useState(initial.current.sound || 'none');
      const [color, setColor] = useState(initial.current.color || DEFAULT_COLOR.rgb);
      const [pos, setPos] = useState(() => readPos());
      const dragRef = useRef(null);
      const suppressClick = useRef(false);
      const [drop, setDrop] = useState(null);
      const [out, setOut] = useState(false);
      const [open, setOpen] = useState(false);
      const [view, setView] = useState('list');
      const [draft, setDraft] = useState('');
      const [nowPlaying, setNowPlaying] = useState('');
      const [importMsg, setImportMsg] = useState('');
      const [ownCount, setOwnCount] = useState(() => readUserLines().length);

      useEffect(() => {
        const sync = () => setOwnCount(readUserLines().length);
        window.addEventListener(USER_EVENT, sync);
        return () => window.removeEventListener(USER_EVENT, sync);
      }, []);
      const [saved, setSaved] = useState(false);

      const hideTimer = useRef(0);
      const hovering = useRef(false);

      /* ---- 落一句 ---- */
      const soundRef = useRef('none');
      useEffect(() => { soundRef.current = sound; }, [sound]);

      const dropNow = useCallback(() => {
        const poem = generate(new Date());
        setSaved(false);
        setOut(false);
        setDrop({ ...poem, id: Date.now() });
        if (soundRef.current === 'chime') {
          try { playChime(poem.main); } catch (_) {}
          setNowPlaying('');
        } else if (soundRef.current === 'city') {
          const c = pickCity();
          try { playChime(c); } catch (_) {}
          setNowPlaying(c);
        } else {
          setNowPlaying('');
        }
        window.clearTimeout(hideTimer.current);
        if (!hovering.current) {
          hideTimer.current = window.setTimeout(() => setOut(true), 9000);
        }
      }, []);

      /* ---- 自动落 ---- */
      useEffect(() => {
        if (paused) return;
        const id = window.setInterval(() => {
          if (!open) dropNow();
        }, 100000);
        return () => window.clearInterval(id);
      }, [paused, open, dropNow]);

      /* ---- 清理 ---- */
      useEffect(() => () => window.clearTimeout(hideTimer.current), []);

      /* ---- 持久化 ---- */
      useEffect(() => { save({ kept, paused, sound, color }); }, [kept, paused, sound, color]);

      // 第一次点击任意地方时解锁音频（浏览器要求用户手势）
      useEffect(() => {
        const unlock = () => primeAudio();
        window.addEventListener('pointerdown', unlock, { once: true });
        return () => window.removeEventListener('pointerdown', unlock);
      }, []);

      const keepIt = useCallback(() => {
        if (!drop || saved) return;
        const rec = {
          id: drop.id,
          main: drop.main,
          tail: drop.tail,
          at: new Date().toISOString().slice(0, 16).replace('T', ' ')
        };
        setKept((prev) => [rec, ...prev.filter((x) => x.main !== rec.main)].slice(0, 40));
        setSaved(true);
      }, [drop, saved]);

      const onEnter = () => {
        hovering.current = true;
        window.clearTimeout(hideTimer.current);
      };
      const onLeave = () => {
        hovering.current = false;
        window.clearTimeout(hideTimer.current);
        hideTimer.current = window.setTimeout(() => setOut(true), 2600);
      };

      const onDragDown = (e) => {
        if (e.button !== undefined && e.button !== 0) return;
        const el = e.currentTarget;
        const anchor = (el.closest && el.closest('.pr-corner')) || el.parentElement || el;
        const r = anchor.getBoundingClientRect();
        dragRef.current = {
          px: e.clientX, py: e.clientY,
          ox: r.left, oy: r.top,
          moved: false
        };
        try { el.setPointerCapture(e.pointerId); } catch (_) {}
      };

      const onDragMove = (e) => {
        const d = dragRef.current;
        if (!d) return;
        const dx = e.clientX - d.px;
        const dy = e.clientY - d.py;
        if (!d.moved && Math.hypot(dx, dy) < 4) return;
        d.moved = true;
        setPos({
          x: Math.max(6, Math.min(window.innerWidth - 40, d.ox + dx)),
          y: Math.max(40, Math.min(window.innerHeight - 44, d.oy + dy))
        });
      };

      const onDragUp = (e) => {
        const d = dragRef.current;
        dragRef.current = null;
        try { e.currentTarget.releasePointerCapture(e.pointerId); } catch (_) {}
        if (d && d.moved) {
          suppressClick.current = true;
          setPos((p) => { writePos(p); return p; });
        }
      };

      const onCloud = (e) => {
        e.preventDefault();
        if (open) { setOpen(false); return; }
        dropNow();
      };
      const onCloudDouble = (e) => {
        e.preventDefault();
        setOpen(true);
        setOut(true);
      };

      const accentHex = (COLORS.find((c) => c.rgb === color) || DEFAULT_COLOR).hex;
      // 云在右半边时，卡片向右对齐；拖到左半边就翻过去
      const rightSide = pos ? pos.x > window.innerWidth * 0.5 : true;

      return h(
        'div',
        {
          className: 'pr-root',
          style: { '--pr-accent': color, '--pr-accent-solid': accentHex }
        },
        h('style', null, CSS),
        h(
          'div',
          {
            className: 'pr-corner' + (pos ? ' pr-moved' : ''),
            style: pos ? { left: pos.x + 'px', top: pos.y + 'px' } : undefined
          },

          /* ---------- 面板 ---------- */
          open && h(
            'div',
            {
              className: 'pr-panel' + (rightSide ? ' pr-right' : ' pr-left'),
              onClick: (e) => e.stopPropagation()
            },
            h('div', { className: 'pr-head' },
              h('span', { className: 'pr-title' }, view === 'list' ? '诗 集' : '我 的 文 字'),
              h('span', { className: 'pr-count' },
                view === 'list' ? `${kept.length} / 40` : `${ownCount} 行`)
            ),
            view === 'import' && h('div', { className: 'pr-imp' },
              h('textarea', {
                className: 'pr-ta',
                value: draft,
                spellCheck: false,
                placeholder: '每行一句；可写 句子｜出处',
                onChange: (e) => setDraft(e.target.value)
              }),
              h('div', { className: 'pr-improw' },
                h('span', { className: 'pr-impmsg' }, importMsg || (ownCount ? `你的 ${ownCount} 行` : '还没导入 · 正在用原始生成器')),
                h('button', {
                  className: 'pr-fbtn', type: 'button',
                  onClick: () => {
                    const list = parseLines(draft);
                    if (!list.length) { setImportMsg('没有解析到句子'); return; }
                    writeUserLines(list);
                    setOwnCount(list.length);
                    setImportMsg('已保存 ' + list.length + ' 行');
                  }
                }, '保 存'),
                h('button', {
                  className: 'pr-fbtn', type: 'button',
                  onClick: () => {
                    writeUserLines(PICK_LINES);
                    setOwnCount(PICK_LINES.length);
                    setDraft(PICK_LINES.map((x) => (x.from ? x.t + '｜' + x.from : x.t)).join('\n'));
                    setImportMsg('已载入内置诗库 ' + PICK_LINES.length + ' 行');
                  }
                }, '内置诗库'),
                h('button', {
                  className: 'pr-fbtn danger', type: 'button',
                  onClick: () => { setDraft(''); writeUserLines([]); setOwnCount(0); setImportMsg('已清空'); }
                }, '清 空')
              )
            ),

            view === 'list' && h('div', { className: 'pr-list' },
              kept.length === 0
                ? h('div', { className: 'pr-empty' }, '还空着。', h('br'), '落下一句时点「留」。')
                : kept.map((it) => h(
                  'div',
                  { className: 'pr-item', key: it.id, title: '点击复制这一句',
                    onClick: () => { try { navigator.clipboard.writeText(`${it.main}\n——${it.tail}`); } catch (_) {} } },
                  h('span', { className: 'pr-i-time' }, it.at),
                  h('div', { className: 'pr-i-main' }, it.main),
                  it.tail && h('div', { className: 'pr-i-tail' }, `—— ${it.tail}`)
                ))
            ),
            h('div', { className: 'pr-colors' },
              COLORS.map((c) => h('button', {
                key: c.rgb,
                type: 'button',
                title: c.name,
                className: 'pr-dot' + (c.rgb === color ? ' on' : ''),
                style: { background: 'rgb(' + c.rgb + ')' },
                onClick: () => setColor(c.rgb)
              })),
              h('button', {
                className: 'pr-reset', type: 'button', title: '放回右下角',
                onClick: () => { writePos(null); setPos(null); }
              }, '⌂')
            ),
            h('div', { className: 'pr-foot' },
              h('button', {
                className: 'pr-fbtn', type: 'button',
                onClick: () => {
                  if (view === 'list') {
                    setDraft(readUserLines().map((x) => (x.from ? x.t + '｜' + x.from : x.t)).join('\n'));
                    setImportMsg('');
                    setView('import');
                  } else {
                    setView('list');
                  }
                }
              }, view === 'list' ? '我 的 文 字' : '返 回 诗 集'),
              h('button', {
                className: 'pr-fbtn', type: 'button',
                onClick: () => setPaused((p) => !p)
              }, paused ? '继 续 落 诗' : '暂 停 落 诗'),
              h('button', {
                className: 'pr-fbtn', type: 'button',
                title: '声音：静音 / 诗音 / 城市',
                onClick: () => {
                  const i = SOUND_MODES.findIndex((m) => m.id === sound);
                  const next = SOUND_MODES[(i + 1) % SOUND_MODES.length].id;
                  if (next !== 'none') primeAudio();
                  setSound(next);
                }
              }, '声 音 · ' + ((SOUND_MODES.find((m) => m.id === sound) || SOUND_MODES[0]).label)),
              h('button', {
                className: 'pr-fbtn danger', type: 'button',
                onClick: () => { if (kept.length) setKept([]); }
              }, '清 空')
            )
          ),

          /* ---------- 落下的那一句 ---------- */
          drop && h(
            'div',
            {
              className: 'pr-drop' + (out ? ' out' : '') + (rightSide ? ' pr-right' : ' pr-left'),
              onMouseEnter: onEnter,
              onMouseLeave: onLeave,
              onAnimationEnd: () => { if (out) setDrop(null); }
            },
            h('div', { className: 'pr-main' }, drop.main),
            h('div', { className: 'pr-tail' }, drop.tail),
            h('div', { className: 'pr-bar' },
              h('span', { className: 'pr-hint' },
                sound === 'none' ? '本地生成 · 静音'
                  : sound === 'chime' ? '诗音 · 每个字一个音'
                    : (nowPlaying ? '城市 · ' + nowPlaying : '城市 · 随机一座')),
              h('button', {
                className: 'pr-keep' + (saved ? ' done' : ''),
                type: 'button',
                onClick: keepIt
              }, saved ? '已 留' : '留')
            )
          ),

          /* ---------- 那朵云（可拖动） ---------- */
          h('button', {
            className: 'pr-cloud' + (paused ? '' : ' pr-breathe'),
            type: 'button',
            title: '拖动可以移动 · 点一下再落一句 · 双击打开诗集',
            onPointerDown: onDragDown,
            onPointerMove: onDragMove,
            onPointerUp: onDragUp,
            onPointerCancel: onDragUp,
            onClick: (e) => {
              if (suppressClick.current) { suppressClick.current = false; return; }
              onCloud(e);
            },
            onDoubleClick: (e) => {
              if (suppressClick.current) { suppressClick.current = false; return; }
              onCloudDouble(e);
            }
          }, CLOUD_SVG)
        )
      );
    }


    function readSound() {
      try {
        const raw = window.localStorage.getItem(KEY);
        if (!raw) return 'none';
        const o = JSON.parse(raw);
        return ['none', 'chime', 'city'].includes(o.sound) ? o.sound : 'none';
      } catch (_) { return 'none'; }
    }
    function writeSound(id) {
      try {
        const raw = window.localStorage.getItem(KEY);
        const o = raw ? JSON.parse(raw) : { kept: [], paused: false };
        o.sound = id;
        window.localStorage.setItem(KEY, JSON.stringify(o));
      } catch (_) {}
    }

    /** 设置页：Plugins → 诗雨 → 我的文字 */
    function SettingsPage() {
      const [draft, setDraft] = useState('');
      const [nowPlaying, setNowPlaying] = useState('');
      const [stat, setStat] = useState({ saved: 0, parsed: 0, msg: '' });

      useEffect(() => {
        const cur = readUserLines();
        setDraft(cur.map((x) => (x.from ? x.t + '｜' + x.from : x.t)).join('\n'));
        setStat((s) => ({ ...s, saved: cur.length }));
      }, []);

      const onSave = () => {
        const list = parseLines(draft);
        const ok = writeUserLines(list);
        setStat({
          saved: ok ? list.length : stat.saved,
          parsed: list.length,
          msg: ok ? (list.length ? '已保存 ' + list.length + ' 行' : '已清空，将退回内置诗库') : '保存失败（本地存储不可用）',
        });
      };

      const onClear = () => {
        setDraft('');
        writeUserLines([]);
        setStat({ saved: 0, parsed: 0, msg: '已清空，将退回内置诗库' });
      };

      const onFile = async (e) => {
        const f = e.target.files && e.target.files[0];
        if (!f) return;
        try {
          const text = await f.text();
          setDraft(text);
          const list = parseLines(text);
          setStat((s) => ({ ...s, parsed: list.length, msg: '读入 ' + f.name + '：解析出 ' + list.length + ' 行，点「保存」生效' }));
        } catch (err) {
          setStat((s) => ({ ...s, msg: '读取失败：' + String(err.message || err) }));
        }
        e.target.value = '';
      };

      return h(
        'div',
        { className: 'ps-wrap' },
        h('style', null, SETTINGS_CSS),
        h('h3', { className: 'ps-h' }, '我的文字'),
        h('p', { className: 'ps-p' },
          '把你自己写的东西放进来，右下角那朵云就会从里面随机抽句子。',
          h('br'),
          '每行一句；想标注出处就写成 ',
          h('b', null, '句子｜出处'),
          '，落诗时会显示成 ',
          h('b', null, '——《出处》'),
          '。空行和重复行会自动去掉。'
        ),
        h('textarea', {
          className: 'ps-ta',
          value: draft,
          spellCheck: false,
          placeholder: '疾风欲回少年时｜忽梦少年\n月亮的余晖映照着你的脸｜漫步于长河边\n伴随着潮来潮去',
          onChange: (e) => setDraft(e.target.value),
        }),
        h('div', { className: 'ps-row' },
          h('button', { className: 'ps-b', type: 'button', onClick: onSave }, '保 存'),
          h('label', { className: 'ps-b ghost', style: { cursor: 'pointer' } },
            '从文件读取',
            h('input', { type: 'file', accept: '.txt,.md,.json,text/plain', style: { display: 'none' }, onChange: onFile })
          ),
          h('button', {
            className: 'ps-b ghost', type: 'button',
            onClick: () => {
              const preset = PICK_LINES.map((x) => (x.from ? x.t + '｜' + x.from : x.t)).join('\n');
              setDraft(preset);
              writeUserLines(PICK_LINES);
              setStat({ saved: PICK_LINES.length, parsed: PICK_LINES.length, msg: '已载入内置诗库 ' + PICK_LINES.length + ' 行' });
            }
          }, '载入内置诗库'),
          h('button', { className: 'ps-b ghost', type: 'button', onClick: onClear }, '清 空'),
          h('span', { className: 'ps-stat' },
            stat.msg
              ? h('span', { className: /失败/.test(stat.msg) ? 'ps-warn' : 'ps-ok' }, stat.msg)
              : '当前已存 ' + stat.saved + ' 行'
          )
        ),
        h('p', { className: 'ps-p', style: { marginTop: '22px', marginBottom: '8px' } }, '落诗时的声音'),
        h('div', { className: 'ps-row', style: { marginTop: '0' } },
          SOUND_MODES.map((m) => h('button', {
            key: id,
            className: 'ps-b' + (readSound() === m.id ? '' : ' ghost'),
            type: 'button',
            onClick: () => {
              writeSound(m.id);
              if (m.id !== 'none') primeAudio();
              setStat((st) => ({ ...st, msg: '声音已设为「' + m.label + '」' }));
            }
          }, m.label))
        ),
        h('p', { className: 'ps-p', style: { marginTop: '20px', fontSize: '11.5px' } },
          '文字只存在这台机器的浏览器本地存储里，不上传、不同步。内置的 252 行诗作为默认；一旦你导入，就只从你的文字里抽。'
        )
      );
    }

    /* ============================================================
       五、注册
       ============================================================ */

    return {
      inject: ['slots'],
      apply(ctx) {
        ctx.slots.inject('shell.overlay', () => ctx.slots.register({
          name: 'shell.overlay',
          id: 'poem-rain',
          order: 90
        }, PoemRain));

        // 设置 → 插件 → 诗雨 → 我的文字
        try {
          ctx.slots.inject('settings.plugins.tab', () => ctx.slots.register({
            name: 'settings.plugins.tab',
            id: 'poem-rain',
            order: 41,
            label: () => '我的文字'
          }, SettingsPage));
        } catch (e) {
          if (ctx.logger && ctx.logger.warn) ctx.logger.warn('[poem-rain] settings tab 未挂上', e);
        }
      }
    };
  }
});
