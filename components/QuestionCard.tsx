
import React, { useState } from 'react';
import { Question, Subject } from '../types';
import { Eye, EyeOff, BookOpen, PenTool, Calculator, Tag } from 'lucide-react';

interface QuestionCardProps {
  question: Question;
}

const getSubjectIcon = (subject: Subject) => {
  switch (subject) {
    case '数学': return <Calculator className="w-4 h-4" />;
    case '语文': return <BookOpen className="w-4 h-4" />;
    case '英语': return <PenTool className="w-4 h-4" />;
    default: return <BookOpen className="w-4 h-4" />;
  }
};

const getSubjectColor = (subject: Subject) => {
  switch (subject) {
    case '数学': return 'bg-blue-100 text-blue-800 border-blue-200';
    case '语文': return 'bg-red-100 text-red-800 border-red-200';
    case '英语': return 'bg-violet-100 text-violet-800 border-violet-200';
    default: return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

export const QuestionCard: React.FC<QuestionCardProps> = ({ question }) => {
  const [isRevealed, setIsRevealed] = useState(false);

  const toggleReveal = () => setIsRevealed(!isRevealed);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow duration-200 flex flex-col h-full">
      {/* Header */}
      <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
        <div className="flex gap-2">
          <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border ${getSubjectColor(question.subject)}`}>
            {getSubjectIcon(question.subject)}
            {question.subject}
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200">
            <Tag className="w-3 h-3" />
            {question.knowledgePoint}
          </span>
        </div>
        <span className="text-xs text-slate-400 font-mono">#{question.id}</span>
      </div>

      {/* Question Body */}
      <div className="p-6 flex-grow">
        <h3 className="text-lg font-medium text-slate-800 leading-relaxed whitespace-pre-wrap">
          {question.question}
        </h3>
      </div>

      {/* Answer Section */}
      <div className="relative border-t border-slate-100 bg-slate-50/30">
        <div 
          onClick={toggleReveal}
          className={`
            p-6 cursor-pointer transition-all duration-300 min-h-[5rem] flex items-center
            ${isRevealed ? 'bg-green-50/50' : 'bg-slate-100 hover:bg-slate-200/50'}
          `}
        >
          {isRevealed ? (
            <div className="w-full">
              <div className="flex items-center gap-2 mb-2 text-green-700 text-xs font-bold uppercase tracking-wider">
                <Eye className="w-3 h-3" />
                答案
              </div>
              <p className="text-slate-800 font-medium whitespace-pre-wrap">{question.answer}</p>
            </div>
          ) : (
            <div className="w-full flex flex-col items-center justify-center text-slate-400 gap-2 py-2">
              <EyeOff className="w-6 h-6" />
              <span className="text-sm font-medium">点击查看答案</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
