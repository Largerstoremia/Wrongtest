
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
    knowledgePoint: '植树问题'
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
