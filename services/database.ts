
import { Question } from '../types';

// Mock Data acting as the "Backend Database"
const MOCK_DB: Question[] = [
  {
    id: '16',
    subject: '数学',
    question: '一天中，钟表上的时针、分针、秒针同时指向“12”的时刻有几次？',
    answer: '3次 (0点, 12点, 24点)',
    knowledgePoint: '时钟问题'
  },
  {
    id: '17',
    subject: '数学',
    question: '和 83-32-7 计算结果相等的算式是：\nA. 83-(32+7)\nB. 83-(32-7)\nC. 83-32+7',
    answer: 'A. 83-(32+7)',
    knowledgePoint: '减法性质'
  },
  {
    id: '18',
    subject: '数学',
    question: '一把钥匙配一把锁，现在有5把钥匙和5把锁，但是它们被搞乱了，要把它们重新配对，最多要试多少次？',
    answer: '10次 (4+3+2+1=10)',
    knowledgePoint: '逻辑推理'
  },
  {
    id: '19',
    subject: '数学',
    question: '从第1根电线杆走到第10根电线杆，每两根电线杆间隔6米，一共走了多少米？',
    answer: '54米 (间隔数是9，9×6=54)',
    knowledgePoint: '间隔问题'
  },
  {
    id: '20',
    subject: '数学',
    question: '花店运来一批鲜花，康乃馨有30枝，百合有36枝，玫瑰有72枝。如果用4枝康乃馨，4枝百合，9枝玫瑰配成一束花，这些花最多能配成多少束？',
    answer: '7束 (受限于康乃馨数量: 30÷4=7...2)',
    knowledgePoint: '木桶效应'
  },
  {
    id: '21',
    subject: '数学',
    question: '把3条50毫米长的彩带粘贴在一起，每两条接头处重叠6毫米，粘贴后的彩带长多少毫米？',
    answer: '138毫米 (50×3 - 6×2 = 138)',
    knowledgePoint: '重叠问题'
  },
  {
    id: '22',
    subject: '数学',
    question: '小强在计算 24 + ⭐ ÷ 4 时，弄错了运算顺序（先加后除），算得的结果是8。这道算式的正确结果是多少？',
    answer: '26 (根据错误结果推出⭐=8，正确计算为 24+8÷4=26)',
    knowledgePoint: '逆向运算'
  },
  {
    id: '23',
    subject: '数学',
    question: '张丽 8 时 25 分从家出发去图书馆，此时她从镜子里看到的钟面上的时间是（ ）。',
    answer: '3时35分 (12:00 - 8:25 = 3:35)',
    knowledgePoint: '镜像问题'
  },
  {
    id: '24',
    subject: '数学',
    question: '鸡蛋比鸭蛋多 36 个，鸡蛋是鸭蛋的 4 倍，鸡蛋有（ ）个，鸭蛋有（ ）个。',
    answer: '鸡蛋48个，鸭蛋12个 (鸭蛋=36÷(4-1)=12，鸡蛋=12×4=48)',
    knowledgePoint: '差倍问题'
  },
  {
    id: '25',
    subject: '数学',
    question: '一个杯子和两个碟子一样重，三个碟子和两个勺子一样重。那么三个杯子和（ ）个勺子一样重。',
    answer: '4个 (1杯=2碟 → 3杯=6碟; 3碟=2勺 → 6碟=4勺)',
    knowledgePoint: '等量代换'
  },
  {
    id: '26',
    subject: '语文',
    question: '第一单元的主题与“学校生活”有关。我们跟随课本，来到大青树下的小学，感受到各民族儿童之间的_________；读了《花的学校》，认识了一群_________的花孩子；了解了孙中山在私塾读书的经历，明白_________的道理。',
    answer: '快乐；天真活泼；不懂就要问',
    knowledgePoint: '单元回顾'
  },
  {
    id: '27',
    subject: '语文',
    question: '《所见》是_________代诗人袁枚的作品，诗中“牧童骑黄牛，_________”让我们看到小牧童的纯真、可爱，“_________，_________。”让我们感受到牧童且行且歌的自在快乐。我在课外还积累了一些描写儿童活泼可爱的诗句，如：“儿童散学归来早，_________”。',
    answer: '清；歌声振林樾；意欲捕鸣蝉；忽然闭口立；忙趁东风放纸鸢',
    knowledgePoint: '古诗默写'
  },
  {
    id: '28',
    subject: '语文',
    question: '田间地头，农民们笑谈“_________，顶个诸葛亮”，在协作里酿出生活的烟火与智慧。暮色里，牧童“_________，忽然闭口立”。河畔边“微微风簇浪，_________。”闪烁。篱落深处，知有儿童“_________”的剪影里藏着“_________，有礼者敬人”的温柔。',
    answer: '三个臭皮匠；意欲捕鸣蝉；散作满河星；挑促织；仁者爱人',
    knowledgePoint: '名言警句'
  },
  {
    id: '29',
    subject: '语文',
    question: ' “_________，歌声振林樾”是牧童放牧的悠闲自在；“_________，霜叶红于二月花”是深秋山林的醉人风景；“湖光秋月两相和，（ ）”是洞庭湖风平浪静的祥和之景；“_________，夜深篱落一灯明”是夜逗蟋蟀的童趣画面。',
    answer: '牧童骑黄牛；停车坐爱枫林晚；潭面无风镜未磨；知有儿童挑促织',
    knowledgePoint: '古诗默写'
  },
  {
    id: '30',
    subject: '语文',
    question: '“_________，_________。”教导我们要像爱自己一样关爱别人；“不迁怒，_________。”提醒我们在生活中不要把自己怒气发泄到别人身上，不要重复犯同样的错误；“二人同心，_________。”启发我们要重视团结。',
    answer: '仁者爱人；有礼者敬人；不贰过；其利断金',
    knowledgePoint: '名言警句'
  },
  {
    id: '31',
    subject: '语文',
    question: '请根据四季的气候特点（春：暖和、夏：炎热、秋：凉爽、冬：寒冷），分别写出对应的四字描写词语（成语）。',
    answer: '春：春光明媚、桃红柳绿、草长莺飞、春回大地\n夏：骄阳似火、烈日炎炎、烈日当空、绿树成荫\n秋：秋高气爽、天高云淡、秋风习习、硕果累累\n冬：冰天雪地、大雪纷飞、鹅毛大雪、白雪皑皑',
    knowledgePoint: '知识点总结'
  },
  {
    id: '32',
    subject: '语文',
    question: '词语运用：\n①摇头晃脑 ②披头散发 ③张牙舞爪 ④提心吊胆\n⑤面红耳赤 ⑥手忙脚乱 ⑦手疾眼快 ⑧口干舌燥\n\n(1) 请对上述成语进行分类（填序号）：\n   描写人动作的是：______\n   描写人外貌、状态的是：______\n   描写人心理的是：______\n\n(2) 请写出与下列词语结构类似的成语：\n   与“指手画脚”结构一样的还有：______\n   与“眉开眼笑”结构一样的还有：______',
    answer: '(1) 分类：\n   动作：①③⑥⑦\n   外貌/状态：②⑤⑧\n   心理：④\n\n(2) 仿写示例：\n   类“指手画脚”：交头接耳、张口结舌\n   类“眉开眼笑”：心灵手巧、手舞足蹈',
    knowledgePoint: '知识点总结'
  },
  {
    id: '33',
    subject: '语文',
    question: '多音字专项练习 (1)：\n请说出下列多音字的读音和组词：\n1. 圈  2. 背  3. 磨  4. 落  5. 挑  6. 铺',
    answer: '1. 圈：quān (圆圈) / juàn (猪圈)\n2. 背：bēi (背负) / bèi (背景)\n3. 磨：mó (磨合) / mò (磨坊)\n4. 落：luò (落叶) / là (丢三落四) / lào (落枕)\n5. 挑：tiāo (挑水) / tiǎo (挑战)\n6. 铺：pū (铺床) / pù (店铺)',
    knowledgePoint: '多音字'
  },
  {
    id: '34',
    subject: '语文',
    question: '多音字专项练习 (2)：\n请说出下列多音字的读音和组词：\n1. 缝  2. 钻  3. 几  4. 弹  5. 假',
    answer: '1. 缝：féng (缝补) / fèng (缝隙)\n2. 钻：zuān (钻研) / zuàn (钻石)\n3. 几：jī (几乎) / jǐ (几个)\n4. 弹：dàn (子弹) / tán (弹琴)\n5. 假：jiǎ (假扮) / jià (假期)',
    knowledgePoint: '多音字'
  },
  {
    id: '35',
    subject: '语文',
    question: '多音字专项练习 (3)：\n请说出下列多音字的读音和组词：\n1. 中  2. 漂  3. 少  4. 系  5. 应  6. 骨',
    answer: '1. 中：zhōng (中国) / zhòng (百发百中)\n2. 漂：piāo (漂泊) / piǎo (漂白) / piào (漂亮)\n3. 少：shǎo (多少) / shào (少年)\n4. 系：jì (系鞋带) / xì (关系)\n5. 应：yīng (应该) / yìng (回应)\n6. 骨：gū (花骨朵) / gǔ (骨头)',
    knowledgePoint: '多音字'
  },
  {
    id: '36',
    subject: '语文',
    question: '多音字专项练习 (4)：\n请说出下列多音字的读音和组词：\n1. 冲  2. 答  3. 卷  4. 处  5. 盛  6. 悄  7. 朝',
    answer: '1. 冲：chōng (冲动) / chòng (冲着)\n2. 答：dā (答应) / dá (回答)\n3. 卷：juǎn (卷发) / juàn (试卷)\n4. 处：chǔ (处罚) / chù (到处)\n5. 盛：shèng (盛开) / chéng (盛饭)\n6. 悄：qiāo (静悄悄) / qiǎo (悄然)\n7. 朝：cháo (朝向) / zhāo (朝阳)',
    knowledgePoint: '多音字'
  },
  {
    id: '37',
    subject: '语文',
    question: '名言警句含义选择（请看题目选择正确含义的选项）：\n1. “与人善言，暖于布帛；伤人以言，深于矛戟。”（荀子）\n   A. 多穿衣服比说话好听更重要。\n   B. 善意的语言比布帛还温暖，恶语伤人比矛戟刺得还深。\n\n2. “不迁怒，不贰过。”（论语）\n   A. 不把怒气发泄到别人身上，不重复犯同样的错误。\n   B. 不因为发怒而搬家，不犯两次错。\n\n3. “二人同心，其利断金。”\n   A. 两个人一起去分金子。\n   B. 同心协力，力量强大得能如利刃切断金属。\n\n4. “三个臭皮匠，顶个诸葛亮。”\n   A. 三个普通人的智慧合起来，能抵得上一个诸葛亮。\n   B. 诸葛亮打不过三个做皮具的匠人。',
    answer: '1. B\n2. A\n3. B\n4. A',
    knowledgePoint: '名言警句'
  },
  {
    id: '38',
    subject: '语文',
    question: '古诗挖空默写（一）：\n1. 《望洞庭》[唐]刘禹锡\n   湖光秋月两相和，__________。\n   遥望洞庭山水翠，__________。\n\n2. 《山行》[唐]杜牧\n   远上寒山石径斜，__________。\n   停车坐爱枫林晚，__________。',
    answer: '1. 潭面无风镜未磨；白银盘里一青螺\n2. 白云生处有人家；霜叶红于二月花',
    knowledgePoint: '古诗默写'
  },
  {
    id: '39',
    subject: '语文',
    question: '古诗挖空默写（二）：\n1. 《夜书所见》[宋]叶绍翁\n   萧萧梧叶送寒声，__________。\n   知有儿童挑促织，__________。\n\n2. 《舟夜书所见》[清]查慎行\n   月黑见渔灯，__________。\n   微微风簇浪，__________。\n\n3. 《所见》[清]袁枚\n   牧童骑黄牛，__________。\n   __________，忽然闭口立。',
    answer: '1. 江上秋风动客情；夜深篱落一灯明\n2. 孤光一点萤；散作满河星\n3. 歌声振林樾；意欲捕鸣蝉',
    knowledgePoint: '古诗默写'
  }
];

export const getAllQuestions = (subject?: string, knowledgePoint?: string): Promise<Question[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let filtered = [...MOCK_DB];
      
      // Filter by subject if provided and not 'all'
      if (subject && subject !== 'all') {
        filtered = filtered.filter(q => q.subject === subject);
      }

      // Filter by knowledge point if provided and not 'all'
      if (knowledgePoint && knowledgePoint !== 'all') {
        filtered = filtered.filter(q => q.knowledgePoint === knowledgePoint);
      }

      resolve(filtered);
    }, 300);
  });
};

export const getRandomQuestions = (count: number, subject?: string): Promise<Question[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let filtered = [...MOCK_DB];
      
      // Filter by subject if provided and not 'all'
      if (subject && subject !== 'all') {
        filtered = filtered.filter(q => q.subject === subject);
      }

      const shuffled = filtered.sort(() => 0.5 - Math.random());
      resolve(shuffled.slice(0, count));
    }, 300);
  });
};

// Helper to get unique knowledge points based on subject
export const getUniqueKnowledgePoints = (subject?: string): Promise<string[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let filtered = [...MOCK_DB];
      if (subject && subject !== 'all') {
        filtered = filtered.filter(q => q.subject === subject);
      }
      const points = Array.from(new Set(filtered.map(q => q.knowledgePoint)));
      resolve(points.sort());
    }, 100);
  });
};
