// 文章数据 - 基于真实新闻与时文
const articles = [
    {
        id: 1,
        title: "NASA's Artemis II: Going Back to the Moon",
        category: "科技",
        date: "2026-03-11",
        content: `<p>NASA is planning an exciting new <span class="highlight-word" data-word="mission">mission</span> called Artemis II. In April 2026, four <span class="highlight-word" data-word="astronauts">astronauts</span> will fly around the Moon and return to Earth. This will be the first time in over 50 years that humans travel so far into space.</p>
<p>The <span class="highlight-word" data-word="journey">journey</span> will take about 10 days. The astronauts will test new space <span class="highlight-word" data-word="equipment">equipment</span> and systems. This important mission will help prepare for future Moon landings.</p>
<p>People around the world can send their names to NASA. These names will be put on a special card and travel with the astronauts around the Moon. NASA hopes this will help everyone feel part of the exciting space adventure.</p>
<p>"This is a historic moment for space exploration," said a NASA official. "We are going back to the Moon, and this time we will stay longer."</p>`,
        translation: `<p>NASA正在计划一项名为Artemis II的激动人心的新任务。2026年4月，四名宇航员将绕月飞行并返回地球。这将是50多年来人类首次飞入太空深处。</p>
<p>这次旅程大约需要10天。宇航员将测试新的太空设备和系统。这项重要任务将帮助为未来的登月做准备。</p>
<p>世界各地的人们可以将自己的名字发送给NASA。这些名字将被放在一张特殊的卡片上，随宇航员一起绕月飞行。NASA希望这能让每个人都感受到自己是激动人心的太空冒险的一部分。</p>
<p>"这是太空探索的历史性时刻，"一位NASA官员说。"我们要重返月球，这一次我们将停留更长时间。"</p>`,
        words: [
            { word: "mission", phonetic: "/ˈmɪʃn/", meaning: "任务，使命", example: "The space mission was very successful." },
            { word: "astronauts", phonetic: "/ˈæstrənɔːts/", meaning: "宇航员", example: "The astronauts trained for many years." },
            { word: "journey", phonetic: "/ˈdʒɜːrni/", meaning: "旅程，旅行", example: "The journey to the Moon takes several days." },
            { word: "equipment", phonetic: "/ɪˈkwɪpmənt/", meaning: "设备，装备", example: "They need special equipment for the trip." }
        ],
        sentences: [
            { english: "This will be the first time in over 50 years that humans travel so far into space.", chinese: "这将是50多年来人类首次飞入太空深处。", explanation: "the first time that... 表示"第一次……"，that引导定语从句" },
            { english: "NASA hopes this will help everyone feel part of the exciting space adventure.", chinese: "NASA希望这能让每个人都感受到自己是激动人心的太空冒险的一部分。", explanation: "help sb. (to) do sth. 表示"帮助某人做某事"" },
            { english: "We are going back to the Moon, and this time we will stay longer.", chinese: "我们要重返月球，这一次我们将停留更长时间。", explanation: "go back to 表示"返回，回到"；this time 表示"这一次"" }
        ],
        questions: [
            {
                question: "When will the Artemis II mission happen?",
                options: ["April 2025", "April 2026", "April 2027", "April 2028"],
                answer: 1
            },
            {
                question: "How many astronauts will fly around the Moon?",
                options: ["Two", "Three", "Four", "Five"],
                answer: 2
            },
            {
                question: "What can people send to NASA?",
                options: ["Money", "Photos", "Their names", "Letters"],
                answer: 2
            }
        ]
    },
    {
        id: 2,
        title: "Giant Pandas: A Conservation Success Story",
        category: "新闻",
        date: "2026-03-10",
        content: `<p>Good news about giant pandas! China has made great progress in <span class="highlight-word" data-word="protecting">protecting</span> these lovely animals. The number of pandas in <span class="highlight-word" data-word="captivity">captivity</span> has grown from less than 100 in the 1980s to 728 today.</p>
<p>Scientists are working hard to help pandas return to the wild. They are building more <span class="highlight-word" data-word="nature">nature</span> <span class="highlight-word" data-word="reserves">reserves</span> where pandas can live safely. These protected areas have more bamboo forests, which is the main food for pandas.</p>
<p>China is also sharing pandas with other countries as a symbol of <span class="highlight-word" data-word="friendship">friendship</span>. Two pandas will soon go to San Francisco in the United States. Many people around the world love these black and white bears.</p>
<p>"Protecting pandas is not just about saving one animal," said a scientist. "It's about protecting the whole ecosystem."</p>`,
        translation: `<p>关于大熊猫的好消息！中国在保护这些可爱动物方面取得了巨大进展。圈养大熊猫的数量已从1980年代的不到100只增长到今天的728只。</p>
<p>科学家们正在努力帮助熊猫回归野外。他们正在建设更多的自然保护区，让熊猫可以安全地生活。这些保护区有更多的竹林，这是熊猫的主要食物。</p>
<p>中国也在与其他国家分享熊猫，作为友谊的象征。两只熊猫很快将前往美国旧金山。世界各地的许多人都喜爱这些黑白相间的熊。</p>
<p>"保护熊猫不仅仅是拯救一种动物，"一位科学家说。"这是关于保护整个生态系统。"</p>`,
        words: [
            { word: "protecting", phonetic: "/prəˈtektɪŋ/", meaning: "保护", example: "We should protect wild animals." },
            { word: "captivity", phonetic: "/kæpˈtɪvəti/", meaning: "圈养，监禁", example: "Animals live longer in the wild than in captivity." },
            { word: "reserves", phonetic: "/rɪˈzɜːrvz/", meaning: "保护区，储备", example: "Nature reserves help protect wildlife." },
            { word: "friendship", phonetic: "/ˈfrendʃɪp/", meaning: "友谊", example: "Pandas are symbols of friendship between countries." }
        ],
        sentences: [
            { english: "The number of pandas in captivity has grown from less than 100 to 728 today.", chinese: "圈养大熊猫的数量已从不到100只增长到今天的728只。", explanation: "the number of 表示"……的数量"，作主语时谓语动词用单数" },
            { english: "China is also sharing pandas with other countries as a symbol of friendship.", chinese: "中国也在与其他国家分享熊猫，作为友谊的象征。", explanation: "share sth. with sb. 表示"与某人分享某物"" },
            { english: "It's about protecting the whole ecosystem.", chinese: "这是关于保护整个生态系统。", explanation: "be about doing sth. 表示"关于做某事"" }
        ],
        questions: [
            {
                question: "How many pandas are in captivity today?",
                options: ["Less than 100", "About 300", "About 500", "728"],
                answer: 3
            },
            {
                question: "What is the main food for pandas?",
                options: ["Fish", "Meat", "Bamboo", "Fruits"],
                answer: 2
            },
            {
                question: "Which city will receive two pandas from China?",
                options: ["New York", "San Francisco", "Los Angeles", "Chicago"],
                answer: 1
            }
        ]
    },
    {
        id: 3,
        title: "Robots Dance at Spring Festival Gala",
        category: "文艺",
        date: "2026-03-09",
        content: `<p>Something amazing happened at the 2025 Spring Festival Gala! <span class="highlight-word" data-word="robots">Robots</span> performed a traditional Chinese yangge dance on stage. This was one of the most <span class="highlight-word" data-word="unforgettable">unforgettable</span> moments of the show.</p>
<p>The robots wore colorful <span class="highlight-word" data-word="costumes">costumes</span> and moved perfectly with the music. They could twist, turn, and wave their hands just like human dancers. The <span class="highlight-word" data-word="audience">audience</span> was amazed by their smooth movements.</p>
<p>This performance showed how technology and traditional culture can come together. The robots were made by Chinese engineers who worked for many months to make this happen.</p>
<p>"We wanted to show that robots can do beautiful things," said one engineer. "Technology can help keep our traditions alive in new ways."</p>`,
        translation: `<p>2025年春节联欢晚会上发生了令人惊叹的事情！机器人在舞台上表演了传统的中国秧歌舞蹈。这是晚会最令人难忘的时刻之一。</p>
<p>机器人穿着色彩鲜艳的服装，随着音乐完美地移动。它们可以像人类舞者一样扭动、转身和挥手。观众对它们流畅的动作感到惊讶。</p>
<p>这场表演展示了科技和传统文化如何融合在一起。这些机器人是由中国工程师制造的，他们为此工作了好几个月。</p>
<p>"我们想展示机器人可以做美丽的事情，"一位工程师说。"科技可以帮助以新的方式传承我们的传统。"</p>`,
        words: [
            { word: "robots", phonetic: "/ˈroʊbɒts/", meaning: "机器人", example: "Robots can help people do many jobs." },
            { word: "unforgettable", phonetic: "/ˌʌnfərˈɡetəbl/", meaning: "难忘的", example: "The trip was an unforgettable experience." },
            { word: "costumes", phonetic: "/ˈkɒstjuːmz/", meaning: "服装，戏服", example: "The dancers wore beautiful costumes." },
            { word: "audience", phonetic: "/ˈɔːdiəns/", meaning: "观众，听众", example: "The audience clapped their hands." }
        ],
        sentences: [
            { english: "This was one of the most unforgettable moments of the show.", chinese: "这是晚会最令人难忘的时刻之一。", explanation: "one of the most + 形容词最高级 + 名词复数，表示"最……之一"" },
            { english: "The audience was amazed by their smooth movements.", chinese: "观众对它们流畅的动作感到惊讶。", explanation: "be amazed by 表示"对……感到惊讶"" },
            { english: "Technology can help keep our traditions alive in new ways.", chinese: "科技可以帮助以新的方式传承我们的传统。", explanation: "keep sth. alive 表示"使某物保持活力/存在"" }
        ],
        questions: [
            {
                question: "What dance did the robots perform?",
                options: ["Ballet", "Hip-hop", "Yangge", "Tango"],
                answer: 2
            },
            {
                question: "What did the robots wear?",
                options: ["White clothes", "Colorful costumes", "Black suits", "School uniforms"],
                answer: 1
            },
            {
                question: "What did the engineer say about technology?",
                options: ["It will replace humans", "It can help keep traditions alive", "It is too expensive", "It is difficult to use"],
                answer: 1
            }
        ]
    },
    {
        id: 4,
        title: "2026 Winter Olympics: Ready for Milan",
        category: "体育",
        date: "2026-03-08",
        content: `<p>The 2026 Winter Olympics will be held in Milan and Cortina, Italy. This exciting <span class="highlight-word" data-word="event">event</span> will start on February 6 and end on February 22. About 2,900 <span class="highlight-word" data-word="athletes">athletes</span> from around the world will compete for 116 gold medals.</p>
<p>People in Italy are working hard to <span class="highlight-word" data-word="prepare">prepare</span> for the Games. New sports buildings are being built. Roads and hotels are being improved. The <span class="highlight-word" data-word="mascots">mascots</span> for the Games have already been shown to the public.</p>
<p>Winter Olympic sports include skiing, skating, ice hockey, and snowboarding. Athletes train for many years to compete at this level. They hope to win medals and make their countries proud.</p>
<p>"We are ready to welcome the world to Italy," said an organizer. "It will be a wonderful celebration of winter sports."</p>`,
        translation: `<p>2026年冬季奥运会将在意大利米兰和科尔蒂纳举行。这一激动人心的赛事将于2月6日开始，2月22日结束。来自世界各地的约2900名运动员将争夺116枚金牌。</p>
<p>意大利人民正在努力为奥运会做准备。新的体育场馆正在建设中。道路和酒店正在改善。奥运会的吉祥物已经向公众展示。</p>
<p>冬季奥运会项目包括滑雪、滑冰、冰球和单板滑雪。运动员们训练多年才能在这一水平上竞争。他们希望赢得奖牌，为国家争光。</p>
<p>"我们准备好迎接世界来到意大利，"一位组织者说。"这将是一场精彩的冬季运动盛会。"</p>`,
        words: [
            { word: "event", phonetic: "/ɪˈvent/", meaning: "事件，赛事", example: "The Olympic Games is a big event." },
            { word: "athletes", phonetic: "/ˈæθliːts/", meaning: "运动员", example: "Athletes train very hard every day." },
            { word: "prepare", phonetic: "/prɪˈpeər/", meaning: "准备", example: "They are preparing for the exam." },
            { word: "mascots", phonetic: "/ˈmæskɒts/", meaning: "吉祥物", example: "The Olympic mascots are very cute." }
        ],
        sentences: [
            { english: "The 2026 Winter Olympics will be held in Milan and Cortina, Italy.", chinese: "2026年冬季奥运会将在意大利米兰和科尔蒂纳举行。", explanation: "be held 表示"被举行"，被动语态" },
            { english: "Athletes train for many years to compete at this level.", chinese: "运动员们训练多年才能在这一水平上竞争。", explanation: "train to do sth. 表示"训练做某事"" },
            { english: "We are ready to welcome the world to Italy.", chinese: "我们准备好迎接世界来到意大利。", explanation: "be ready to do sth. 表示"准备好做某事"" }
        ],
        questions: [
            {
                question: "Where will the 2026 Winter Olympics be held?",
                options: ["France", "Japan", "Italy", "Canada"],
                answer: 2
            },
            {
                question: "How many athletes will compete?",
                options: ["About 1,000", "About 2,000", "About 2,900", "About 5,000"],
                answer: 2
            },
            {
                question: "Which sport is NOT mentioned in the article?",
                options: ["Skiing", "Swimming", "Ice hockey", "Snowboarding"],
                answer: 1
            }
        ]
    },
    {
        id: 5,
        title: "Electric Cars: The Future of Transportation",
        category: "科技",
        date: "2026-03-07",
        content: `<p>Electric cars are becoming more and more <span class="highlight-word" data-word="common">common</span> on our roads. Unlike traditional cars, they don't use gas. Instead, they run on <span class="highlight-word" data-word="batteries">batteries</span> that can be charged with electricity.</p>
<p>There are many reasons why people choose electric cars. First, they are better for the <span class="highlight-word" data-word="environment">environment</span>. They don't produce smoke or bad smells. Second, they are very quiet. Third, they can save money on fuel costs.</p>
<p>However, there are still some <span class="highlight-word" data-word="challenges">challenges</span>. Electric cars need to be charged often. Finding charging stations can be difficult in some places. Also, these cars can be more expensive to buy.</p>
<p>Many countries are building more charging stations. They want more people to drive electric cars and help protect our planet.</p>`,
        translation: `<p>电动汽车在我们的道路上越来越常见。与传统汽车不同，它们不使用汽油。相反，它们使用可以用电力充电的电池运行。</p>
<p>人们选择电动汽车有很多原因。首先，它们对环境更好。它们不会产生烟雾或难闻的气味。其次，它们非常安静。第三，它们可以节省燃料费用。</p>
<p>然而，仍然存在一些挑战。电动汽车需要经常充电。在某些地方找到充电站可能很困难。此外，这些汽车的购买成本可能更高。</p>
<p>许多国家正在建设更多的充电站。他们希望更多的人驾驶电动汽车，帮助保护我们的星球。</p>`,
        words: [
            { word: "common", phonetic: "/ˈkɒmən/", meaning: "常见的，普遍的", example: "Electric cars are becoming common." },
            { word: "batteries", phonetic: "/ˈbætəriz/", meaning: "电池", example: "The toy needs two batteries." },
            { word: "environment", phonetic: "/ɪnˈvaɪrənmənt/", meaning: "环境", example: "We should protect the environment." },
            { word: "challenges", phonetic: "/ˈtʃælɪndʒɪz/", meaning: "挑战", example: "We face many challenges in life." }
        ],
        sentences: [
            { english: "Electric cars are becoming more and more common on our roads.", chinese: "电动汽车在我们的道路上越来越常见。", explanation: "more and more + 形容词，表示"越来越……"" },
            { english: "Unlike traditional cars, they don't use gas.", chinese: "与传统汽车不同，它们不使用汽油。", explanation: "unlike 表示"与……不同"" },
            { english: "They want more people to drive electric cars and help protect our planet.", chinese: "他们希望更多的人驾驶电动汽车，帮助保护我们的星球。", explanation: "want sb. to do sth. 表示"想要某人做某事"" }
        ],
        questions: [
            {
                question: "What do electric cars use to run?",
                options: ["Gas", "Oil", "Batteries", "Water"],
                answer: 2
            },
            {
                question: "Which is NOT an advantage of electric cars?",
                options: ["Better for environment", "Very quiet", "Save money on fuel", "Easy to find charging stations"],
                answer: 3
            },
            {
                question: "Why are countries building more charging stations?",
                options: ["To make money", "To help people drive electric cars", "To use more electricity", "To build more roads"],
                answer: 1
            }
        ]
    },
    {
        id: 6,
        title: "Climate Change: What Can We Do?",
        category: "时政",
        date: "2026-03-06",
        content: `<p>Climate change is a big <span class="highlight-word" data-word="problem">problem</span> for our world. The Earth is getting warmer, and this is causing many changes. Ice at the North and South Poles is <span class="highlight-word" data-word="melting">melting</span>. Sea levels are rising. Weather is becoming more <span class="highlight-word" data-word="extreme">extreme</span>.</p>
<p>But there is good news! People around the world are working together to <span class="highlight-word" data-word="solve">solve</span> this problem. China has made great progress in fighting pollution. In 2024, Beijing had only 2 heavily polluted days - the lowest number ever recorded.</p>
<p>What can we do to help? We can save energy by turning off lights when we leave a room. We can walk or ride bikes instead of taking cars. We can plant trees and protect forests.</p>
<p>"Every small action helps," said an environmental expert. "If we all work together, we can make a big difference."</p>`,
        translation: `<p>气候变化是我们世界的一个大问题。地球正在变暖，这正在引起许多变化。北极和南极的冰正在融化。海平面正在上升。天气变得越来越极端。</p>
<p>但有一个好消息！世界各地的人们正在共同努力解决这个问题。中国在治理污染方面取得了巨大进展。2024年，北京只有2个重度污染日——这是有记录以来的最低数字。</p>
<p>我们可以做些什么来帮助？我们可以通过离开房间时关灯来节约能源。我们可以步行或骑自行车代替开车。我们可以种树和保护森林。</p>
<p>"每一个小行动都有帮助，"一位环境专家说。"如果我们共同努力，我们可以产生巨大的影响。"</p>`,
        words: [
            { word: "problem", phonetic: "/ˈprɒbləm/", meaning: "问题", example: "Climate change is a big problem." },
            { word: "melting", phonetic: "/ˈmeltɪŋ/", meaning: "融化", example: "The ice is melting because of warming." },
            { word: "extreme", phonetic: "/ɪkˈstriːm/", meaning: "极端的", example: "We are seeing more extreme weather." },
            { word: "solve", phonetic: "/sɒlv/", meaning: "解决", example: "We need to work together to solve this problem." }
        ],
        sentences: [
            { english: "The Earth is getting warmer, and this is causing many changes.", chinese: "地球正在变暖，这正在引起许多变化。", explanation: "get + 形容词比较级，表示"变得……"" },
            { english: "People around the world are working together to solve this problem.", chinese: "世界各地的人们正在共同努力解决这个问题。", explanation: "work together to do sth. 表示"共同努力做某事"" },
            { english: "If we all work together, we can make a big difference.", chinese: "如果我们共同努力，我们可以产生巨大的影响。", explanation: "if引导条件状语从句，表示"如果……"；make a difference 表示"产生影响"" }
        ],
        questions: [
            {
                question: "What is happening to the ice at the North and South Poles?",
                options: ["Growing", "Melting", "Staying the same", "Moving"],
                answer: 1
            },
            {
                question: "How many heavily polluted days did Beijing have in 2024?",
                options: ["10 days", "5 days", "2 days", "0 days"],
                answer: 2
            },
            {
                question: "Which is NOT mentioned as a way to help?",
                options: ["Turn off lights", "Ride bikes", "Plant trees", "Use more plastic"],
                answer: 3
            }
        ]
    }
];

// 应用状态
let currentArticleId = null;
let vocabularyList = JSON.parse(localStorage.getItem('vocabulary')) || [];
let selectedAnswers = {};
let isPlaying = false;
let audioProgress = 0;
let audioInterval = null;

// DOM 元素
const homePage = document.getElementById('home-page');
const detailPage = document.getElementById('detail-page');
const articlesList = document.getElementById('articles-list');
const vocabularyListEl = document.getElementById('vocabulary-list');
const articlesContainer = document.getElementById('articles-container');
const vocabularyContainer = document.getElementById('vocabulary-container');
const tabBtns = document.querySelectorAll('.tab-btn');
const wordModal = document.getElementById('word-modal');
const toast = document.getElementById('toast');

// 初始化
function init() {
    renderArticlesList();
    renderVocabularyList();
    setupEventListeners();
}

// 渲染文章列表
function renderArticlesList() {
    articlesList.innerHTML = articles.map((article, index) => `
        <div class="article-card" data-id="${article.id}" style="animation-delay: ${index * 0.1}s">
            <span class="category-tag">${article.category}</span>
            <h3>${article.title}</h3>
            <p class="preview">${getPreview(article.content)}</p>
            <div class="meta">
                <span>${article.date}</span>
                <span>${article.words.length} 个重点单词</span>
            </div>
        </div>
    `).join('');
}

// 获取文章预览
function getPreview(content) {
    const temp = document.createElement('div');
    temp.innerHTML = content;
    const text = temp.textContent || temp.innerText;
    return text.substring(0, 80) + '...';
}

// 渲染单词本
function renderVocabularyList() {
    if (vocabularyList.length === 0) {
        vocabularyListEl.innerHTML = `
            <div class="empty-state">
                <div class="icon">📚</div>
                <p>单词本是空的<br>阅读文章时可以添加单词哦</p>
            </div>
        `;
        return;
    }
    
    vocabularyListEl.innerHTML = vocabularyList.map((item, index) => `
        <div class="vocabulary-item" style="animation-delay: ${index * 0.05}s">
            <div class="word-info">
                <div>
                    <span class="word">${item.word}</span>
                    <span class="phonetic">${item.phonetic}</span>
                </div>
                <div class="meaning">${item.meaning}</div>
            </div>
            <button class="delete-btn" data-word="${item.word}">×</button>
        </div>
    `).join('');
}

// 设置事件监听
function setupEventListeners() {
    // 文章卡片点击
    articlesList.addEventListener('click', (e) => {
        const card = e.target.closest('.article-card');
        if (card) {
            const id = parseInt(card.dataset.id);
            openArticle(id);
        }
    });
    
    // 返回按钮
    document.getElementById('back-btn').addEventListener('click', goBack);
    
    // 标签切换
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tab = btn.dataset.tab;
            switchTab(tab);
        });
    });
    
    // 单词本删除
    vocabularyListEl.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-btn')) {
            const word = e.target.dataset.word;
            removeFromVocabulary(word);
        }
    });
    
    // 翻译切换
    document.getElementById('toggle-translation').addEventListener('click', toggleTranslation);
    
    // 播放按钮
    document.getElementById('play-btn').addEventListener('click', toggleAudio);
    
    // 提交答案
    document.getElementById('submit-answers').addEventListener('click', submitAnswers);
    
    // 关闭弹窗
    document.getElementById('close-modal').addEventListener('click', () => {
        wordModal.classList.add('hidden');
    });
    
    // 添加单词按钮
    document.getElementById('add-word-btn').addEventListener('click', addWordFromModal);
    
    // 点击弹窗外部关闭
    wordModal.addEventListener('click', (e) => {
        if (e.target === wordModal) {
            wordModal.classList.add('hidden');
        }
    });
    
    // 文章内容中的高亮单词点击
    document.getElementById('article-content').addEventListener('click', (e) => {
        if (e.target.classList.contains('highlight-word')) {
            const word = e.target.dataset.word;
            showWordModal(word);
        }
    });
}

// 打开文章详情
function openArticle(id) {
    currentArticleId = id;
    const article = articles.find(a => a.id === id);
    if (!article) return;
    
    // 重置状态
    selectedAnswers = {};
    document.getElementById('translation-content').classList.add('hidden');
    document.getElementById('toggle-translation').classList.remove('active');
    document.getElementById('quiz-result').classList.add('hidden');
    resetAudio();
    
    // 填充内容
    document.getElementById('detail-title').textContent = article.title;
    document.getElementById('detail-category').textContent = article.category;
    document.getElementById('detail-date').textContent = article.date;
    document.getElementById('article-content').innerHTML = article.content;
    document.getElementById('translation-content').innerHTML = article.translation;
    
    // 渲染单词
    renderWords(article.words);
    
    // 渲染句型
    renderSentences(article.sentences);
    
    // 渲染题目
    renderQuestions(article.questions);
    
    // 切换页面
    homePage.classList.remove('active');
    detailPage.classList.add('active');
    window.scrollTo(0, 0);
}

// 渲染单词
function renderWords(words) {
    const wordsList = document.getElementById('words-list');
    wordsList.innerHTML = words.map(w => {
        const isAdded = vocabularyList.some(v => v.word === w.word);
        return `
            <div class="word-item">
                <div class="word-info">
                    <div>
                        <span class="word">${w.word}</span>
                        <span class="phonetic">${w.phonetic}</span>
                    </div>
                    <div class="meaning">${w.meaning}</div>
                </div>
                <button class="add-btn ${isAdded ? 'added' : ''}" data-word="${w.word}" data-phonetic="${w.phonetic}" data-meaning="${w.meaning}">
                    ${isAdded ? '已添加' : '添加'}
                </button>
            </div>
        `;
    }).join('');
    
    // 添加单词按钮事件
    wordsList.querySelectorAll('.add-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            if (!btn.classList.contains('added')) {
                const wordData = {
                    word: btn.dataset.word,
                    phonetic: btn.dataset.phonetic,
                    meaning: btn.dataset.meaning
                };
                addToVocabulary(wordData);
                btn.classList.add('added');
                btn.textContent = '已添加';
            }
        });
    });
}

// 渲染句型
function renderSentences(sentences) {
    const sentencesList = document.getElementById('sentences-list');
    sentencesList.innerHTML = sentences.map(s => `
        <div class="sentence-item">
            <div class="english">${s.english}</div>
            <div class="chinese">${s.chinese}</div>
            <div class="explanation">💡 ${s.explanation}</div>
        </div>
    `).join('');
}

// 渲染题目
function renderQuestions(questions) {
    const questionsList = document.getElementById('questions-list');
    questionsList.innerHTML = questions.map((q, qIndex) => `
        <div class="question-item">
            <div class="question-text">${qIndex + 1}. ${q.question}</div>
            <div class="options">
                ${q.options.map((opt, oIndex) => `
                    <div class="option" data-question="${qIndex}" data-option="${oIndex}">
                        <span class="option-label">${String.fromCharCode(65 + oIndex)}</span>
                        <span>${opt}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
    
    // 选项点击事件
    questionsList.querySelectorAll('.option').forEach(opt => {
        opt.addEventListener('click', () => {
            const qIndex = opt.dataset.question;
            const oIndex = parseInt(opt.dataset.option);
            
            // 移除同题其他选项的选中状态
            questionsList.querySelectorAll(`.option[data-question="${qIndex}"]`).forEach(o => {
                o.classList.remove('selected');
            });
            
            // 添加选中状态
            opt.classList.add('selected');
            selectedAnswers[qIndex] = oIndex;
        });
    });
}

// 提交答案
function submitAnswers() {
    const article = articles.find(a => a.id === currentArticleId);
    if (!article) return;
    
    let correct = 0;
    const total = article.questions.length;
    
    article.questions.forEach((q, qIndex) => {
        const options = document.querySelectorAll(`.option[data-question="${qIndex}"]`);
        options.forEach((opt, oIndex) => {
            opt.classList.remove('correct', 'wrong');
            if (oIndex === q.answer) {
                opt.classList.add('correct');
            }
            if (selectedAnswers[qIndex] === oIndex && oIndex !== q.answer) {
                opt.classList.add('wrong');
            }
        });
        
        if (selectedAnswers[qIndex] === q.answer) {
            correct++;
        }
    });
    
    const result = document.getElementById('quiz-result');
    result.classList.remove('hidden', 'success', 'partial');
    
    if (correct === total) {
        result.classList.add('success');
        result.innerHTML = `🎉 太棒了！全部答对！(${correct}/${total})`;
    } else {
        result.classList.add('partial');
        result.innerHTML = `答对了 ${correct} 题，共 ${total} 题。继续加油！`;
    }
}

// 返回主页
function goBack() {
    detailPage.classList.remove('active');
    homePage.classList.add('active');
    resetAudio();
}

// 切换标签
function switchTab(tab) {
    tabBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tab);
    });
    
    if (tab === 'articles') {
        articlesContainer.classList.remove('hidden');
        vocabularyContainer.classList.add('hidden');
    } else {
        articlesContainer.classList.add('hidden');
        vocabularyContainer.classList.remove('hidden');
        renderVocabularyList();
    }
}

// 切换翻译
function toggleTranslation() {
    const btn = document.getElementById('toggle-translation');
    const content = document.getElementById('translation-content');
    
    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        btn.classList.add('active');
        btn.textContent = '收起中文翻译 ▲';
    } else {
        content.classList.add('hidden');
        btn.classList.remove('active');
        btn.textContent = '查看中文翻译 ▼';
    }
}

// 音频播放
function toggleAudio() {
    const btn = document.getElementById('play-btn');
    
    if (isPlaying) {
        pauseAudio();
    } else {
        playAudio();
    }
}

function playAudio() {
    isPlaying = true;
    const btn = document.getElementById('play-btn');
    btn.textContent = '⏸ 暂停';
    btn.classList.add('playing');
    
    // 模拟音频播放
    audioInterval = setInterval(() => {
        audioProgress += 0.5;
        if (audioProgress >= 100) {
            resetAudio();
            return;
        }
        updateAudioProgress();
    }, 100);
}

function pauseAudio() {
    isPlaying = false;
    const btn = document.getElementById('play-btn');
    btn.textContent = '▶ 播放音频';
    btn.classList.remove('playing');
    clearInterval(audioInterval);
}

function resetAudio() {
    pauseAudio();
    audioProgress = 0;
    updateAudioProgress();
}

function updateAudioProgress() {
    document.getElementById('audio-progress').style.width = audioProgress + '%';
    const totalSeconds = 180; // 假设3分钟
    const currentSeconds = Math.floor(totalSeconds * audioProgress / 100);
    const minutes = Math.floor(currentSeconds / 60);
    const seconds = currentSeconds % 60;
    document.getElementById('audio-time').textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

// 显示单词弹窗
function showWordModal(word) {
    const article = articles.find(a => a.id === currentArticleId);
    if (!article) return;
    
    const wordData = article.words.find(w => w.word === word);
    if (!wordData) return;
    
    document.getElementById('word-detail').innerHTML = `
        <div class="word">${wordData.word}</div>
        <div class="phonetic">${wordData.phonetic}</div>
        <div class="meaning">${wordData.meaning}</div>
        <div class="example"><strong>例句：</strong>${wordData.example}</div>
    `;
    
    const addBtn = document.getElementById('add-word-btn');
    const isAdded = vocabularyList.some(v => v.word === wordData.word);
    addBtn.textContent = isAdded ? '已在单词本中' : '加入单词本';
    addBtn.classList.toggle('added', isAdded);
    addBtn.dataset.word = wordData.word;
    addBtn.dataset.phonetic = wordData.phonetic;
    addBtn.dataset.meaning = wordData.meaning;
    
    wordModal.classList.remove('hidden');
}

// 从弹窗添加单词
function addWordFromModal() {
    const btn = document.getElementById('add-word-btn');
    if (btn.classList.contains('added')) return;
    
    const wordData = {
        word: btn.dataset.word,
        phonetic: btn.dataset.phonetic,
        meaning: btn.dataset.meaning
    };
    
    addToVocabulary(wordData);
    btn.textContent = '已添加';
    btn.classList.add('added');
    
    // 更新单词列表中的按钮状态
    const wordBtn = document.querySelector(`.word-item .add-btn[data-word="${wordData.word}"]`);
    if (wordBtn) {
        wordBtn.classList.add('added');
        wordBtn.textContent = '已添加';
    }
}

// 添加到单词本
function addToVocabulary(wordData) {
    if (vocabularyList.some(v => v.word === wordData.word)) return;
    
    vocabularyList.push(wordData);
    localStorage.setItem('vocabulary', JSON.stringify(vocabularyList));
    showToast('已添加到单词本');
}

// 从单词本移除
function removeFromVocabulary(word) {
    vocabularyList = vocabularyList.filter(v => v.word !== word);
    localStorage.setItem('vocabulary', JSON.stringify(vocabularyList));
    renderVocabularyList();
    showToast('已从单词本移除');
}

// 显示提示
function showToast(message) {
    toast.textContent = message;
    toast.classList.remove('hidden');
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 2000);
}

// 启动应用
init();
