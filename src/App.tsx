/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Menu, Home, Youtube, MessageCircle, Share2, X, Play, Monitor, Apple, PlayCircle, Star } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const [activeMenu, setActiveMenu] = useState('1주년 페스티벌');

  const handleDownload = (platform: string) => {
    alert(`${platform} 다운로드 페이지로 이동합니다.`);
    // 실제 구현 시에는 window.open(url) 등을 사용
  };

  const menuItems = [
    { id: '1주년 페스티벌', label: '감사의 마음을 모아\n1주년 페스티벌', active: true },
    { id: '스페셜 위크', label: '1주년\n스페셜 위크' },
    { id: '에린 모험 기록', label: '1주년 기념\n에린 모험 기록' },
    { id: '크리에이터즈 챌린지', label: '2026년 제2회\n크리에이터즈 챌린지' },
    { id: '혜택 페스타', label: '최대 33만원 상당 혜택\n1주년 혜택 페스타' },
    { id: '스토어 오픈', label: '넥슨에센셜\n스토어 오픈' },
  ];

  return (
    <div className="flex flex-col h-screen w-full bg-[#f3f4f6] font-sans overflow-hidden select-none">
      {/* Top GNB */}
      <header className="h-12 bg-white border-b border-gray-200 flex items-center justify-between px-4 z-50 shrink-0">
        <div className="flex items-center gap-6">
          <button className="flex items-center gap-1 text-[13px] font-medium text-gray-700 hover:text-black transition-colors">
            <Menu size={18} />
            메뉴
          </button>
          <div className="text-xl font-black tracking-tighter text-black">NEXON</div>
        </div>
        <div className="flex items-center gap-4 text-[12px] text-gray-500">
          <button className="hover:underline">내정보</button>
          <button className="hover:underline">회원가입</button>
          <button className="px-3 py-1 border border-black rounded font-bold text-black hover:bg-gray-50 transition-colors">
            로그인
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden relative">
        {/* Left Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 flex flex-col z-40 shrink-0">
          <div className="p-6 pb-4">
            <div className="flex items-start gap-2">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="font-bold text-[10px] text-center leading-tight text-gray-800">마비<br/>노기</div>
              </div>
              <div>
                <h1 className="text-lg font-bold leading-tight text-gray-900">마비노기</h1>
                <p className="text-[11px] text-gray-500">모바일</p>
              </div>
            </div>
          </div>

          <div className="px-4 py-2 text-[11px] text-gray-400 font-medium">
            <button className="flex items-center gap-1 hover:text-gray-600">
              <Home size={12} />
              공식 사이트 바로가기
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveMenu(item.id)}
                className={`w-full text-left px-4 py-4 text-[13px] leading-tight transition-colors border-b border-gray-50 ${
                  activeMenu === item.id
                    ? 'bg-[#05a77b] text-white font-bold'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <span className="whitespace-pre-line">{item.label}</span>
              </button>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="p-4 space-y-2 bg-gray-50 border-t border-gray-100">
            <button 
              onClick={() => handleDownload('App Store')}
              className="w-full bg-black text-white rounded-md flex items-center px-3 py-2 gap-3 hover:bg-gray-800 transition-all active:scale-95"
            >
              <Apple size={20} />
              <div className="text-left">
                <div className="text-[8px] leading-none opacity-80">App Store에서</div>
                <div className="text-[11px] font-bold">다운로드 하기</div>
              </div>
            </button>

            <button 
              onClick={() => handleDownload('Google Play')}
              className="w-full bg-black text-white rounded-md flex items-center px-3 py-2 gap-3 hover:bg-gray-800 transition-all active:scale-95"
            >
              <PlayCircle size={20} />
              <div className="text-left">
                <div className="text-[8px] leading-none opacity-80">Google Play에서</div>
                <div className="text-[11px] font-bold">다운로드</div>
              </div>
            </button>

            <button 
              onClick={() => handleDownload('Galaxy Store')}
              className="w-full bg-black text-white rounded-md flex items-center px-3 py-2 gap-3 hover:bg-gray-800 transition-all active:scale-95 border border-pink-500/30"
            >
              <Star size={20} className="text-pink-500" />
              <div className="text-left">
                <div className="text-[8px] leading-none opacity-80">다운로드하기</div>
                <div className="text-[11px] font-bold italic">Galaxy Store</div>
              </div>
            </button>

            <button 
              onClick={() => handleDownload('PC')}
              className="w-full bg-black text-white rounded-md flex items-center px-3 py-2 gap-3 hover:bg-gray-800 transition-all active:scale-95"
            >
              <Monitor size={20} />
              <div className="text-left">
                <div className="text-[11px] font-bold">PC버전</div>
                <div className="text-[8px] leading-none opacity-80">다운로드 하기</div>
              </div>
            </button>

            <div className="flex justify-center gap-4 pt-2 mt-2 border-t border-gray-200">
              <Youtube size={18} className="text-gray-400 cursor-pointer hover:text-red-500 transition-colors" />
              <MessageCircle size={18} className="text-gray-400 cursor-pointer hover:text-blue-500 transition-colors" />
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 relative overflow-hidden bg-gray-200">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
            style={{ backgroundImage: `url('/mabinogi_bg.png')` }}
          >
            {/* Overlay for better readability */}
            <div className="absolute inset-0 bg-black/5"></div>
          </div>

          {/* Top Right Buttons */}
          <div className="absolute top-6 right-6 flex items-center gap-4 z-10">
            <div className="flex items-center gap-3 text-white/90 drop-shadow-md">
              <Home size={20} className="cursor-pointer hover:scale-110 transition-transform" />
              <Youtube size={20} className="cursor-pointer hover:scale-110 transition-transform" />
              <MessageCircle size={20} className="cursor-pointer hover:scale-110 transition-transform" />
              <Share2 size={20} className="cursor-pointer hover:scale-110 transition-transform" />
            </div>
            <button className="bg-[#00E699] hover:bg-[#00cf8a] text-white font-black px-8 py-2.5 rounded-full shadow-[0_4px_14px_0_rgba(0,230,153,0.39)] transition-all transform hover:scale-105 active:scale-95 text-sm tracking-tight">
              GAME START
            </button>
          </div>

          {/* Center Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center text-center pointer-events-auto"
            >
              {/* Title Section */}
              <div className="mb-10 relative">
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-purple-600 text-white px-5 py-1 rounded-full text-[13px] font-bold shadow-lg whitespace-nowrap">
                  감사의 마음을 모아!
                </div>
                <h2 className="text-7xl font-black text-white drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)] italic tracking-tighter leading-tight">
                  <span className="text-purple-300">마비노기 모바일</span><br />
                  1주년 페스티벌
                </h2>
              </div>

              {/* Play Button */}
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-24 h-24 bg-purple-500/90 rounded-full flex items-center justify-center border-4 border-white shadow-2xl mb-10 group transition-all"
              >
                <Play size={40} fill="white" className="text-white ml-1 group-hover:scale-110 transition-transform" />
              </motion.button>

              {/* Main CTA */}
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#a855f7] hover:bg-[#9333ea] text-white text-2xl font-black px-20 py-5 rounded-2xl shadow-[0_10px_25px_-5px_rgba(168,85,247,0.5)] transition-all"
              >
                지금 플레이 하기
              </motion.button>
            </motion.div>
          </div>

          {/* Right Floating Info */}
          <div className="absolute right-8 top-1/3 w-44 bg-white/85 backdrop-blur-md rounded-2xl p-5 shadow-2xl border border-white/20 z-10">
            <div className="text-purple-600 font-black italic text-sm mb-4 border-b border-purple-100 pb-2">1주년 페스티벌</div>
            <ul className="space-y-3 text-[12px] text-gray-700 font-medium">
              <li className="hover:text-purple-600 cursor-pointer transition-colors">1주년 감사의 마음</li>
              <li className="hover:text-purple-600 cursor-pointer transition-colors">1주년 기념 이벤트</li>
              <li className="text-gray-900 font-bold border-l-2 border-purple-500 pl-2">신규 서버 &lt;클라&gt; 오픈</li>
              <li className="hover:text-purple-600 cursor-pointer transition-colors">1주년 기념 소식들</li>
            </ul>
          </div>

          {/* Bottom Right Banner */}
          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-8 right-8 z-20"
          >
            <div className="bg-[#1a1c3d] text-white p-5 rounded-2xl w-64 shadow-2xl relative border border-white/10 group">
              <button className="absolute top-3 right-3 text-white/50 hover:text-white transition-colors">
                <X size={14} />
              </button>
              <div className="text-center">
                <div className="text-[11px] text-yellow-400 font-bold mb-1">1주년 SPECIAL</div>
                <div className="text-sm font-bold mb-3">혜택 팡팡! 혜택 페스타!</div>
                <div className="text-3xl font-black text-yellow-400 mb-1 tracking-tighter">최대 33만원</div>
                <div className="text-[11px] text-white/60 leading-tight">
                  넥슨 현대카드 Ed.2<br />마비노기 모바일팩
                </div>
              </div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity -z-10"></div>
            </div>
          </motion.div>
        </main>

        {/* Close button at top left of content area */}
        <button className="absolute top-2 left-[268px] w-8 h-8 bg-black/20 hover:bg-black/40 text-white rounded-full flex items-center justify-center transition-colors z-50">
          <X size={18} />
        </button>
      </div>
    </div>
  );
}
