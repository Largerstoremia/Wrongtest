
import React, { useState, useEffect } from 'react';
import { Question, ViewMode } from './types';
import { getAllQuestions, getRandomQuestions, getUniqueKnowledgePoints } from './services/database';
import { QuestionCard } from './components/QuestionCard';
import { Layers, Shuffle, BookOpenCheck, RefreshCw, Filter } from 'lucide-react';

const App: React.FC = () => {
  const [mode, setMode] = useState<ViewMode>('browse');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(false);
  
  // Random Mode State
  const [randomCount, setRandomCount] = useState<number>(5);
  const [randomSubject, setRandomSubject] = useState<string>('all');

  // Browse Mode State
  const [browseSubject, setBrowseSubject] = useState<string>('all');
  const [browseTopic, setBrowseTopic] = useState<string>('all');
  const [availableTopics, setAvailableTopics] = useState<string[]>([]);

  // Initial load
  useEffect(() => {
    fetchBrowseQuestions();
  }, []);

  // Update available topics when browse subject changes
  useEffect(() => {
    const updateTopics = async () => {
      const topics = await getUniqueKnowledgePoints(browseSubject);
      setAvailableTopics(topics);
      // Reset topic selection if the current topic is not in the new list (unless it's 'all')
      if (browseTopic !== 'all' && !topics.includes(browseTopic)) {
        setBrowseTopic('all');
      }
    };
    updateTopics();
  }, [browseSubject]);

  // Trigger fetch when browse filters change, if in browse mode
  useEffect(() => {
    if (mode === 'browse') {
      fetchBrowseQuestions();
    }
  }, [browseSubject, browseTopic]);

  const fetchBrowseQuestions = async () => {
    setLoading(true);
    setMode('browse');
    try {
      const data = await getAllQuestions(browseSubject, browseTopic);
      setQuestions(data);
    } catch (e) {
      console.error("Failed to fetch questions", e);
    } finally {
      setLoading(false);
    }
  };

  const handleRandomGenerate = async () => {
    setLoading(true);
    setMode('random');
    try {
      const data = await getRandomQuestions(randomCount, randomSubject);
      setQuestions(data);
    } catch (e) {
      console.error("Failed to fetch random questions", e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpenCheck className="w-6 h-6 text-primary-600" />
            <h1 className="text-xl font-bold text-slate-900 tracking-tight">我的错题本</h1>
          </div>
          <div className="text-sm text-slate-500">
            {mode === 'browse' ? '浏览模式' : '随机练习'}
          </div>
        </div>
      </header>

      {/* Main Controls */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col xl:flex-row gap-4 justify-center items-center">
            
            {/* Browse Mode Controls */}
            <div className={`
              flex flex-wrap items-center justify-center gap-3 w-full xl:w-auto p-2 rounded-lg border transition-colors duration-200
              ${mode === 'browse' ? 'bg-slate-50 border-slate-300' : 'bg-white border-transparent'}
            `}>
              <button
                onClick={fetchBrowseQuestions}
                className={`
                  flex items-center gap-2 px-4 py-1.5 rounded-md font-medium text-sm transition-all duration-200 whitespace-nowrap
                  ${mode === 'browse' 
                    ? 'bg-slate-800 text-white shadow-sm' 
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'}
                `}
              >
                <Layers className="w-4 h-4" />
                浏览全部
              </button>

              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500 font-medium uppercase tracking-wide">筛选:</span>
                <select 
                  value={browseSubject}
                  onChange={(e) => setBrowseSubject(e.target.value)}
                  className="bg-white border border-slate-300 text-slate-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-1.5 min-w-[80px]"
                >
                  <option value="all">所有学科</option>
                  <option value="语文">语文</option>
                  <option value="数学">数学</option>
                  <option value="英语">英语</option>
                </select>

                <select 
                  value={browseTopic}
                  onChange={(e) => setBrowseTopic(e.target.value)}
                  className="bg-white border border-slate-300 text-slate-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-1.5 min-w-[100px] max-w-[150px]"
                >
                  <option value="all">所有专题</option>
                  {availableTopics.map(topic => (
                    <option key={topic} value={topic}>{topic}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="h-px w-full xl:h-8 xl:w-px bg-slate-200 block"></div>

            {/* Random Mode Controls */}
            <div className={`
               flex flex-wrap items-center justify-center gap-3 w-full xl:w-auto p-2 rounded-lg border transition-colors duration-200
               ${mode === 'random' ? 'bg-blue-50/50 border-blue-200' : 'bg-white border-transparent'}
            `}>
              <div className="flex items-center gap-2">
                 <span className="text-xs text-slate-500 font-medium uppercase tracking-wide">随机:</span>
                <select 
                  value={randomSubject}
                  onChange={(e) => setRandomSubject(e.target.value)}
                  className="bg-white border border-slate-300 text-slate-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-1.5 min-w-[80px]"
                >
                  <option value="all">所有学科</option>
                  <option value="语文">语文</option>
                  <option value="数学">数学</option>
                  <option value="英语">英语</option>
                </select>
              </div>

              <div className="flex items-center gap-2">
                <select 
                  value={randomCount}
                  onChange={(e) => setRandomCount(Number(e.target.value))}
                  className="bg-white border border-slate-300 text-slate-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-1.5"
                >
                  <option value={3}>3题</option>
                  <option value={5}>5题</option>
                  <option value={10}>10题</option>
                </select>
              </div>

              <button
                onClick={handleRandomGenerate}
                className={`
                  flex items-center gap-2 px-4 py-1.5 rounded-md font-medium text-sm transition-all duration-200 whitespace-nowrap
                  ${mode === 'random'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-white text-blue-700 border border-blue-200 hover:bg-blue-50'}
                `}
              >
                {mode === 'random' ? <RefreshCw className="w-4 h-4" /> : <Shuffle className="w-4 h-4" />}
                {mode === 'random' ? '换一换' : '随机生成'}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Content Area */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {loading ? (
          <div className="flex flex-col items-center justify-center h-64 text-slate-400">
            <RefreshCw className="w-8 h-8 animate-spin mb-4" />
            <p>正在加载错题...</p>
          </div>
        ) : questions.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-xl border border-dashed border-slate-300">
            <Filter className="w-12 h-12 mx-auto text-slate-300 mb-4" />
            <h3 className="text-lg font-medium text-slate-900">暂无题目</h3>
            <p className="text-slate-500 mt-2">
              {mode === 'browse' 
                 ? '当前筛选条件下没有找到题目' 
                 : '没有找到符合条件的题目'}
            </p>
            {mode === 'browse' && (
               <button 
                 onClick={() => { setBrowseSubject('all'); setBrowseTopic('all'); }}
                 className="mt-4 text-blue-600 hover:text-blue-800 text-sm font-medium"
               >
                 清除筛选
               </button>
            )}
          </div>
        ) : (
          <>
            <div className="mb-4 text-sm text-slate-500 flex justify-between items-center">
              <span>共找到 {questions.length} 道错题</span>
              {mode === 'browse' && browseSubject !== 'all' && (
                 <span className="bg-slate-100 px-2 py-1 rounded text-xs">
                   {browseSubject} {browseTopic !== 'all' ? ` > ${browseTopic}` : ''}
                 </span>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {questions.map((q) => (
                <QuestionCard key={q.id} question={q} />
              ))}
            </div>
          </>
        )}
      </main>

      <footer className="bg-white border-t border-slate-200 py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-400 text-sm">
          &copy; 错题本 Mistake Notebook. 温故而知新.
        </div>
      </footer>
    </div>
  );
};

export default App;
